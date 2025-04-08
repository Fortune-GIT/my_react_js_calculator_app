import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState('')

  return (
    <div className="container">
      <div className='calculator'>
        <form action="">
          <div>
            <input type="text" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
