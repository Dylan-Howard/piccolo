import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {

  en = {
    heroTitle: "Our Drivers",
    heroContent: "Our drivers are an important part of our team at Piccolo inc. We want to do everything we can to help them succeed.",
    heroCTA: "Contact Us",
    heroScroll: "Scroll Down",
    questionsTitle: "Have Questions?",
    questionsContent: "If you have any questions, we've answered some frequently asked questions, but you may always call us at ",
    questionsCTA: "See Questions",
    safetyTitle: "Safety Resources",
    safetyContent: "Below, you'll find important documents to consider concerning the safety guidelines of Piccolo Inc.",
    safetyLinks: [
      {
        title: "CSA - Compliance, Safety, Accountability for CMV Drivers manual",
        link: "#"
      },
      {
        title: "Interstate Truck Driver's Guide to Hours of Service",
        link: "#"
      },
      {
        title: "CSA compliance letter",
        link: "#"
      },
      {
        title: "Disciplinary procedures for D.O.T",
        link: "#"
      },
      {
        title: "Drivers Handbook",
        link: "#"
      }
    ]
  }

  es = {
    heroTitle: "Nuestros Conductores",
    heroContent: "Nuestros conductores son una parte importante de nuestro equipo en Piccolo inc. Queremos hacer todo lo que podamos para ayudarlos a tener éxito.",
    heroCTA: "Contáctenos",
    heroScroll: "Desplazarse hacia abajo",
    questionsTitle: "¿Tener Preguntas?",
    questionsContent: `Si tiene alguna pregunta, hemos respondido algunas preguntas frecuentes, pero siempre puedes llamarnos a `,
    questionsCTA: "Ver Preguntas",
    safetyTitle: "Recursos de Seguridad",
    safetyContent: "A continuación, encontrará documentos importantes a considerar sobre las pautas de seguridad de Piccolo Inc.",
    safetyLinks: [
      {
        title: "CSA - Compliance, Safety, Accountability for CMV Drivers manual",
        link: "#"
      },
      {
        title: "Interstate Truck Driver's Guide to Hours of Service",
        link: "#"
      },
      {
        title: "CSA compliance letter",
        link: "#"
      },
      {
        title: "Disciplinary procedures for D.O.T",
        link: "#"
      },
      {
        title: "Drivers Handbook",
        link: "#"
      }
    ]
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
