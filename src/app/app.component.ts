import { Component } from '@angular/core';
import { fadeAnimation } from './animations';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation] // register the animation
})
export class AppComponent {

  en = {
    nav1: "About Us",
    nav2: "Drivers",
    nav3: "Services",
    nav4: "Contact Us",
    swap: "Ver en Español",
    footInfo1: "Daytime Phone",
    footInfo2: "After Hours Phone",
    footInfo3: "Fax",
    footAbout1: "About Us",
    footAbout2: "Our History",
    footAbout3: "Our Services",
    footDrivers1: "Drivers",
    footDrivers2: "Safety Resources",
    footCTA1: "Contact Us",
    footCTA2: "Apply Now"
  }

  es = {
    nav1: "Sobre Nosotros",
    nav2: "Conductores",
    nav3: "Servicios",
    nav4: "Contáctenos",
    swap: "View in English",
    footInfo1: "Teléfono del día",
    footInfo2: "Teléfono de la noche",
    footInfo3: "Fax",
    footAbout1: "Sobre Nosotros",
    footAbout2: "Nuestra Historia",
    footAbout3: "Nuestros Servicios",
    footDrivers1: "Conductores",
    footDrivers2: "Recursos de Seguridad",
    footCTA1: "Contáctenos",
    footCTA2: "Aplica Ya"
  }

  content = this.en;
  lang = "en";

  toggleLang() {
    if(document.getElementById('lang').innerHTML === "en") {
      document.getElementById('lang').innerHTML = "es";
    } else {
      document.getElementById('lang').innerHTML = "en";
    }
  }
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

  ngOnInit() {
    $(document).ready(function(){
      /* Scroll Animations */
      // Collapse Navbar
      var navbarCollapse = function() {
        if($(window).width() > 468) {
          var ceiling = $(window).height()*.7 ;
          if($("#mainNav").offset().top > ceiling) {
            $("#mainNav").addClass("navbar-shrink");
          } else {
            $("#mainNav").removeClass("navbar-shrink");
          }
        }
      };

      // Scroll Reveal
      var scrollReveal = function() {
        $(".sr-card").each(function() {
          if($(this).offset().top-$(this).height() < $(document).scrollTop()+50) {
            $(this).addClass('sr-show');
          }
        });
      };

      // Calls every 10ms
      setInterval(function() { navbarCollapse(); scrollReveal(); }, 100);

      setInterval(function() {
        // console.log(document.getElementById('lang').innerHTML);
      },1000);

      /* Misc Functions */
      if($('a').length) {
        $('a').click(function() {
          $(document).scrollTop(0);
          $('.nav-links-wrapper').removeClass('nav-open');
        });
      }
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
      if($('.nav-btn').length) {
        $('.nav-btn').click(function(el) {
          $('.nav-links-wrapper').toggleClass('nav-open');
        });
      }
    });
  }
}
