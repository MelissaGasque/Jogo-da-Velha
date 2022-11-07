let jogador = "X"

function clicar(casa){
    if(casa.innerHTML != "")
    return // Não permite que a casa clicada seja clicada novamente
    
    if(jogador === "X"){ //Caso o jogador seja X 
        casa.innerHTML = "<p>X</p>"  //Será adicionado o texto X
        jogador = "O"   // O jogador deixa de ser X e passa a ser O
    }else{ // Caso o jogador não seja o X
        casa.innerHTML = "<p>O</p>" // Será adicionado texto O
        jogador = "X" // E o proximo jogador será o X
    }     
       //ATENÇÃO!! É importante adicionar o this 

    
}


    let casa1 =document.getElementById("c1")
    let casa2 =document.getElementById("c2")
    let casa3 =document.getElementById("c3")
    let casa4 =document.getElementById("c4")
    let casa5 =document.getElementById("c5")
    let casa6 =document.getElementById("c6")
    let casa7 =document.getElementById("c7")
    let casa8 =document.getElementById("c8")
    let casa9 =document.getElementById("c9")   

function reset(){
    casa1.innerHTML = ""
    casa2.innerHTML = ""
    casa3.innerHTML = ""
    casa4.innerHTML = ""
    casa5.innerHTML = ""
    casa6.innerHTML = ""
    casa7.innerHTML = ""
    casa8.innerHTML = ""
    casa9.innerHTML = ""   
}

