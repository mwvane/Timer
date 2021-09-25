let isTimerOn = false;
const conteiner = document.createElement('div');
conteiner.className += "text-center";
document.body.className += "text-center"
const divMain = document.createElement('div');
divMain.style.backgroundColor = 'black';
divMain.style.width = 500+'px';
divMain.style.height = 400 + 'px';
divMain.style.left = 100+'px';
divMain.style.top = 80+'px';
divMain.style.borderRadius = '5%';
divMain.style.marginLeft = "calc(50% - 200px)"
divMain.classList.add('mt-2')
conteiner.append(divMain);
document.body.append(conteiner)

const spanParent = document.createElement('div');
divMain.append(spanParent);
const btnStart = getButton("Start");
divMain.append(btnStart);

const btnStop = getButton("Stop");
divMain.append(btnStop);

const btnReset= getButton("Reset");
divMain.append(btnReset);

const spanH = getSpan('hour');
spanParent.append(spanH);

const spanM = getSpan('minute');
spanParent.append(spanM);

const spanS = getSpan('second');
spanParent.append(spanS);
console.log(spanParent)
//events 
let t;
function startTimer(){
    if(!isTimerOn){
        t = setInterval(startCount,1000);
    }
    isTimerOn = true;
}

// stop timer
 function stopTimer(){
     clearInterval(t);
     isTimerOn = false;
 }

btnStart.addEventListener('click',startTimer);

btnStop.addEventListener('click',stopTimer)

function startCount(){

    spanPlusOne(spanS);
}

//span inner text plus one
function spanPlusOne(span){
    let num = Number(span.innerText);
    if(num === 59){
        span.innerText = "0";
        spanPlusOne(spanM);
        if(spanM.innerText == "59"){
            spanM.innerText = "0";
            spanPlusOne(spanH)
        }
        return;
    }
    span.innerText = (num+1).toString();
}
//reset timer;
btnReset.addEventListener('click',function(e){
    //stopTimer();
    spanH.innerText = "0";
    spanM.innerText = "0";
    spanS.innerText = "0";

});

//return button
function getButton(text,widt = 60,height = 30){
    let btn = document.createElement('button');
    btn.className = "btn btn-primary m-2"
    btn.innerText = text;
    return btn;
}

//return span
function getSpan(id,text = "0",width = 50, height = 50){
    let spn = document.createElement('span');
    spn.style.width = width + 'px';
    spn.style.height = height + 'px';
    spn.innerText = text;
    spn.style.alignItems = 'cemter';
    spn.style.color = 'white';
    spn.style.fontSize = 50+'px';
    return spn;
}
