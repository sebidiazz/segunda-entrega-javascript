let nombreUsuario = prompt("Ingresa por favor tu nombre y apellido")

alert("Bienvenido " + nombreUsuario + " por favor siga las instrucciones para probar que no es un bot")

function pedirNumeros() {
    let numeros = [1, 2, 3]
    let intentos = 3
    let i = 0

    do {
      let numero = prompt("Ingrese el número " + numeros[i] + ":")
      if (numero != null && numero != "" && parseInt(numero) == numeros[i]) {
        i++
        if (i == numeros.length) {
          alert("¡Excelente! " + nombreUsuario + " ha ingresado los números en el orden correcto. Usted no es un bot.")
          break
        }

       }else{
        intentos--
        if (intentos == 0) {
          alert("Ha excedido el número máximo de intentos. Vuelva a intentarlo más tarde.")
          break
        } else {
          alert("Debe ingresar el número " + numeros[i] + ". Le quedan " + intentos + " intentos.")
        }
      }
    } while (true)
 }

  pedirNumeros()

  function mostrarObjetos() {
    // Crear un array con los objetos dados
    let array = [
      { tamaño: "llavero", color: "azul", peso: 50 }, // llavero
      { tamaño: "figura de 5 a 10 cm", color: "a elección", peso: 150 }, // figura de 5 a 10 cm
      { tamaño: "figura de 10 a 20 cm", color: "a elección", peso: 300 }, // figura de 10 a 20 cm
      { tamaño: "figura de 20 a 30 cm", color: "a elección", peso: 600 }, // figura de 20 a 30 cm
      { tamaño: "figura de 30 a 50 cm", color: "a elección", peso: 800 }, // figura de 30 a 50 cm
      { tamaño: "figura de 50 a 75 cm", color: "a elección", peso: 2000 }, // figura de 50 a 75 cm
      { tamaño: "figura de 75 cm a 1 mt", color: "a elección", peso: 4000 } // figura de 75 cm a 1 mt
    ];
  
    // Recorrer el array de objetos
    for (let i = 0; i < array.length; i++) {
      // Mostrar al usuario los datos del objeto
      alert(
        "El objeto número " +
          (i + 1) +
          " tiene las siguientes propiedades:\n" +
          "Forma: " +
          array[i].forma +
          "\n" +
          "Color: " +
          array[i].color +
          "\n" +
          "Peso: " +
          array[i].peso +
          " gramos"
      );
    }
  }

  mostrarObjetos()
  
  let numeroObjeto = prompt("Ingresa el número del objeto con tamaño/peso deseado")

  alert("Muy bien " + nombreUsuario + " , ahora sólo presione el botón Seleccionar Archivo y cargue la imagen a modo de ejemplo del producto que desea imprimir con nosotros")
