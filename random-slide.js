function getRandomNumber(min, max) {
    let randomNumber = (Math.random() * (max - min) + min).toFixed(0)
    let number = parseInt(randomNumber)
    return number
}
function createStack(children) {
    let array = []
    let isDone = false
    while (!isDone) {
        let random = getRandomNumber(0, children.length - 1)
        while (array.includes(random)) {
            random = getRandomNumber(0, children.length - 1)
        }
        array.push(random)
        if (array.length === children.length) isDone = true
    }
    return array
}
function initLoadAnimation(children, stack, direction) {
    let offset
    if (direction === 'X') offset = children[0].offsetWidth
    else offset = children[0].offsetHeight
    for (let i = 0; i < children.length; i++) {
        children[i].style.transform = `translate${direction}(${stack[i] * offset}px)`
    }
}
function randomSlide(imgContainer, options = { direction: 'X', delay: 2000 }) {
    if (!options.hasOwnProperty('direction')) options.direction = 'X'
    if (!options.hasOwnProperty('delay')) options.delay = 2000
    const children = Array.from(imgContainer.children)
    let stack = createStack(children)
    let offset
    if (options.direction === 'X') offset = children[0].offsetWidth
    else offset = children[0].offsetHeight
    initLoadAnimation(children, stack, options.direction)
    setInterval(() => {
        for (let i = 0; i < children.length; i++) {
            children[i].style.transform = `translate${options.direction}(${stack[i] * offset}px)`
        }
        stack = createStack(children)
    }, options.delay)
}
export default randomSlide