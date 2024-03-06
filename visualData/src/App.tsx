import { useState } from 'react'

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [count, setCount] = useState(0)
  console.log('hey', count);
  

  return (
    <div className="w-full text-4xl text-blue-500">
      This is a Tailwind CSS component!
    </div>
  )
}

export default App
