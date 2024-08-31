"use client"
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function UserCard({name, image}:{name:string, image:string}) {
    const router = useRouter()
  return (
<div className="flex flex-col group cursor-pointer">
<Card className="w-44 mx-auto   p-0" onClick={()=>router.push('/movies')}>
        <CardContent className="border-2 border-transparent group-hover:border-white grouo-hover:pointer w-full h-full p-0 overflow-hidden">
            <Image height={175} width={175} alt={`${name} image`} src={image} className="w-full h-max object-contain"/>
        </CardContent>
    </Card>

<div className="mt-4 text-gray-400 text-2xl group-hover:text-white text-center">{name}</div>
</div>
)
}
