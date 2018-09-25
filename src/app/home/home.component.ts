import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  en = {
    heroTitle: "Supply Chain Problems, Supply Chain Solutions.",
    heroContent: "In the networked economy, the major supply chain imperative is collaboration and management of increasingly complex transportation networks and improvement of operational excellence.",
    heroCTA: "Contact Us",
    heroScroll: "Scroll Down",
    aboutTitle: "About Us",
    aboutContent: "Piccolo Inc. is a privately held transportation and logistics company. Piccolo Inc. provides timely, low-cost, and reliable transportation management services that help clients to manage an increasingly complex supply chain, reduce distribution expenses and enables them to focus on their core competencies.",
    aboutCTA: "Learn More",
    driversTitle: "Our Drivers",
    driversContent: "Piccolo Inc. is here to provide you with solutions to all your transportation and logistics needs. More resources for our drivers can be found by follwing the link below.",
    driversCTA: "See Resources",
  }

  es = {
    heroTitle: "Problemas de Cadena de Suministros? Soluciones.",
    heroContent: "En la economía en red, el imperativo principal de la cadena de suministro es la colaboración y la gestión de redes de transporte cada vez más complejas y la mejora de la excelencia operativa.",
    heroCTA: "Contáctenos",
    heroScroll: "Desplazarse hacia abajo",
    aboutTitle: "Sobre Nosotros",
    aboutContent: "Piccolo Inc. es una empresa privada de transporte y logística. Piccolo Inc. brinda servicios de administración de transporte oportunos, económicos y confiables que ayudan a los clientes a administrar una cadena de suministro cada vez más compleja, reducen los gastos de distribución y les permiten concentrarse en sus competencias principales.",
    aboutCTA: "Aprende Más",
    driversTitle: "Nuestros Conductores",
    driversContent: "Piccolo Inc. está aquí para brindarle soluciones a todas sus necesidades de transporte y logística. Para obtener más recursos para nuestros controladores, siga el enlace a continuación.",
    driversCTA: "Ver Recursos",
    contactTitle: "Contáctenos",
    contactContent: "Si tiene alguna pregunta, no dude en enviarnos un breve mensaje o llámenos."
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
  }

}
