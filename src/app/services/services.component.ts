import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  en = {
    heroTitle: "Supply Chain Challenges, Supply Chain Solutions.",
    heroContent: "Piccolo Inc. provides a number of integrated services offering to help your company build and manage a supply chain that is cost-effective, fast, agile, adaptable and aligned. Our transportation management solutions include Third-Party Transportation Management, Express Freight Management, and Professional and Financial Services.",
    heroScroll: "Scroll Down",
    thirdTitle: "Third-Party Transportation Management",
    thirdContent: "Our asset-lite business model allows us to respond quickly to short-term fluctuations in supply and demand, maintain a flexible transportation environment and align the goals of our clients with that of carriers, while helping clients to reduce transportation expenses by 10% - 30%. Our services include:",
    thirdList: [
      "Analysis of current transportation strategy",
      "Bottleneck and problem analysis",
      "Formulation of optimal transportation strategy",
      "Carrier selection",
      "Transport operation management",
      "Confirmation of pick-up and delivery",
      "Freight audit and payment service"
    ],
    expressTitle: "Express Freight Management",
    expressContent: "Piccolo Express Freight Management provides time-critical and reliable delivery of LTL and FTL at competitive rates. To schedule an Express Freight shipment, please email express@piccoloinc.com or call ",
    expressCTA: "Contact Us"
  }

  es = {
    heroTitle: "Problemas de Cadena de Suministros? Soluciones.",
    heroContent: "Piccolo Inc. ofrece una serie de servicios integrados que se ofrecen para ayudar a su empresa a crear y administrar una cadena de suministro que sea rentable, rápida, ágil, adaptable y alineada. Nuestras soluciones de gestión de transporte incluyen gestión de transporte de terceros, gestión de transporte urgente y servicios profesionales y financieros.",
    heroScroll: "Desplazarse hacia abajo",
    thirdTitle: "Gestión de Transporte de Terceros",
    thirdContent: "Nuestro modelo comercial de activos le permite responder rápidamente a las fluctuaciones a corto plazo en la oferta y la demanda, mantener un entorno de transporte flexible y alinear los objetivos de nuestros clientes con los de los transportistas, al tiempo que ayuda a los clientes a reducir los gastos de transporte en un 10% % Nuestros servicios incluyen:",
    thirdList: [
      "Análisis de la estrategia de transporte actual",
      "Embotellamiento y análisis de problemas",
      "Formulación de una estrategia de transporte óptima",
      "Selección de operador",
      "Gestión de operaciones de transporte",
      "Confirmación de recogida y entrega",
      "Servicio de auditoria y pago de carga"
    ],
    expressTitle: "Express Freight Management",
    expressContent: "Piccolo Express Freight Management brinda entrega confiable y de tiempo crítico de LTL y FTL a precios competitivos. Para programar un envío de Express Freight, envíe un correo electrónico a express@piccoloinc.com o llame al ",
    expressCTA: "Contáctenos"
  }

  lang = "en";
  content = this.en;

  syncLang() {
    if(document.getElementById('lang').innerHTML === "en") {
      this.content = this.en;
      this.lang = "en";
    } else {
      this.content = this.es;
      this.lang = "es";
    }
  }
  checkLang() {
    if(document.getElementById('lang').innerHTML != this.lang) {
      this.syncLang();
    }
  }

  constructor() { }

  ngOnInit() {
    var self = this;
    setInterval(
      function() {
        self.checkLang()
      }
    ,100);

    if($('.scroll-down').length) {
      $('.scroll-down').click(function() {
        $('html, body').animate(
          {scrollTop: $(window).height()}, 650,
          function (x, t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
            return -c/2 * ((t-=2)*t*t*t - 2) + b;
          });
      });
    }
  }

}
