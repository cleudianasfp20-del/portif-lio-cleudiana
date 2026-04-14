document.addEventListener('DOMContentLoaded', () => {
    // 1. Título em Movimento (Efeito de pulsação suave)
    const titulo = document.querySelector('.hero h1');
    titulo.style.transition = 'transform 0.5s ease-in-out';
    
    setInterval(() => {
        titulo.style.transform = titulo.style.transform === 'scale(1.1)' ? 'scale(1)' : 'scale(1.1)';
    }, 1000);
});

// Seu código original de formulário permanece aqui
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    if (nome && email) {
        alert(Obrigada pelo contato, ${nome}! Sua mensagem foi enviada com sucesso.);
        this.reset();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});