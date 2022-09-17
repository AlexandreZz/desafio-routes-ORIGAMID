import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./modules/Styles.module.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Contato from "./components/Contato";
import Produtos from "./components/Produtos";
import NotFound from "./components/NotFound";

function App() {
  return (
    <section>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route end path="/" element={<Home />} />
          <Route path="produto/:id" element={<Produtos />} />
          <Route path="contato" element={<Contato />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
