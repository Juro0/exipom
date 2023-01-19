
document.getElementsByClassName('mob-showInfo')[0].addEventListener(
    'click',
    ()=>{
        document.getElementsByClassName('info')[0].classList.toggle('showen')
    }
)

let mobileMod = false
const head = document.getElementsByTagName('head')[0]

let activeMod = () => {
    let linkel = document.createElement('link')
    linkel.rel = 'stylesheet'
    linkel.href = 'assets/css/style-sm.css'
    linkel.id = 'mobileModID'
    head.appendChild(linkel)
}

let disactiveMod = () => {
    head.removeChild(document.getElementById('mobileModID'))
}

document.getElementsByClassName('mobileMod')[0].addEventListener(
    'click',
    ()=>{
        if(!mobileMod){
            activeMod()
        } else {
            disactiveMod()
        }
        mobileMod = !mobileMod
    }
)
