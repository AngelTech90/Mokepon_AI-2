
let promptAi;//*Var for get the object that generate our backend response

function setNewPrompt(prompt){
    promptAi = prompt;
}

//*With this function we get the ai object generated in our backend:
function setPathForPrompts(){
    fetch("http://localhost:5500/join")
        .then(function(res){
            console.log(res);
        if(res.ok){
            res.json()
            .then(function(response){
                setNewPrompt(response);
            })
        }
    })
}

setPathForPrompts();


