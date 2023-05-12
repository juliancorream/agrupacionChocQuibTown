import { Link } from "react-router-dom";
import "./Fans.css";

export function Fans() {
  return (
    <>
      <section className="fondofans text-white fw-bold">
        <h2 className="titulofans">FANS</h2>
        <hr className="line" />
        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="inputEmail" className="form-label">
              Email:
            </label>
            <input type="email" className="form-control" id="inputEmail" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword" className="form-label">
              Password:
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword"
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputName" className="form-label">
              Nombres:
            </label>
            <input type="text" className="form-control" id="inputName" />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputLastname" className="form-label">
              Apellidos:
            </label>
            <input type="text" className="form-control" id="inputLastname" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputdireccion" className="form-label">
              Dirección:
            </label>
            <input type="text" className="form-control" id="inputdireccion" />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputfechanacimiento" className="form-label">
              Fecha Nacimiento:
            </label>
            <input
              type="date"
              className="form-control"
              id="inputfechanacimiento"
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputState" className="form-label">
              Te Gusta Cantar:
            </label>
            <select id="inputState" className="form-select">
              <option selected="">Seleccionar...</option>
              <option>Si</option>
              <option>No</option>
            </select>
          </div>

          <div className="col-md-6">
            <label htmlFor="inputState" className="form-label">
              Te Gusta Tocar Instrumentos Musicales:
            </label>
            <select id="inputState" className="form-select">
              <option selected="">Seleccionar...</option>
              <option>Si</option>
              <option>No</option>
            </select>
          </div>

          <div className="col-md-6">
            <label htmlFor="inputState" className="form-label">
              Sufres de Panico Escenico:
            </label>
            <select id="inputState" className="form-select">
              <option selected="">Seleccionar...</option>
              <option>Si</option>
              <option>No</option>
            </select>
          </div>

          <div className="col-md-6">
            <label htmlFor="inputState" className="form-label">
              Te Identificas con uno de estos Artistas:
            </label>
            <select id="inputState" className="form-select">
              <option selected="">Seleccionar...</option>
              <option>Tostao</option>
              <option>Goyo</option>
              <option>Slow Mike</option>
            </select>
          </div>

          <div className="col-md-6">
            <label htmlFor="inputState" className="form-label">
              Te Gustaria ser una persona Reconocida:
            </label>
            <select id="inputState" className="form-select">
              <option selected="">Seleccionar...</option>
              <option>Si</option>
              <option>No</option>
            </select>
          </div>

          <div className="col-md-6">
            <label htmlFor="inputState" className="form-label">
              Que Tipo de Genero Musical te gusta Mas::
            </label>
            <select id="inputState" className="form-select">
              <option selected="">Seleccionar...</option>
              <option>Urbano Latino</option>
              <option>Hip Hop</option>
              <option>Pop</option>
              <option>Rock</option>
              <option>Regueton</option>
            </select>
          </div>

          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-warning">
              Enviar
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
