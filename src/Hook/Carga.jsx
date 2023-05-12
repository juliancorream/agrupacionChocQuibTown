import { useState, useEffect } from "react";

export function Carga() {
  const [estaCargando, setEstaCargando] = useState(true);
  const [tiempo, setTiempo] = useState(0);

  useEffect(
    function () {
      if (tiempo > 0) {
        setEstaCargando(false);
      } else {
        setEstaCargando(true);
      }
    },
    [tiempo]
  );

  setTimeout(function () {
    setTiempo(1);
  }, 5000);

  if (estaCargando) {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Estamos Cargando</h3>
              <img
                src="../../src/assets/img/gif_carga.gif"
                alt=""
                className="img-fluid mx-auto d-block"
              />
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h4>La Pagina ya Cargo.... Bienvenido</h4>
      </>
    );
  }
}
