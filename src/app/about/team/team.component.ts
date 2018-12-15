import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  teamInfo = [
    {
      name:'Tamara Robledo',
      title:'Insert Title Here',
      number:'2707819163',
      publicNumber:'(270) 781-9163',
      email:'tamara@piccoloinc.com'
    },
    {
      name:'You Han',
      title:'Insert Title Here',
      number:'2707810499',
      publicNumber:'(270) 781-0499',
      email:'accounting@piccoloinc.com'
    },
    {
      name:'Kirsten Wilson',
      title:'Insert Title Here',
      number:'2707812672',
      publicNumber:'(270) 781-2672',
      email:'Kirsten@piccoloinc.com'
    },
    {
      name:'Darko Grgic',
      title:'Insert Title Here',
      number:'2707816046',
      publicNumber:'(270) 781-6046',
      email:'Darko@piccoloinc.com'
    },
    {
      name:'Kristin Lovos',
      title:'Insert Title Here',
      number:'2707816021',
      publicNumber:'(270) 781-6021',
      email:'Klovos@piccoloinc.com'
    },
    {
      name:'Erica Murillo',
      title:'Insert Title Here',
      number:'2707817848',
      publicNumber:'(270) 781-7848',
      email:'erica@piccoloinc.com'
    },
    {
      name:'Priscilla Herrera',
      title:'Insert Title Here',
      number:'2708463384',
      publicNumber:'(270) 846-3384',
      email:'priscilla@piccoloinc.com'
    },
    {
      name:'Liz Benitez (Louisville office)',
      title:'Insert Title Here',
      number:'2707817848',
      publicNumber:'5027854731',
      email:'liz@piccoloinc.com'
    }
  ]

  en = {
    heroTitle: "Our Team",
    heroContent: "Our team at Piccolo Inc. is composed of highly skilled and well-trained people who desire to work well for the benefit of every party involved. We are multi-lingual, speaking English, Madarin, Spanish, Serbian, Croatian, Bosnian.",
    heroScroll: "Scroll Down",
    ownerTitle: "About Our President",
    ownerMessage: "Our president, Senad Veletanlic, established Piccolo Inc. in 2005. He desired to be a leading transportation-service provider by focusing customer satisfaction. Please feel free to contact him for any business needs.",
    ownerWebsiteMessage: "For interests in realty, see ",
    ownerWebsiteLink: "https://senadveletanlic.exprealty.com/",
    ownerOfficeNumber: "2709918219",
    ownerPublicOfficeNumber: "(270) 991-8219",
    ownerEmail: "senad@piccoloinc.com"
  }

  es = {
    heroTitle: "Nuestros Equipo",
    heroContent: "Nuestro equipo de Piccolo Inc. está compuesto por personas altamente capacitadas y bien capacitadas que desean trabajar bien para el beneficio de cada una de las partes involucradas.",
    heroScroll: "Desplazarse hacia abajo",
    ownerTitle: "Sobre Nuestro Presidente",
    ownerMessage: "Nuestro presidente, Senad Veletanlic, fundó Piccolo Inc. en 2005. Deseaba ser un proveedor líder de servicios de transporte enfocando la satisfacción del cliente. Por favor, siéntase libre de contactarlo para cualquier necesidad comercial.",
    ownerWebsiteMessage: "Para intereses en bienes raíces, ver ",
    ownerWebsiteLink: "https://senadveletanlic.exprealty.com/",
    ownerOfficeNumber: "2709918219",
    ownerPublicOfficeNumber: "(270) 991-8219",
    ownerEmail: "senad@piccoloinc.com"
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
