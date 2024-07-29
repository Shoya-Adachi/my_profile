"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import 'bootstrap/dist/css/bootstrap.min.css'; // BootstrapのCSSをインポート
import { Container, Row, Col } from 'react-bootstrap';
import './app.css'

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/top');
    }, 3000);

    return () => clearTimeout(timer);
  },[router])

  return (
    <Container fluid className="d-flex vh-100">
      <Row className="m-auto">
        <Col className="text-center">
          <h1 className="title">OTA SHOYA</h1>
        </Col>
      </Row>
    </Container>
  );
}
