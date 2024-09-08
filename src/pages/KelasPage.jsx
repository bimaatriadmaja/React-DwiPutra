import { Container, Row, Col } from "react-bootstrap";
import {semuaKelas} from '../data/index';

import FaqComponent from "../components/FaqComponent";

const KelasPage = () => {
  return (
    <div className="kelas-page">
    <div className="kelas min-vh-100">
    <Container>
      <Row>
        <Col>
          <h4 className="mb-4 fw-bold animate__animated animate__fadeInUp animate__delay-1s">Kami menyediakan dua opsi untuk mendapatkan produk genteng kami:</h4>
          <ol>
                <li className="mb-3 animate__animated animate__fadeInUp animate__delay-2s">
                  <strong>Pengiriman ke Lokasi Anda</strong> <br/>Kami menawarkan layanan pengiriman cepat dan aman langsung ke lokasi Anda. Biaya pengiriman akan dikenakan sesuai dengan jarak dan berat pesanan. Tim kami akan memastikan genteng Anda tiba dalam kondisi sempurna dan tepat waktu.
                </li>
                <li className="mb-2 animate__animated animate__fadeInUp animate__delay-2s">
                  <strong>Pengambilan Sendiri</strong><br/> Anda juga dapat memilih untuk mengambil pesanan Anda langsung dari gudang kami. Dengan opsi ini, Anda tidak akan dikenakan biaya pengiriman dan dapat menikmati harga asli produk. Tim kami akan membantu Anda dalam proses pengambilan untuk memastikan kelancaran dan kenyamanan Anda.
                </li>
              </ol>
        </Col>
      </Row>
      <Row>
      {semuaKelas.map((kelas) => {
              return (
                <Col key={kelas.id} className="shadow rounded" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={kelas.delay}>
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
                    <button className="btn btn-danger rounded-1">
                      {kelas.buy}
                    </button>
                  </div>
                </Col>
              );
            })}
      </Row>
    </Container>
    </div>

    <FaqComponent />
    </div>
  )
};

export default KelasPage;