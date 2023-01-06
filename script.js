function carregar(){
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    let minutos = data.getMinutes()
    msg.innerHTML = `<p>Agora são: ${hora} horas e ${minutos} minutos</p>`
    if (hora >= 0 && hora < 12){
        // BOM DIA!
        msg.innerHTML += `<p>Bom dia!</p>`
        img.src = 'images/manha.jpg'
        document.body.style.background = '#c7a464'
    } else if (hora >= 12 && hora < 18){
        // BOA TARDE!
        msg.innerHTML += `<p>Boa tarde!</p>`
        img.src ='images/tarde.jpg'
        document.body.style.background = '#8a390c'
    } else{
        // BOA NOITE!
        msg.innerHTML += `<p>Boa noite!</p>`
        img.src = 'images/noite.jpg'
        document.body.style.background = '#2a2a2a'
    }
}