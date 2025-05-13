document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("final-screen").style.display = "none";

  const IMAGE_SIZE = 300; // 🔥 Altere aqui para mudar o tamanho das imagens (ex: 300 para 300x300px)

  const questions = [
        {
      song: "https://passatempomusical.github.io/qualeamusica4inter/Angel_JulianGrey.mp3",
      name: "Angel",
      artist: "Julian Grey",
      image: "https://passatempomusical.github.io/qualeamusica4inter/juliangreyAngel.jpg",
      description: "Angel de Julian Grey é uma música suave e envolvente, com uma melodia que toca o coração e transmite uma sensação de pureza e serenidade. A canção fala sobre a beleza e a inspiração que alguém especial pode trazer à vida, com uma melodia que permanece com o ouvinte após a última nota.",
      options: [
        { name: "I Feel the Earth Move", artist: "Pupo" },
        { name: "Angel", artist: "Julian Grey" },
        
        { name: "I Wish", artist: "Tony Stevens" }
      ]
    },
    {
      song: "https://passatempomusical.github.io/qualeamusica4inter/CherryRed_BeeGees.mp3",
      name: "Cherry Red",
      artist: "Bee Gees",
      image: "https://passatempomusical.github.io/qualeamusica4inter/cherryredBeegees.jpg",
      description: "Cherry Red é uma música encantadora do Bee Gees, com o estilo característico da banda: harmonias vocais perfeitas e uma melodia que transmite uma sensação de calor e romance. A canção fala sobre os sentimentos de paixão e o desejo, com uma energia suave e sedutora.",
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
      description: "My Sweet Lord, do ex-Beatle George Harrison, é uma linda balada espiritual que mistura elementos de música hindu com a suavidade do rock. A canção reflete o profundo desejo de Harrison por conexão divina e paz interior, tornando-se um marco na sua carreira solo e um dos maiores sucessos dos anos 70.",
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
      description: "Happy é uma faixa animada e cheia de energia de Michael Jackson que transmite um otimismo contagiante. A música tem uma batida envolvente e uma mensagem positiva, fazendo com que qualquer um queira se levantar e dançar. Um verdadeiro clássico da música pop que ainda faz todos sorrirem!",
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
      description: "Uma balada suave, cheia de melancolia e nostalgia, Rain and Memories de Paul Denver é uma dessas músicas que transporta o ouvinte para um lugar de reflexão. A canção é como uma chuva de lembranças, onde a melodia suave e o tom introspectivo se misturam, criando uma atmosfera de serenidade e saudade.",
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
      description: "Pholhas é uma banda clássica dos anos 70, e 'She Made Me Cry' é um exemplo perfeito de sua habilidade em criar baladas emocionais. A música conta a história de um homem sofrendo por amor perdido, com uma melodia que reflete a tristeza e a dor de um coração partido. Um verdadeiro clássico do pop brasileiro!",
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
      description: "Summer Holiday é uma faixa alegre e vibrante que celebra a época mais esperada do ano: o verão! Terry Winter captura o espírito livre das férias de verão, com uma melodia contagiante e letra que fala sobre diversão e aventura sob o sol. Ideal para um momento de descontração!",
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
      description: "Um dos maiores sucessos do Supertramp, The Logical Song mistura rock progressivo com elementos de pop, criando uma reflexão profunda sobre a busca por identidade. Com uma melodia cativante e uma letra que questiona a lógica das convenções sociais, essa música se tornou um marco dos anos 70.",
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
      description: "Um dos maiores sucessos de Barbra Streisand, 'Woman in Love' é uma canção emocionante sobre o amor profundo e incondicional. Com uma interpretação vocal impecável e uma orquestração grandiosa, a música captura toda a intensidade emocional que caracteriza o amor verdadeiro.",
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
      description: "We're All Alone é uma balada envolvente, onde Rita Coolidge entrega uma performance vocal poderosa e íntima. A canção fala sobre solidão e a necessidade de estar com alguém especial, com uma melodia doce e acolhedora, perfeita para os momentos românticos e introspectivos.",
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
    questionText.textContent = "Clique no play, ouça e responda!";
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
        <div style="margin-bottom: 5px; text-align: center;">
          <p>********>>>>>>>>>>>>>>>>>********</p> <!-- Aqui está o texto com os asteriscos -->
          <strong>${q.name} - ${q.artist}</strong>
          <img src="${q.image}" alt="${q.name}" style="width: ${IMAGE_SIZE}px; height: ${IMAGE_SIZE}px; display: block; margin: 5px auto;">
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
    window.location.href = "https://radialistaedsonleite.github.io/principal";
  }

  scoreText.textContent = `Pontuação: ${score}`; // Exibe a pontuação ao iniciar
  loadQuestion();
});
