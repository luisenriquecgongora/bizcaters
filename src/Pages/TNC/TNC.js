import React, {useEffect} from 'react';
import { Markup } from 'interweave';
import './TNC.scss';

const tnc_content = `
<h1>Términos y condiciones</h1>
Al colocar sus artículos en locker de Lavabox o al usar nuestro sitio web/aplicación, usted acepta los siguientes términos y condiciones:<br/><br/>
<i>Órdenes sin pagar:</i> <br/><br/>
Los pedidos que no se hayan pagado dentro de los 30 días posteriores a la fecha de recogida se considerarán abandonados y la ropa será donada. <br/><br/>
<i>Recojo de pedidos:</i> <br/><br/>
Un recojo de pedido se crea cuando un cliente envía su pedido a través de la aplicación Lavabox. Lavabox no es responsable de los pedidos que se dejan en el locker, pero que no se envían a través de la aplicación. <br/><br/>
Cuando deje artículos en un locker, asegúrese de que su locker se haya cerrado y bloqueado correctamente. Lavabox no es responsable de ninguna pérdida o daño resultante de una falla en cerrar la caja con éxito. Lavabox no es responsable de ningún pedido que se deje fuera de las cajas. <br/><br/>
<i>Propiedad Dañada:</i> <br/><br/>
Para ser considerado para reembolso o reembolso, cualquier artículo dañado debe ser
reportado a Lavabox dentro de los siete días hábiles posteriores a la entrega de su pedido.<br/>
Si se informa un artículo dañado después de siete días hábiles, Lavabox no será
responsable por el artículo dañado. <br/><br/>
Lavabox sigue las normas y políticas establecidas por los estándares internacionales.<br/>
Ejercemos el máximo cuidado en la limpieza y el procesamiento de las prendas que se nos
confían y utilizamos los procesos que, en nuestra opinión, se adaptan mejor a la naturaleza
y las condiciones de cada prenda. Sin embargo, no podemos asumir la responsabilidad de
las debilidades o defectos inherentes en los materiales que pueden provocar roturas o el
desarrollo de pequeños agujeros en la tela que no son evidentes antes del procesamiento.<br/><br/>

No podemos garantizar evitar la pérdida de color, el sangrado del color y el encojo; o daños
a telas débiles y suaves; o daños a artículos auxiliares como cinturones, botones,
decoración, corbatas o cierres. Para ser considerado para reembolso, cualquier artículo
dañado debe ser reportado y devuelto a LavaBox para su inspección dentro de los siete
días hábiles posteriores a la entrega. Nuestros expertos decidirán si el artículo en mención
requiere un reembolso.<br/><br/>
La responsabilidad de Lavabox con respecto a cualquier artículo dañado puede
reembolsarse de la siguiente manera:<br/><br/>

Lavado al seco: el mínimo entre la mitad valor actual del artículo o hasta 10 veces el costo
de la limpieza del artículo (si se compró en el último año). No se reembolsarán más de 150
soles por artículo.<br/><br/>
Lavado y planchado / ropa de cama: el reembolso máximo es de la mitad del valor del
artículo hasta S/.40 (si se compró en el último año).<br/><br/>
Si no se puede proporcionar un comprobante de compra o un enlace comparable a un
artículo a pedido, el cliente solo será considerado para reembolso de hasta 100 soles para
lavada al seco y 30 soles para lavado y planchado y ropa de cama.<br/><br/>
Los reembolsos se pueden proporcionar en créditos, reembolsos o pagos en efectivo y
serán determinados por Lavabox. Para nuestros servicios, la responsabilidad máxima de
Lavabox será de 150 soles por artículo.<br/><br/>
<i>Artículos perdidos:</i><br/><br/>
Para ser considerado para reembolso, cualquier artículo perdido debe ser reportado a
LavaBox dentro de los siete días hábiles posteriores a la entrega de su pedido. Si se
informa un artículo perdido después de siete días hábiles, Lavabox tomará las medidas
necesarias para localizar su artículo, pero no será responsable por el artículo perdido.<br/><br/>
LavaBox hace su mejor esfuerzo razonable para rastrear cada artículo procesado y
revisará todos los reclamos de artículos perdidos caso por caso. Los artículos que Lavabox
haya perdido se reembolsarán de acuerdo con lo mencionado en el punto anterior
(propiedad dañada).
Cuando deje artículos en un locker, asegúrese de que su locker se haya cerrado y
bloqueado correctamente. Lavabox no es responsable de ninguna pérdida o daño
resultante de una falla en asegurar el locker con éxito. Lavabox no es responsable de
ningún pedido que se deje fuera de los lockers.<br/><br/>
<i>Envío:</i><br/><br/>
Lavabox no es responsable de ningún pedido que no se recoja. Si un pedido necesita ser
enviado a otro lugar, hay una tarifa de 25 soles, además de los costos de envío. Estos
cargos se aplicarán a la cuenta del cliente antes de que se envíe el pedido. Lavabox
proporcionará un costo de envío estimado al cliente antes de enviar los artículos, y el envío
no continuará hasta que se haya aceptado el pago.
<i>Cosas sueltas:</i><br/><br/>
Lavabox intentará dar cuenta de los artículos sueltos, sin embargo, no somos responsables
de los artículos sueltos que se pierdan en pedidos como:
<li>Cinturones</li>
<li>Joyas</li>

<li>Estancias de cuello</li>
<li>relojes</li>
<li>Dinero en efectivo</li>
<li>Tarjetas de crédito</li>
<li>Botones desmontables</li>
<li>Gemelos</li>
<li>Broches</li>
<li>Cordones</li>
<li>Capuchas</li>
<li>Cualquier artículo suelto en prendas, etc.</li>
Los clientes deben quitar los artículos sueltos y los bolsillos vacíos antes de dejar los
artículos con Lavabox. Lavabox no será responsable si estos artículos no son devueltos. Si
un broche se pierde, se daña o no se devuelve con un pedido, Lavabox no será
responsable del valor del broche. Lavabox tampoco se responsabilizará por daños a sus
prendas por artículos que quedan en los bolsillos (lápiz labial, goma de mascar, bolígrafos,
etc.).<br/><br/>
<i>Códigos de prenda:</i><br/><br/>
Lavabox adherirá un código permanente a sus prendas en un lugar discreto. Estos códigos
son muy importantes para ayudarnos a rastrear sus prendas para que los artículos no se
pierdan y para garantizar que se le facture constantemente cada vez. Desafortunadamente,
no podemos atender las solicitudes de no colocar códigos en su ropa.<br/><br/>
<i>Tiempo de respuesta:</i><br/><br/>
Los días de servicio y el tiempo de respuesta varían según la ubicación. Lavabox hará su
mejor esfuerzo razonable para devolver la ropa dentro de las 72 horas posteriores a la
entrega, sin embargo, no garantizamos tiempos de respuesta. Si un cliente solicita el
servicio al día siguiente, Lavabox no puede garantizar un tiempo de entrega exacto, pero
hará su mejor esfuerzo para devolver el pedido antes de las 10 pm del día siguiente. En
caso de que un pedido se demore debido a circunstancias imprevistas, Lavabox no será
responsable de la compensación o el reembolso si el cliente compra artículos de reemplazo
antes de que se entregue el pedido.<br/><br/>
<i>Órdenes desatendidas</i><br/><br/>

Todos los artículos que no se recojan de una caja dentro de los 30 días posteriores a la
notificación serán donados.<br/><br/>
<i>Códigos promocionales:</i><br/><br/>
Los clientes pueden usar un código promocional por pedido y no pueden combinar un
código promocional con ninguna otra oferta de Lavabox. Los códigos promocionales no se
pueden aplicar a pedidos que ya se han completado.<br/><br/>
<i>Riesgos biológicos:</i><br/><br/>
Lavabox se reserva el derecho de devolver cualquier pedido que contenga riesgos
biológicos para la seguridad de nuestros empleados. Cualquier pedido que esté infestado,
que contenga heces, sangre, fluidos corporales o cualquier otra cosa que sea perjudicial
para nuestros empleados será devuelto sin procesar y se le cobrará al cliente una tarifa de
riesgo biológico de 40 soles.<br/><br/>
<i>Data:</i><br/><br/>
Estoy de acuerdo en que Lavabox pueda compartir el hecho de que uso Lavabox y datos
personales para fines de la aplicación.<br/><br/>
`
const TNC = ()=>{

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  
  return (
    <div className="full-container center-aligned">
      <div className="tnc-container">
        <Markup content={tnc_content}/>
      </div>
    </div>
  );
}

export default TNC;
