
const themeEl = document.getElementById('themes')

let showTheme = () => {
    themeEl.classList.add('show')
}

let hideTheme = () => {
    themeEl.classList.remove('show')
}

let toggleTheme = () => {
    themeEl.classList.toggle('show')
}

let applicateTheme = (colors) => {
    check6.value = colors.focusTimer
    check7.value = colors.shortBreakTimer
    check8.value = colors.longBreakTimer
    check9.value = colors.background
    check10.value = colors.secondary
    check11.value = colors.title
    check12.value = colors.text
    check13.value = colors.accent
    saveInfo(mainPage=false)
}

// =============== GENERATE

const parentTheme = document.getElementsByClassName('all-themes')[0]

let generateThemes = themeList => {
    for(const themeObj of themeList){
        
        let div = document.createElement('div')
        div.classList.add('theme')
        div.id = themeObj.name

        let span1 = document.createElement('span')
        span1.classList.add('infos')

        let p1 = document.createElement('p')
        p1.classList.add('name')
        p1.innerText = themeObj.name.replace('-', ' ')

        let p2 = document.createElement('p')
        p2.classList.add('author')
        p2.innerText = themeObj.author

        let span2 = document.createElement('span')
        span2.classList.add('colors')

        let color1 = document.createElement('span')
        let color2 = document.createElement('span')
        let color3 = document.createElement('span')
        let color4 = document.createElement('span')
        let color5 = document.createElement('span')
        let color6 = document.createElement('span')
        let color7 = document.createElement('span')
        let color8 = document.createElement('span')
        
        color1.classList.add('color')
        color2.classList.add('color')
        color3.classList.add('color')
        color4.classList.add('color')
        color5.classList.add('color')
        color6.classList.add('color')
        color7.classList.add('color')
        color8.classList.add('color')

        color1.style.background = themeObj.colors.focusTimer
        color2.style.background = themeObj.colors.shortBreakTimer
        color3.style.background = themeObj.colors.longBreakTimer
        color4.style.background = themeObj.colors.background
        color5.style.background = themeObj.colors.secondary
        color6.style.background = themeObj.colors.title
        color7.style.background = themeObj.colors.text
        color8.style.background = themeObj.colors.accent

        span1.appendChild(p1)
        span1.appendChild(p2)
        span2.appendChild(color1)
        span2.appendChild(color2)
        span2.appendChild(color3)
        span2.appendChild(color4)
        span2.appendChild(color5)
        span2.appendChild(color6)
        span2.appendChild(color7)
        span2.appendChild(color8)
        div.appendChild(span1)
        div.appendChild(span2)
        parentTheme.appendChild(div)
        
    }
}
generateThemes(allTheThemes)

// =============== LISTENERS

// THEMES
let addThemesListeners = () => {
    for(let theme of document.getElementsByClassName('theme')){
        theme.addEventListener('click', ()=>{
            for(let themeObj of allTheThemes){
                if(themeObj.name == theme.id){
                    applicateTheme(themeObj.colors)
                }
            }
        })
    }
}
addThemesListeners()

// SHADOW
document.getElementsByClassName('shadow')[0].addEventListener(
    'click',
    ()=>{
        hideTheme()
    }
)

// CLOSE
document.getElementsByClassName('theme-close')[0].addEventListener(
    'click',
    ()=>{
        hideTheme()
    }
)
