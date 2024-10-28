
import './App.css'
import LineChart from './Components/LineChart/LineChart'
// import Daisynav from './Components/DaisyNav/Daisynav'
import Navbar from './Components/Navbar/Navbar'
import PriceOptions from './Components/PriceOptions/PriceOptions'

function App() {


  return (
    <>
     <header>
        <Navbar></Navbar>
        {/* <Daisynav></Daisynav> */}
     </header>
      <h1 className='text-6xl bg-rose-700'>Vite + React</h1>
      <body>
          <PriceOptions></PriceOptions>
          <LineChart></LineChart>
      </body>

    </>
  )
}

export default App
