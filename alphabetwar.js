function alphabetWar(fight)
{
   let left = 0
   let right = 0
   fight.split('').forEach((f,i) => {
       if(f=='w') left+= 4
       if(f=='p') left+= 3
       if(f=='b') left+= 2
       if(f=='s') left+= 1
       if(f=='m') right+= 4
       if(f=='q') right+= 3
       if(f=='d') right+= 2
       if(f=='z') right+= 1
   });
   if(left == right)
    return "Let's fight again!!"
   if(left > right)
    return 'Left side wins!'
   return 'Left side wins!'
}

console.log(alphabetWar('zdqmwpbs'));