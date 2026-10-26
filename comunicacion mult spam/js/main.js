/**
 * SPAM — JavaScript liviano para funciones esenciales
 * Menú responsive, fecha automática, sticky header con logo dinámico y ficha interactiva de integrantes con notas reales
 */

// Base de datos de los 5 integrantes del equipo con sus firmas periodísticas reales
const TEAM_MEMBERS = {
  valencolucci: {
    name: "Valentina Colucci",
    role: "Editora de Lore Semanal & Conducción // Cultura Pop",
    photo: "img/valentina-colucci.jpeg",
    instagram: "@valencolucci_",
    instagramUrl: "https://www.instagram.com/valencolucci_",
    contents: [
      {
        tag: "Lore Semanal // Música & Nostalgia Pop",
        title: "De Bandana a Emilia: ¿quién tiene derecho a reinventar el pop de los 2000?",
        desc: "Una versión solista de “Maldita noche” reavivó tensiones y abrió la discusión sobre homenaje, autoría moral y nostalgia pop en la era de TikTok.",
        url: "notas/de-bandana-a-emilia.html"
      },
      {
        tag: "Lore Semanal // Misterios Urbanos & Archivo",
        title: "París bajo tierra: el misterio de las catacumbas que esconden millones de historias",
        desc: "A veinte metros bajo las calles de París, un laberinto con seis millones de restos humanos y siglos de historia y enigmas subterráneos.",
        url: "notas/paris-bajo-tierra.html"
      },
      {
        tag: "Nota de Portada // Rock Nacional",
        title: "De banda adolescente a llenar River: cómo Airbag desafió los prejuicios del rock argentino",
        desc: "Análisis periodístico de cómo la banda de los hermanos Sardelli superó las etiquetas de la industria, llenó el Monumental y redefinió las fronteras del rock.",
        url: "notas/como-airbag-desafio-los-prejuicios.html"
      },
      {
        tag: "Lore Semanal // Cultura Pop",
        title: "Michael Jackson: entre el mito, los mensajes ocultos y las teorías que nunca dejaron de crecer",
        desc: "Investigación sobre por qué las teorías conspirativas, supuestos mensajes subliminales y misterios corporales sobre el Rey del Pop continúan multiplicándose en internet.",
        url: "notas/michael-jackson.html"
      }
    ]
  },
  aymapereyra: {
    name: "Aymara Pereyra",
    role: "Editora de Detrás de lo Viral // Tech & Sociedad",
    photo: "img/aymara-pereyra.jpeg",
    instagram: "@aymapereyra_",
    instagramUrl: "https://www.instagram.com/aymapereyra_",
    contents: [
      {
        tag: "Detrás de lo Viral // Sociedad Digital & Hostigamiento",
        title: "Cuando la obsesión atraviesa la pantalla: el caso de La Reini y el límite de las redes",
        desc: "El hostigamiento sistemático a Sofía Gonet expone las conductas parasociales extremas y la falta de respuestas legales rápidas frente al ciberacoso.",
        url: "notas/cuando-la-obsesion-atraviesa-la-pantalla.html"
      },
      {
        tag: "Detrás de lo Viral // Debate Ambiental & Salud",
        title: "El sabor amargo del mate: ¿qué pasa cuando la infusión nacional se carga con veneno?",
        desc: "La derogación de la prohibición del glifosato en Misiones encendió el debate sobre los agrotóxicos en la producción yerbatera y la salud colectiva.",
        url: "notas/el-sabor-amargo-del-mate.html"
      },
      {
        tag: "Detrás de lo Viral // Memoria Digital",
        title: "El 11-S en la era del like: el día que las Torres Gemelas volvieron a aparecer en pantalla",
        desc: "El espectáculo visual de tres mil drones en Nueva York que reavivó el debate ético: ¿dónde termina la memoria histórica y dónde empieza el algoritmo de TikTok?",
        url: "notas/11-de-septiembre.html"
      },
      {
        tag: "Fuera de Juego // Comunidad & Salud",
        title: "El fenómeno rosa: la movilización que rompe tabúes y salva vidas en Rosario",
        desc: "Más allá del impacto visual en redes sociales, la Caminata Rosa financia mamografías gratuitas y promueve la detección temprana del cáncer de mama.",
        url: "notas/el-fenomeno-rosa.html"
      }
    ]
  },
  piluteres: {
    name: "Pilar Teres",
    role: "Editora de Spam Update // Novedades & Y2K",
    photo: "img/pilar-teres.jpeg",
    instagram: "@piluteres",
    instagramUrl: "https://www.instagram.com/piluteres",
    contents: [
      {
        tag: "Spam Update // Tecnología & Gadgets",
        title: "¿Te quedaste sin batería? Así podés cargar un iPhone con otro",
        desc: "La función poco conocida de transferencia energética por USB-C entre celulares Apple para resolver emergencias sin necesidad de un enchufe.",
        url: "notas/bateria-spam.html"
      },
      {
        tag: "Spam Update // Inteligencia Artificial",
        title: "Mago, la IA que quiere convertir a Mercado Pago en un asistente personal",
        desc: "El relanzamiento del asistente de Mercado Pago con más de 100 funciones: lenguaje natural para analizar gastos, pagar la tarjeta y detectar fraudes.",
        url: "notas/mago-ia-de-mercado-pago.html"
      },
      {
        tag: "Lore Semanal // Moda & Y2K",
        title: "El regreso del brillo: la moda de los 2000 que vuelve a todo con el furor del bedazzling",
        desc: "El regreso de los cristales, el strass y los tracksuits de Juicy Couture que marcaron los primeros años del siglo impulsados por TikTok.",
        url: "notas/el-regreso-del-brillo.html"
      }
    ]
  },
  delfinagalvan: {
    name: "Delfina Galván",
    role: "Editora de Detrás de lo Viral // Algoritmos & IA",
    photo: "img/delfina-galvan.jpeg",
    instagram: "@delfinaa.galvan",
    instagramUrl: "https://www.instagram.com/delfinaa.galvan",
    contents: [
      {
        tag: "Detrás de lo Viral // Ficción IA & Tendencias",
        title: "Cocardo y el misterio de las frutinovelas: cómo una parodia animada conquistó TikTok",
        desc: "Telenovelas de frutas humanizadas hechas con IA, una heladería clandestina y el enigma tras la suspensión de la cuenta @frutasalocadas.",
        url: "notas/cocardo-y-el-misterio-de-las-frutinovelas.html"
      },
      {
        tag: "Detrás de lo Viral // Inteligencia Artificial & Contenidos",
        title: "Viral: De una foto a un video viral, la IA permite hacer lo que nunca grabaste",
        desc: "De gatos que bailan a Maradona promocionando apuestas: cómo el motion transfer transforma imágenes en videos y abre debates sobre el consentimiento.",
        url: "notas/videos-virales-creados-con-ia.html"
      },
      {
        tag: "Detrás de lo Viral // Cultura Pop",
        title: "El impacto de las flores amarillas el 21 de septiembre: de Floricienta al fenómeno comercial",
        desc: "Cómo una ficción juvenil de Cris Morena de 2004 fue recuperada por el algoritmo de TikTok dos décadas después y convertida en ritual masivo.",
        url: "notas/las-flores-amarillas.html"
      }
    ]
  },
  agustinsanchez: {
    name: "Agustín Sánchez",
    role: "Editor General & Fuera de Juego // Deportes & Esports",
    photo: "img/agustin-sanchez.jpeg",
    instagram: "@_agussanchez89",
    instagramUrl: "https://www.instagram.com/_agussanchez89",
    contents: [
      {
        tag: "Spam Update / Fuera de Juego // Gaming & Esports",
        title: "Del joystick al podio: los esports hicieron historia en los Juegos Sudamericanos",
        desc: "Rosario fue escenario del debut de los deportes electrónicos en el medallero oficial con competencias internacionales y cuatro medallas para Argentina.",
        url: "notas/esports-spam.html"
      },
      {
        tag: "Fuera de Juego // Deportes & Redes",
        title: "El cruce entre deporte, memes y transmisiones en vivo",
        desc: "Análisis de cómo las nuevas plataformas de streaming alternativo transformaron la cobertura de los grandes eventos deportivos y los códigos de las comunidades online."
      },
      {
        tag: "Streaming SPAM // Conducción & Mesa Técnica",
        title: "Mesa técnica y transmisión del streaming semanal",
        desc: "Puesta en escena, debates en vivo y distribución de contenidos para YouTube Shorts e Instagram Reels."
      }
    ]
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // 1. Menú móvil responsive
  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", !isExpanded);
      mainNav.classList.toggle("is-open");
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && mainNav.classList.contains("is-open")) {
        mainNav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.focus();
      }
    });
  }

  // 2. Fecha automática en español
  const dateElement = document.getElementById("live-date");
  if (dateElement) {
    const today = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const formattedDate = today.toLocaleDateString("es-AR", options);
    dateElement.textContent = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  }

  // 3. Modal interactivo de integrantes y sus contenidos/notas
  const modalOverlay = document.getElementById("member-modal-overlay");
  const modalCloseBtn = document.getElementById("member-modal-close");
  const teamCards = document.querySelectorAll("[data-member-id]");

  if (modalOverlay) {
    function openMemberModal(memberKey) {
      const data = TEAM_MEMBERS[memberKey];
      if (!data) return;

      const photoEl = document.getElementById("modal-member-photo");
      const nameEl = document.getElementById("modal-member-name");
      const roleEl = document.getElementById("modal-member-role");
      const instaEl = document.getElementById("modal-member-insta");
      const contentListEl = document.getElementById("modal-member-contents");

      if (photoEl) {
        photoEl.src = data.photo;
        photoEl.alt = "Foto de " + data.name;
      }
      if (nameEl) nameEl.textContent = data.name;
      if (roleEl) roleEl.textContent = data.role;
      if (instaEl) {
        instaEl.textContent = data.instagram;
        instaEl.href = data.instagramUrl;
      }

      if (contentListEl) {
        contentListEl.innerHTML = data.contents.map(item => `
          <div class="member-content-card">
            <span class="member-content-card__tag">${item.tag}</span>
            <h4 class="member-content-card__title">
              ${item.url ? `<a href="${item.url}" style="color: inherit; text-decoration: none;">${item.title} &rarr;</a>` : item.title}
            </h4>
            <p class="member-content-card__desc">${item.desc}</p>
            ${item.url ? `<p style="margin-top: 10px;"><a href="${item.url}" style="color: var(--color-yellow); font-weight: 700; text-decoration: underline; font-size: 0.9rem;">Leer nota completa &rarr;</a></p>` : ''}
          </div>
        `).join("");
      }

      modalOverlay.classList.add("is-active");
      document.body.style.overflow = "hidden"; // Evitar scroll del fondo
    }

    function closeMemberModal() {
      modalOverlay.classList.remove("is-active");
      document.body.style.overflow = "";
    }

    teamCards.forEach(card => {
      card.addEventListener("click", (e) => {
        // Si hicieron clic directo en el link de Instagram, dejamos que abra la red social
        if (e.target.closest(".team-card__instagram")) return;

        const memberId = card.getAttribute("data-member-id");
        openMemberModal(memberId);
      });
    });

    if (modalCloseBtn) {
      modalCloseBtn.addEventListener("click", closeMemberModal);
    }

    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) {
        closeMemberModal();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modalOverlay.classList.contains("is-active")) {
        closeMemberModal();
      }
    });
  }

  // 4. Achicar el logo dinámicamente al scrollear hacia abajo (Sticky Header)
  const siteHeader = document.querySelector(".site-header");
  if (siteHeader) {
    const handleScroll = () => {
      if (window.scrollY > 35) {
        siteHeader.classList.add("is-scrolled");
      } else {
        siteHeader.classList.remove("is-scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Comprobar posición inicial al cargar
  }
});
