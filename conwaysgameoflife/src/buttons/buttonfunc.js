function reset(){
  count = 0
  gen.innerHTML = 'Gen 0'
}

function random(){
  reset();
  for (i = 0; i < height; i++){
    for (j = 0; j < width; j++){
      canvasArr[i][j] = 0
      item = document.getElementbyId('r${i}c${j}')
      item.classList.remove('on')
      if(Math.random() > .6){
        canvasArr[i][j] = 1
        item.ClassList.add('on')
      }
    }
  }
}

function play(){
  running = !running
  if(running){
    timer = setInterval(()=> {sim()}, speed)
  }else{
    clearInterval(timer)
  }
}

function decrease(){
  var tracker = document.getElementById('speedTracker')
  if(speed < 2000){
    speed += 10
    tracker.innerHTML = `speed: ${speed}ms`
  }
}

function increase(){
  var tracker = document.getElementById('speedTracker')
  if(speed > 10 ){
    speed -=10
    tracker.innerHTML = `speed: ${speed}ms`
  }
}


function next(){
  running = true
  sim()
  running = !running
}

function clearBoard(){
  reset()
  starty=0
  startx=0
  if(running){
    play()
  }
  for (y = 0; y < height; y++){
    for (x= 0; x < width; x++){
      let item = document.getElementById(`r${y}c${x}`)
      canvasArr[y][x] = 0
      item.classList.remove('on')
    }
  }
}

function increment(){
  if(dir==='x'){
    var x = document.getElementById('xwidth')
    if (width < 120 && amount > 0){
      width += amount
    }else if(width > 10 && amount < 0){
      width += amount
    }
    x.innerHTML = `Width: ${width}`
    }else{
      var y = document.getElementbyId('yheight')
      if (height < 120 && amoount > 0){
        height += amount
      }else if(width > 10 && amount < 0){
        height += amount
      }
    y.innerHTML = `Height: ${height}`
    }
    reinitialize()
  }
