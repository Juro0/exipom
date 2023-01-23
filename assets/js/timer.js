let pause = false
let interval = ""

let timerEnded = () => {
    if(JSON.parse(localStorage.set2)){
        sendNotification('timer ended!')
    }
    if(JSON.parse(localStorage.set1)){
        if(getActiveMod() == 'focus'){
            clearActive(document.getElementsByClassName('mod'))
            active(document.getElementsByClassName('mod')[1])
            changeMod('short')
        }
        else if(getActiveMod() == 'short'){
            clearActive(document.getElementsByClassName('mod'))
            active(document.getElementsByClassName('mod')[0])
            changeMod('focus')
        }
        else if(getActiveMod() == 'long'){
            clearActive(document.getElementsByClassName('mod'))
            active(document.getElementsByClassName('mod')[0])
            changeMod('focus')
        }
        // START THE TIMER
        pause = false
        startATimer(parseInt(timer.innerHTML[0] + timer.innerHTML[1]))
    }
}

let startATimer = time => {
    let countDownDate = new Date().getTime() + (time*60000);
    interval = setInterval(()=>{
        if(!pause){
            const actualDate = new Date()
            let distance = countDownDate - actualDate
            let distanceSecond = Math.floor(distance/1000)
            
            let minutes = Math.floor(distanceSecond/60);
            let seconds = Math.floor(distanceSecond % 60);
            
            if(minutes.toString().length==1){
                minutes = '0'+minutes
            }
            if(seconds.toString().length==1){
                seconds = '0'+seconds
            }
            timer.innerHTML = minutes.toString() + ':' + seconds.toString()

            if(distanceSecond <= 0){
                clearInterval(interval)
                timerEnded()
            }

        } else {
            countDownDate += 100
        }

    }, 100)
}

let controlTimer = id => {
    if(id=='play'){
        clearInterval(interval)
        pause = false
        changeMod(getActiveMod())
        startATimer(parseInt(timer.innerHTML[0] + timer.innerHTML[1]))
    }
    if(id=='pause'){
        pause = !pause
        document.getElementById('pause').classList.toggle('active')
    }
    if(id=='stop'){
        clearInterval(interval)
        changeMod(getActiveMod())
    }
}

let addControlListener = () => {
    for(let controlBtn of document.getElementsByClassName('control-btn')){
        controlBtn.addEventListener('click', ()=>{
            controlTimer(controlBtn.id)
        })
    }
}

addControlListener()