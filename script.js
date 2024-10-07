// Toggle Menu Bar
document.getElementById('menu').addEventListener('click', function() {
  const menuBar = document.getElementById('menuBar');
  menuBar.style.display = menuBar.style.display === 'block' ? 'none' : 'block';
});


const movieGenres = {
  happy: [
    {
      title: 'The Pursuit of Happyness',
      image: 'https://image.tmdb.org/t/p/w500/2ZyfwJqPUaRfZOAE3vSjl9Ky1yT.jpg',
      video: 'https://www.youtube.com/embed/89Kq8SDyvfg?autoplay=1&mute=1&controls=0'
    },
    {
      title: 'Crazy Rich Asians',
      image: 'https://image.tmdb.org/t/p/w500/gCPdzUuAKTE5Ixi13pYY5mKlnm8.jpg',
      video: 'https://www.youtube.com/embed/ZQ-YX-5bAs0?autoplay=1&mute=1&controls=0'
    },
    {
      title: 'Avengers: Endgame',
      image: 'https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg',
      video: 'https://www.youtube.com/embed/TcMBFSGVi1c?autoplay=1&mute=1&controls=0'
    },
    {
      title: 'Toy Story 4',
      image: 'https://image.tmdb.org/t/p/w500/u2uL1Y97QEy5Z1sUkI1ZgoSzSEZ.jpg',
      video: 'https://www.youtube.com/embed/wmiIUN-7qhE?autoplay=1&mute=1&controls=0'
    },
    {
      title: 'La La Land',
      image: 'https://image.tmdb.org/t/p/w500/qmLzRfB7ZZr9HTM8wxXkY0JRGbi.jpg',
      video: 'https://www.youtube.com/embed/0pdqf4P9MB8?autoplay=1&mute=1&controls=0'
    },
    {
      title: 'The Greatest Showman',
      image: 'https://image.tmdb.org/t/p/w500/dfhztJRiElqmYW4kpvjYe1gENsD.jpg',
      video: 'path/to/greatest_showman_trailer.mp4'
    },
    {
      title: 'Forrest Gump',
      image: 'https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg',
      video: 'path/to/forrest_gump_trailer.mp4'
    },
    {
      title: 'The Secret Life of Walter Mitty',
      image: 'https://image.tmdb.org/t/p/w500/hxGPtYYbUOxkuKcCPzC5hHZsHjK.jpg',
      video: 'path/to/secret_life_walter_mitty_trailer.mp4'
    }
  ],
  sad: [
    {
      title: 'The Fault in Our Stars',
      image: 'https://image.tmdb.org/t/p/w500/4FYu1AAu14tuBU0lns0hbKiHUcH.jpg',
      video: 'https://www.youtube.com/embed/9ItBvH5J6ss?autoplay=1&mute=1&controls=0'
    },
    {
      title: 'A Beautiful Mind',
      image: 'https://image.tmdb.org/t/p/w500/zwzWCmH72OSC9NA0ipoqw5Zjya8.jpg',
      video: 'https://www.youtube.com/embed/aS_d0Ayjw4o?autoplay=1&mute=1&controls=0'
    },
    {
      title: 'The Green Mile',
      image: 'https://image.tmdb.org/t/p/w500/velWPhVMQeQKcxggNEU8YmIo52R.jpg',
      video: 'https://www.youtube.com/embed/ctRK-4Vt7dA?autoplay=1&mute=1&controls=0'
    },
    {
      title: 'Schindler’s List',
      image: 'https://image.tmdb.org/t/p/w500/c8Ass7acuOe4za6DhSattE359gr.jpg',
      video: 'https://www.youtube.com/embed/gG22XNhtnoY?autoplay=1&mute=1&controls=0'
    },
    {
      title: 'The Notebook',
      image: 'https://image.tmdb.org/t/p/w500/rNzQyW4f8B8cQeg7Dgj3n6eT5k9.jpg',
      video: 'https://www.youtube.com/embed/yDJIcYE32NU?autoplay=1&mute=1&controls=0'
    },
    {
      title: 'The Fault in Our Stars',
      image: 'https://image.tmdb.org/t/p/w500/4FYu1AAu14tuBU0lns0hbKiHUcH.jpg',
      video: 'https://www.youtube.com/embed/9ItBvH5J6ss?autoplay=1&mute=1&controls=0'
    },
    {
      title: 'A Beautiful Mind',
      image: 'https://image.tmdb.org/t/p/w500/zwzWCmH72OSC9NA0ipoqw5Zjya8.jpg',
      video: 'https://www.youtube.com/embed/aS_d0Ayjw4o?autoplay=1&mute=1&controls=0'
    },
    {
      title: 'The Green Mile',
      image: 'https://image.tmdb.org/t/p/w500/velWPhVMQeQKcxggNEU8YmIo52R.jpg',
      video: 'https://www.youtube.com/embed/ctRK-4Vt7dA?autoplay=1&mute=1&controls=0'
    }
  ],
  angry: [
    {
      title: 'Gladiator',
      image: 'https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg',
      video: 'https://www.youtube.com/embed/owK1qxDselE?autoplay=1&mute=1&controls=0'
    },
    {
      title: 'John Wick',
      image: 'https://image.tmdb.org/t/p/w500/rQF6xI7r1F5vMe8ssZRl9jFflPA.jpg',
      video: 'https://www.youtube.com/embed/C0BMx-qxsP4?autoplay=1&mute=1&controls=0'
    },
    {
      title: 'Mad Max: Fury Road',
      image: 'https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg',
      video: 'https://www.youtube.com/embed/hEJnMQG9ev8?autoplay=1&mute=1&controls=0'
    },
    {
      title: 'Kill Bill: Vol. 1',
      image: 'https://image.tmdb.org/t/p/w500/1BzNtlnYATjFV4ZCw4TghXvTTgi.jpg',
      video: 'https://www.youtube.com/embed/7kSuas6mRpk?autoplay=1&mute=1&controls=0'
    },
    {
      title: 'The Revenant',
      image: 'https://image.tmdb.org/t/p/w500/oXUWEc5i3wYyFnL1Ycu8ppxxPvs.jpg',
      video: 'path/to/revenant_trailer.mp4'
    },
    {
      title: '300',
      image: 'https://image.tmdb.org/t/p/w500/c12eZtGgR3k1f64PZnldVjX7nOV.jpg',
      video: 'path/to/300_trailer.mp4'
    },
    {
      title: 'Gladiator',
      image: 'https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg',
      video: 'https://www.youtube.com/embed/owK1qxDselE?autoplay=1&mute=1&controls=0'
    },
    {
      title: 'John Wick',
      image: 'https://image.tmdb.org/t/p/w500/rQF6xI7r1F5vMe8ssZRl9jFflPA.jpg',
      video: 'https://www.youtube.com/embed/C0BMx-qxsP4?autoplay=1&mute=1&controls=0'
    }
  ],
  excited: [
    {
      title: 'Inception',
      image: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
      video: 'https://www.youtube.com/embed/YoHD9XEInc0?autoplay=1&mute=1&controls=0'
    },
    {
      title: 'A Quiet Place',
      image: 'https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3bufwDq4n.jpg',
      video: 'https://www.youtube.com/embed/WR7cc5t7tv8?autoplay=1&mute=1&controls=0'
    },
    {
      title: 'The Conjuring',
      image: 'https://image.tmdb.org/t/p/w500/3ydixFiL2jTxzb2MyWlT9dy9Yjw.jpg',
      video: 'https://www.youtube.com/embed/k10ETZ41q5o?autoplay=1&mute=1&controls=0'
    },
    {
      title: 'Get Out',
      image: 'https://image.tmdb.org/t/p/w500/1swjmgF6hdbQW43Uz1Ng6BfFRrp.jpg',
      video: 'https://www.youtube.com/embed/DzfpyUB60YY?autoplay=1&mute=1&controls=0'
    },
    {
      title: 'The Invisible Man',
      image: 'https://image.tmdb.org/t/p/w500/5EufsDwXdY2CVttYOk2WtYhgKpa.jpg',
      video: 'https://www.youtube.com/embed/dSBsNeYqh-k?autoplay=1&mute=1&controls=0'
    },
    {
      title: 'The Dark Knight Rises',
      image: 'https://image.tmdb.org/t/p/w500/3bgtUfKQKNi3nJsAB5URpP2wdRt.jpg',
      video: 'path/to/dark_knight_rises_trailer.mp4'
    },
    {
      title: 'Skyfall',
      image: 'https://image.tmdb.org/t/p/w500/wBpZZL9B4oB1xtvF1EY1UNeoGKR.jpg',
      video: 'path/to/skyfall_trailer.mp4'
    },
    {
      title: 'The Bourne Ultimatum',
      image: 'https://image.tmdb.org/t/p/w500/jXQQGYP1wEgYNM8S6W9mseP60yc.jpg',
      video: 'path/to/bourne_ultimatum_trailer.mp4'
    }
  ],
  latest: [
    {
      title: 'Spider-Man: No Way Home',
      image: 'https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
      video: 'https://www.youtube.com/embed/JfVOs4VSpmA?autoplay=1&mute=1&controls=0'
    },
    {
      title: 'The Batman',
      image: 'https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg',
      video: 'https://www.youtube.com/embed/mqqft2x_Aa4?autoplay=1&mute=1&controls=0'
    },
    {
      title: 'Dune',
      image: 'https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg',
      video: 'https://www.youtube.com/embed/8g18jFHCLXk?autoplay=1&mute=1&controls=0'
    },
    {
      title: 'Top Gun: Maverick',
      image: 'https://image.tmdb.org/t/p/w500/odJ4hx6g6vBt4lBWKFD1tI8WS4x.jpg',
      video: 'https://www.youtube.com/embed/g4U4BQW9OEk?autoplay=1&mute=1&controls=0'
    },
    {
      title: 'No Time to Die',
      image: 'https://image.tmdb.org/t/p/w500/iUgygt3fscRoKWCV1d0C7FbM9PM.jpg',
      video: 'https://www.youtube.com/embed/BIhNsAtPbPI?autoplay=1&mute=1&controls=0'
    },
    {
      title: 'Black Panther: Wakanda Forever',
      image: 'https://image.tmdb.org/t/p/w500/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
      video: 'https://www.youtube.com/embed/_Z3QKkl1WyM?autoplay=1&mute=1&controls=0'
    },
    {
      title: 'Jurassic World Dominion',
      image: 'https://image.tmdb.org/t/p/w500/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg',
      video: 'https://www.youtube.com/embed/fb5ELWi-ekk?autoplay=1&mute=1&controls=0'
    },
    {
      title: 'Shang-Chi and the Legend of the Ten Rings',
      image: 'https://image.tmdb.org/t/p/w500/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg',
      video: 'https://www.youtube.com/embed/8YjFbMbfXaQ?autoplay=1&mute=1&controls=0'
    }
  ]
};


