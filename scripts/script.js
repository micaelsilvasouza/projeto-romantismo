let perfils = {
    perfil1: {
        nome: "Micael",
        imagem: "imagens/i1.jpg",
    },

    perfil2:{
        nome: "Mikael",
        imagem: "imagens/i2.jpg", 
    },

    perfil3:{
        nome:"Michael",
        imagem: "imagens/i3.jpg",
    }
}


function acessarPerfil(k){
    perfil.style.display = "block"
    res_busca.style.display = "none"
    imagem_perfil.setAttribute("src", perfils[k].imagem)
    nome.innerHTML = perfils[k].nome
}

function voltarBusca(){
    perfil.style.display = "none"
    res_busca.style.display = "block"
}

for(let i = 0; i < 3; i++){
    let icon = document.getElementsByClassName("icon")[i]
    icon.style.backgroundImage = `url(imagens/i${i+1}.jpg)`
}