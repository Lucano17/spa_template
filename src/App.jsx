import './App.css'
import NavBar from "./Components/NavBar.jsx"
import Home from "./Screens/Home.jsx"
import Services from "./Screens/Services.jsx"
import HowWeWork from "./Screens/HowWeWork.jsx"
import Benefits from "./Screens/Benefits.jsx"
import Contact from "./Screens/Contact.jsx"

function App() {

  return (
    <>
      <div className='App'>
        <NavBar/>
        <Home/>
        <Services/>
        <HowWeWork/>
        <Benefits/>
        <Contact/>
      </div>
    </>
  )
}

export default App
