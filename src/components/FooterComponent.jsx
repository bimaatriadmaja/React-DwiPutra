import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import DanaImage from "../assets/img/payment/logodana.png";
import BriImage from "../assets/img/payment/logobri.png";
import BankJateng from "../assets/img/payment/bankjateng.png";

const FooterComponent = () => {
  return (
    <div className="footer py-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="3">
            <h3 className="fw-bold pb-2">Dwi Putra.</h3>
            <p className="desc">Dengan komitmen terhadap kualitas dan inovasi, kami memastikan setiap genteng yang diproduksi memenuhi standar tertinggi, menjadikan kami pilihan terpercaya untuk kebutuhan atap Anda.</p>
          </Col>
          <Col lg="3" className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
            <h5 className="fw-bold pt-2 pb-2">Hubungi Kami:</h5>
            <div className="no mb-1 mt-2">
              <Link to="https://wa.me/62895422615117?text=Halo%20Mas%20Bima,%20saya%20tertarik%20dengan%20produk%20genteng%20press%20dari%20Dwi%20Putra.%20Bisakah%20saya%20mendapatkan%20informasi%20lebih%20lanjut?" target="_blank" className="text-decoration-none">
                <i className="fa-brands fa-whatsapp"></i>
                <p className="m-0">+62 895 4226 15117</p>
              </Link>
            </div>
            <div className="mail">
              <Link to="mailto:bimaatriadmaja17@gmail.com" target="_blank" className="text-decoration-none">
                <i className="fa-regular fa-envelope"></i>
                <p className="m-0">bimaatriadmaja17@gmail.com</p>
              </Link>
            </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
            <h5 className="fw-bold pt-2">Menu:</h5>
            <Link to="/">Home</Link>
            <Link to="/kelas">Produk</Link>
            <Link to="/testimonial">Testimonial</Link>
            <Link to="/faq">Layanan</Link>
            <Link to="/syaratketen">Tentang Kami</Link>
          </Col>
          <Col lg="2" className="mt-lg-0 mt-5">
            <h5 className="fw-bold mb-3 pt-2 pb-2">Payment:</h5>
            <div className="payment mt-3">
            <img
                src={BriImage}
                alt="BRI"
                className="payment-logo pb-3"
              /><br/>
              <img
                src={DanaImage}
                alt="Dana"
                className="payment-logo pb-3"
              /><br/>
            </div>
          </Col>
        </Row>
        <hr className="my-5" />
        <Row>
          <Col>
            <p className="text-center px-md-0 px-3">
              &copy; Copyright {new Date().getFullYear()} by{" "}
              <span className="fw-bold">Dwi Putra</span>, All Right
              Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;
