let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open')
}

document.addEventListener('click', (e) => {
    let dropbtn = e.target.closest('.dropbtn')
    if (dropbtn) {
        e.preventDefault()
        let content = dropbtn.nextElementSibling
        if (content && content.classList.contains('dropdown-content')) {
            content.classList.toggle('show')
            dropbtn.classList.toggle('active')
        }
        return
    }
    document.querySelectorAll('.dropdown-content.show').forEach(el => {
        if (!el.closest('.dropdown').contains(e.target)) {
            el.classList.remove('show')
            el.previousElementSibling.classList.remove('active')
        }
    })
})