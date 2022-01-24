// Objetos
const btnPlayStop = document.getElementById('play-stop');
const btnReset = document.getElementById('reset');
document.getElementById('player').addEventListener("mouseover",sumarPuntos);

let stopWatchInterval;
let runningTime = 0;

const playPaused = () => {
    const isPaused = !btnPlayStop.classList.contains('running');

    if(isPaused){
        btnPlayStop.classList.add('running');
        start();
    }else{
        btnPlayStop.classList.remove('running');
        pause();
    }
}

const pause = () => {
    clearInterval(stopWatchInterval);
}

const reset = () => {
    btnPlayStop.classList.remove('running');
    runningTime = 0;
    clearInterval(stopWatchInterval);
    document.getElementById("tiempo").innerHTML = "Tiempo: "+ 30 +" s";
    btnPlayStop.classList.remove('running');
    resetarPuntos();
}

function resultadoFinal (resultado){
    if(resultado){
        alert("Ganaste");
        resetarPuntos();
        reset();
        
    }else{
        alert("Perdiste");
        resetarPuntos();
        reset();
    }
}

const start = () => {
    let starTime = Date.now() - runningTime;
    stopWatchInterval = setInterval(() => {
        runningTime = Date.now() - starTime;
        document.getElementById('tiempo').innerHTML = 'Tiempo: ' + calculateTime(runningTime)  + ' s';
    }, 1000);
}

// Contador segundos
const calculateTime = runningTime => {
    const total_seconds = Math.floor(runningTime/1000);
    const display_seconds = (total_seconds % 60).toString().padStart(2, '0' );
    let tiempoRestante = 30 - display_seconds;
    if(tiempoRestante == 0){
        resultadoFinal(false);
    }
    return `${tiempoRestante}`
}

// Puntos  
punto = 0;

function sumarPuntos(puntos){
    punto++;
    document.getElementById('puntos').innerHTML = "Puntos : <b>" + punto +"/60 </b>";
    randNumTop = Math.round(Math.random()* 240);
    document.getElementById("player").style.marginTop = randNumTop + "px";

    randNumLeft = Math.round(Math.random()*240);
    document.getElementById("player").style.marginLeft = randNumLeft + "px";

    if(punto == 60){
        resultadoFinal(true);
        resetarPuntos();
    }
}

function resetarPuntos(){
    punto = 0;
    document.getElementById('puntos').innerHTML = "Puntos : <b>" + 0 +"/60 </b>";
}

