function correct(string)
{
	return string.split('').map((s,i)=>{
        if(s == '0')
            return string[i] = 'O'
        if(s == '5')
            return string[i] = 'S'
        if(s == '1')
            return string[i] = 'I'
        return s
    }).join('')
}
console.log(correct('L0ND0N'));