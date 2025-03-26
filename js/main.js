///////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////         Music button        /////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

const playPauseButton = document.getElementById('playPauseButton');
const audio = document.getElementById('audio');
const icon = document.getElementById('icon');

// Function to toggle play/pause
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
    console.log("Inputs found after delay:", inputs); // Should now show the radio buttons
    const hoverSound = document.getElementById('hoverSound');
  
    inputs.forEach(input => {
      input.addEventListener('click', () => {
        console.log('Radio button clicked!');
        hoverSound.play();
      });
    });
  }, 500);
  

