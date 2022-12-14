"use client";

import React, { useEffect, useRef } from 'react'
import useSWR from 'swr';
import { clientPusher } from '../pusher';
import { Message } from '../typings';
import fetcher from '../utils/fetchMessages';
import MessageComponent from './MessageComponent';

type Props = {
    initialMessages: Message[]
}

function MessageList({initialMessages}: Props) {
    const { 
        data: messages, 
        error, 
        mutate, 
    } = useSWR("/api/getMessages", fetcher);

    useEffect(() => {
        const channel = clientPusher.subscribe('messages')
        channel.bind('new-message', async (data: Message) => {
            // avoid updating cache if message sent from curr user
            if (messages?.find((message) => message.id === data.id)) return;

            console.log("messages >>>", messages)
            if (!messages) {
                mutate(fetcher)
            } else {
                mutate(fetcher, {
                    optimisticData: [data, ...messages!],
                    rollbackOnError: true,
                });
            }
            
        });
        return () => {
            channel.unbind_all();
            channel.unsubscribe();
        }
    }, [messages, mutate, clientPusher]);

    const bottomRef = useRef<null | HTMLDivElement>(null);
    useEffect(() => {
        // 👇️ scroll to bottom every time messages change
        if (bottomRef.current === null) {}
        else {
            bottomRef.current.scrollIntoView({behavior: 'smooth'});
        }
            
      }, [messages]);

    return (
        <div className='space-y-5 px-5 pt-8 pb-32 max-w-2xl xl:max-w-4xl mx-auto'>
            {(messages || initialMessages).map(message => (
                <MessageComponent key={message.id} message={message}/>
            ))}
            
            <div ref={bottomRef}></div>
        </div>
    )
}

export default MessageList