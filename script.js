function restoreColor(element) {
    element.style.filter = "none";
}

function dimColor(element) {
    if (element.classList.contains("past")) {
        element.style.filter = "grayscale(100% )";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const captionText = document.getElementById('caption');
    const closeBtn = document.getElementById('closeModal');

    // Adiciona evento de clique para todas as imagens
    document.querySelectorAll('.date img').forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImg.src = img.src;
            captionText.innerText = img.alt; // Usa o atributo alt como legenda
        });
    });

    // Fecha o modal ao clicar no botão de fechar
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Fecha o modal ao clicar fora da imagem
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});

document.querySelectorAll('.date img').forEach(img => {
    img.addEventListener('click', () => console.log(`Clicou em: ${img.alt}`));
});

const frases = [
    "Cada momento com você é especial 💕",
    "Nosso amor em cada date 🌙",
    "Mal posso esperar pelo próximo 💖",
];
document.querySelector("header").insertAdjacentHTML("beforeend",
    `<p>${frases[Math.floor(Math.random() * frases.length)]}</p>`);



    const feitos = document.querySelectorAll(".date.feito").length;
document.querySelector("header").insertAdjacentHTML("beforeend", 
    `<p>Já vivemos ${feitos} momentos incríveis juntos! ✨</p>`);


    document.querySelectorAll('.date img').forEach(img => {
        img.addEventListener('click', () => {
            const card = img.closest('.date');
            card.classList.add('clicked');
            setTimeout(() => card.classList.remove('clicked'), 400);
        });
    });
    
    document.getElementById('enter-btn').addEventListener('click', () => {
        const intro = document.getElementById('intro-screen');
        intro.style.opacity = 0;
        setTimeout(() => {
            intro.style.display = 'none';
        }, 600);
    });

    
    const memorias = [ 
        { img: "img/luau.jpg", legenda: "Nosso luau sob as estrelas 💙" },
        { img: "img/acai.jpg", legenda: "O açaí mais doce que já tomamos 🍧" },
        { img: "img/tempo_qualidade.jpg", legenda: "Só nós e o tempo 💫" },
        { img: "img/sabadinho.jpg", legenda: "Um sábado de samba, sorrisos e sintonia 🎶" },
        { img: "img/Superfaturado.jpg", legenda: "Nosso primeiro date — até o café caro valeu cada segundo ☕💙" },
        { img: "img/volei.jpg", legenda: "Entre risadas e manchetes, um dia com os amigos 🏐💛" },
        { img: "img/ph.jpg", legenda: "A balada ficou pequena perto do brilho do teu sorriso 💃✨" },
        { img: "img/bosque.jpg", legenda: "Ar livre, natureza e nós dois... perfeito 🌳🫶" },
        { img: "img/sky.jpg", legenda: "A cidade embaixo, você ao lado e o coração nas nuvens 🌌🎧" },
        { img: "img/stelar.jpg", legenda: "Te ver assistindo meu filme favorito foi como ver as estrelas alinhadas 💫🎬" },
        { img: "img/niver_dreza.jpg", legenda: "O dia foi seu, mas o presente sou eu que ganhei 🎂💙" },
        { img: "img/natal.jpg", legenda: "Nosso primeiro Natal juntos — e o melhor presente foi ter você 🎄🫶" },
        { img: "img/lagoa.jpg", legenda: "A cidade brilhava, mas quem iluminava tudo era você ✨🌃" },
        { img: "img/nov.jpg", legenda: "Ali, sob as luzes de fim de ano, meu pedido virou nosso sim 💍🎇" },
        { img: "img/Lovina.jpg", legenda: "Matuê tocando, a vibe insana e eu só pensando em você no Lovina 🎤🔥" }
    ];
    
    document.getElementById("memoria-btn").addEventListener("click", () => {
        const m = memorias[Math.floor(Math.random() * memorias.length)];
        document.getElementById("memoria-img").src = m.img;
        document.getElementById("memoria-legenda").innerText = m.legenda;
        document.getElementById("memoria-box").style.display = "block";
    });
    