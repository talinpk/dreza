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
