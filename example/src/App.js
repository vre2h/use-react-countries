import React from 'react'
import { useMyHook } from 'use-react-countries'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App