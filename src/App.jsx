import { useState } from 'react'
import Review from './Review'

import './App.css'

function App() {

  return (
    <>
      <main className='vh-100 d-flex align-items-center justify-content-center'>
        <section className='container'>
          <h1 className='text-center'>Our Reviews</h1>
          <Review />
        </section>
      </main>
    </>
  )
}

export default App
