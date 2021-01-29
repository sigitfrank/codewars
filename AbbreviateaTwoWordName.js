function abbrevName(name){
  const firstName = name.split(' ')[0].split('')[0].toUpperCase()
  const lastName = name.split(' ')[1].split('')[0].toUpperCase()
  return firstName+'.'+lastName
}

console.log(abbrevName('Sam Harris'));