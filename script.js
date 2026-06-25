/**
 * =========================================================================
 * [JS] CONFIGURAÇÃO GLOBAL DA INTERFACE
 * =========================================================================
 */
document.addEventListener("DOMContentLoaded", () => {
    console.log("Giardino Segreto - Interface carregada com sucesso!");

    // Inicializa a escuta inteligente de rolagem de páginas
    inicializarEfeitoRevelacao();

    // Inicializa o controle dinâmico do alternador de tema
    inicializarModoEscuro();
});


/**
 * =========================================================================
 * [JS] MECANISMO DE ALTERNÂNCIA DE TEMA (DARK MODE) COM TROCA DE ÍCONE
 * =========================================================================
 */
function inicializarModoEscuro() {
    const botaoAlternador = document.getElementById("dark-mode-toggle");

    if (botaoAlternador) {
        botaoAlternador.addEventListener("click", () => {
            // Alterna a classe no body
            document.body.classList.toggle("dark-mode");
            
            // Troca dinâmica do ícone: se tem a classe, mostra o Sol; senão, a Lua
            if (document.body.classList.contains("dark-mode")) {
                botaoAlternador.textContent = "☀️";
            } else {
                botaoAlternador.textContent = "🌙";
            }
            
            console.log("Tema alternado e ícone atualizado!");
        });
    }
}


/**
 * =========================================================================
 * [JS] EFEITO DE REVELAÇÃO AO ROLAR A PÁGINA (SCROLL REVEAL)
 * =========================================================================
 */
function inicializarEfeitoRevelacao() {
    const secoesParaRevelar = document.querySelectorAll(".reveal-section");

    const opcoesDoObservador = {
        root: null,
        threshold: 0.15,
        rootMargin: "0px"
    };

    const observador = new IntersectionObserver((entradas, observador) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("active");
                observador.unobserve(entrada.target);
            }
        });
    }, opcoesDoObservador);

    secoesParaRevelar.forEach(secao => {
        observador.observe(secao);
    });
}