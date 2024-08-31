import React from 'react'
import ProfileList from './ProfileList'

export default function ProfilePage() {
  return (
    <div className='flex items-center justify-center pt-40'>
        <div className="flex flex-col">
          <h1 className='text-3xl md:text-5xl text-white text-center'>Who's Watching?</h1>
          <ProfileList/>
        </div>
    </div>
  )
}
