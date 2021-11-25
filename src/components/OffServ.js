function OffServ(){
    return(
        <div>
        <div class="mt-5">
          <div>
            <pre>
              La empresa Talleres automotriz ofrecen servicios de reparacion,
              mantenimiento y mucho mas solo siga los siguientes pasos
            </pre>
          </div>
        </div>

        <div className="container">
          <form>
            <fieldset disabled>
              <div className="mb-3">
                <label for="disabledSelect" className="form-label">
                  Servicios
                </label>
                <select id="disabledSelect" className="form-select">
                  <option>Elija un Servicio</option>
                </select>
              </div>
              <div className="mb-3">
                <label for="disabledTextInput" className="form-label">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="disabledTextInput"
                  className="form-control"
                  placeholder="Nombre Completo"
                />
              </div>
              <div className="mb-3">
                <label for="disabledTextInput" className="form-label">
                  Placa del Vehiculo
                </label>
                <input
                  type="text"
                  id="disabledTextInput"
                  className="form-control"
                  placeholder="Placa ### ###"
                />
              </div>
              <div className="mb-3"></div>
              <a href="registro1.html">SIGUIENTE</a>
              <button type="button" className="btn btn-dark">
                Siguiente
              </button>
              <div className=" mt-5">
                <p>
                  Si quieres agendar una cita <a href="n">Haga click aqui</a>
                </p>
                <p>
                  Si quiere ver el estado de su vehiculo
                  <a href="n">Haga click aqui</a>
                </p>
              </div>
            </fieldset>
          </form>
        </div>
        </div>

    );
}
export default OffServ;