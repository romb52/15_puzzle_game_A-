export const playSound = (soundFile) => {
    //const audio = new Audio(`/sound/${soundFile}`); 
    //console.error(audio);
    const audio = new Audio(`/15_puzzle_game_A-/sound/${soundFile}`); //за умови розгортання сайту на https://romb52.github.io/15_puzzle_game_A-/
    audio.play().catch((error) => {      
      console.error('Failed to play sound:', error);
    });
  };

  export const soundNames = {       //звукові ефекти
    makeMove: 'flipcard.mp3',
    winGame: 'success-fanfare.mp3'
};