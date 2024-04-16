const worldChampionships = [
    {
      year: 2022,
      worldChampion: "Magnus Carlsen",
      opponent: "Ian Nepomniachtchi",
      location: "Dubai, United Arab Emirates"
    },
    {
      year: 2018,
      worldChampion: "Magnus Carlsen",
      opponent: "Fabiano Caruana",
      location: "London, England"
    },
    {
      year: 2016,
      worldChampion: "Magnus Carlsen",
      opponent: "Sergey Karjakin",
      location: "New York City, United States"
    },
    {
      year: 2014,
      worldChampion: "Magnus Carlsen",
      opponent: "Viswanathan Anand",
      location: "Sochi, Russia"
    },
    {
      year: 2013,
      worldChampion: "Magnus Carlsen",
      opponent: "Viswanathan Anand",
      location: "Chennai, India"
    },
    {
      year: 2012,
      worldChampion: "Viswanathan Anand",
      opponent: "Boris Gelfand",
      location: "Moscow, Russia"
    },
    {
      year: 2010,
      worldChampion: "Viswanathan Anand",
      opponent: "Veselin Topalov",
      location: "Sofia, Bulgaria"
    },
    {
        year: 2008,
        worldChampion: "Viswanathan Anand",
        opponent: "Vladimir Kramnik",
        location: "Bonn, Germany"
      },
      {
        year: 2006,
        worldChampion: "Vladimir Kramnik",
        opponent: "Veselin Topalov",
        location: "Elista, Russia"
      },
      {
        year: 2004,
        worldChampion: "Rustam Kasimdzhanov",
        opponent: "Michael Adams",
        location: "Tripoli, Libya"
      },
      {
        year: 2000,
        worldChampion: "Vladimir Kramnik",
        opponent: "Garry Kasparov",
        location: "London, England"
      },
      {
        year: 1998,
        worldChampion: "Anatoly Karpov",
        opponent: "Viswanathan Anand",
        location: "Lausanne, Switzerland"
      },
      {
        year: 1996,
        worldChampion: "Garry Kasparov",
        opponent: "Anatoly Karpov",
        location: "Elista, Russia"
      },
      {
        year: 1995,
        worldChampion: "Garry Kasparov",
        opponent: "Viswanathan Anand",
        location: "New York City, USA"
      },
      {
        year: 1993,
        worldChampion: "Garry Kasparov",
        opponent: "Nigel Short",
        location: "London, England"
      },
      {
        year: 1990,
        worldChampion: "Garry Kasparov",
        opponent: "Anatoly Karpov",
        location: "New York City, USA"
      },
      {
        year: 1987,
        worldChampion: "Garry Kasparov",
        opponent: "Anatoly Karpov",
        location: "Seville, Spain"
      },
      {
        year: 1985,
        worldChampion: "Garry Kasparov",
        opponent: "Anatoly Karpov",
        location: "Moscow, Russia"
      },
      {
        year: 1984,
        worldChampion: "Garry Kasparov",
        opponent: "Anatoly Karpov",
        location: "Moscow, Russia"
      },
      {
        year: 1981,
        worldChampion: "Anatoly Karpov",
        opponent: "Viktor Korchnoi",
        location: "Merano, Italy"
      },
      {
        year: 1978,
        worldChampion: "Anatoly Karpov",
        opponent: "Viktor Korchnoi",
        location: "Baguio City, Philippines"
      },
      {
        year: 1975,
        worldChampion: "Anatoly Karpov",
        opponent: "Boris Spassky",
        location: "Baguio City, Philippines"
      },
      {
        year: 1972,
        worldChampion: "Bobby Fischer",
        opponent: "Boris Spassky",
        location: "Reykjavik, Iceland"
      },
      {
        year: 1969,
        worldChampion: "Boris Spassky",
        opponent: "Tigran Petrosian",
        location: "Moscow, Russia"
      },
      {
        year: 1966,
        worldChampion: "Tigran Petrosian",
        opponent: "Boris Spassky",
        location: "Moscow, Russia"
      },
      
      {
        year: 1963,
        worldChampion: "Tigran Petrosian",
        opponent: "Mikhail Botvinnik",
        location: "Moscow, Russia"
      },
      {
        year: 1961,
        worldChampion: "Mikhail Tal",
        opponent: "Mikhail Botvinnik",
        location: "Moscow, Russia"
      },
      {
        year: 1959,
        worldChampion: "Mikhail Tal",
        opponent: "Mikhail Botvinnik",
        location: "Moscow, Russia"
      },
      {
        year: 1957,
        worldChampion: "Mikhail Botvinnik",
        opponent: "Vasily Smyslov",
        location: "Moscow, Russia"
      },
      {
        year: 1954,
        worldChampion: "Mikhail Botvinnik",
        opponent: "Vasily Smyslov",
        location: "Moscow, Russia"
      },
      {
        year: 1951,
        worldChampion: "Mikhail Botvinnik",
        opponent: "David Bronstein",
        location: "Moscow, Russia"
      },
      {
        year: 1948,
        worldChampion: "Mikhail Botvinnik",
        opponent: "Max Euwe",
        location: "Moscow, Russia"
      },
      {
        year: 1948,
        worldChampion: "Alexander Alekhine",
        opponent: "Max Euwe",
        location: "The Hague, Netherlands"
      },
      {
        year: 1937,
        worldChampion: "Alexander Alekhine",
        opponent: "Max Euwe",
        location: "Netherlands"
      },
      {
        year: 1935,
        worldChampion: "Alexander Alekhine",
        opponent: "Max Euwe",
        location: "Netherlands"
      },
      {
        year: 1934,
        worldChampion: "Alexander Alekhine",
        opponent: "Max Euwe",
        location: "Netherlands"
      },
      {
        year: 1931,
        worldChampion: "Alexander Alekhine",
        opponent: "Efim Bogoljubov",
        location: "Germany"
      },
      {
        year: 1929,
        worldChampion: "Alexander Alekhine",
        opponent: "Efim Bogoljubov",
        location: "Germany"
      },
      {
        year: 1927,
        worldChampion: "José Raúl Capablanca",
        opponent: "Alexander Alekhine",
        location: "Buenos Aires, Argentina"
      },
      {
        year: 1921,
        worldChampion: "José Raúl Capablanca",
        opponent: "Emmanuel Lasker",
        location: "Havana, Cuba"
      },
      {
        year: 1910,
        worldChampion: "Emanuel Lasker",
        opponent: "Carl Schlechter",
        location: "Vienna, Austria-Hungary"
      },
      {
        year: 1894,
        worldChampion: "Emanuel Lasker",
        opponent: "Wilhelm Steinitz",
        location: "New York City, USA"
      },
      {
        year: 1872,
        worldChampion: "Wilhelm Steinitz",
        opponent: "Johann Zukertort",
        location: "London, England"
      },
      {
        year: 1886,
        worldChampion: "Wilhelm Steinitz",
        opponent: "Johann Zukertort",
        location: "New York City, USA"
      },
      {
        year: 1883,
        worldChampion: "Wilhelm Steinitz",
        opponent: "Johann Zukertort",
        location: "London, England"
      },
      {
        year: 1881,
        worldChampion: "Wilhelm Steinitz",
        opponent: "Johann Zukertort",
        location: "London, England"
      },
      {
        year: 1878,
        worldChampion: "Wilhelm Steinitz",
        opponent: "Johann Zukertort",
        location: "London, England"
      }
  ];

  function typeText(text) {
    var resultElement = document.getElementById("result");
    resultElement.textContent = ''; // Clear existing text
    var i = 0;
    var typingInterval = setInterval(function() {
        if (i < text.length) {
            resultElement.textContent += text[i];
            i++;
        } else {
            clearInterval(typingInterval);
        }
    }, 100); // Adjust the typing speed (milliseconds per letter)
}

  worldChampionships.forEach(function(wch){
    var option=document.createElement('option');
    option.textContent=wch.year;
    document.getElementById("years").appendChild(option)
    });

document.getElementById("search").addEventListener("click",function(){
    var selectedYear=document.getElementById("years").value;
    var result=worldChampionships.find(function(championship){
        return championship.year == selectedYear
    });
    document.getElementById("result").innerHTML = `Year: <span id="highlight">${result.year}</span><br>
    World Champion: <span id="highlight">${result.worldChampion}</span><br>
    Opponent: <span id="highlight">${result.opponent}</span><br>
    Location: <span id="highlight">${result.location}</span>`;
    
    
})
function submitQuiz() {
    var answers = [];
    var radios = document.querySelectorAll('input[type="radio"]:checked');
    radios.forEach(function(radio) {
        answers.push(radio.value);
    });
    console.log(answers);
}