const toggleInput = document.getElementById('toggle-mode');

toggleInput.addEventListener('change', function() {
  document.body.classList.toggle('light-mode');

  // Change button icon based on mode
  if (document.body.classList.contains('light-mode')) {
    toggleInput.nextElementSibling.textContent = '🌞'; // Sun icon for light mode
  } else {
    toggleInput.nextElementSibling.textContent = '🌙'; // Moon icon for dark mode
  }
});

// Set initial icon
if (document.body.classList.contains('light-mode')) {
  toggleInput.nextElementSibling.textContent = '🌞'; // Sun icon for light mode
} else {
  toggleInput.nextElementSibling.textContent = '🌙'; // Moon icon for dark mode
}


// Toggle Menu Bar with Animation
document.getElementById('menu').addEventListener('click', function() {
  const menuBar = document.querySelector('.menu-bar');
  menuBar.style.display = menuBar.style.display === 'block' ? 'none' : 'block';
  menuBar.style.animation = 'slide-in 0.3s forwards'; // Reapply animation
});

// Event Listeners for Emojis
document.querySelectorAll('.emoji').forEach(emoji => {
  emoji.addEventListener('click', function () {
    const mood = this.id;
    displayMovies(mood);
  });
});

// Display Latest Movies by Default
window.onload = function () {
  displayMovies('latest'); // Or any default mood
};

// Function to Display Movies
function displayMovies(mood) {
  const moviesDiv = document.getElementById('movies');
  moviesDiv.innerHTML = ''; // Clear previous movies
  const movies = movieGenres[mood];

  movies.forEach(movie => {
    const movieElement = document.createElement('div');
    movieElement.classList.add('movie');
    movieElement.innerHTML = `
      <img src="${movie.image}" alt="${movie.title}">
      <iframe src="${movie.video}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    `;
    moviesDiv.appendChild(movieElement);
  });
}
