import Nav from './modules/nav/Nav.js'

const App = () => {
  return `
     ${Nav()}
  `
}


  document.getElementById('root').innerHTML = App()


