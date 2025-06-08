import { useState } from 'react'

import BaseLayout from './components/Layout/BaseLayout'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BaseLayout>
      <p>CONTENT</p>
    </BaseLayout>
  )
}

export default App
