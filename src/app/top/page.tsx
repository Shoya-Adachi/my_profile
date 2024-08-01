
"use client"

import Image from "next/image"
import 'bootstrap/dist/css/bootstrap.min.css'; // BootstrapのCSSをインポート
import "../globals.css"
import "./top.css"

export default function Page() {
    return (
    <>
    <section className="header-area">
        <Image
            src="/top_image.png"
            alt=""
            layout="fill"
            objectFit="cover"
            className="z-n1"
        />
        <div className="top-text">OTA SHOYA</div>s
    </section>
    </>
    )
}