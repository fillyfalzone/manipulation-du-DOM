// Créer les"div" box
const box = document.createElement("div");
box.classList.add("box");
let nb = 1;

// //placer les boxes en enfant de la div board
// const board = document.querySelector("#board");
// board.appendChild(box);
// //ajouter le texte dans les boxes
// box.innerText = 1; //insérer du texte dans la boite 

for(let i = 1; i <= 10; i++){
    // on clone la box (le modèle) afin d'obtenir une box à afficher
    let newbox = box.cloneNode();
    newbox.innerText = i;
    board.appendChild(newbox);
    //associer l'evenement click au boite du jeu
    newbox.addEventListener("click", function(){ 
        if(i == nb){
            newbox.classList.add("box-clicked");
            if(nb == board.children.length){
                showReation("succes", box);
            }
            nb++;
        }
        else if(i > nb){
            showReation("error", newbox);
            nb = 1;
            board.querySelectorAll(".box-clicked").forEach(function(clickedBox){
                clickedBox.classList.remove("box-clicked");
            })
        } 
        else{
            showReation("notice", newbox);
        }
        
        
    })
}
shuffleChildren(board);
//trie aléatoirement les boxes

//isolons cette algorithme dans un fct° pour pouvoir l'utiliser à d'autres moments, voire dans d'autres projets

function shuffleChildren(parent){
    let children = parent.children;
    let i = children.length, k, temp;
    while(--i > 0){//on boucle tant que 1 oté de i est tjrs positif
        //k stock un nbr aléatoire basé sur i
        k = Math.floor(Math.random() * (i+1));
        // temp pointe temporairement l'élément à la position k dans board
        temp = children[k];
        //remplace l'élt à la posit° k par l'elt à la posit° i
        children[k] = children[i];
        //place l'elt k pointé temporairement à la fin du contenu de board
        parent.appendChild(temp);
    }
}

function showReation(type, clickedBox){
    clickedBox.classList.add(type);
    if(type !== "succes"){
        setTimeout(function(){
            clickedBox.classList.remove(type);
        }, 800)
    }
}




