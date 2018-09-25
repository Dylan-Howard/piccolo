import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-principles',
  templateUrl: './principles.component.html',
  styleUrls: ['./principles.component.css']
})
export class PrinciplesComponent implements OnInit {

  en = {
    heroTitle: "Our Principles",
    heroSubtitle: "Customer Value and Satisfaction",
    heroContent: "Our asset-lite based business model allows us to provide reliable transportation solutions at competitive rates, thereby helping our clients to reduce distribution expenses and improve their economic performance. We strive to exceed client expectations in terms of reliability, quality, service and value. Our client-centered organizational culture enables us to provide superior client satisfaction and build lifelong relationships with our customers.",
    heroScroll: "Scroll Down",
    principles: [
      {
        title: "Employee Development",
        content: "We encourage entrepreneurship, professional development and additional training. Employee loyalty and excellent performance are rewarded with annual cash bonuses and company ownership."
      },
      {
        title: "Economic Performance",
        content: "We emphasize sustainable and profitable company growth that is financed with our internal resources. Our overall performance is measured in terms of income, cash flow, EVA, ROI, ROA, business growth, sales growth, employee productivity, customer satisfaction, and employee development."
      },
      {
        title: "Relationship Model",
        content: "We seek to establish long-term business relationships with our clients, thereby creating mutually beneficial cooperation. Our clients include retailers, general merchandise stores, manufacturers, distributors and wholesalers, among others. Management Model: We believe in intelligent, responsible and proactive management that sets clear goals, provides decisive leadership and executes strategy. Our managers combine professional and academic expertise with hard work and entrepreneurial spirit."
      },
      {
        title: "Management Model",
        content: "We believe in intelligent, responsible and proactive management that sets clear goals, provides decisive leadership and executes strategy. Our managers combine professional and academic expertise with hard work and entrepreneurial spirit."
      },
      {
        title: "Business Transparency",
        content: "Corporate integrity is the foundation of our success and our only source of sustainable competitive advantage. Our business is based on transparent business practices and highest levels of integrity in all relationships with our stakeholders."
      },
      {
        title: "Corporate Social Responsibility",
        content: "Our strategy and corporate purpose are aligned to improve the well-being of our stakeholders and the society. Our CSR is not just lip service, but rather a comprehensive CSR strategy with tangible results. We donate a certain percentage of our net profits to higher education, NGO and charities."
      }
    ]
  }

  es = {
    heroTitle: "Nuestros Principios",
    heroSubtitle: "Valor y Satisfacción del Cliente",
    heroContent: "Nuestro modelo de negocio basado en activos le permite ofrecer soluciones de transporte confiables a precios competitivos, ayudando así a nuestros clientes a reducir los gastos de distribución y mejorar su desempeño económico. Nos esforzamos por exceder las expectativas del cliente en términos de confiabilidad, calidad, servicio y valor. Nuestra cultura organizacional centrada en el cliente nos permite brindar una satisfacción superior al cliente y construir relaciones de por vida con nuestros clientes.",
    heroScroll: "Desplazarse hacia abajo",
    principles: [
      {
        title: "Desarrollo de Empleado",
        content: "Alentamos el espíritu empresarial, el desarrollo profesional y la capacitación adicional. La lealtad de los empleados y el excelente desempeño se recompensan con bonos anuales en efectivo y propiedad de la compañía."
      },
      {
        title: "Desempeño Económico",
        content: "Hacemos hincapié en el crecimiento empresarial sostenible y rentable que se financia con nuestros recursos internos. Nuestro rendimiento general se mide en términos de ingresos, flujo de efectivo, EVA, ROI, ROA, crecimiento del negocio, crecimiento de ventas, productividad de los empleados, satisfacción del cliente y desarrollo de los empleados."
      },
      {
        title: "Modelo de Relación",
        content: "Buscamos establecer relaciones comerciales a largo plazo con nuestros clientes, creando así una cooperación mutuamente beneficiosa. Nuestros clientes incluyen minoristas, tiendas de mercaderías en general, fabricantes, distribuidores y mayoristas, entre otros. Modelo de gestión: Creemos en una gestión inteligente, responsable y proactiva que establece objetivos claros, proporciona un liderazgo decisivo y ejecuta la estrategia. Nuestros gerentes combinan la experiencia profesional y académica con el trabajo duro y el espíritu emprendedor."
      },
      {
        title: "Modelo de Gestión",
        content: "Creemos en una gestión inteligente, responsable y proactiva que establece objetivos claros, proporciona un liderazgo decisivo y ejecuta la estrategia. Nuestros gerentes combinan la experiencia profesional y académica con el trabajo duro y el espíritu emprendedor."
      },
      {
        title: "Transparencia Empresarial",
        content: "La integridad corporativa es la base de nuestro éxito y nuestra única fuente de ventaja competitiva sostenible. Nuestro negocio se basa en prácticas comerciales transparentes y los más altos niveles de integridad en todas las relaciones con nuestros grupos de interés."
      },
      {
        title: "Responsabilidad Social Corporativa",
        content: "Nuestra estrategia y propósito corporativo están alineados para mejorar el bienestar de nuestros grupos de interés y la sociedad. Nuestra RSE no es solo un servicio de labios, sino una estrategia integral de RSC con resultados tangibles. Damos un cierto porcentaje de nuestras ganancias netas a la educación superior, ONG y organizaciones benéficas."
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
  }

}
