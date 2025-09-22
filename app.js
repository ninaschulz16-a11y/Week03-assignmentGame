console.log("hello takoyaki lovers!");


let state = {
    takoyakiCount: 0,
    tps: 1,
    purchasedUpgrades: []
};

function sum(a, b){
    return a+b;
}

const takoyaki = document.getElementById("takoyaki");
const takoyakiCountDisplay = document.getElementById("takoyakiUPby");
const tpsDisplay = document.getElementById("tps")

function updateDisplay (){
    takoyakiCountDisplay.textContent = "UP and UP: " + state.takoyakiCount;
    tpsDisplay.textContent = "Takoyaki per second: " + state.tps;
}

setInterval(function(){
    state.takoyakiCount= state.takoyakiCount + state.tps
    updateDisplay();
    saveProgress();
},1000)



takoyaki.addEventListener("click", ()=> {
    state.takoyakiCount++;
    updateDisplay();
    saveProgress();

});
updateDisplay();

//Let's get that API now!
async function fetchData() {

    const response = await fetch(`https://custom-apis-beta.vercel.app/nina`)
   
   const data = await response.json ();
   
   console.log(data);

   const stall = document.getElementById("stall");

  
   data.forEach(upgrade => {

    const item = document.createElement("div");

    item.classList.add("upgrade");

    item.innerHTML =`
      <h3>${upgrade.name}</h3>
      <p>Cost: ${upgrade.cost}</p>
      <p>+${upgrade.increase} TPS</p>
    `;
   
    const  button = document.createElement("button");
    button.innerText = "Buy";

    button.addEventListener("click", ()=> {
        purchaseUpgrade(upgrade, button);
    });

item.append(button);
stall.appendChild(item);


   });
}

fetchData()


function purchaseUpgrade(upgrade, button) {
    if (state.takoyakiCount >= upgrade.cost) {
        state.takoyakiCount = sum(state.takoyakiCount, -upgrade.cost); 
        state.tps = sum(state.tps, upgrade.increase); 
       
    if(!state.purchasedUpgrades.includes(upgrade.id)) {
        state.purchasedUpgrades.push(upgrade.id);
    }
     updateDisplay();   
     saveProgress();

     if (button){
        button.disabled = true;
        button.innerText = "Purchased";

     }
        
    } else 
        {
        alert("Ah ah ah! You don't have enough tako to yaki!");
    }
}
function saveProgress(){
    localStorage.setItem("takoyakiState", JSON.stringify(state));
}

function loadGame(){
const savedGame = localStorage.getItem("takoyakiState");
if (savedGame){
    Object.assign(state,JSON.parse(savedGame));
    updateDisplay();
}

}

loadGame();