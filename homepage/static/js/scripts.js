let button = document.querySelector('.toggle-dark-mode')

button.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark-mode')
    document.querySelectorAll('.inverted').forEach((elem) => {
        elem.classList.toggle('invert')
    });
})