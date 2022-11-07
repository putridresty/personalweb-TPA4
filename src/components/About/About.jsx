import React from "react";
import "./AboutStyle.css";

const About = () => {
  return (
    <div className="ringkasan">
      <section className="pengalaman">
        <h1>PENGALAMAN</h1>
        <div className="exp-one">
          <h3>Staff Divisi Kewirausahaan</h3>
          <p>Des 2020 - Des 2021</p>
          <p>Himpunan Mahasiswa Informatika</p>
          <ul className="exp-list">
            <li>Me‑manage akun instagram Divisi Kewirausahaan</li>
            <li>Branding produk yang terdapat pada Divisi Kewirausahaan</li>
            <li>Menghitung keuntungan dan pemasukan pada setiap produk</li>
          </ul>
        </div>
        <div className="exp-two">
          <h3>Kepala Divisi Penelitian dan Pengembangan</h3>
          <p>Des 2021 - sekarang</p>
          <p>Himpunan Mahasiswa Informatika</p>
          <ul className="exp-list">
            <li>Me‑manage anggota Divisi Penelitian dan Pengembangan</li>
            <li>
              Melakukan tugas pemantauan pada kegiatan yang dilaksanakan oleh
              anggota Divisi Penelitian dan Pengembangan
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;
