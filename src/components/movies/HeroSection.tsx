import { getVideoKey } from '@/app/(private)/TMD'
import React from 'react'
import VideoSection from './VideoSection';
import { Button } from '../ui/button';

import {Play} from 'lucide-react'
import Link from 'next/link';

export default async function HeroSection({movie}:{movie:any}) {
    const videoKey = await getVideoKey(movie?.id);
  return (
    <div className='h-[60vh] w-full relative md:h-screen'>
        <VideoSection videoKey={videoKey}/>

        <div className="absolute ml-4 md:ml-16 top-[60%]">
            <h1 className='text-white text-xl md:text-5xl max-w-xl lg:text-6xl font-bold drop-shadow-lg'>
                {movie?.title}
                </h1>
            <p className='text-white text-[8px] md:text-lg md:mt-8 w-[90%]  md:w-[80%] lg:w-[50%] drop-shadow-lg'>
                {movie?.overview}
                </p>

            <Button asChild className='mt-5'>
                <Link href={`/movies/${movie?.id}`} className='flex items-center justify-center'>
                    <Play className='w-4 md:w-7 text-black mr-1'/>
                    <span> Play</span>
                </Link>
            </Button>
        </div>
      
    </div>
  )
}
