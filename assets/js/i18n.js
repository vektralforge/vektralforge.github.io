/* VektralForge — content translation (Eng / Esp)
   Scope: only human-readable copy swaps. Element attributes (href, id, class, data-*,
   hashtags/anchors) are never touched — innerHTML replacement only ever affects an
   element's children, never its own attributes. Code snippets, shell commands, license
   identifiers and brand/proper nouns are intentionally left identical in both languages.
   English is captured live from the authored DOM on first run, so it can never drift
   from the HTML; only the Spanish strings below are hand-maintained. */
(function () {
   "use strict";

   var ES = {
      "a11y.skip": "Saltar al contenido",

      "nav.platform": "Plataforma",
      "nav.architecture": "Arquitectura",
      "nav.sponsors": "Patrocinadores",
      "nav.docs": "Documentación",
      "nav.roadmap": "Roadmap",
      "nav.community": "Comunidad",
      "nav.githubBtn": "Ver en GitHub",

      "hero.badgePill": '<span class="dot" aria-hidden="true"></span>Código abierto · <span class="apache-mark"><i class="bi bi-feather" aria-hidden="true"></i>Apache 2.0</span> · <span class="badge-emph"><i class="bi bi-patch-check-fill" aria-hidden="true"></i>sin CLA</span>',
      "hero.h1": 'El lakehouse de datos de código abierto<br>con <span class="accent">Linaje incorporado</span>.',
      "hero.lede": "VektralForge integra Apache Airflow, Spark, Delta Lake, Trino y Superset en un solo stack desplegable, con linaje de datos de extremo a extremo vía OpenLineage y Marquez. Ejecútalo localmente con Docker Compose; despliégalo en producción con K3s.",
      "hero.cta": '<i class="bi bi-rocket-takeoff" aria-hidden="true"></i>Inicio rápido',

      "hero.trust.free": "100% gratis, por siempre",
      "hero.trust.selfhosted": "Autoalojable",
      "hero.trust.production": "Listo para producción",
      "hero.trust.flexible": "Configurable",

      "hero.diagram.yourData": "Tus datos",
      "hero.diagram.cloud": "Nube",
      "hero.diagram.k3s": "Se ejecuta en K3s",
      "hero.diagram.multicloud": "Listo para multicloud",
      "hero.diagram.usedFor": "Se usa para",
      "hero.flowCaption": "OpenLineage traza cada paso, desde tus datos hasta lo que tu equipo entrega.",

      "about.eyebrow": "Resumen",
      "about.h2": "¿Qué es VektralForge?",
      "about.p1": "VektralForge es una plataforma de lakehouse de datos de código abierto. Conecta las herramientas que la mayoría de los equipos de datos ya utiliza — orquestación, procesamiento distribuido, almacenamiento transaccional de tablas, consultas SQL y dashboards — en un solo stack que puedes ejecutar con un comando, en lugar de ensamblar y conectar cada pieza a mano.",
      "about.p2": "Cada pipeline se traza automáticamente: Proporcionando de dónde vinieron los datos, qué los transformó, cuándo, y dónde terminaron. El linaje de datos es una funcionalidad integrada, no un complemento que configuras después.",
      "about.p3": 'Ejecútalo localmente con Docker Compose para desarrollo, o despliégalo en un clúster de Kubernetes de producción con K3s. El proyecto está licenciado bajo <span class="apache-mark"><i class="bi bi-feather" aria-hidden="true"></i>Apache 2.0</span>, acepta contribuciones bajo un Developer Certificate of Origin en lugar de un CLA, y se gobierna de forma independiente de su patrocinador.',

      "arch.eyebrow": "Arquitectura",
      "arch.h2": "Arquitectura de la plataforma",
      "arch.lede": "Spark escribe, Trino lee. Las operaciones ACID sobre Delta Lake — <code>MERGE</code>, <code>UPDATE</code>, <code>DELETE</code>, <code>VACUUM</code> — se ejecutan a través de Spark; Trino te da SQL interactivo sobre las mismas tablas mediante Hive Metastore compartido, así que una tabla que escribe Spark es consultable desde Trino sin registrarla dos veces.",
      "arch.service.name": "Servicio",
      "arch.service.desc": "Orquestación con Airflow · Dashboards con Superset · Linaje con OpenLineage / Marquez",
      "arch.compute.name": "Cómputo",
      "arch.compute.desc": "Escritura con Spark (ACID) · Consultas con Trino · un Hive Metastore compartido",
      "arch.storage.name": "Almacenamiento",
      "arch.storage.desc": "Tablas Delta Lake sobre MinIO — funciona con cualquier backend compatible con S3",
      "arch.platform.name": "Plataforma",
      "arch.platform.desc": "Docker Compose para desarrollo local · K3s para producción",
      "arch.note": "Los datos avanzan por capas medallion — <code>raw</code> (respuesta de origen sin modificar), <code>bronze</code> (tablas Delta tipadas), <code>silver</code> (modelos limpios y deduplicados) y <code>gold</code> (agregados listos para dashboards).",

      "feat.eyebrow": "Funcionalidades",
      "feat.h2": "Todo lo que te da el stack",
      "feat.lede": "No es una lista de integraciones — es un stack funcional, con dos pipelines reales ya incluidos.",
      "feat.card1.h3": "Biblioteca de recursos",
      "feat.card1.p": "Conjunto de pipelines desarrollados por la comunidad listos para probar el stack y conocer sus capacidades.",
      "feat.card2.h3": "Linaje desde el origen hasta el dashboard",
      "feat.card2.p": "OpenLineage y Marquez capturan el linaje en cada paso automáticamente — no necesitas instrumentar manualmente tus DAGs ni tus jobs de Spark.",
      "feat.card3.h3": "Tablas lakehouse ACID",
      "feat.card3.p": "Delta Lake sobre MinIO* te da garantías transaccionales sobre almacenamiento de objetos — Spark escribe, Trino lee, un metastore compartido entre ambos.",
      "feat.card4.h3": "Paridad entre local y producción",
      "feat.card4.p": "El mismo stack que corre en tu laptop con Docker Compose es el que está diseñado para correr en producción con K3s — sin una arquitectura separada solo para desarrollo.",
      "feat.card5.h3": "Los secretos no entran al repositorio",
      "feat.card5.p": "Nada se distribuye hardcodeado. El desarrollo local usa un <code>.env</code> generado; la gestión de secretos en producción con OpenBao está en la hoja de ruta.",
      "feat.card6.h3": '<span class="apache-mark"><i class="bi bi-feather" aria-hidden="true"></i>Apache 2.0</span>, DCO, sin CLA',
      "feat.card6.p": "El copyright permanece distribuido entre cada colaborador. Relicenciar el proyecto requeriría consentimiento unánime — lo que hace que la promesa de código abierto sea estructural, no solo una intención declarada.",

      "spon.eyebrow": "Patrocinadores",
      "spon.h2": "Quienes hacen posible este proyecto comunitario",
      "spon.h4": '<i class="bi bi-award-fill" aria-hidden="true"></i>Patrocinador fundador — Aleph Server',
      "spon.p": "Consultora de infraestructura TI con sede en Chile, que creó VektralForge y financia su desarrollo continuo. El patrocinio compra visibilidad y gratitud — no compra un veto, un voto decisivo, ni un asiento reservado en el Comité Técnico Directivo.",
      "spon.badge.consulting": '<i class="bi bi-briefcase-fill" aria-hidden="true"></i>Consultoría',
      "spon.badge.support": '<i class="bi bi-headset" aria-hidden="true"></i>Soporte',
      "spon.badge.hosting": '<i class="bi bi-cloud-arrow-up-fill" aria-hidden="true"></i>Hosting en la nube',
      "spon.cta": "¿Interesado en patrocinar VektralForge? Escríbenos a",

      "doc.eyebrow": "Documentación",
      "doc.h2": "Aprende a usar el stack",
      "doc.lede": "Empieza aquí y profundiza tanto como necesites.",
      "doc.lab.h4": "Ejemplos fáciles para empezar",
      "doc.lab.p": "Descarga la biblioteca de ejemplos listos para usar y comienza con <code>make dev-load-example</code>.",
      "doc.guide.tag": '<i class="bi bi-github" aria-hidden="true"></i>Guía',
      "doc.guide.h4": "Arquitectura",
      "doc.guide.p": "Flujo de datos, distribución de servicios, CI/CD, dimensionamiento de hardware.",
      "doc.ref.tag": '<i class="bi bi-github" aria-hidden="true"></i>Referencia',
      "doc.ref.h4": "Cómo contribuir",
      "doc.ref.p": "Firma DCO, convenciones de código, flujo de pull requests.",
      "doc.policy.tag": '<i class="bi bi-github" aria-hidden="true"></i>Política',
      "doc.policy.h4": "Seguridad",
      "doc.policy.p": "Reporte privado de vulnerabilidades y cronograma de divulgación.",

      "qs.eyebrow": "Inicio rápido",
      "qs.h2": "Funcionando en menos de 5 minutos",
      "qs.lede": "Sin configuraciones complicadas ni nada que solicitar primero — clona el repositorio o descarga la imagen, ejecuta un comando, y el stack completo queda en funcionamiento.",
      "qs.console1.header": "Clonar desde GitHub",
      "qs.console1.cmt1": "# Genera las claves y solicita las contraseñas",
      "qs.console1.cmt2": "# Crea el .venv con Python 3.12",
      "qs.console1.cmt3": "# Levanta el stack",
      "qs.console2.cmt1": "# Descarga la imagen",
      "qs.console2.cmt2": "# Levanta el stack",

      "road.eyebrow": "Hoja de ruta",
      "road.h2": "Hacia dónde va el proyecto",
      "road.lede": "Las fechas dependen de la disponibilidad de los mantenedores — los issues del repositorio reflejan lo que realmente está en progreso.",
      "road.p1.status": "Lanzado",
      "road.p1.h4": "Fase 1 — Fundamentos",
      "road.p1.p": "Stack local, dos pipelines, linaje, CI, gobernanza.",
      "road.p2.status": "En progreso",
      "road.p2.h4": "Fase 2 — Producción",
      "road.p2.p": "Despliegue en K3s, secretos gestionados, streaming con Kafka.",
      "road.p3.status": "Planificado",
      "road.p3.h4": "Fase 3 — Madurez",
      "road.p3.p": "Validaciones de calidad de datos, métricas, control de acceso unificado.",
      "road.p4.status": "Exploración",
      "road.p4.h4": "Fase 4 — Exploración",
      "road.p4.p": "Consultas en lenguaje natural sobre el catálogo.",

      "comm.eyebrow": "Comunidad",
      "comm.h2": "Únete a la comunidad",
      "comm.card1.h4": "Contribuye",
      "comm.card1.p": "Abre un issue antes de cualquier cambio que vaya más allá de un typo o una corrección obvia. Los issues etiquetados <code>good first issue</code> son un buen punto de partida; cada commit necesita una firma DCO.",
      "comm.card1.link": '<i class="bi bi-github" aria-hidden="true"></i>Lee la guía de contribución →',
      "comm.card2.h4": "Pruébalo y danos tu feedback",
      "comm.card2.p": "Levanta el stack en pocos minutos y cuéntanos qué funcionó, qué no, y qué construirías después — el feedback temprano define la hoja de ruta.",
      "comm.card2.link": "Ir a Inicio rápido →",
      "comm.card3.h4": "Código de Conducta",
      "comm.card3.p": "VektralForge sigue el Contributor Covenant. Se espera que la participación en cada espacio del proyecto sea respetuosa y libre de acoso.",
      "comm.card3.link": '<i class="bi bi-github" aria-hidden="true"></i>Lee el Código de Conducta →',

      "foot.tagline": "Stack lakehouse de código abierto, con linaje incorporado.",
      "foot.projectHeader": "Proyecto",
      "foot.communityHeader": "Comunidad",
      "foot.apacheLicenseLink": '<i class="bi bi-feather" aria-hidden="true"></i>Licencia Apache 2.0',
      "foot.governanceLink": "Gobernanza",
      "foot.contributingLink": "Cómo contribuir",
      "foot.cocLink": "Código de Conducta",
      "foot.securityLink": "Política de Seguridad",
      "foot.campHeading": "Lleva VektralForge a tu organización",
      "foot.campP": "¿Te gustaría conversar sobre los beneficios de usar herramientas lakehouse de código abierto? Con gusto te ayudamos a difundirlo y presentar nuestro proyecto en tu organización.",
      "foot.sponsoredLine": 'Patrocinado por <a href="https://alephserver.cl" target="_blank" rel="noopener">Aleph Server</a> — financiado, no controlado.',
      "foot.disclaimer": "Kubernetes, K3s, GitHub, Docker, el logo de pluma de la Apache Software Foundation, LinkedIn, AWS, Microsoft Azure, Alibaba Cloud y Google Cloud, sus nombres e íconos, son marcas registradas de sus respectivos dueños. VektralForge no está afiliado, patrocinado ni respaldado por ninguno de ellos; se mencionan únicamente para indicar compatibilidad de plataforma, herramientas y servicios. Apache Airflow, Apache Spark, Delta Lake, Trino, MinIO, Superset, OpenLineage, Marquez y OpenBao son marcas de sus respectivos proyectos; sus nombres e íconos en esta página identifican los componentes de código abierto que integra VektralForge, no un respaldo de esos proyectos."
   };

   var EN = null; // captured live from the DOM on first run — always matches the authored HTML exactly

   function buildEnDict() {
      var dict = {};
      document.querySelectorAll("[data-i18n]").forEach(function (el) {
         dict[el.getAttribute("data-i18n")] = el.innerHTML;
      });
      return dict;
   }

   function applyLang(lang) {
      if (!EN) EN = buildEnDict();
      var dict = lang === "es" ? ES : EN;
      document.querySelectorAll("[data-i18n]").forEach(function (el) {
         var key = el.getAttribute("data-i18n");
         if (dict[key] !== undefined) el.innerHTML = dict[key];
      });
      document.documentElement.setAttribute("lang", lang === "es" ? "es" : "en");
      document.querySelectorAll(".lang-btn").forEach(function (btn) {
         var isActive = btn.getAttribute("data-lang-choice") === lang;
         btn.classList.toggle("is-active", isActive);
         btn.setAttribute("aria-current", isActive ? "true" : "false");
      });
   }

   function initI18n() {
      EN = buildEnDict();
      document.querySelectorAll(".lang-btn").forEach(function (btn) {
         btn.addEventListener("click", function () {
            applyLang(btn.getAttribute("data-lang-choice"));
         });
      });
      /* content always starts in English on load, regardless of browser locale or any prior visit */
      applyLang("en");
   }

   window.VF_I18N = { init: initI18n, apply: applyLang };
})();
