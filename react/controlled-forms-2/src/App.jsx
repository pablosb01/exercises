import Login from './components/Login'

function App() {
    const handleLogin = (formData) => {
      console.log('Form Data: ', formData);
    }

  return (
    <>
      <Login onLogin={handleLogin}/>
    </>
  )
}

export default App
