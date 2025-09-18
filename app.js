
let state = {
    takoyakiCount: 0,
    tps: 1
};

function updateDisplay (){
    takoyakiCountDisplay.textContent = state.takoyakiCount;
    tpsDisplay.textContent = state.tps;
}

setInterval(function(){
    state.takoyakiCount= state.takoyakiCount + state.tps
    updateDisplay();
},1000)

const takoyaki = document.getElementById("takoyaki");
const takoyakiCountDisplay = document.getElementById("takoyakiUPby");
const tpsDisplay = document.getElementById("tps")


takoyaki.addEventListener("click", ()=> {
    state.takoyakiCount++;
    updateDisplay();

});
updateDisplay();

//Let's get that API now!

