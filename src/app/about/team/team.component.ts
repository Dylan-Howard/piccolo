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
      name:'Krisin Lovos',
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
    }
  ]

  en = {
    heroTitle: "Our Team",
    heroContent: "Our team at Piccolo Inc. is composed of highly skilled and well-trained people who desire to work well for the benefit of every party involved. We are multi-lingual, speaking English, Madarin, Spanish, Serbian, Croatian, Bosnian.",
    heroScroll: "Scroll Down",
    ownerTitle: "About Our President",
    ownerMessage: "Senad Veletanlic, our president, helped establish Piccolo Inc. in 2005. Having completed various degree and certificate programs at respected institutions, he began with the vision of becoming one of the leading transportation service providers by completely satisfying the logistics management needs of our clients. If you need any business, sales, or realty, he personally invited you to contact him.",
    ownerNumber: "2707810000",
    ownerPublicNumber: "(270) 781-0000",
    ownerEmail: "senad@piccoloinc.com"
  }

  es = {
    heroTitle: "Nuestros Equipo",
    heroContent: "Nuestro equipo de Piccolo Inc. está compuesto por personas altamente capacitadas y bien capacitadas que desean trabajar bien para el beneficio de cada una de las partes involucradas.",
    heroScroll: "Desplazarse hacia abajo",
    ownerTitle: "Sobre Nuestro Presidente",
    ownerMessage: "Senad Veletanlic, nuestro presidente, ayudó a establecer Piccolo Inc. en 2005. Tras haber completado diversos programas de licenciatura y certificados en instituciones respetadas, comenzó con la visión de convertirse en uno de los proveedores de servicios de transporte líderes al satisfacer por completo las necesidades de gestión logística de nuestros clientes. Si necesita algún negocio, ventas o bienes raíces, él personalmente lo invitó a contactarlo.",
    ownerNumber: "2707810000",
    ownerPublicNumber: "(270) 781-0000",
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
