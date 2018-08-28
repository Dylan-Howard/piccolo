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
  title = 'app';

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

      /* Misc Functions */
      if($('a').length) {
        $('a').click(function() {
          $(document).scrollTop(0);
          $('.nav-links').removeClass('nav-open');
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
          $('.nav-links').toggleClass('nav-open');
        });
      }
    });
  }
}
