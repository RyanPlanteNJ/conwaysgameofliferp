function reset(){
    counter = 0
    gen.innerHTML = 'Gen: 0'
}
function random(){
    reset();
    for(i = 0; i < height; i++){
        for(j = 0; j < width; j++){
            canvasArr[i][j] = 0
            item = document.getElementById(`r${i}c${j}`)
            item.classList.remove('on')
            if(Math.random() > .6 ){
                canvasArr[i][j] = 1
                item.classList.add('on')
            }
        }
    }
}

function play(){
    let button = document.querySelector('#play')
    running = !running
    if(running){
        button.innerHTML = 'PAUSE'
        timer = setInterval(()=>{sim()},speed)
    }else{
        clearInterval(timer)
        button.innerHTML = 'PLAY'
    }
}


function decrease(){
    var tracker = document.getElementById('speedTracker')
    if(speed < 2000){
        speed -= 10
        tracker.innerHTML = `SPEED: ${speed}ms`
    }
}

function increase(){
    var tracker = document.getElementById('speedTracker')
    if(speed > 10){
        speed += 10
        tracker.innerHTML = `SPEED: ${speed}ms`
    }
}


function next(){
    running = true
    sim()
    running = !running
}

function clearBoard(){
    reset()
    starty = 0
    startx = 0
    if(running){
        togglePlay()
    }
    for(y = 0; y < height; y++){
        for(x = 0; x < width; x++){
            let item = document.getElementById(`r${y}c${x}`)
            canvasArr[y][x] = 0
            item.classList.remove('on')
        }
    }
}

function increment(dir, amount){
    if(dir ==='x'){
        var x = document.getElementById('xwidth')
        if (width < 120 && amount > 0){
            width += amount
        }else if(width > 10 && amount < 0){
            width += amount
        }
        x.innerHTML = `WIDTH: ${width}`
    }else{
        var y = document.getElementById('yheight')
        if (height < 120 && amount > 0){
            height += amount
        }else if(height > 10 && amount < 0){
            height += amount
        }
        y.innerHTML = `HEIGHT: ${height}`
    }
    reinitialize()
}
