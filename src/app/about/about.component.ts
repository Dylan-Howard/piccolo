import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  en = {
    heroTitle: "Our History",
    heroContent: "Piccolo Inc. is a privately held transportation and logistics company established in 2005 by two MBA graduates. From our beginning, Piccolo Inc. has worked to provide timely, low-cost, and reliable transportation management services. We strive to help our clients manage an increasingly complex supply chain, reduce distribution expenses, and enable them to focus on their core competencies.",
    heroScroll: "Scroll Down",
    principlesTitle: "Our Principles",
    principlesContent: "Piccolo Inc. was intentionally founded on guiding principles that we still hold value today. These include Customer Value and Satisfaction, Employee Development, Economic Performance, a Relationship Model, Business Transparency, and Corporate Social Responsibility.",
    principlesCTA: "Learn More",
    teamTitle: "Our Team",
    teamContent: "Our team at Piccolo Inc. is composed of highly skilled and well-trained people who desire to work well for the benefit of every party involved.",
    teamCTA: "See Our Team"
  }

  es = {
    heroTitle: "Nuestra Historia",
    heroContent: "Piccolo Inc. es una empresa privada de transporte y logística establecida en 2005 por dos graduados de MBA. Desde nuestros comienzos, Piccolo Inc. ha trabajado para brindar servicios de administración de transporte oportunos, de bajo costo y confiables. Nos esforzamos por ayudar a nuestros clientes a gestionar una cadena de suministro cada vez más compleja, reducir los gastos de distribución y permitirles centrarse en sus competencias principales.",
    heroScroll: "Desplazarse hacia abajo",
    principlesTitle: "Nuestros principios",
    principlesContent: "Piccolo Inc. se fundó intencionalmente sobre principios rectores que todavía tenemos valor hoy. Estos incluyen Valor y Satisfacción del Cliente, Desarrollo del Empleado, Desempeño Económico, un Modelo de Relación, Transparencia Empresarial y Responsabilidad Social Corporativa.",
    principlesCTA: "Aprende Más",
    teamTitle: "Nuestro Equipo",
    teamContent: "Nuestro equipo de Piccolo Inc. está compuesto por personas altamente capacitadas y bien capacitadas que desean trabajar bien para el beneficio de cada una de las partes involucradas.",
    teamCTA: "Ver Nuestro Equipo"
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
