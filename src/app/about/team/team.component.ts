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
    heroContent: "Our team at Piccolo Inc. is composed of highly skilled and well-trained people who desire to work well for the benefit of every party involved. We are multi-lingual, speaking English, Mandarin, Spanish, Serbian, Croatian, Bosnian.",
    heroScroll: "Scroll Down",
    ownerTitle: "About Our President",
    ownerMessage1: "Senad Veletanlic is the president and founder of Piccolo Inc. Senad has completed several degrees and certifications including a bachelor’s degree and his MBA at Western Kentucky University, as well as a Certificate of Business Excellence from Vanderbilt University.",
    ownerMessage2: "Senad founded his company in 2002. In 2005, Piccolo Inc was transformed to a logistics company, with the goal of becoming a leading transportation service provider in South Central Kentucky. After being in this field for the last 13 years, Senad has achieved this goal by satisfying the challenging logistics and supply chain management needs of many customers. Senad is proud that Piccolo Inc. has stayed steady and reliable contributor to an increasingly competitive and ever changing industry.",
    ownerMessage3: "Senad not only has a career in logistics, but is also an established realtor, experienced with both commercial and residential real estate. He is licensed in the states of Kentucky and Florida, qualified to handle any real estate needs, big or small. If you have any needs in logistics, real estate, or sales, Senad welcomes you to contact him by email, phone, or visiting his real estate website directly, listed below:",
    ownerEmail: "senad@piccoloinc.com",
    ownerOfficeNumber: "2709918219",
    ownerPublicOfficeNumber: "(270) 991-8219",
    ownerWebsiteLink: "https://senadveletanlic.exprealty.com/"
  }

  es = {
    heroTitle: "Nuestros Equipo",
    heroContent: "Nuestro equipo de Piccolo Inc. está compuesto por personas altamente capacitadas y bien capacitadas que desean trabajar bien para el beneficio de cada una de las partes involucradas.",
    heroScroll: "Desplazarse hacia abajo",
    ownerTitle: "Sobre Nuestro Presidente",
    ownerMessage1: "Senad Veletanlic es el presidente y fundador de Piccolo Inc. Senad ha completado varios títulos y certificaciones, incluida una licenciatura y su MBA en Western Kentucky University, así como un Certificado de Excelencia Empresarial de Vanderbilt University.",
    ownerMessage2: "Senad fundó su empresa en 2002. En 2005, Piccolo Inc se transformó en una empresa de logística, con el objetivo de convertirse en un proveedor líder de servicios de transporte en el centro sur de Kentucky. Después de estar en este campo durante los últimos 13 años, Senad ha logrado este objetivo al satisfacer las desafiantes necesidades de logística y gestión de la cadena de suministro de muchos clientes. Senad se enorgullece de que Piccolo Inc. se haya mantenido estable y contribuya de manera confiable a una industria cada vez más competitiva y en constante cambio.",
    ownerMessage3: "Senad no solo tiene una carrera en logística, sino que también es un agente inmobiliario establecido, con experiencia en bienes raíces comerciales y residenciales. Tiene licencia en los estados de Kentucky y Florida, calificado para manejar cualquier necesidad de bienes raíces, grande o pequeña. Si tiene alguna necesidad en logística, bienes raíces o ventas, Senad lo invita a contactarlo por correo electrónico, teléfono o visitando directamente su sitio web de bienes raíces, que se enumeran a continuación:",
    ownerEmail: "senad@piccoloinc.com",
    ownerOfficeNumber: "2709918219",
    ownerPublicOfficeNumber: "(270) 991-8219",
    ownerWebsiteLink: "https://senadveletanlic.exprealty.com/"
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
