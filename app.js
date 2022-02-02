let endpoint = "https://api.binance.com/api/v3/ticker/price";
fetch(endpoint)
  .then((Response) => Response.json())
  .then((data) => mostrarData(data)) //creamos una funcion llamada mostrar data
  .catch((err) => console.log(err));

const mostrarData = (data) => {
  //console.log(data);
  let body = "";
  for (let i = 0; i < data.length; i++) {
    body += `<tr><td>${data[i].symbol}</td><td>${data[i].price}</td></tr>`;
  }

  document.getElementById("data").innerHTML = body;
};
