document.getElementById("explosionButton").addEventListener("click", () => {
    // Exibir a mensagem "Ai que gostoso"
    const message = document.getElementById("message");
    message.textContent = "Ai que gostoso!";
    message.style.display = "block"; // Mostrar a mensagem

    // Esconder o botão após ser clicado
    document.getElementById("explosionButton").style.display = "none";

    // Exibir várias imagens (imagem2) com animação
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const explosion = document.createElement("img");
            explosion.src = "imagem2.png"; // Substitua pelo nome do arquivo da imagem
            explosion.classList.add("explosion");

            // Posição aleatória do eixo Y (de baixo para cima)
            const randomY = Math.random() * window.innerHeight;

            explosion.style.bottom = `${randomY}px`;
            document.body.appendChild(explosion);

            // Remover a imagem após a animação
            setTimeout(() => {
                explosion.remove();
            }, 1000);
        }, i * 100); // Intervalo para criar várias explosões
    }

    // Animação de escala para a imagem central
    const imagem1 = document.getElementById("imagem1");
    imagem1.style.transform = "scale(1.5)";

    // Posicionar as imagens da explosão ao lado da imagem principal após a animação
    setTimeout(() => {
        const leftImage = document.createElement("img");
        leftImage.src = "imagem2.png"; // Substitua pelo nome do arquivo da imagem
        leftImage.style.position = "absolute";
        leftImage.style.bottom = "50px";
        leftImage.style.left = `${window.innerWidth / 2 - 350}px`; // Lado esquerdo
        document.body.appendChild(leftImage);

        const rightImage = document.createElement("img");
        rightImage.src = "imagem2.png"; // Substitua pelo nome do arquivo da imagem
        rightImage.style.position = "absolute";
        rightImage.style.bottom = "50px";
        rightImage.style.left = `${window.innerWidth / 2 + 50}px`; // Lado direito
        document.body.appendChild(rightImage);
    }, 1200); // Esperar a animação terminar antes de posicionar as imagens
});
