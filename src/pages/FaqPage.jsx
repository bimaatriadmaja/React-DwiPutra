import { Container, Row, Col } from "react-bootstrap";
import FaqComponent from "../components/FaqComponent";
import "bootstrap-icons/font/bootstrap-icons.css";
import GambarRumah from "../assets/img/layanan/rumah.png";
import TipsImage from "../assets/img/layanan/tips.png";

const FaqPage = () => {
  return (
    <div className="faq pt-5">
      <Row className="w-100 min-vh-100 rumah d-flex align-items-center pt-lg-5">
        <Col lg="6" className="gambar-rumah pt-lg-0 pt-5">
          <img
            src={GambarRumah}
            alt="Home Image"
            className="animate__animated animate__fadeInUp custom-margin-lg"
          />
        </Col>
        <Col lg="6" className="pt-5">
          <h3 className="layanan-title fw-bold mb-4 animate__animated animate__fadeInUp animate__delay-1s">
            Layanan di Perusahaan Kami
          </h3>
          <p className="service-title mb-4 animate__animated animate__fadeInUp animate__delay-1s">
            Kami berkomitmen untuk memberikan layanan terbaik kepada pelanggan
            kami. Berikut adalah berbagai layanan yang kami tawarkan:
          </p>
          <div className="services animate__animated animate__fadeInUp animate__delay-1s">
            <div className="service-point mb-3 d-flex align-items-start">
              <i className="bi bi-check-circle-fill me-2 text-success"></i>
              <div>
                <h5 className="fw-bold">Konsultasi Produk</h5>
                <p>
                  Kami menawarkan konsultasi untuk membantu Anda memilih genteng
                  terbaik yang sesuai dengan kebutuhan dan preferensi Anda.
                </p>
              </div>
            </div>
            <div className="service-point mb-3 d-flex align-items-start">
              <i className="bi bi-check-circle-fill me-2 text-success"></i>
              <div>
                <h5 className="fw-bold">Pengiriman Cepat</h5>
                <p>
                  Dengan jaringan distribusi yang luas, kami memastikan
                  pengiriman produk yang cepat dan tepat waktu ke lokasi Anda.
                </p>
              </div>
            </div>
            <div className="service-point mb-3 d-flex align-items-start">
              <i className="bi bi-check-circle-fill me-2 text-success"></i>
              <div>
                <h5 className="fw-bold">Pengukuran dan Estimasi</h5>
                <p>
                  Layanan pengukuran dan estimasi kami memastikan bahwa Anda
                  mendapatkan jumlah genteng yang tepat untuk proyek Anda,
                  menghindari pemborosan dan memastikan efisiensi biaya.
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <div
        className="tips-ordering-section"
        data-aos="fade-up"
        data-aos-delay={100}
      >
        <div className="tips-ordering-section w-100 min-vh-100 d-flex align-items-center pt-lg-5 pt-5 pb-5">
          <Row className="w-100 d-flex align-items-center">
            <Col lg="6" className="layanan-kami">
              <h4 className="fw-bold mb-2 animate__animated animate__fadeInUp animate__delay-2s">
                Tips untuk Membeli Genteng:
              </h4>
              <ul className="mb-4">
                <li className="d-flex align-items-center mb-2 animate__animated animate__fadeInUp animate__delay-2s">
                  <i className="bi bi-check-circle me-2"></i> Pilih jenis
                  genteng sesuai keinginan Anda.
                </li>
                <li className="d-flex align-items-center mb-2 animate__animated animate__fadeInUp animate__delay-2s">
                  <i className="bi bi-house-door me-2"></i> Sesuaikan dengan
                  desain rumah.
                </li>
                <li className="d-flex align-items-center mb-2 animate__animated animate__fadeInUp animate__delay-2s">
                  <i className="bi bi-currency-dollar me-2"></i> Pertimbangkan
                  budget.
                </li>
                <li className="d-flex align-items-center mb-2 animate__animated animate__fadeInUp animate__delay-2s">
                  <i className="bi bi-people me-2"></i> Konsultasi dengan kami.
                </li>
              </ul>

              <h4 className="fw-bold mb-2 pt-4 animate__animated animate__fadeInUp animate__delay-2s">
                Cara Memesan Genteng:
              </h4>
              <ol>
                <li className="mb-2 animate__animated animate__fadeInUp animate__delay-2s">
                  <strong>Kunjungi Website Kami:</strong> Jelajahi produk kami
                  di situs web dan pilih genteng yang Anda inginkan.
                </li>
                <li className="mb-2 animate__animated animate__fadeInUp animate__delay-2s">
                  <strong>Konsultasi Produk:</strong> Hubungi tim kami untuk
                  konsultasi gratis jika Anda membutuhkan bantuan dalam memilih
                  produk.
                </li>
                <li className="mb-2 animate__animated animate__fadeInUp animate__delay-2s">
                  <strong>Tanyakan Estimasi Jumlah Genteng:</strong> Jika
                  diperlukan, berikan informasi ukuran rumah Anda untuk
                  mendapatkan estimasi jumlah genteng yang akurat.
                </li>
                <li className="mb-2 animate__animated animate__fadeInUp animate__delay-2s">
                  <strong>Lakukan Pemesanan:</strong> Setelah Anda memilih
                  produk dan mendapatkan estimasi, lakukan pemesanan dengan menghubungi tim penjualan kami.
                </li>
                <li className="mb-2 animate__animated animate__fadeInUp animate__delay-2s">
                  <strong>Pembayaran:</strong> Pilih metode pembayaran yang
                  tersedia dan lakukan pembayaran sesuai dengan instruksi.
                </li>
                <li className="mb-2 animate__animated animate__fadeInUp animate__delay-2s">
                  <strong>Pengiriman:</strong> Tim kami akan mengatur pengiriman
                  genteng ke lokasi Anda sesuai dengan jadwal yang telah
                  disepakati.
                </li>
              </ol>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5 text-center">
              <img
                src={TipsImage}
                alt="Visi Misi Image"
                className="animate__animated animate__fadeInUp custom-img-visimisi-lg"
                style={{ width: "50%" }}
              />
            </Col>
          </Row>
        </div>
      </div>

      <FaqComponent />
    </div>
  );
};

export default FaqPage;
