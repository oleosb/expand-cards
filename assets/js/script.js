let card = document.querySelectorAll('.card')
let closeBtn = document.querySelector('.close-poster')
let posterContainer = document.querySelector('.poster-container')
let poster = document.querySelector('.poster')

card.forEach(card => {
        card.addEventListener('click', () => {
                if (card.classList.contains('active')) {
                        posterContainer.classList.add('show')
                        poster.src = card.style.backgroundImage.slice(4, -1).replace(/"/g, "")
                        setTimeout(() => poster.classList.add('clip'), 1)
                } else {
                        removeActive()
                        card.classList.add('active')
                }
        })
})

closeBtn.addEventListener('click', () => {
        posterContainer.classList.remove('show')
        poster.classList.remove('clip')
})

function removeActive() {
        card.forEach(card => card.classList.remove('active'))
}
