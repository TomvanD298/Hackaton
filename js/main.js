///////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////         Music button        /////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

const playPauseButton = document.getElementById('playPauseButton');
const audio = document.getElementById('audio');
const icon = document.getElementById('icon');

playPauseButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    icon.classList.remove('fa-play');
    icon.classList.add('fa-pause');
  } else {
    audio.pause();
    icon.classList.remove('fa-pause');
    icon.classList.add('fa-play');
  }
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