import { Route, Routes } from "react-router-dom";

import { Home } from "../Home/Home";
import { Members } from "../Members/Members";
import { History } from "../History/History";
import { Menu } from "../shared/Menu/Menu";
import { Shop } from "../Shop/Shop";
import { Musica } from "../Musica/Musica";
import { Footer } from "../shared/Footer/Footer";
import { Vestuario } from "../Vestuario/Vestuario";
import { CarruselTienda } from "../CarruselTienda/CarruselTienda";
import { InstrumentosMusicales } from "../InstrumentosMusucales/InstrumentosMusicales";
import { Calzado } from "../Calzado/Calzado";
import { Fans } from "../Fans/Fans";
import { Carga } from "../Hook/Carga";

export function Rutas() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="integrantes" element={<Members />} />
        <Route path="resenas" element={<History />} />
        <Route path="tienda" element={<Shop />} />
        <Route path="musica" element={<Musica />} />
        <Route path="vestuario" element={<Vestuario />} />
        <Route
          path="instrumentosmusicales"
          element={<InstrumentosMusicales />}
        />
        <Route path="calzado" element={<Calzado />} />
        <Route path="fans" element={<Fans />} />
        <Route path="hoocks" element={<Carga />} />
      </Routes>
      <Footer />
    </>
  );
}
