function fireFight(s){
    let str = []
  s.split(' ').forEach((e,i)=> {
      if(e=='Fire'){
          str[i]='~~'
      } else{
          str[i] = e
      }
  });
  return str.join(' ')

//   while(s.includes("Fire"))
//   {
//     s = s.replace("Fire","~~");
//   }
//   return s;
}

console.log(fireFight("Boat Rudder Mast Boat Hull Water Fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast"));