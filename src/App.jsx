import { useState } from 'react'
import GroceryEcommerce from './components/eccomerse'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GroceryEcommerce/>
    </>
  )
}

export default App
