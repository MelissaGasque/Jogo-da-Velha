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

function reset(){
    document.getElementById("c1").innerHTML = "" 
    document.getElementById("c2").innerHTML = "" 
    document.getElementById("c3").innerHTML = "" 
    document.getElementById("c4").innerHTML = "" 
    document.getElementById("c5").innerHTML = "" 
    document.getElementById("c6").innerHTML = "" 
    document.getElementById("c7").innerHTML = "" 
    document.getElementById("c8").innerHTML = "" 
    document.getElementById("c9").innerHTML = ""      
}

