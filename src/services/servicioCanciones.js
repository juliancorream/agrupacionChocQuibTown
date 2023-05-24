export async function consultarCanciones() {
  //RECETA PARA CONSUMIR APIS CON JS

  //PASO 1.  PA'ONDE VAS OME
  // URL + END POINT (EP) DEL SERVICIO

  const IDARTISTA = "6tkyhGe9hGI3Lcfo4gVh6Z";
  const URI = `https://api.spotify.com/v1/artists/${IDARTISTA}/top-tracks?market=US`;

  const TOKEN =
    "Bearer BQCNNI9EDGXwRhxr-jUF_osxc2SRTgUEoDEkNCY-TeQnQ3SEDJmgeqhPF3GUI7vVuEYs-hdXhpA48YfBf7dPKlZjCBcykFjqt6U7xp8prgxf44ApccY";

  //PASO 2. QUE VAS A HACERR ALLA OME....
  //CONFIGURAR LA PETICION
  let peticion = {
    method: "GET",
    headers: {
      Authorization: TOKEN,
    },
  };

  //PASO 3. PIDA EL TAXI
  //utilice la promesa FETCH para ir al back y consumir el API

  let respuesta = await fetch(URI, peticion);
  let canciones = await respuesta.json();
  return canciones;
}
