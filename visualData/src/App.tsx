import { useState } from 'react'
import GraphBuilder from './app/modules/builder/features/GraphBuilder';

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [count, setCount] = useState(0)
  

  return (
    <GraphBuilder/>
  )
}

export default App
