import { useState } from 'react'
import img from './assets/win11.jpg'
import Card from './Card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-[url('./assets/win11.jpg')] bg-right bg-fixed flex justify-center py-10 bg-cover">
        <Card />
      </div>
    </>
  )
}

export default App
