window.addEventListener("scroll", function () {
      const bg = document.querySelector(".contacto__imagen-parallax");
      if (!bg) return;
      const velocidad = 0.3;
      const offset = window.scrollY * velocidad;
      bg.style.transform = `translateY(${offset}px)`;
    });