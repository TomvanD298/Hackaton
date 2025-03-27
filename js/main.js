///////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////         Music button        /////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
    // Play/Pause functionaliteit
    const playPauseButton = document.getElementById("playPauseButton");
    const audio = document.getElementById("audio");
    const icon = document.getElementById("icon");
  
    playPauseButton.addEventListener("click", () => {
      if (audio.paused) {
        audio.play();
        icon.classList.remove("fa-play");
        icon.classList.add("fa-pause");
      } else {
        audio.pause();
        icon.classList.remove("fa-pause");
        icon.classList.add("fa-play");
      }
    });
  
    // Thema-wissel functionaliteit
    const themeSelect = document.getElementById("themeSelect");
    const audioSource = document.getElementById("audioSource");
  
    if (!themeSelect) {
      console.error("themeSelect element not found!");
      return;
    }
  
    const themeMusic = {
        blue: "../audio/Mario Kart Double Dash Theme.mp3",
        pink: "../audio/Baby Park.mp3",
        green: "../audio/Coconut Mall.mp3",
    };
  
    themeSelect.addEventListener("change", (event) => {
      const selectedTheme = event.target.value;
  
      if (themeMusic[selectedTheme]) {
        const wasPlaying = !audio.paused; 
        audioSource.src = themeMusic[selectedTheme];
        audio.load(); 
        if (wasPlaying) {
          audio.play(); 
        }
      }
    });
  });

///////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////          Hover Audio        /////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

setTimeout(() => {
    const inputs = document.querySelectorAll('input[type="radio"]');
    const hoverSound = document.getElementById('hoverSound');
  
    inputs.forEach(input => {
      input.addEventListener('click', () => {
        hoverSound.play();
      });
    });
  }, 500);
  
///////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////          Mute Audio        //////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

const muteButton = document.getElementById('muteButton');
const muteIcon = document.getElementById('muteIcon');

muteButton.addEventListener('click', () => {
  audio.muted = !audio.muted;
  hoverSound.muted = !hoverSound.muted;

  // Toggle mute icon
  if (audio.muted) {
    muteIcon.classList.remove('fa-volume-up');
    muteIcon.classList.add('fa-volume-mute');
  } else {
    muteIcon.classList.remove('fa-volume-mute');
    muteIcon.classList.add('fa-volume-up');
  }
});




