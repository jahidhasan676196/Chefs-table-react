
import './App.css'
import Banner from './Component/Banner/Banner'
import Main from './Component/Main/Main'
import Navbar from './Component/Navbar/Navbar'

function App() {
  return (
    <>
    <div className='container mx-auto  px-20'>
      <Navbar></Navbar>
      <Banner></Banner>
      <Main></Main>
  
    </div>
    </>
  )
}

export default App
