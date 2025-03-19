document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("final-screen").style.display = "none";

  const questions = [
    {
      song:
        "https://radialistaedsonleite.github.io/qualeamusica4inter/Angel_JulianGrey.mp3",
      correct: "Angel - Julian Grey",
      options: ["I Feel the Earth Move - Pupo", "Angel - Julian Grey", "My Love For You - Nazareth", "I Wish - Tony Stevens"]
    },
    {
      song:
        "https://radialistaedsonleite.github.io/qualeamusica4inter/CherryRed_BeeGees.mp3",
      correct: "Cherry Red - Bee Gees",
      options: ["Lonely Boy - Chris De BUrgh", "Never Can Say Goodbye - Chrystian", "I Want You to Want Me - Sharif Dean", "Cherry Red - Bee Gees"]
    },
    {
      song:
        "https://radialistaedsonleite.github.io/qualeamusica4inter/Happy_MichaelJackson.mp3",
      correct: "Happy",
      options: [
        "Happy",
        "The Gambler",
        "Do You Needed Me?",
        "Your Face"
      ]
    },
    {
      song:
        "https://radialistaedsonleite.github.io/qualeamusica4inter/MySweetLord_GeorgeHarrison.mp3",
      correct: "My Sweet Lord",
      options: [
        "Lonely Sky",
        "Imagine",
        "My Sweet Lord",
        "My Prayer"
      ]
    },
    {
      song:
        "https://radialistaedsonleite.github.io/qualeamusica4inter/RainAndMemories_PaulDenver.mp3",
      correct: "Rain And Memories",
      options: [
        "Memories inside",
        "Rain And Memories",
        "No More Joke",
        "My Dream"
      ]
    },
    {
      song:
        "https://radialistaedsonleite.github.io/qualeamusica4inter/SheMadeMeCry_Pholhas.mp3",
      correct: "She Made Me Cry",
      options: [
        "My Mistake",
        "Forever And Never",
        "She Made Me Cry",
        "Rain And Tears"
      ]
    },

    {
      song:
        "https://radialistaedsonleite.github.io/qualeamusica4inter/SummerHoliday_TerryWinter.mp3",
      correct: "Summer Holiday",
      options: ["Spring, Summer, Winter And Fall", "Summer Holiday", "September More", "I Needed You"]
    },

    {
      song:
        "https://radialistaedsonleite.github.io/qualeamusica4inter/TheLogicalSong_Supertramp.mp3",
      correct: "The Logical Song",
      options: [
        "Free song",
        "If You Leave Me Now",
        "The End Of The World",
        "The Logical Song"]
    },
    {
      song:
        "https://radialistaedsonleite.github.io/qualeamusica4inter/WereAllAlone_RitaCoolidge.mp3",
      correct: "Were All Alone",
      options: [
        "Dream, Dream, Dream",
        "Were All Alone",
        "I Love You Forever",
        "My Reason"
      ]
    },
    {
      song:
        "https://radialistaedsonleite.github.io/qualeamusica4inter/WomaninLove_BarbraStreisand.mp3",
      correct: "Woman In Love",
      options: [
        "My Girl",
        "I Feel Love",
        "We Are The Champions",
        "Woman In Love"
      ]
    }

    // ... (as outras músicas aqui)
  ];

  // Descrições das músicas
  const descriptions = [
    "Julian Grey 👼 Uma música envolvente e misteriosa, que transmite uma atmosfera etérea e melancólica. Julian Grey emociona com sua interpretação única e melodia cativante.",
    
    "Bee Gees 🍒 Um lado menos conhecido do Bee Gees, mas igualmente encantador. Com sua harmonia vocal impecável, a música transmite uma sensação de ternura e nostalgia.",
    
    "Michael Jackson 😊 Diferente dos grandes hits dançantes do Rei do Pop, essa canção mostra um lado mais introspectivo e sensível de Michael Jackson, com uma melodia doce e uma mensagem positiva.",
    
    
    "George Harrison 🙏 Um clássico absoluto, onde George Harrison mistura elementos do rock e da espiritualidade em uma canção transcendental. Uma verdadeira oração em forma de música!",
    
    "Paul Denver 🌧️ balada romântica que evoca lembranças e saudade, com uma melodia suave que faz qualquer um se emocionar.",
    
    "Pholhas 😢 Com a pegada romântica característica da banda brasileira Pholhas, essa música traz uma letra melancólica e uma interpretação cheia de sentimento, perfeita para quem já teve o coração partido.",
    
    "Terry Winter 🎵 Uma canção nostálgica e animada que nos transporta para dias ensolarados e inesquecíveis. A melodia suave e a letra envolvente fazem dela um clássico para quem ama o romantismo dos anos 70.",
    
    "Supertramp 🎷 Um dos maiores sucessos do Supertramp, essa música combina uma melodia vibrante com uma letra reflexiva sobre a transição da infância para a vida adulta. Marcante pelo saxofone e pela voz inconfundível de Roger Hodgson.",
    
    "Rita Coolidge 🌊 Uma das baladas mais emocionantes dos anos 70, Rita Coolidge entrega uma interpretação suave e cheia de sentimento nesta versão que conquistou corações no mundo todo.",
    
    "Barbra Streisand ❤️ Escrita pelos irmãos Gibb (Bee Gees), essa música é um hino ao amor intenso e à entrega total em um relacionamento. A voz poderosa de Barbra Streisand torna essa canção inesquecível."
    // Adicione as descrições das músicas aqui
    // ...
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
    questionText.textContent = "Ouça, responda e marque pontos!";
    optionsContainer.innerHTML = "";

    q.options.forEach((option) => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.classList.add("option");
      btn.onclick = () => checkAnswer(option);
      optionsContainer.appendChild(btn);
    });

    setTimeout(() => {
      audio
        .play()
        .catch((error) => console.error("Erro ao reproduzir áudio:", error));
    }, 500);
  }

  function checkAnswer(answer) {
    if (currentQuestionIndex >= questions.length) return;

    const q = questions[currentQuestionIndex];
    audio.pause();
    audio.currentTime = 0;

    if (answer === q.correct) {
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

    finalScreen.style.textAlign = "left";
    finalScreen.style.padding = "20px";

    const q = questions[currentQuestionIndex - 1]; // Última pergunta

    let commentsHTML = "";
for (let i = 0; i < questions.length; i++) {
  commentsHTML += `<p><strong>>>> "${questions[i].correct}":</strong> ${descriptions[i]}</p>`;
}

    // Atualizando a tela final com a pontuação
    finalScreen.innerHTML = `
    <h1 style="color: red; font-weight: bold; font-size: 2em;">Parabéns! Você já está com ${score} pontos!</h1>
    <p>Sua pontuação final: <strong>${score}</strong> 🎉</p>
    <div>${commentsHTML}</div>
    
    <!-- Contêiner para botões centralizados -->
    <div class="buttons-container">
        <button id="restart-btn">Jogar Novamente</button>
        <button id="exit-btn">Fechar o Jogo</button>
    </div>
  `;

    // Ações dos botões
    document
      .getElementById("restart-btn")
      .addEventListener("click", restartGame);
    document.getElementById("exit-btn").addEventListener("click", exitGame);
  }

  function restartGame() {
    currentQuestionIndex = 0;
    score = parseInt(localStorage.getItem("playerScore")) || 0; // Recupera a pontuação salva
    finalScreen.style.display = "none";
    gameContainer.style.display = "block";
    scoreText.textContent = `Pontuação: ${score}`;
    loadQuestion();
  }
  function exitGame() {
    const newUrl = `https://radialistaedsonleite.github.io/jogos-HTML/?score=${score}`;
    alert("Volte sempre! Até a próxima! 🎶");
    window.location.href = "https://radialistaedsonleite.github.io/jogos-HTML/";
  }

  scoreText.textContent = `Pontuação: ${score}`;
  loadQuestion();
});
