import './App.css'
import InputID from './components/InputID'
import title from './assets/title.png' 

function App() {
  return (
    <div className="App">
      <header>
        <div id='anchor-name'>
          <img src={title} alt="" />
        </div>
      </header>
      <InputID />
      <a href="#anchor-name"> HOME </a>
    </div>
  )
}

export default App
