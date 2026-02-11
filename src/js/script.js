// Espera o site carregar completamente
document.addEventListener("DOMContentLoaded", () => {
    
    // Configura o "observador"
    const observador = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Se o item aparecer na tela...
            if (entry.isIntersecting) {
                // Adicionamos um estilo direto para ele surgir
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    });

    // Seleciona todos os itens que devem surgir
    const itens = document.querySelectorAll('.product-card');
    
    itens.forEach(item => {
        // Estado inicial (escondido e um pouco abaixo)
        item.style.opacity = "0";
        item.style.transform = "translateY(20px)";
        item.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        
        // Começa a observar o item
        observador.observe(item);
    });
    document.addEventListener("DOMContentLoaded", () => {
    const opcoes = {
        threshold: 0.2 // O item precisa estar 20% visível para disparar
    };

    const observador = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Aplicamos o efeito de surgimento
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, opcoes);

    // Selecionamos os cards e também os títulos das seções
    const elementosParaAnimar = document.querySelectorAll('.product-card, .card-name, .tech-item');

    elementosParaAnimar.forEach(el => {
        // Estado inicial "escondido"
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.6s ease-out";
        
        observador.observe(el);
    });
});
    
});