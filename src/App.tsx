
import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Link,
} from "react-router-dom";

const heroImage =
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1800&q=85";

const campusImage =
  "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=85";

const menu = [
  { name: "Beranda", path: "/" },
  { name: "Tentang Kami", path: "/tentang" },
  { name: "Akademik", path: "/akademik" },
  { name: "Dosen", path: "/dosen" },
  { name: "Kegiatan", path: "/kegiatan" },
  { name: "Berita", path: "/berita" },
  { name: "Galeri", path: "/galeri" },
  { name: "Kontak", path: "/kontak" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-[#061b3d] text-white text-xs">
        <div className="max-w-7xl mx-auto px-5 py-3 flex justify-between">
          <b>UNUSIA | Universitas Nahdlatul Ulama Indonesia</b>
          <div className="hidden md:flex gap-6">
            <span>✉ si@unusia.ac.id</span>
            <span>☎ 021-1234-5678</span>
            <span>⌖ Jakarta, Indonesia</span>
          </div>
        </div>
      </div>

      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <span className="text-4xl text-blue-600">✺</span>
            <div>
              <h2 className="font-extrabold text-[#071d43] leading-tight">
                Jurusan<br />Sistem Informasi
              </h2>
              <p className="text-[10px] text-gray-500">
                Inovasi • Teknologi • Masa Depan
              </p>
            </div>
          </Link>

          <button
            className="md:hidden text-2xl text-blue-900"
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </button>

          <div className={`${open ? "flex" : "hidden"} md:flex absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-5 md:p-0 flex-col md:flex-row gap-2`}>
            {menu.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-full text-sm font-medium transition ${
                    isActive
                      ? "bg-blue-700 text-white"
                      : "text-slate-700 hover:bg-blue-50 hover:text-blue-700"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}

function Footer() {
  return (
    <footer className="bg-[#041a3a] text-white mt-16">
      <div className="max-w-7xl mx-auto px-5 py-12 grid md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-xl font-bold mb-3">
            Jurusan Sistem Informasi
          </h2>
          <p className="text-sm text-blue-100 leading-relaxed">
            Membangun generasi digital yang unggul,
            inovatif dan berintegritas.
          </p>
        </div>

        <div>
          <h3 className="font-bold mb-4">Kontak Kami</h3>
          <p className="text-sm text-blue-100 mb-2">☎ 021-1234-5678</p>
          <p className="text-sm text-blue-100 mb-2">✉ si@unusia.ac.id</p>
          <p className="text-sm text-blue-100">⌖ Jakarta, Indonesia</p>
        </div>

        <div>
          <h3 className="font-bold mb-4">Menu Cepat</h3>
          <div className="grid grid-cols-2 gap-3 text-sm text-blue-100">
            {menu.map((item) => (
              <Link key={item.path} to={item.path} className="hover:text-blue-400">
                → {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-4">Ikuti Kami</h3>
          <div className="flex gap-3 text-xl">
            <a href="#instagram">◎</a>
            <a href="#facebook">f</a>
            <a href="#youtube">▶</a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 text-center text-xs text-blue-200 py-5">
        © 2026 Jurusan Sistem Informasi UNUSIA. All Rights Reserved.
      </div>
    </footer>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

function PageHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="bg-gradient-to-r from-[#061b3d] to-blue-700 text-white py-20 px-5">
      <div className="max-w-7xl mx-auto">
        <p className="text-blue-300 uppercase tracking-widest text-sm mb-3">
          Program Studi Sistem Informasi
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          {title}
        </h1>
        <p className="max-w-2xl text-blue-100">{description}</p>
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <section
        className="min-h-[520px] bg-cover bg-center flex items-center relative"
        style={{
          backgroundImage: `linear-gradient(90deg,rgba(2,25,62,.97),rgba(2,25,62,.65),rgba(2,25,62,.15)),url(${heroImage})`,
        }}
      >
        <div className="max-w-7xl mx-auto w-full px-5 py-20 text-white">
          <span className="bg-blue-800 px-4 py-2 rounded-full text-sm">
            PROGRAM STUDI
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold mt-6 mb-4">
            Sistem <span className="text-blue-400">Informasi</span>
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold">
            Membangun Generasi Digital yang Unggul,
            <br /> Inovatif dan Berintegritas
          </h2>

          <p className="max-w-xl text-blue-100 mt-5 leading-relaxed">
            Program Studi Sistem Informasi UNUSIA berkomitmen
            mencetak lulusan yang kompeten di bidang teknologi
            informasi dan siap menghadapi tantangan era digital.
          </p>

          <Link
            to="/tentang"
            className="inline-block mt-7 bg-blue-600 hover:bg-blue-500 px-7 py-3 rounded-full font-bold text-sm transition"
          >
            Pelajari Lebih Lanjut →
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 -mt-8 relative z-10">
        <div className="bg-white shadow-xl rounded-2xl grid grid-cols-2 md:grid-cols-5 gap-4 p-6">
          {[
            "Kurikulum Berbasis Industri",
            "Dosen Profesional",
            "Fasilitas Modern",
            "Kegiatan Mahasiswa",
            "Peluang Karier Luas",
          ].map((item, index) => (
            <div key={item} className="text-center border-r last:border-0 border-slate-200 px-2">
              <div className="text-3xl text-blue-600 mb-2">
                {["✦", "▦", "★", "♧", "↗"][index]}
              </div>
              <p className="font-bold text-sm">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 py-20 grid md:grid-cols-2 gap-12 items-center">
        <img
          src={campusImage}
          alt="Gedung universitas"
          className="rounded-3xl w-full h-80 object-cover shadow-lg"
        />

        <div>
          <p className="text-blue-600 font-bold tracking-widest text-sm">
            TENTANG KAMI
          </p>
          <h2 className="text-3xl font-extrabold text-[#071d43] mt-3 mb-5">
            Jurusan Sistem Informasi
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Jurusan Sistem Informasi UNUSIA hadir untuk menjawab
            kebutuhan industri dan masyarakat akan tenaga ahli
            di bidang teknologi informasi melalui pendidikan
            yang modern dan inovatif.
          </p>
          <Link to="/tentang" className="bg-blue-700 text-white px-6 py-3 rounded-full inline-block">
            Selengkapnya →
          </Link>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-3xl font-bold text-[#071d43] mb-8">
            Jelajahi Sistem Informasi
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {menu.slice(1, 5).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="bg-white p-7 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
              >
                <span className="text-blue-600 text-3xl">✧</span>
                <h3 className="font-bold text-lg mt-4">{item.name}</h3>
                <p className="text-sm text-slate-500 mt-2">
                  Jelajahi informasi {item.name.toLowerCase()} program studi.
                </p>
                <span className="text-blue-600 text-sm font-bold block mt-5">
                  Lihat Selengkapnya →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function About() {
  return (
    <>
      <PageHeader title="Tentang Kami" description="Mengenal lebih dekat Program Studi Sistem Informasi UNUSIA." />
      <section className="max-w-7xl mx-auto px-5 py-16 grid md:grid-cols-2 gap-12 items-center">
        <img src={campusImage} alt="Kampus" className="rounded-3xl w-full h-80 object-cover" />
        <div>
          <h2 className="text-3xl font-bold mb-5 text-[#071d43]">Profil Program Studi</h2>
          <p className="text-slate-600 leading-relaxed">Program Studi Sistem Informasi mempelajari perpaduan teknologi informasi, proses bisnis, manajemen, dan pengelolaan data untuk menghasilkan solusi bagi organisasi.</p>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-5 pb-16 grid md:grid-cols-2 gap-6">
        <article className="bg-blue-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-3">Visi</h2>
          <p className="text-slate-700 leading-relaxed">Menjadi program studi Sistem Informasi yang unggul, inovatif, dan berintegritas dalam bidang teknologi informasi.</p>
        </article>
        <article className="bg-slate-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-3">Misi</h2>
          <p className="text-slate-700 leading-relaxed">Menyelenggarakan pendidikan, penelitian, dan pengabdian kepada masyarakat di bidang Sistem Informasi.</p>
        </article>
      </section>
    </>
  );
}

const genericPages = {
  akademik: {
    title: "Akademik",
    description: "Informasi kurikulum, pembelajaran, dan kegiatan akademik.",
    items: ["Kurikulum Program Studi", "Mata Kuliah", "Kalender Akademik", "Kompetensi Lulusan"],
  },
  dosen: {
    title: "Dosen",
    description: "Kenali tenaga pendidik dan bidang keahlian Program Studi Sistem Informasi.",
    items: ["Dosen Sistem Informasi", "Bidang Keahlian", "Penelitian Dosen", "Publikasi Ilmiah"],
  },
  kegiatan: {
    title: "Kegiatan Mahasiswa",
    description: "Aktivitas, organisasi, seminar, dan pengembangan kompetensi mahasiswa.",
    items: ["Seminar Teknologi", "Workshop Pemrograman", "Organisasi Mahasiswa", "Pengabdian Masyarakat"],
  },
  berita: {
    title: "Berita Terbaru",
    description: "Informasi dan kabar terbaru dari lingkungan Sistem Informasi.",
    items: ["Seminar Nasional Transformasi Digital", "Workshop Pemrograman Web", "Kegiatan Mahasiswa", "Informasi Akademik"],
  },
  galeri: {
    title: "Galeri",
    description: "Dokumentasi kegiatan dan momen mahasiswa Sistem Informasi.",
    items: ["Kegiatan Kampus", "Seminar dan Workshop", "Kegiatan Mahasiswa", "Dokumentasi Akademik"],
  },
};

function GenericPage({ page }: { page: keyof typeof genericPages }) {
  const data = genericPages[page];
  return (
    <>
      <PageHeader title={data.title} description={data.description} />
      <section className="max-w-7xl mx-auto px-5 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.items.map((item, index) => (
            <article key={item} className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-lg transition">
              <img src={[heroImage, campusImage, heroImage, campusImage][index]} alt="" className="w-full h-40 object-cover" />
              <div className="p-5">
                <span className="text-blue-600 font-bold text-xs">SISTEM INFORMASI</span>
                <h2 className="font-bold mt-2 text-[#071d43]">{item}</h2>
                <p className="text-sm text-slate-500 mt-2">Informasi lebih lanjut mengenai {item.toLowerCase()}.</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function Contact() {
  return (
    <>
      <PageHeader title="Kontak Kami" description="Hubungi Program Studi Sistem Informasi UNUSIA." />
      <section className="max-w-7xl mx-auto px-5 py-16 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-[#071d43]">Informasi Kontak</h2>
          <p className="mb-4">✉ si@unusia.ac.id</p>
          <p className="mb-4">☎ 021-1234-5678</p>
          <p>⌖ Jakarta, Indonesia</p>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); alert("Terima kasih. Formulir contoh berhasil dikirim."); }} className="bg-slate-50 p-7 rounded-2xl space-y-4">
          <input required placeholder="Nama lengkap" className="w-full p-3 rounded-lg border border-slate-200" />
          <input required type="email" placeholder="Email" className="w-full p-3 rounded-lg border border-slate-200" />
          <textarea required placeholder="Pesan" rows={5} className="w-full p-3 rounded-lg border border-slate-200" />
          <button className="bg-blue-700 text-white px-7 py-3 rounded-lg font-bold">Kirim Pesan</button>
        </form>
      </section>
    </>
  );
}

function NotFound() {
  return (
    <section className="min-h-[50vh] grid place-items-center text-center px-5">
      <div>
        <h1 className="text-6xl font-extrabold text-blue-700">404</h1>
        <p className="text-slate-600 my-4">Halaman tidak ditemukan.</p>
        <Link to="/" className="text-blue-700 font-bold">Kembali ke Beranda</Link>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tentang" element={<About />} />
          <Route path="/akademik" element={<GenericPage page="akademik" />} />
          <Route path="/dosen" element={<GenericPage page="dosen" />} />
          <Route path="/kegiatan" element={<GenericPage page="kegiatan" />} />
          <Route path="/berita" element={<GenericPage page="berita" />} />
          <Route path="/galeri" element={<GenericPage page="galeri" />} />
          <Route path="/kontak" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
