document.addEventListener("DOMContentLoaded", () => {
  // Get all audio elements on the page
  const audioElements = document.querySelectorAll("audio");

  // Function to pause all other audio elements except the current one
  function pauseAllOthers(currentAudio) {
    audioElements.forEach((audio) => {
      if (audio !== currentAudio) {
        audio.pause();
        audio.currentTime = 0; // Reset the playback position
      }
    });
  }

  // Attach event listeners to each audio element
  audioElements.forEach((audio, index) => {
    // Pause other songs when this song starts playing
    audio.addEventListener("play", () => {
      pauseAllOthers(audio);
    });

    // Automatically play the next song when the current one ends
    audio.addEventListener("ended", () => {
      const nextAudio = audioElements[index + 1];
      if (nextAudio) {
        nextAudio.play();
      }
    });

    // Ensure that stopping one song doesn't auto-start others
    audio.addEventListener("pause", () => {
      // No action needed when paused, as each song is independent
    });
  });
});

