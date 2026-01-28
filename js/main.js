const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelectorAll(selector)

$('#year').textContent = new Date().getFullYear()

const themeBtn = $('#toggleTheme')
const savedTheme = localStorage.getItem('theme')

if (savedTheme) {
    document.documentElement.dataset.theme = savedTheme
}

themeBtn.addEventListener('click', () => {
    const current = document.documentElement.dataset.theme
    const next = current === 'dark' ? 'light' : 'dark'

    document.documentElement.dataset.theme = next
    localStorage.setItem('theme', next)
})

const btnCopy = $('#btnCopyEmail')
const copyStatus = $('#copyStatus')

const EMAIL = 'mateusenrique123@email.com'

btnCopy.addEventListener('click', async () => {
    try {
    await navigator.clipboard.writeText(EMAIL)
    copyStatus.textContent = 'E-mail copiado!'
    } catch (e) {
    copyStatus.textContent = 'Não consegui copiar automaticamente :('
    }
})

const form = $('#formContato')
const formStatus = $('#formStatus')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    formStatus.textContent =
    'Mensagem simulada! Obrigado por testar.'

    form.reset()
})
