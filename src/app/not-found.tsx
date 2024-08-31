import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div className='h-screen flex flex-col justify-center items-center space-y-5'>
      <img src='/images/404-page-not-found.png'/>
      <p className='text-5xl text-red-500'>Nothing Here !</p>
        <Link className={buttonVariants({variant:'destructive'})} href="/"> Back</Link>
    </div>
  )
}
