import { unstable_getServerSession } from 'next-auth';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LogoutButton from './LogoutButton';

async function Header() {
    const session = await unstable_getServerSession();

    if (session) {
        return (
        <header className='sticky top-0 z-50 bg-white 
        flex justify-between items-center p-10 shadow-sm'>
            <div className='flex items-center space-x-2'>
                <Image 
                    className='rounded-full mx-2 object-contain'
                    height={10}
                    width={50}
                    src={session.user?.image!} 
                    alt="Profile Picture"
                />

                <div>
                    <p className='text-blue-400'>Logged In As</p>
                    <p className='font-bold text-lg'>{session.user?.name!}</p>
                </div>
            </div>

            <LogoutButton />

        </header>
    ) } else {
        return (
            <header className='sticky top-0 z-50 bg-white 
            flex justify-center items-center p-10 shadow-sm'>
                <div className='flex flex-col items-center space-y-5'>
                    <div className='flex space-x-2 items-center'>
                        <Image 
                        // src="https://links.papareact.com/jne" 
                        src="https://play-lh.googleusercontent.com/_qTb7fdtj18tYn1AyKLX1-kGvhzgJctx9sHpxk95ktK0hn9ruGnkJZCRp39Asp1kG4A"
                        height={10} 
                        width={50} 
                        alt='logo' 
                        />
                        <p className='text-purple-800 text-[2.2rem]'>Welcome to Bloomberg Messenger</p>
                    </div>
                    <Link href="/auth/signin/" className='
                    bg-purple-800 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded
                    '>Sign In </Link>
                </div>
            </header>
          )
    }
  
}

export default Header