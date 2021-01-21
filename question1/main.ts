export function isValidWalk(walk: string[]) {
  //     array to keep opposite directions
  let returnWalk = [];
  //   if walk is less than ten minutes return false
      if (walk.length !== 10) return false;
/*  if person walking to any direction, say North, he will always have to walk to South - opposite
    direction at some point in order to get back to same point */
  //   check every walking direction and add to opposite direction to returnWalk
      walk.forEach(direction => {
          switch(direction){
              case 'n':
              returnWalk.push('s');
              return;
              case 's':
              returnWalk.push('n');
              return;
              case 'e':
              returnWalk.push('w');
              return;
              case 'w':
              returnWalk.push('e');
              return;
          };
      });
  //   compare walk and returnWalk by sorting and converting arrays into string
      return walk.sort().join('') === returnWalk.sort().join('');
}

