const keys = document.querySelector(".allkeys")
const buttons = document.querySelectorAll("button")
const audio = document.querySelectorAll("audio")


keys.addEventListener('click', e => {
    removeClass()
    audio.forEach(sound => {
        if (sound.className === e.target.id) {
            buttons.forEach(button => {
                if (button.id === e.target.id) {
                    button.classList.add("sound")
                }
            })
            sound.play()
        } else {
            sound.pause()
            sound.currentTime = 0.0;
        }
    })
})

document.addEventListener('keyup', function(e) {
    removeClass()
    audio.forEach(sound => {
        if (sound.className === e.code) {
            buttons.forEach(button => {
                if (button.id == e.code) {
                    button.classList.add("sound")
                }
            })
            sound.play()
        } else {
            sound.pause()
            sound.currentTime = 0.0;
        }

    })
})


const removeClass = function() {
    buttons.forEach(button => {
        button.classList.remove("sound")
    })
}