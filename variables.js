let nombre= prompt ("escribe tu nombre por favor ")
let dinero= prompt (`ola ${nombre} ingresa el monto de tu dinero y te mostraremos cual helado puedes comprar `)
 dinero= parseInt(dinero);

 if (dinero >= .1 && dinero <= .5 )
 {
    alert (`lo siento ${nombre} no te alcanza para ningun helado`);
 }
 else if (dinero >= 0.6  && dinero < 1 )  
{
   alert("puedes comprar el palito de helado de agua");
   alert("y tu cambio es " + (dinero-0.6))
}
else if  (dinero >= 1 && dinero < 1.6)
{
   alert("puedes comprar el palito de helado de crema"); 
   alert("y tu cambio es " + (dinero-1))
}
else if (dinero >=1.6 && dinero < 1.7)
 {
    alert("puedes comprar el bombon helado marca heladix")
    alert("y tu cambio es " + (dinero-1.6))
}
else if (dinero >=1.7 && dinero<1.8)
{
    alert("puedes comprar bombon helado marca heladovich");
    alert("y tu cambio es " + (dinero-1.7))
}
else if(dinero >=1.8 && dinero < 2.9)
{
   alert ("puedes comprar el bombon helado marca helardo");
   alert("y tu cambio es " + (dinero-1.8))
}
else if(dinero >=2.9 && dinero < 50)
{
   alert ("puedes comprar el potecito de helado con confites o el pote de 1/4 de kg");
   alert ("y tu cambio es " + ( dinero-2.9))
}
else if (dinero >=50 && dinero <=1000) 
{
   alert(`lo siento ${nombre} no tenemos cambio para ese billete`)
}



 //

let nombre1=prompt ("escribe tu nombre por favor ")
let dinero1= prompt (`ola ${nombre1} cuanto dinero tienes `)

if (dinero1 >= 0.6  && dinero1 < 1 )  
{
   alert("puedes comprar el palito de helado de agua");
}
else if  (dinero1>=1 && dinero1<1.6)
{
   alert("puedes comprar el palito de helado de crema"); 
}
else if (dinero1 >=1.6 && dinero1<1.7)
{
    alert("puedes comprar el bombon helado marca heladix")
}
else if (dinero1 >=1.7 && dinero1<1.8)
{
alert("puedes comprar bombon helado marca heladovich");
}
else if(dinero1>=1.8 && dinero1 <2.9)
{
   alert (" tu puedes comprar el bombon helado marca helardo");
}
else if(dinero1 >=2.9 && dinero1 <3)
{
   alert ("puedes comprar el potecito de helado con confites");
}

else if (dinero1>=3 && dinero1<50)
{
   alert("puedes comprar el pote de 1/4 de kg");
}
else if (dinero1 >=50 && dinero1 <=100) 
{
   alert("no tenemos cambio para ese billete")
}
else if (dinero1 >=0.1 && dinero1 <=0.5 )
{
   alert ("<p>no te alcanza para ningun helado</p> ");
}
 



 //


let nombre2=prompt ("escribe tu nombre por favor ")
let dinero2= prompt (`ola ${nombre2} cuanto dinero tienes `)

if (dinero2 >= 0.6  && dinero < 1 )  
{
   alert("puedes comprar el palito de helado de agua");
}
else if  (dinero2>=1 && dinero2<=1.5)
{
   alert("puedes comprar el palito de helado de crema"); 
}
else if (dinero2 >=1.6 && dinero2<1.7)
{
    alert("puedes comprar el bombon helado marca heladix")
}
else if (dinero2 >=1.7 && dinero2<1.8)
{
alert("puedes comprar bombon helado marca heladovich");
}
else if(dinero2>=1.8 && dinero2 <2.9)
{
   alert ("puedes comprar el bombon helado marca helardo");
}
else if(dinero2 >=2.9 && dinero2 <3)
{
   alert ("puedes comprar el potecito de helado con confites");
}
else if (dinero2>=3 && dinero2<50)
{
   alert("puedes comprar el pote de 1/4 de kg");
}
else if (dinero2 >=50 && dinero2 <=100) 
{
   alert("no tenemos cambio para ese billete")
}
else if (dinero2 >=0.1 && dinero2 <=0.5 )
{
   alert ("<p>no te alcanza para ningun helado</p> ");
}
