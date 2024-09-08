import { Container, Row, Col } from "react-bootstrap";
import FaqComponent from "../components/FaqComponent";
import VisiMisiImage from "../assets/img/tentangkami/visimisi.png";
import ServiceImage from "../assets/img/tentangkami/service.png";
import "bootstrap-icons/font/bootstrap-icons.css";

const SyaratKetenPage = () => {
  return (
    <div className="syarat-ketentuan-page">
      <div className="syarat-ketentuan min-vh-100">
        <Container>
          <Row className="d-flex align-items-center pt-lg-5 pt-5 pb-5">
            <Col lg="6" className="visi-misi">
              <p className="mb-4 fw-semibold animate__animated animate__fadeInUp animate__delay-1s">
                Selamat datang di Dwi Putra, perusahaan terkemuka dalam produksi
                dan penjualan genteng press berkualitas. Kami bangga menjadi
                pilihan utama bagi pelanggan yang mencari solusi atap yang tahan
                lama, estetis, dan berkualitas tinggi.
              </p>
              <h3 className="fw-bold mb-1 animate__animated animate__fadeInUp animate__delay-1s">
                Visi
              </h3>
              <p className="mb-4 animate__animated animate__fadeInUp animate__delay-1s">
                Menjadi penyedia genteng press terkemuka di Indonesia dengan
                mengedepankan kualitas, inovasi, dan pelayanan pelanggan yang
                unggul.
              </p>
              <h3 className="fw-bold mb-1 animate__animated animate__fadeInUp animate__delay-1s">
                Misi
              </h3>
              <p className="animate__animated animate__fadeInUp animate__delay-1s">
                Menghasilkan genteng press berkualitas tinggi, memberikan
                pelayanan terbaik dengan produk sesuai kebutuhan pelanggan, dan
                berkontribusi pada pembangunan rumah yang aman dan nyaman.
              </p>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5 text-center">
              <img
                src={VisiMisiImage}
                alt="Visi Misi Image"
                className="animate__animated animate__fadeInUp custom-img-visimisi-lg"
              />
            </Col>
          </Row>
          <Row>
            <Col className="slogan pt-5 text-center">
              <h1 className="fw-bold mb-2 animate__animated animate__fadeInUp animate__delay-1s">
                Genteng Press Berkualitas, Andalan Setiap Rumah bersama Kami!
              </h1>
            </Col>
          </Row>
          <main id="main">
            <section
              className="kontak-banner d-flex justify-content-center align-items-center"
              data-aos="zoom-out"
            >
              <h1 className="text-center fw-bold">Hubungi Kami</h1>
            </section>
            <section className="kontak-main">
              <div className="container">
                <div className="row">
                  <div
                    className="col-lg-4 col-md-6 col-12 text-center mb-4"
                    data-aos="fade-up"
                    data-aos-delay={100}
                  >
                    <i className="bi bi-geo-alt"></i>
                    <h3>Lokasi Kami</h3>
                    <p className="info-lokasi">
                      Palihan, Pakisan, Cawas, Klaten
                      <br />
                      Jawa Tengah
                    </p>
                  </div>
                  <div
                    className="col-lg-4 col-md-6 col-12 text-center mb-5"
                    data-aos="fade-up"
                    data-aos-delay={200}
                  >
                    <i className="bi bi-envelope"></i>
                    <h3>Alamat Email</h3>
                    <a
                      href="mailto:bimaatriadmaja17@gmail.com"
                      target="_blank"
                      className="info-lokasi text-decoration-none text-black"
                    >
                      bimaatriadmaja17@gmail.com
                    </a>
                  </div>

                  <div
                    className="col-lg-4 col-md-6 col-12 text-center mb-4"
                    data-aos="fade-up"
                    data-aos-delay={300}
                  >
                    <i className="bi bi-telephone"></i>
                    <h3>Nomor Telepon</h3>
                    <a
                      href="https://wa.me/62895422615117?text=Halo%20Mas%20Bima,%20saya%20tertarik%20dengan%20produk%20genteng%20press%20dari%20Dwi%20Putra.%20Bisakah%20saya%20mendapatkan%20informasi%20lebih%20lanjut?"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="info-lokasi text-decoration-none text-black"
                    >
                      +62 895 4226 15117
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </Container>
      </div>
      <FaqComponent />
    </div>
  );
};

export default SyaratKetenPage;
