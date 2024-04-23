import Login from './components/Login'

function App() {

    const handleLogin = (formData) => {
      console.log('Form Data: ', formData);
    }

  return (
    <>
      <Login funcionEnFormaDeProp={handleLogin}/>
    </>
  )
}

export default App

/* When clicked, the event handler attached to the button should call an onLogin 
function passed as a prop to the Login component, 
passing it the state, that will print the state value. */