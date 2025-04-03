import { useState } from 'react'
import './App.css'
import JobSearchDashboard from './components/JobSearchDashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <JobSearchDashboard/>
    </>
  )
}

export default App
