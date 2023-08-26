import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <nav>
        <img src='Logo.svg' alt='logo' />
        <button>Join the Waitlist</button>
      </nav>
      <section className='hero-section'> 
        <div className='hero'>
          <h2>A space to Share, Empathize, and Heal together!</h2>
          <p>
            Acknowledging our low mood is the first step towards light. Join Mind, a haven for those navigating emotional seas and a lighthouse for those seeking safe harbor.
          </p>

          <form>
            <input type='email' pattern='' placeholder='Enter your email address' />
            <button>Join the Waitlist</button>
          </form>

          <img src='Hero main.svg' alt='hero-img' />
        </div>
        <div className='hero2'>
          <h3>Wondering if this is for you?</h3>
          <p>
            Our philosophy revolves around empowering individuals to nurture their mental health through a holistic and personalized approach. We are committed to providing a safe, inclusive, and science-backed platform that enables users to cultivate resilience, embrace self-discovery, and connect with a supportive community.
          </p>
          <div className='cards'>

          </div>
        </div>

      </section>
      
    </main>
  )
}

export default App
