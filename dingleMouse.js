class Dinglemouse{
  constructor( firstName, lastName ){
        this.firstName = firstName
        this.lastName = lastName
  }
  
  getFullName(){
    if(this.firstName && this.lastName) return this.firstName+" "+this.lastName
    
    if(this.firstName && !this.lastName) return this.firstName
    
    return !this.firstName && this.lastName ? this.lastName : ''
    
  }
  
}

console.log(new Dinglemouse("Clint", "Eastwood").getFullName());