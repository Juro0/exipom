
// ===================================================== FLOWING TOGGLER

let clearActive = classElements => {
    for(let el of classElements) {
        el.classList.remove('active')
    }
}

let active = el => {
    el.classList.add('active')
}

let flowingToggler = classId => {
    classElements = document.getElementsByClassName(classId)
    for(let el of classElements) {
        el.addEventListener('click', ()=>{
            clearActive(document.getElementsByClassName(el.classList[0]))
            active(el)
        })
    }
}

let getActiveMod = () => {
    classElements = document.getElementsByClassName('mod')
    for(let el of classElements) {
        if(el.classList.contains('active')){
            return el.id
        }
    }
}

flowingToggler('menu-btn')
flowingToggler('mod')

// ===================================================== MENU

const clockPage = document.getElementsByClassName('clock')[0]
const settingsPage = document.getElementsByClassName('settings')[0]
const infoPage = document.getElementsByClassName('info')[0]

let clearPagesClasslist = () => {
    for(let el of document.getElementsByClassName('page')){
        el.classList.remove('pos-1')
        el.classList.remove('pos-2')
        el.classList.remove('pos-3')
        el.classList.remove('pos-4')
        el.classList.remove('pos-5')
    }
}

let showPage = id => {
    clearPagesClasslist()
    if(id=='clock'){
        clockPage.classList.add('pos-3')
        settingsPage.classList.add('pos-4')
        infoPage.classList.add('pos-5')
    }
    if(id=='settings'){
        clockPage.classList.add('pos-2')
        settingsPage.classList.add('pos-3')
        infoPage.classList.add('pos-4')
    }
    if(id=='info'){
        clockPage.classList.add('pos-1')
        settingsPage.classList.add('pos-2')
        infoPage.classList.add('pos-3')
    }
}

let addMenuListener = () => {
    for(let menuBtn of document.getElementsByClassName('menu-btn')){
        menuBtn.addEventListener('click', ()=>{
            showPage(menuBtn.id)
        })
    }
}

addMenuListener()

// ===================================================== CHANGE MODALITY

const timer = document.getElementsByClassName('timer')[0]

let timerClassClear = () => {
    timer.classList.remove('focus')
    timer.classList.remove('short')
    timer.classList.remove('long')
}

let changeMod = id => {
    if(id=='focus'){
        timer.innerHTML = localStorage.set3 + ":00"
    }
    if(id=='short'){
        timer.innerHTML = localStorage.set4 + ":00"
    }
    if(id=='long'){
        timer.innerHTML = localStorage.set5 + ":00"
    }
    timerClassClear()
    timer.classList.add(id)
    try {
        clearInterval(interval)
    } catch {}
}

let addModListener = () => {
    for(let modBtn of document.getElementsByClassName('mod')){
        modBtn.addEventListener('click', ()=>{
            changeMod(modBtn.id)
        })
    }
}

changeMod('focus')
addModListener()
