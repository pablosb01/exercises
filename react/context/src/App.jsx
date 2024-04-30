
import React, { useState } from "react"
import { Component } from "./components/Component"
import { LanguageContext } from "./components/Component"

function App() {

  const [language, setLanguage] = useState('es')

  function handleLanguageChange(e) {
    setLanguage(e.target.value)
  }

  return (
    <LanguageContext.Provider value={language}>
      <Component />
      <select onChange={handleLanguageChange}>
        <option value='es'>ESPAÑOL</option>
        <option value='en'>english</option>
      </select>
    </LanguageContext.Provider>
  )
}

export default App