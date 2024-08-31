import {MoonLoader} from 'react-spinners'
export default function Loading() {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
        <MoonLoader color='red'/>
    </div>
  )
}
