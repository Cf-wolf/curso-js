const precioOriginal = 120;

const descuento = 18;



function calcularPrecioConDescuento(precio, descuento) {

    const porsentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porsentajePrecioConDescuento)/100; 

    return precioConDescuento

}


function clickbutton(){
  const inputPrecio = document.getElementById ("inputPrecio");
  const precioValue = inputPrecio.value;


  const inputDescuento = document.getElementById("inputDescuento");
  const descuentoValue = inputDescuento.value;

  const precioConDescuento = calcularPrecioConDescuento (precioValue, descuentoValue);

  const precioParrafo = document.getElementById("precioParrafo"); 
  precioParrafo.innerText = "el precio con descuento es: $" + precioConDescuento
  
}




/// este es otro ejemplo 



function calcularPrecioConDescuento(precio, descuento){
  const porcentajeDelPrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajeDelPrecioConDescuento)/ 100;

  return precioConDescuento;

}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inputCoupon = document.getElementById("inputCoupon");
    const couponValue = inputCoupon.value;

    const resultCoupon = document.getElementById("priceWithCoupon")
  
    let descuento;
    let precioConDescuento; 
  
    switch(true) {
      case couponValue === "Kriss":
        descuento = 20;
        precioConDescuento = calcularPrecioConDescuento(priceValue,descuento);
        resultCoupon.innerText =`Cupón es valido el precio con descuento es de: $${precioConDescuento} dolores`
      break;
      case couponValue === "Chacha":
        descuento = 30;
        precioConDescuento = calcularPrecioConDescuento(priceValue,descuento);
        resultCoupon.innerText =`Cupón es valido el precio con descuento es de: $${precioConDescuento} dolores`
      break;
      case couponValue === "Kookie":
        descuento = 50;
        precioConDescuento = calcularPrecioConDescuento(priceValue,descuento);
        resultCoupon.innerText =`Cupón es valido el precio con descuento es de: $${precioConDescuento} dolores`
      break;
      default:
        resultCoupon.innerText = "el cupón ingresado no es valido"
    }
}




//console.log
  //  precioOriginal,
    //descuento,
    //precioConDescuento,



