import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  console.log(count)

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="text-5xl">Word Glower</div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
      <div>{count}</div>
    </div>
  )
}

export default App
