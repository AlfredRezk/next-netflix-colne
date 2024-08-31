"use client"

import { useEffect } from "react"

export default function Error({error}:{error:Error}) {

useEffect(()=>{console.log(error)}, [error])

  return (
    <div className="mt-64 text-center"> 
        <h1 className="text-red-500 text-2xl"> {error.message || 'Something went wrong!'}</h1>
    </div>
  )
}
