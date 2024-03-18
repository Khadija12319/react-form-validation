import './App.css'
import Form from './Form'

function App() {
 

  return (
    <>
    <div className='bg-[#45FFCA] h-screen flex'>
      <div className='w-[900px] bg-white h-auto grid grid-cols-2 m-auto place-items-center rounded-3xl p-12'>
        <img src="/src/assets/form-side.png" alt="" />
        <Form></Form>
      </div>
    </div>
      
    </>
  )
}

export default App
