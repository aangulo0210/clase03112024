//ternario
// let contador = 10;

// let edad = 2;

// const mensaje = contador < 20 && "hola ";
// document.write(mensaje);

// let mensajaEdad =
//   edad >= 21 ? "Eres mayor de 21 años" : "Eres menor de 21 años";
// document.write(mensajaEdad);

//timeout

// const evaluar = () => {
//   const edad = prompt("¿Cuantos años tienes?");
//   if (edad >= 18) {
//     alert("Eres mayor de edad");
//   } else {
//     alert("Eres menor de edad");
//   }
// };

// setTimeout(evaluar, 2000);

//intervalo para una funcion

// const saludar = () => {
//   document.write("<h1>Hello World</h1>");
// };
// setInterval(saludar(), 3000); //saludar para ejecución indefinida y saludar() para una vez

//promesa

// const sumar = (a, b) => {
//   return new Promise((resolve, reject) => {
//     if (a < 0 || b < 0) {
//       reject("Los numeros no pueden ser negativos");
//     } else {
//       resolve(a + b);
//     }
//   });
// };

// const resultado = sumar(3, -5)
//   .then((res) => {
//     document.write(res);
//   })
//   .catch((err) => {
//     document.write(err);
//   });

//JSON

//Objeto deconstruido

// const { nombre, city } = {
//   nombre: "John",
//   age: 30,
//   city: "New York",
// };

// document.write("<p>" + nombre + "</p>");
// document.write("<p>" + city + "</p>");

//FETCH

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((data) => {
//     datosPintados(data);
//     console.log(data);
//   });
// let container = document.getElementById("app");
// container.innerHTML = ``;
// let informacion = [];
// const datosPintados = (data) => {
//   for (let i = 0; i < data.length; i++) {
//     informacion = [data[i].name, data[i].email, data[i].phone, data[i].website];
//     // document.write(
//     //   "<div style='display: flex; flex-direction: column; align-items: center; justify-content: center; border: 1px solid black; padding: 10px; margin: 10px;'>" +
//     //     "<p>" +
//     //     data[i].name +
//     //     "</p>" +
//     //     "<p>" +
//     //     data[i].email +
//     //     "</p>" +
//     //     "<p>" +
//     //     data[i].phone +
//     //     "</p>" +
//     //     "<p>" +
//     //     data[i].website +
//     //     "</p>" +
//     //     "</div>"
//     // );
//     container.prepend(document.write("<p>" + informacion + "</p>"));
//   }
// };

function fechpokemon() {
  const nombrePokemon = document
    .getElementById("pokemon-name")
    .value.toLowerCase();

  if (nombrePokemon === "") {
    alert("Escribe un nombre de Pokemon");
    return;
  }

  fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Error al obtener el Pokemon");
      }
      return res.json();
    })
    .then((data) => displayPokemon(data))
    .then((data) =>
      displayPokemon(data).catch((error) =>
        console.error("error atrapando el Pokemon: ", error)
      )
    );
}

function displayPokemon(pokemon) {
  const pokemonInfo = document.getElementById("pokemonInformacion");
  pokemonInfo.innerHTML = `
  <p>nombre: ${pokemon.name}</p>
  <p>ID: ${pokemon.id}</p>
  <p>Altura: ${pokemon.height}</p>
  <p>Peso: ${pokemon.weight}</p>
  <p><img src="${pokemon.sprites.front_default}" alt="${pokemon.name}"></p>

  `;
}
