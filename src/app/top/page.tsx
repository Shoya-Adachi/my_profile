
"use client"

import Image from "next/image"
import 'bootstrap/dist/css/bootstrap.min.css'; // BootstrapのCSSをインポート
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../globals.css"

export default function Page() {
    return (
    <div className="top">
        <Navbar expand="lg" className="bg-body-tertiary justify-content-center">
            <Nav className="nav_item text-white">
                <Nav.Link href="">PROFILE</Nav.Link>
                <Nav.Link href="">WORK</Nav.Link>
                <Nav.Link href="">CONTACT</Nav.Link>
            </Nav>
        </Navbar>
    </div>
    )
}