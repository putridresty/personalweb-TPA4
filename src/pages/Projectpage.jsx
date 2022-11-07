import React, { Component } from "react";
import Project from "../components/Project/Project";
import "../components/Project/ProjectStyle.css";

const Projectpage = () => {
  return (
    <>
      <section className="proj-title">
        <h1>PROJECTS</h1>
      </section>
      <section className="article-project">
        <Project
          titleproj={
            "Sistem Informasi Penjualan “RoseHollan” Produk Hasil Olahan Mawar"
          }
          url={"https://github.com/putridresty/PROJEK-PPL-AGRO-KEL-E7"}
        />
        <Project
          titleproj={"Sistem Pencatatan Transaksi untuk Toko"}
          url={"https://github.com/putridresty/SistemPencatatan-PBO"}
        />
        <Project
          titleproj={"BMI-Calculator"}
          url={"https://bmicalculator-putri.netlify.app/"}
        />
      </section>
    </>
  );
};

export default Projectpage;
