var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.getElementById("ul");
var item = document.getElementsByTagName("li");

//função vai retornar o tamanho do que foi digitado no input
function inputLength(){
    return input.value.length;
}

//quando adicionar um item na lista vai aparecer embaixo do input o que você adicionou.
function createListElement(){
    var li = document.createElement("li");

    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    function crossOut(){
        li.classList.toggle("done");
    }

    li.addEventListener("click",crossOut);

    var dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("X"));
    li.appendChild(dBtn);
    dBtn.addEventListener("click", deleteListItem);

    function deleteListItem(){
        li.classList.add("delete");
    }
}


enterButton.addEventListener("click",addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

function addListAfterClick(){
    if (inputLength() > 0){
        createListElement();
    }
}
    
function addListAfterKeypress(){
    if(inputLength() > 0 && event.which === 13){
        createListElement();
    }
}

