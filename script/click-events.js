
function get_active(class_name) {

    const elements = document.getElementsByClassName(class_name)

    for(const element of elements) {

        if(element.classList.contains('active')) return element

    }

    return false

}

function clear_active(class_elements) {

    for(const element of class_elements) element.classList.remove('active')

}

function flowing_toggler(class_name) {

    const elements = document.getElementsByClassName(class_name)

    for(const element of elements) {

        element.addEventListener('click', ()=>{

            clear_active(elements)

            element.classList.add('active')

        })

    }

}

// ============================================

function one_toggler(query) {

    const element = document.querySelector(query)

    element.addEventListener('click', ()=>{

        element.classList.toggle('active')

    })

}

// ============================================

function add_listener(query, fun) {

    const element = document.querySelector(query)

    element.addEventListener('click', ()=> fun.call() )

}

function add_listeners(class_name, fun) {

    const elements = document.getElementsByClassName(class_name)

    for(const element of elements) {

        element.addEventListener('click', ()=> fun.call() )

    }


}

// ============================================

function url_handler(url, same_page=true) {

    if(same_page) location.href = url

    else window.open(url)

}
