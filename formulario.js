function factura()
{
    let nombre =document.getElementById('name1').value;
    var carrera =document.querySelector('input[name=categoria]:checked').value;
    let cantidad = document.getElementById('cant').value;
    let precio
    let subt
    let descuento = "No hay descuento"
    let total


    if(carrera=="3_kilometros")
    {
        precio=8
        subt= precio*cantidad
        total= subt
       
        document.write("<h1>¡Gracias por ayudarnos!</h1> <br>"+"Nombre del cliente: "+nombre+"<br>Tipo de carrera a realizar: "+carrera);
        document.write("<br>__________________________________________________________________________________________________________________<br>");
        document.write("<br>Cantidad: "+cantidad+"......................... "+" Precio individual del boleto: $"+precio.toFixed(2)+".........................  "+"subtotal: $"+subt.toFixed(2)+"......................... "+"Descuento: "+descuento+"<br> total: $"+total.toFixed(2));
    }

    else if(carrera=="5_kilometros")
    {
        precio=10

        subt= precio*cantidad

        if(cantidad<5)
        {
            //no hay descuento en menos de 5
            total=subt
            document.write("<h1>¡Gracias por ayudarnos!</h1> <br>"+"Nombre del cliente: "+nombre+"<br>Tipo de carrera a realizar: "+carrera);
        document.write("<br>__________________________________________________________________________________________________________________<br>");
        document.write("<br>Cantidad: "+cantidad+"......................... "+" Precio individual del boleto: $"+precio.toFixed(2)+".........................  "+"subtotal: $"+subt.toFixed(2)+"......................... "+"Descuento: "+descuento+"<br> total: $"+total.toFixed(2));

        }
        else if(cantidad>=5)
        {
            //aqui el descuento a ma de 5
            descuento= subt*0.20
            total= subt-descuento

            document.write("<h1>¡Gracias por ayudarnos!</h1> <br>"+"Nombre del cliente: "+nombre+"<br>Tipo de carrera a realizar: "+carrera);
            document.write("<br>__________________________________________________________________________________________________________________<br>");
            document.write("<br>Cantidad: "+cantidad+"......................... "+" Precio individual del boleto: $"+precio.toFixed(2)+".........................  "+"subtotal: $"+subt.toFixed(2)+"......................... "+"Descuento: $"+descuento.toFixed(2)+ "<br> total: $"+total.toFixed(2)); 
               }

    }
    else if(carrera=="10_kilometros")
    {
        
        precio=15
        subt= precio*cantidad

        if(cantidad<=15)
        {
            //no hay descuento 
            total=subt

            document.write("<h1>¡Gracias por ayudarnos!</h1> <br>"+"Nombre del cliente: "+nombre+"<br>Tipo de carrera a realizar: "+carrera);
            document.write("<br>__________________________________________________________________________________________________________________<br>");
            document.write("<br>Cantidad: "+cantidad+"......................... "+" Precio individual del boleto: $"+precio.toFixed(2)+".........................  "+"subtotal: $"+subt.toFixed(2)+ "......................... "+"Descuento: "+descuento+"<br> total: $"+total.toFixed(2));  
              }
        else if(cantidad>15)
        {
            //aqui hay descuento
            let mecha = "el descuento se aplica arriba de 15 boletos comprados esos boletos son a mitad de precio"
            let entradasP=225
            let extraquince=cantidad-15
            let entradasU=extraquince*precio
            let mitad=entradasU/2
            descuento=mitad+entradasP

            document.write("<h1>¡Gracias por ayudarnos!</h1> <br>"+"Nombre del cliente: "+nombre+"<br>Tipo de carrera a realizar: "+carrera);
            document.write("<br>__________________________________________________________________________________________________________________<br>");
            document.write("<br>Cantidad: "+cantidad+"......................... "+" Precio individual del boleto: $"+precio.toFixed(2)+".........................  "+"subtotal: $"+subt.toFixed(2)+"......................... "+"Descuento: $"+mitad+"<br> total: $"+descuento.toFixed(2));

        }
    }



}   