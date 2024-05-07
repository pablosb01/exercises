import { Route, Routes } from "react-router-dom"
import { Welcome } from './components/Welcome'
import Counter from './components/Counter'
import GithubUsers from "./components/GithubUsers"

function App() {
  
  const Home = () => <Welcome name='pablo'/>

  const CounterDisplay = () => <Counter />



  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/counter' element={<CounterDisplay/>}/>
        <Route path='/welcome/:name' element={<Welcome />}/>
      </Routes>
    </>
  )
}

export default App
