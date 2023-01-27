
// DECLARE THE ELEMENTS

// check
const check1 = document.getElementById('check1')
const check2 = document.getElementById('check2')
// number
const check3 = document.getElementById('check3')
const check4 = document.getElementById('check4')
const check5 = document.getElementById('check5')
// color
const check6 = document.getElementById('check6')
const check7 = document.getElementById('check7')
const check8 = document.getElementById('check8')
const check9 = document.getElementById('check9')
const check10 = document.getElementById('check10')
const check11 = document.getElementById('check11')
const check12 = document.getElementById('check12')
const check13 = document.getElementById('check13')

// DEFAULT SETTINGS

let defaultSettings = () => {
    localStorage.setItem('visited', true);
    localStorage.setItem('set1', true);
    localStorage.setItem('set2', false);
    localStorage.setItem('set3', 25);
    localStorage.setItem('set4', 05);
    localStorage.setItem('set5', 15);
    localStorage.setItem('set6', "#ef4a5a");
    localStorage.setItem('set7', "#7aecdb");
    localStorage.setItem('set8', "#5a6de6");
    localStorage.setItem('set9', "#292a2d");
    localStorage.setItem('set10', "#1b1c1d");
    localStorage.setItem('set11', "#ffeeff");
    localStorage.setItem('set12', "#abaeb3");
    localStorage.setItem('set13', "#ef4a5a");
}

// APPLY THE SETTINGS

let applyLocalStorage = () => {
    check1.checked = JSON.parse(localStorage.set1)
    check2.checked = JSON.parse(localStorage.set2)
    check3.value = localStorage.set3
    check4.value = localStorage.set4
    check5.value = localStorage.set5
    check6.value = localStorage.set6
    check7.value = localStorage.set7
    check8.value = localStorage.set8
    check9.value = localStorage.set9
    check10.value = localStorage.set10
    check11.value = localStorage.set11
    check12.value = localStorage.set12
    check13.value = localStorage.set13
}

// APPLY THE THEME

let setColor = (name, value) => {
    document.querySelector(':root').style.setProperty(`--clr-${name}`, value);
}

let applyTheme = () => {
    setColor('first-timer', localStorage.set6)
    setColor('second-timer', localStorage.set7)
    setColor('third-timer', localStorage.set8)
    setColor('background', localStorage.set9)
    setColor('secondary', localStorage.set10)
    setColor('title', localStorage.set11)
    setColor('text', localStorage.set12)
    setColor('accent', localStorage.set13)
}

// SAVE NEW SETTINGS

let checkCorrectInput = () => {
    if(!Number.isInteger(parseInt(check3.value))){
        alert('attention, the input "duration of focus" must contain a number (expressed in minutes)')
        return false
    }
    if(!Number.isInteger(parseInt(check4.value))){
        alert('attention, the input "duration of short break" must contain a number (expressed in minutes)')
        return false
    }
    if(!Number.isInteger(parseInt(check5.value))){
        alert('attention, the input "duration of long break" must contain a number (expressed in minutes)')
        return false
    }
    if(!(check3.value.length==2)){
        if(check3.value.length==1){
            check3.value = '0'+check3.value
        } else {
            alert('attention, the input "duration of focus" must be a two digit number')
            return false
        }
    }
    if(!(check4.value.length==2)){
        if(check4.value.length==1){
            check4.value = '0'+check4.value
        } else {
            alert('attention, the input "duration of short break" must be a two digit number')
            return false
        }
    }
    if(!(check5.value.length==2)){
        if(check5.value.length==1){
            check5.value = '0'+check5.value
        } else {
            alert('attention, the input "duration of long break" must be a two digit number')
            return false
        }
    }
    return true
}

let saveInfo = (mainPage=true) => {
    if(checkCorrectInput()){
        localStorage.clear()
        localStorage.setItem('visited', true)
        localStorage.setItem('set1', check1.checked);
        localStorage.setItem('set2', check2.checked);
        localStorage.setItem('set3', check3.value);
        localStorage.setItem('set4', check4.value);
        localStorage.setItem('set5', check5.value);
        localStorage.setItem('set6', check6.value);
        localStorage.setItem('set7', check7.value);
        localStorage.setItem('set8', check8.value);
        localStorage.setItem('set9', check9.value);
        localStorage.setItem('set10', check10.value);
        localStorage.setItem('set11', check11.value);
        localStorage.setItem('set12', check12.value);
        localStorage.setItem('set13', check13.value);
        applyLocalStorage()
        applyTheme()
        if(mainPage){
            document.getElementById('clock').click()
        }
    }
}

// ASK FOR CONFIRM

let askForConfirm = () => {
    if ( confirm("you're about to reset to default settings. this action cannot be revoked.") ) {
        return true
    }
    return false
}

// RESET THE SETTINGS

let resetAll = () => {
    if(askForConfirm()){
        localStorage.clear()
        defaultSettings()
        applyLocalStorage()
        applyTheme()
    }
}

// ADD CLICK LISTENER

const saveBtn = document.getElementsByClassName('settings-save')[0]
const resetBtn = document.getElementsByClassName('settings-default')[0]

saveBtn.addEventListener('click', () => {
    saveInfo()
})

resetBtn.addEventListener('click', () => {
    resetAll()
})

// ON LOAD

if(localStorage.getItem("visited")==undefined){
    defaultSettings()
}

applyLocalStorage()
applyTheme()
