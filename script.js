document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("final-screen").style.display = "none";

  const IMAGE_SIZE = 300; // 🔥 Altere aqui para mudar o tamanho das imagens (ex: 300 para 300x300px)

  const questions = [
        {
      song: "https://radialistaedsonleite.github.io/qualeamusica4inter/Angel_JulianGrey.mp3",
      name: "Angel",
      artist: "Julian Grey",
      image: "https://radialistaedsonleite.github.io/qualeamusica4inter/juliangreyAngel.jpg",
      description: "Angel de Julian Grey é uma música suave e envolvente, com uma melodia que toca o coração e transmite uma sensação de pureza e serenidade. A canção fala sobre a beleza e a inspiração que alguém especial pode trazer à vida, com uma melodia que permanece com o ouvinte após a última nota.",
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
      song: "https://radialistaedsonleite.github.io/qualeamusica4inter/Happy_MichaelJackson.mp3",
      name: "Happy",
      artist: "Michael Jackson",
      image: "https://radialistaedsonleite.github.io/qualeamusica4inter/Happy_MichaelJackson.jpg",
      description: "Descrição aqui",
      options: [
        { name: "The Gambler", artist: "George Harrison" },
        { name: "Do You Needed Me?", artist: "Cat Stevens" }, 
        { name: "Happy", artist: "Michael Jackson" }, 
        { name: "Your Face", artist: "Ian Gillan" }
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
      song: "https://radialistaedsonleite.github.io/qualeamusica4inter/SummerHoliday_TerryWinter.mp3",
      name: "Summer Holiday",
      artist: "Terry Winter",
      image: "https://radialistaedsonleite.github.io/qualeamusica4inter/SummerHoliday_TerryWinter.jpg",
      description: "Descrição aqui",
      options: [
        { name: "Spring, Summer, Winter And Fall", artist: "Demis Roussos" },
        { name: "September More", artist: "Morris Albert" }, 
        { name: "Summer Holiday", artist: "Terry Winter" }, 
        { name: "I Needed You", artist: "Jim Diamond" }
           ]
    },
  
    {
      song: "https://radialistaedsonleite.github.io/qualeamusica4inter/TheLogicalSong_Supertramp.mp3",
      name: "The Logical Song",
      artist: "Supertramp",
      image: "https://radialistaedsonleite.github.io/qualeamusica4inter/TheLogicalSong_Supertramp.jpg",
      description: "Descrição aqui",
      options: [
        { name: "Free song", artist: "Tony Stevens" },
        { name: "The Logical Song", artist: "Supertramp" }, 
        { name: "If You Leave Me Now", artist: "Chicago City" }, 
        { name: "The End Of The World", artist: "Earl Grant" }  
           ]
    },
  
    {
      song: "https://radialistaedsonleite.github.io/qualeamusica4inter/WomaninLove_BarbraStreisand.mp3",
      name: "Woman In Love",
      artist: "Barbra Streisand",
      image: "https://radialistaedsonleite.github.io/qualeamusica4inter/WomaninLove_BarbraStreisand.jpg",
      description: "Descrição aqui",
      options: [
        { name: "My Girl", artist: "Marianne Faithfull" },
        { name: "I Feel Love", artist: "Linda McCartney" }, 
        { name: "Woman In Love", artist: "Barbra Streisand" }, 
        { name: "We Are The Champions", artist: "Olivia Newton-John" }  
           ]
    },
  
    {
      song: "https://radialistaedsonleite.github.io/qualeamusica4inter/WereAllAlone_RitaCoolidge.mp3",
      name: "Were All Alone",
      artist: "Rita Coolidge",
      image: "https://radialistaedsonleite.github.io/qualeamusica4inter/WereAllAlone_RitaCoolidge.jpg",
      description: "Descrição aqui",
      options: [
        { name: "Dream, Dream, Dream", artist: "Bonnie Tyler" },
        { name: "Were All Alone", artist: "Rita Coolidge" }, 
        { name: "I Love You Forever", artist: "Kiki Dee" }, 
        { name: "My Reason", artist: "Annie Haslam" }  
           ]
    }, 
    
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
      <h1 style="color: red; font-weight: bold; font-size: 1.5em;">Parabéns! Você já está com ${score} pontos!</h1>
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
