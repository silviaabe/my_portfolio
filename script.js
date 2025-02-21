// Função para mover os ícones para a esquerda
function moveIcons() {
  const wrapper = document.querySelector('.technologies--wrapper');
  const icons = document.querySelectorAll('.icon');
  
  // Move os ícones para a esquerda
  wrapper.style.transform = `translateX(-${icons[0].offsetWidth + 20}px)`; // Move pela largura do primeiro ícone + o espaçamento
  
  // Após a animação terminar, volta o primeiro ícone para o final da fila
  setTimeout(() => {
    wrapper.appendChild(icons[0]); // Move o primeiro ícone para o final da lista
    wrapper.style.transition = 'none'; // Desabilita a transição para a reposição
    wrapper.style.transform = 'translateX(0)'; // Restaura a posição inicial
    setTimeout(() => {
      wrapper.style.transition = 'transform 9s linear'; // Habilita novamente a transição
    }, 0);
  }, 500); // O tempo aqui deve ser igual ao da animação no CSS (1s)
}

// Executa a função de movimento a cada 2 segundos
setInterval(moveIcons, 500); // Ajuste o intervalo conforme necessário

// document.addEventListener("DOMContentLoaded", () => {
//   const sections = document.querySelectorAll("section");

//   const observer = new IntersectionObserver(entries => {
//       entries.forEach(entry => {
//           if (entry.isIntersecting) {
//               entry.target.classList.remove("hidden");
//           } else {
//               entry.target.classList.add("hidden");
//           }
//       });
//   }, { threshold: 0.3 });

//   sections.forEach(section => observer.observe(section));
// });

document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const windowHeight = window.innerHeight;

  sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const visibleRatio = Math.max(0, Math.min(1, (windowHeight - rect.top) / windowHeight));
      
      // Aplica opacidade baseada na visibilidade da seção
      section.style.opacity = visibleRatio;
  });
});

window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

function toggleMode() {
  const html = document.documentElement;
  
  // Alterna a classe entre 'light' e 'dark'
  if (html.classList.contains('light')) {
    html.classList.remove('light');
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
    html.classList.add('light');
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const projects = document.querySelectorAll('.grid-item');

  // Inicializa a opacidade e posição de cada projeto
  projects.forEach((project) => {
    project.style.opacity = '0';
    project.style.transform = 'translateY(50px)';
    project.style.transition = 'opacity 0.6s ease, transform 2s ease';

    // Efeito de hover
    project.addEventListener('mouseenter', () => {
      project.style.transform = 'scale(1.05)';
      project.style.filter = 'brightness(0.8)';
    });
    project.addEventListener('mouseleave', () => {
      project.style.transform = 'scale(1)';
      project.style.filter = 'brightness(1)';
    });
  });

  // Função para verificar se o elemento está visível próximo ao topo da página
  function isElementNearTop(el) {
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight * 0.7 && rect.bottom > 0;
  }

  // Função para animar os projetos em sequência
  function animateProjects() {
      let delay = 0;
      projects.forEach((project) => {
          if (isElementNearTop(project)) {
              setTimeout(() => {
                  project.style.opacity = '1';
                  project.style.transform = 'translateY(0)';
              }, delay);
              delay += 200; // Atraso entre as animações de cada projeto
          } else {
              // Volta à posição inicial se o elemento não estiver mais visível
              project.style.opacity = '0';
              project.style.transform = 'translateY(50px)';
          }
      });
  }

  // Event listeners
  window.addEventListener('scroll', animateProjects);
  window.addEventListener('resize', animateProjects);

  // Chama a animação inicial
  animateProjects();
});

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelector(".nav-links");
  const hamburger = document.querySelector(".hamburger");

  function toggleMenu() {
    navLinks.classList.toggle("active");
  }

  function closeMenu() {
    if (navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
    }
  }

  // Abre/fecha o menu ao clicar no hambúrguer
  hamburger.addEventListener("click", function (event) {
    event.stopPropagation(); // Evita que o clique no hambúrguer feche o menu imediatamente
    toggleMenu();
  });

  // Fecha o menu ao clicar fora dele
  document.addEventListener("click", function (event) {
    if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
      closeMenu();
    }
  });

  // Fecha o menu ao sair com o mouse
  navLinks.addEventListener("mouseleave", closeMenu);
});