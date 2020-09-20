let button = document.querySelector('.toggle-dark-mode')

button.addEventListener('click', () => {
    console.log('clicked')
    document.documentElement.classList.toggle('dark-mode')
})