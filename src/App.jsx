import './App.css'
import InputID from './components/InputID'
import title from './assets/title.png' 

function App() {
  return (
    <div className="App">
      <header>
        <div>
          <img src={title} alt="" />
        </div>
      </header>
      <InputID />
    </div>
  )
}

export default App
