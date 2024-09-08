import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { testimonial } from '../data/index'; // Pastikan path ini benar

import FaqComponent from "../components/FaqComponent";

const TestimonialPage = () => {
  return (
    <div className="testimonial-page">
      <div className="testimonial">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold animate__animated animate__fadeInUp animate__delay-1s">
                Testimonial
              </h1>
              <p className="text-center animate__animated animate__fadeInUp animate__delay-1s">
                Kami mengutamakan kualitas dan kekuatan genteng agar tahan lama dan menciptakan pengalaman terbaik bagi Anda.
              </p>
            </Col>
          </Row>
          <Row className="row-cols-lg-3 row-cols-1">
            {testimonial.map((testi) => (
              <Col key={testi.id} className="mb-4">
                <Card>
                  <div className="embed-responsive embed-responsive-16by9">
                    <video
                      className="embed-responsive-item"
                      src={testi.videoUrl}
                      controls
                      style={{ width: '100%' }}
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <Card.Body>
                    <Card.Text>{testi.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <FaqComponent />
    </div>
  );
};

export default TestimonialPage;
