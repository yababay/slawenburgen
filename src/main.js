import Aside   from './components/Aside.svelte'
import setMain from './router.js'

new Aside({target: document.querySelector('nav')})

window.location.hash = '/'

setMain()

document.querySelector('header .navbar-brand span').textContent = document.title

