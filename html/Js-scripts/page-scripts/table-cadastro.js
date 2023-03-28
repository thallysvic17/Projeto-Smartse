
const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')


document.getElementById('cadastrarCliente')
    addEventListener('click', openModal)

document.getElementById('modalclose')
    addEventListener('click', closeModal)