import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Article from './components/Article'
import img from './photo.jpg'
import bg from './landing.png'

function App() {
  

  return (
    <>
    {/* <div className='flex flex-col w-screen h-screen bg-gradient-to-r from-my-start-color to-my-end-color'></div> */}
      <div className='flex flex-col w-screen h-screen bg-cover bg-no-repeat bg-[url(./landing.png)]'>
        <Navbar />

        <Hero />

        <section className='flex flex-col items-center justify-center p-4 text-2xl font-bold'>
        <h2 className='text-white'>Articles:</h2>

        </section>

        <div className="flex flex-row items-center justify-evenly">

          <Article img={img} title={'Lorem Ipsum'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}/>
          <Article img={img} title={'Lorem Ipsum'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}/>
          <Article img={img} title={'Lorem Ipsum'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}/>
        </div>
      </div>
    </>
  )
}

export default App
