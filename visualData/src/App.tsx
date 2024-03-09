import { useState } from 'react'
import GraphBuilder from './app/modules/builder/features/GraphBuilder';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [count, setCount] = useState(0)
  

  return (
    <DndProvider backend={HTML5Backend}>
      <GraphBuilder/>
    </DndProvider>
    
  )
}

export default App
