const miPromesa = new Promise((resolve, reject) => {
    setTimeout(()=> {
        let exito = true
        if(exito === true){
            resolve('Fuerza clase ustedes pueden!')
        }else{
            reject('Fallido')
        }
    }, 1000)
})

miPromesa
    .then(res => {
        console.log(res)

    })
    .catch(res => {
        console.log(res)
    })