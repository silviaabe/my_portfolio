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