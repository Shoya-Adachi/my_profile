
"use client"

import Image from "next/image"
import 'bootstrap/dist/css/bootstrap.min.css'; // BootstrapのCSSをインポート
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../globals.css"
import "./top.css"

export default function Page() {
    return (
    <>
    <section className="header-area">
        <Navbar expand="lg" className="justify-content-center position-absolute top-0">
            <Nav>
                <Nav.Link href="" className="nav-link">PROFILE</Nav.Link>
                <Nav.Link href="" className="nav-link">WORK</Nav.Link>
                <Nav.Link href="" className="nav-link">CONTACT</Nav.Link>
            </Nav>
        </Navbar>
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