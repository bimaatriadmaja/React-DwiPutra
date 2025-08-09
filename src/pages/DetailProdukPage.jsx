import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { semuaGenteng } from '../data/index';
import { Container, Row, Col, Badge} from 'react-bootstrap';
import FaqComponent from "../components/FaqComponent";

const DetailProdukPage = () => {
  const { id } = useParams();
  const produk = semuaGenteng.find((item) => item.id.toString() === id);

  if (!produk) {
    return (
      <div className="min-vh-100 d-flex justify-content-center align-items-center">
        <h3>Produk tidak ditemukan</h3>
      </div>
    );
  }

  return (
    <div className="min-vh-100 py-5 bg-light">
      <Container>

        <Row
          className="align-items-center mb-5"
          style={{ marginTop: '90px' }}
        >
          <Col md={6} className="mb-4">
            <img
              src={produk.image}
              alt={produk.title}
              className="w-100 rounded shadow"
            />
          </Col>
          <Col md={6}>
            <h2 className="fw-bold">{produk.title}</h2>
            <div className="my-3">
              <i className={produk.star1 + " text-warning me-1"}></i>
              <i className={produk.star2 + " text-warning me-1"}></i>
              <i className={produk.star3 + " text-warning me-1"}></i>
              <i className={produk.star4 + " text-warning me-1"}></i>
              <i className={produk.star5 + " text-warning"}></i>
            </div>
            <h4 className="text-primary fw-bold mb-3">{produk.price}</h4>
            <Badge bg="success" className="mb-3">
              {produk.stock}
            </Badge>
            <p className="text-muted">
              {produk.description || "Tidak ada deskripsi untuk produk ini."}
            </p>
            <a
              href={`https://wa.me/62895422615117?text=halo%20mas%20bima,%20saya%20tertarik%20dengan%20${encodeURIComponent(
                produk.title
              )}.%20Bisa%20dijelaskan%20lebih%20lanjut?`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-danger btn-lg mt-3 rounded-1"
            >
              Beli via WhatsApp
            </a>
          </Col>
        </Row>
      </Container>

      {/* FAQ di bagian bawah */}
      <FaqComponent />
    </div>
  );
};

export default DetailProdukPage;
