import React from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import HomeImage from "../assets/img/home.png";

import { semuaKelas, dataSwiper } from "../data/index";
import { useNavigate } from "react-router-dom";
import FaqComponent from "../components/FaqComponent";
import { testimonial } from '../data/index'; 

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const HomePage = () => {
  let navigate = useNavigate();

  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center overflow-hidden">
        <Container>
          <Row className="header-box d-flex align-items-center pt-lg-5">
            <Col lg="6">
              <h3 className="mb-4 animate__animated animate__fadeInUp animate__delay-0.5s">
                <span className="fw-bold">Genteng Press Berkualitas</span>,
                Pilihan Tepat untuk Rumah Anda, Wujudkan Rumah Impian Bersama
                Kami yang Terpercaya!
              </h3>
              <p className="mb-4 animate__animated animate__fadeInUp animate__delay-0.5s">
                Kami menyediakan genteng press berkualitas tinggi yang melindungi
                dan memperindah rumah Anda, memenuhi standar tertinggi untuk
                kebutuhan atap Anda.
              </p>
              <button
                className="btn btn-danger btn-lg rounded-1 me-2 mb-xs-0 mb-2 animate__animated animate__fadeInUp animate__delay-0.5s btn-danger-custom"
                onClick={() => navigate("/kelas")}
              >
                Pesan Sekarang!
              </button>
            </Col>
            <Col lg="6" className="truk pt-lg-0 pt-5">
              <img
                src={HomeImage}
                alt="Home Image"
                className="animate__animated animate__fadeInUp animate__delay-0.5s custom-margin-lg"
                // style={{ marginLeft: '40px' }}
              />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="kelas w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold">Produk Kami</h1>
              <p className="text-center">
                Pilih jenis genteng sesuai keinginan Anda.
              </p>
            </Col>
          </Row>
          <Row>
            {semuaKelas.map((kelas) => {
              const waMessage = `Halo%20mas,%20saya%20ingin%20membeli%20${encodeURIComponent(
                kelas.title
              )}%20dengan%20harga%20${encodeURIComponent(
                kelas.price
              )}.%20Apakah%20stok%20tersedia?`;

              return (
                <Col
                  key={kelas.id}
                  className="shadow rounded"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={kelas.delay}
                >
                  <img
                    src={kelas.image}
                    alt="unsplash.com"
                    className="w-100 mb-5 rounded-top"
                  />
                  <div className="d-flex">
                    <div className="star mb-2 px-3">
                      <i className={kelas.star1}></i>
                      <i className={kelas.star2}></i>
                      <i className={kelas.star3}></i>
                      <i className={kelas.star4}></i>
                      <i className={kelas.star5}></i>
                    </div>
                    <div className="stok mt-1 d-flex">
                      <i className="bi bi-check-circle-fill me-2 text-success pb-1"></i>
                      <h6>{kelas.stock}</h6>
                    </div>
                  </div>
                  <h5 className="mb-5 px-3">{kelas.title}</h5>
                  <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                    <p className="m-0 text-primary fw-bold">{kelas.price}</p>
                    <a
                      href={`https://wa.me/62895422615117?text=${waMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-danger rounded-1"
                    >
                      {kelas.buy}
                    </a>
                  </div>
                </Col>
              );
            })}
          </Row>

          <Row>
            <Col className="text-center">
              <button
                className="btn btn-success rounded-5 btn-lg"
                data-aos="fade-up"
                data-aos-duration="1000"
                onClick={() => navigate("/kelas")}
              >
                Lihat Lebih Detail{" "}
                <i className="fa-solid fa-chevron-right ms-1"></i>
              </button>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="testimonial py-5">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold my-5">Testimonial</h1>
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

      {/* Section FAQ */}
      <FaqComponent />
      {/* Section FAQ */}
    </div>
  );
};

export default HomePage;
