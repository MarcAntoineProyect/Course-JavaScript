function calcularPrecioConDescuento(precio, descuento) {
    const porcentajeConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajeConDescuento) / 100;
    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;
    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue =  inputDiscount.value;
    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
    const printResult = document.getElementById("resultPrice");
    printResult.innerText = "El precio con descuento es " + precioConDescuento;
}