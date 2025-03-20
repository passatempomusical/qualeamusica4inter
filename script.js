document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("final-screen").style.display = "none";

  const questions = [
    {
      song: "https://radialistaedsonleite.github.io/qualeamusica4inter/Angel_JulianGrey.mp3",
      name: "Angel",
      artist: "Julian Grey",
      image: "https://radialistaedsonleite.github.io/qualeamusica4inter/WomaninLove_BarbraStreisand1.jpg",
      description: "Uma música envolvente e misteriosa, que transmite uma atmosfera etérea e melancólica.",
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
      image: "https://radialistaedsonleite.github.io/qualeamusica4inter/cherryredBeegees.jpg",
      description: "Um lado menos conhecido dos Bee Gees, mas igualmente encantador.",
      options: [
        { name: "Lonely Boy", artist: "Jeff Lynne" },
        { name: "Never Can Say Goodbye", artist: "Chrystian" },
        { name: "I Want You to Want Me", artist: "Sharif Dean" },
        { name: "Cherry Red", artist: "Bee Gees" }
      ]
    },
    {
      song: "https://radialistaedsonleite.github.io/qualeamusica4inter/MySweetLord_GeorgeHarrison.mp3",
      name: "My Sweet Lord",
      artist: "George Harrison",
      image: "https://radialistaedsonleite.github.io/qualeamusica4inter/GeorgeHarrisonMyswetLord.jpg",
      description: "Uma música envolvente e misteriosa, que transmite uma atmosfera etérea e melancólica.",
      options: [
        { name: "Lonely Sky", artist: "Chris de Burg" },  
        { name: "Imagine", artist: "Steve Winwood" },
        { name: "My Sweet Lord", artist: "George Harrison" },
        { name: "My Prayer", artist: "Dusty Springfield" },     
      ]
    },
    {
      song: "https://radialistaedsonleite.github.io/qualeamusica4inter/RainAndMemories_PaulDenver.mp3",
      name: "Rain And Memories",
      artist: "Paul Denver",
      image: "https://radialistaedsonleite.github.io/qualeamusica4inter/RainAndMemories_PaulDenver.jpg",
      description: "Uma música envolvente e misteriosa, que transmite uma atmosfera etérea e melancólica.",
      options: [
        { name: "Memories inside", artist: "Peter Gabriel" },
        { name: "No More Joke", artist: "Joe Cocker" }, 
        { name: "Rain And Memories", artist: "Paul Denver" }, 
        { name: "My Dream", artist: "Petula Clark" },
           ]
    },
        {
      song: "https://radialistaedsonleite.github.io/qualeamusica4inter/SheMadeMeCry_Pholhas.mp3",
      name: "She Made Me Cry",
      artist: "Pholhas",
      image: "https://radialistaedsonleite.github.io/qualeamusica4inter/SheMadeMeCry_Pholhas.jpg",
      description: "Uma música envolvente e misteriosa, que transmite uma atmosfera etérea e melancólica.",
      options: [
        { name: "She Made Me Cry", artist: "Pholhas" },
        { name: "Forever And Never", artist: "Cat Stevens" }, 
        { name: "You Know My Dream", artist: "Elton John" }, 
        { name: "Rain And Tears", artist: "David Bowie" }  
           ]
    },
        {
      song: "",
      name: "",
      artist: "",
      image: "https://radialistaedsonleite.github.io/qualeamusica4inter/",
      description: "Uma música envolvente e misteriosa, que transmite uma atmosfera etérea e melancólica.",
      options: [
        { name: "", artist: "" },
        { name: "", artist: "" },
        { name: "", artist: "" },
        { name: "", artist: "" }
           ]
    },
        {
      song: "",
      name: "",
      artist: "",
      image: "https://radialistaedsonleite.github.io/qualeamusica4inter/",
      description: "Uma música envolvente e misteriosa, que transmite uma atmosfera etérea e melancólica.",
      options: [
        { name: "", artist: "" },
        { name: "", artist: "" },
        { name: "", artist: "" },
        { name: "", artist: "" }
           ]
    },
        {
      song: "",
      name: "",
      artist: "",
      image: "https://radialistaedsonleite.github.io/qualeamusica4inter/",
      description: "Uma música envolvente e misteriosa, que transmite uma atmosfera etérea e melancólica.",
      options: [
        { name: "", artist: "" },
        { name: "", artist: "" },
        { name: "", artist: "" },
        { name: "", artist: "" }
           ]
    },
        {
      song: "",
      name: "",
      artist: "",
      image: "https://radialistaedsonleite.github.io/qualeamusica4inter/",
      description: "Uma música envolvente e misteriosa, que transmite uma atmosfera etérea e melancólica.",
      options: [
        { name: "", artist: "" },
        { name: "", artist: "" },
        { name: "", artist: "" },
        { name: "", artist: "" }
           ]
    },
    
    {
      song: "",
      name: "",
      artist: "",
      image: "https://radialistaedsonleite.github.io/qualeamusica4inter/",
      description: "Uma música envolvente e misteriosa, que transmite uma atmosfera etérea e melancólica.",
      options: [
        { name: "", artist: "" },
        { name: "", artist: "" },
        { name: "", artist: "" },
        { name: "", artist: "" }
           ]
    },
    // Adicione mais músicas aqui seguindo o mesmo padrão.
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
    questionText.textContent = "Ouça e responda: Qual é a música?";
    optionsContainer.innerHTML = "";

    q.options.forEach((option) => {
      const btn = document.createElement("button");
      btn.innerHTML = `${option.name} <br><i>${option.artist}</i>`;
      btn.classList.add("option");
      btn.onclick = () => checkAnswer(option.name, option.artist);
      optionsContainer.appendChild(btn);
    });

    setTimeout(() => {
      audio.play().catch((error) => console.error("Erro ao reproduzir áudio:", error));
    }, 500);
  }

  function checkAnswer(selectedName, selectedArtist) {
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

    let resultsHTML = `<h1 style="color: red;">Parabéns! Você fez ${score} pontos!</h1>`;
    questions.forEach((q) => {
      resultsHTML += `
        <div style="margin-bottom: 20px;">
          <strong>${q.name} - ${q.artist}</strong>
          <br>
          <img src="${q.image}" alt="${q.artist}" style="width: 300px; height: 300px;">
          <p>${q.description}</p>
        </div>
      `;
    });

    finalScreen.innerHTML = resultsHTML + `
      <button id="restart-btn">Jogar Novamente</button>
      <button id="exit-btn">Fechar o Jogo</button>
    `;

    document.getElementById("restart-btn").addEventListener("click", restartGame);
    document.getElementById("exit-btn").addEventListener("click", () => window.location.href = "https://google.com");
  }

  function restartGame() {
    currentQuestionIndex = 0;
    score = 0;
    localStorage.setItem("playerScore", score);
    finalScreen.style.display = "none";
    gameContainer.style.display = "block";
    scoreText.textContent = `Pontuação: ${score}`;
    loadQuestion();
  }

  loadQuestion();
});
