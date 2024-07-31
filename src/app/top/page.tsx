import Image from "next/image"

export default function Page() {
    return (
    <div>
        <Image 
        src="/top.png"
        alt="Top Image"
        fill={true}
        />
    </div>
    )
}