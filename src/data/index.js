import KelasImage1 from "../assets/img/genteng/biasa.png";
import KelasImage2 from "../assets/img/genteng/morando.png";
import KelasImage3 from "../assets/img/genteng/mantili.png";
import KelasImage4 from "../assets/img/genteng/krepus.png";
import KelasImage5 from "../assets/img/kelas/kelas-5.jpg";
import KelasImage6 from "../assets/img/kelas/kelas-6.jpg";

import People1 from "../assets/img/testimonial/people-1.jpg";
import People2 from "../assets/img/testimonial/people-2.jpg";
import People3 from "../assets/img/testimonial/people-3.jpg";

export const navLinks = [
  {
    id: 1,
    path: "",
    text: "Home",
  },
  {
    id: 2,
    path: "kelas",
    text: "Produk",
  },
  {
    id: 3,
    path: "testimonial",
    text: "Testimonial",
  },
  {
    id: 4,
    path: "faq",
    text: "Layanan",
  },
  {
    id: 5,
    path: "syaratketen",
    text: "Tentang Kami",
  },
];

export const semuaKelas = [
  {
    id: 1,
    image: KelasImage1,
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    star4: "fa-solid fa-star",
    star5: "fa-solid fa-star-half-stroke",
    stock: "Tersedia",
    title: "Genteng Biasa",
    price: "Rp. 1.400,00/Biji",
    buy: "Beli Genteng",
    delay: "300",
  },
  {
    id: 2,
    image: KelasImage2,
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    star4: "fa-solid fa-star",
    star5: "fa-solid fa-star",
    stock: "Tersedia",
    title: "Genteng Morando",
    price: "Rp. 2.000,00/Biji",
    buy: "Beli Genteng",
    delay: "500",
  },
  {
    id: 3,
    image: KelasImage3,
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    star4: "fa-solid fa-star",
    star5: "fa-solid fa-star",
    stock: "Tersedia",
    title: "Genteng Mantili",
    price: "Rp. 1.500,00/Biji",
    buy: "Beli Genteng",
    delay: "700",
  },
  {
    id: 4,
    image: KelasImage4,
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    star4: "fa-solid fa-star",
    star5: "fa-solid fa-star",
    stock: "Tersedia",
    title: "Krepus",
    price: "Rp. 8.000,00/Biji",
    buy: "Beli Krepus",
    delay: "900",
  }
];

export const testimonial = [
  {
    id: 1,
    videoUrl: '/videos/video1.mp4', // Ganti dengan path yang sesuai
    description: 'Stok genteng press di tempat kami',
  },
  {
    id: 2,
    videoUrl: '/videos/video2.mp4', // Ganti dengan path yang sesuai
    description: 'Tes kekuatan & ketahanan genteng',
  },
  {
    id: 3,
    videoUrl: '/videos/video3.mp4', // Ganti dengan path yang sesuai
    description: 'Persiapan pengiriman genteng ke lokasi pembeli',
  },
  // Tambahkan lebih banyak testimonial video jika diperlukan
];

export const dataSwiper = [
  {
    id: 1,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
    image: People1,
    name: "People 1",
    skill: "UI UX Designer",
  },
  {
    id: 2,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
    image: People2,
    name: "People 2",
    skill: "Flutter Developer",
  },
  {
    id: 3,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
    image: People3,
    name: "People 3",
    skill: "Web Developer",
  },
  {
    id: 4,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
    image: People1,
    name: "People 4",
    skill: "UI UX Designer",
  },
  {
    id: 5,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
    image: People2,
    name: "People 5",
    skill: "Flutter Developer",
  },
  {
    id: 6,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
    image: People3,
    name: "People 6",
    skill: "Web Developer",
  },
];

export const faq = [
  {
    id: 1,
    eventKey: 0,
    title: "Apa jenis genteng yang tersedia di Dwi Putra?",
    desc: "Terdapat 4 jenis genteng yang dapat Anda beli. Genteng Morando, Genteng Mantili, Genteng Biasa yang digunakan untuk menutupi atap secara keseluruhan, kemudian Krepus yang digunakan untuk menutupi dari setiap ujung/kerucut atap.",
  },
  {
    id: 2,
    eventKey: 1,
    title: "Bagaimana cara memesan genteng di Dwi Putra?",
    desc: "Anda dapat memesan genteng melalui website kami, telepon, atau datang langsung ke perusahaan kami.",
  },
  {
    id: 3,
    eventKey: 2,
    title: "Berapa lama waktu pengiriman genteng setelah pemesanan?",
    desc: "Waktu pengiriman biasanya antara 1-3 hari kerja tergantung antrian dan lokasi pengiriman.",
  },
  {
    id: 4,
    eventKey: 3,
    title: "Bagaimana cara menghitung biaya total pembelian genteng?",
    desc: "Total biaya pembelian dihitung berdasarkan harga genteng per unit, jumlah genteng yang dibeli, biaya pengiriman per kilometer, jarak tempuh, dan biaya tol jika ada.",
  },
  {
    id: 5,
    eventKey: 4,
    title: "Apakah genteng Dwi Putra tahan terhadap cuaca ekstrem?",
    desc: "Ya, genteng kami dirancang untuk tahan terhadap berbagai kondisi cuaca ekstrem, termasuk hujan lebat, angin kencang, dan panas matahari.",
  },
  {
    id: 6,
    eventKey: 5,
    title: "Bagaimana cara perawatan genteng agar tahan lama?",
    desc: "Genteng kami tidak memerlukan perawatan khusus. Namun, membersihkan genteng secara berkala dari kotoran dan lumut dapat membantu menjaga penampilannya tetap baik dan tahan lama.",
  },
  {
    id: 7,
    eventKey: 6,
    title: "Apakah ada diskon untuk pembelian genteng dalam jumlah besar?",
    desc: " Ya, kami menawarkan diskon khusus untuk pembelian genteng dalam jumlah besar. Silakan hubungi tim penjualan kami untuk informasi lebih lanjut mengenai penawaran spesial dan diskon yang tersedia.",
  },
  {
    id: 8,
    eventKey: 7,
    title: "Bagaimana cara mengetahui jumlah genteng yang dibutuhkan untuk atap rumah saya?",
    desc: "Anda dapat menghubungi tim penjualan kami yang siap membantu menghitung kebutuhan genteng berdasarkan ukuran dan tipe atap rumah Anda.",
  },
];
