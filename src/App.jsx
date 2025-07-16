import { useState } from 'react'

import HeroSection from './components/HeroSection.jsx'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main-content'>
      <HeroSection />
      <div className='blog-card'>
        <h1>hello world!</h1>
        <h2>this is a h2 heading!</h2>
        <h3>and finally here is h3</h3>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  )
}

export default App
