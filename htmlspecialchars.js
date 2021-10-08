function htmlspecialchars(formData) {
    splitFormData =  formData.split('')
    const converted = splitFormData.map((char,i) => {
      if(char === '<')  splitFormData[i] = '&lt;'
      if(char === '>')  splitFormData[i] = '&gt;'
      if(char === '"')  splitFormData[i] = '&quot;'
      if(char === '&')  splitFormData[i] = '&amp;'
      return splitFormData[i]
    }).join('')
    return converted
}
console.log(htmlspecialchars('<h2>Hello World</h2>'))

//* alternative
// return formData.replace(/&/g, "&amp;")
//                  .replace(/"/g, "&quot;")
//                  .replace(/</g, "&lt;")
//                  .replace(/>/g, "&gt;");