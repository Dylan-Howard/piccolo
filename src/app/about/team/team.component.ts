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
      name:'Krisin Lobos',
      title:'Insert Title Here',
      number:'2707816021',
      publicNumber:'(270) 781-6021',
      email:'Krisin@piccoloinc.com'
    },
    {
      name:'Colby Cobb',
      title:'Insert Title Here',
      number:'2707813384',
      publicNumber:'(270) 781-3384',
      email:'Colby@piccoloinc.com'
    }
  ]

  en = {
    heroTitle: "Our Team",
    heroContent: "Our team at Piccolo Inc. is composed of highly skilled and well-trained people who desire to work well for the benefit of every party involved.",
    heroScroll: "Scroll Down"
  }

  es = {
    heroTitle: "Nuestros Equipo",
    heroContent: "Nuestro equipo de Piccolo Inc. está compuesto por personas altamente capacitadas y bien capacitadas que desean trabajar bien para el beneficio de cada una de las partes involucradas.",
    heroScroll: "Desplazarse hacia abajo"
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
