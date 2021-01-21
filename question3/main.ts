export class Connect4 {
  // player 1 - true, player 2 -false
    player: boolean = true;
    won: number = null;
    col0: [];
    col1: [];
    col2: [];
    col3: [];
    col4: [];
    col5: [];
    col6: [];

    constructor() {
      // Good luck
      this.player = false;
    }
  
    play(col: number): string{
      // Good luck
      if(this.won) {
        return 'Game has finished'
      }
     let column = 'col' + col; 
     if (this[column].length = 6) {
       this.player = !this.player;
       return "Column full!"
     }

     this[column].push(this.player);
     this.player = !this.player;
     
     if (this.player) {
      return 'Player 2 has turn'
     } else 
      return 'Player 1 has turn'
    }
  }