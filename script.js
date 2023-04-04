let displaytab = document.getElementById('tab');
let btns = Array.from(document.querySelectorAll('button'))
let dispValue = "";
for(let values of btns){
    values.addEventListener('click', (element)=>{
        let entrVal = element.target.innerText;
        if(entrVal=='clr'){
            dispValue= ""
            displaytab.value = dispValue;
        }
        else if(entrVal=='='){
            displaytab.value = eval(dispValue)
        }
        else{
            dispValue += entrVal;
            displaytab.value = dispValue;
        }
    })
}