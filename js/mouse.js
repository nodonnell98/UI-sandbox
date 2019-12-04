
const root = document.querySelector('#sectionUno')

// Real cursor element
const cursor = document.createElement('div')
cursor.setAttribute("id", "mouse");
cursor.classList.add('cursor')
root.appendChild(cursor)



root.addEventListener('mousemove', (e) => {
    setPosition(cursor, e)
})

function setPosition(element, e) {
    element.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
}