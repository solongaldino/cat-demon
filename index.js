#! /usr/bin/env node

void (async () => {
  try {
    const args = process.argv;

    delete args[0];
    delete args[1];

    if (args[2] === "rochele") {
      console.log("Rouba comida em cima da mesa");
      console.log("Rasga saco de lixo");
    } else if (args[2] === "kiara") {
      console.log("Influenciada por rochele e fofito");
    } else if (args[2] === "fofito") {
      console.log("Dorme muito");
      console.log(
        "Rouba comida em cima do fogão, balcão e qualquer comida facil."
      );
    } else if (args[2] === "lana") {
      console.log("Observa tudo e não faz nada");
      console.log("Caga todo dia no quartinho");
    } else {
      console.log(
        `Digite o nome do gato como parametro ex: "node index.js lana" - rochele, kiara, fofito, lana`
      );
    }

    console.log("[ END ]");
  } catch (error) {
    throw error;
  }
  process.exit();
})();
