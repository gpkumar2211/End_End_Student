import React from 'react'
import { Cookies } from '@/common/cookies'
import { useRouter } from 'next/navigation'
export const Home = () => {
    const router = useRouter();
    if (!Cookies.hasActiveSession()) {
        router.push('/')
    }
    return (
        <div>
            <h1 className='mx-5 my-5 text-center'>Welcome...</h1>
        </div>
    )
}

