
let name1= `["sudarshan"]`
name1=JSON.parse(name1)//changing string into array

//pushing string in name1
detail.push("kshetri")

//again changing array into the string
name1= JSON.stringify(detail)

//now the type od name1 is string
console.log(typeof name1)
