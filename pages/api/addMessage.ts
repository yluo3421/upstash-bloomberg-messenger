// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { serverPusher } from '../../pusher';
import redis from "../../redis";
import { Message } from '../../typings';

type Data = {
  message: Message
}

type ErrorData = {
    body: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorData>
) {
    if ( req.method !== 'POST' ) {
        res.status(405).json({ body: "Method Not Aloowed"});
        return;
    }
    const {message} = req.body;

    const newMessage = {
        ...message,
        // Replace timestamp of the user to timestamp of the server
        created_at: Date.now()
    }

    // push to Upstash
    await redis.hset('messages', message.id, JSON.stringify(newMessage));
    serverPusher.trigger("messages", 'new-message', newMessage)

    res.status(200).json({ message: newMessage });
}