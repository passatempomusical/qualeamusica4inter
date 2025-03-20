document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("final-screen").style.display = "none";

  const IMAGE_SIZE = 250; // 🔥 Altere aqui para mudar o tamanho das imagens (ex: 300 para 300x300px)

  const questions = [
    {
      song: "https://radialistaedsonleite.github.io/qualeamusica4inter/Angel_JulianGrey.mp3",
      name: "Angel",
      artist: "Julian Grey",
      image: "https://radialistaedsonleite.github.io/qualeamusica4inter/WomaninLove_BarbraStreisand1.jpg", // Substituir por URL real
      description: "Julian Grey 👼 Uma música envolvente e misteriosa, que transmite uma atmosfera etérea e melancólica.",
      options: [
        { name: "I Feel the Earth Move", artist: "Pupo" },
        { name: "Angel", artist: "Julian Grey" },
        { name: "My Love For You", artist: "Nazareth" },
        { name: "I Wish", artist: "Tony Stevens" }
      ]
    },
    {
      song: "https://radialistaedsonleite.github.io/qualeamusica4inter/CherryRed_BeeGees.mp3",
      name: "Cherry Red",
      artist: "Bee Gees",
      image: "https://example.com/cherryred.jpg",
      description: "Bee Gees 🍒 Um lado menos conhecido do Bee Gees, mas igualmente encantador. Harmonia vocal impecável.",
      options: [
        { name: "Lonely Boy", artist: "Jeff Lynne" },
        { name: "Never Can Say Goodbye", artist: "Chrystian" },
        { name: "I Want You to Want Me", artist: "Sharif Dean" },
        { name: "Cherry Red", artist: "Bee Gees" }
      ]
    }
  ];

  let currentQuestionIndex = 0;
  let score = parseInt(localStorage.getItem("playerScore")) || 0;
  const audio = document.getElementById("audio");
  const optionsContainer = document.getElementById("options");
  const questionText = document.getElementById("question");
  const scoreText = document.getElementById("score");
  const gameContainer = document.getElementById("game");
  const finalScreen = document.getElementById("final-screen");

  function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
      showFinalScreen();
      return;
    }

    const q = questions[currentQuestionIndex];
    audio.src = q.song;
    questionText.textContent = "Ouça e responda: Qual é a Música?";
    optionsContainer.innerHTML = "";

    q.options.forEach((option) => {
      const btn = document.createElement("button");
      btn.innerHTML = `<strong>${option.name}</strong><br><i>${option.artist}</i>`;
      btn.classList.add("option");
      btn.onclick = () => checkAnswer(option.name, option.artist);
      optionsContainer.appendChild(btn);
    });

    setTimeout(() => {
      audio.play().catch((error) => console.error("Erro ao reproduzir áudio:", error));
    }, 500);
  }

  function checkAnswer(selectedName, selectedArtist) {
    if (currentQuestionIndex >= questions.length) return;

    const q = questions[currentQuestionIndex];
    audio.pause();
    audio.currentTime = 0;

    if (selectedName === q.name && selectedArtist === q.artist) {
      score += 10;
    } else {
      score -= 5;
    }

    localStorage.setItem("playerScore", score);
    scoreText.textContent = `Pontuação: ${score}`;
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      showFinalScreen();
    }
  }

  function showFinalScreen() {
    audio.pause();
    audio.currentTime = 0;

    gameContainer.style.display = "none";
    finalScreen.style.display = "block";
    finalScreen.innerHTML = `
      <h1 style="color: red; font-weight: bold; font-size: 2em;">Parabéns! Você fez ${score} pontos!</h1>
      <div>${generateFinalComments()}</div>
      <div class="buttons-container">
          <button id="restart-btn">Jogar Novamente</button>
          <button id="exit-btn">Fechar o Jogo</button>
      </div>
    `;

    document.getElementById("restart-btn").addEventListener("click", restartGame);
    document.getElementById("exit-btn").addEventListener("click", exitGame);
  }

  function generateFinalComments() {
    return questions
      .map(
        (q) => `
        <div style="margin-bottom: 20px; text-align: center;">
          <img src="${q.image}" alt="${q.name}" style="width: ${IMAGE_SIZE}px; height: ${IMAGE_SIZE}px; display: block; margin: 10px auto;">
          <strong>${q.name} - ${q.artist}</strong>
          <p>${q.description}</p>
        </div>
      `
      )
      .join("");
  }

  function restartGame() {
    currentQuestionIndex = 0;
    score = parseInt(localStorage.getItem("playerScore")) || 0;
    finalScreen.style.display = "none";
    gameContainer.style.display = "block";
    scoreText.textContent = `Pontuação: ${score}`;
    loadQuestion();
  }

  function exitGame() {
    window.location.href = "https://google.com";
  }

  scoreText.textContent = `Pontuação: ${score}`; // Exibe a pontuação ao iniciar
  loadQuestion();
});
