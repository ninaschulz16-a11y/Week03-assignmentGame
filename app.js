let takoyakiCount = 0
let tps = 1

let state = {
    takoyakiCount: 0,
    tps: 1
}

setInterval(function(){
    takoyakiCount= takoyakiCount + tps
    console.log (takoyakiCount)
},1000)

