let buttons = document.getElementsByTagName('button');

let result = document.getElementById('result');

for(i=0;i<buttons.length;i++){
    buttons[i].onclick = function(){
        let input = this.innerText;
        updateDisplay(input)
    }
}

function updateDisplay(input){
    let currentDisplay = result.innerText
    if(currentDisplay=="0"){
        if(input!="AC"&&input!="DE"&&input!="="){
           result.innerText=""
           result.innerText+=input
        }
    }
    else {
        if(input=="DE"){
            result.innerText = currentDisplay.substring(0,currentDisplay.length-1)
            if(result.innerText==""){
                result.innerText="0"
            }
        }
        if(input=="AC"){
            result.innerText="0"
        }
        if(input!="AC"&&input!="DE"&&input!="="){
            result.innerText+=input
            x = x+5
            x+=8
        }
        if(input=="="){
            let display = result.innerText
            result.innerText = eval(display)
        }
    }
}