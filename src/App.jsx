import { useRef, useState } from 'react'
import './App.css'
import { Card } from './components/Card'
import { platform } from './utils'
import { Join } from './components/Join'

function App() {
  const ref = useRef(null)

  return (
    <main>
      <nav>
        <img src='Logo.svg' alt='logo' />
        <button onClick={() => {ref.current?.scrollIntoView({behavior: 'smooth'})}}>Join the Waitlist</button>
      </nav>
      <section className='hero-section'> 
        <div className='hero'>
          <h2>A space to Share, Empathize, and Heal together!</h2>
          <p>
            Acknowledging our low mood is the first step towards light. Join Mind, a haven for those navigating emotional seas and a lighthouse for those seeking safe harbor.
          </p>

          <Join />
          <img src='Hero main.svg' alt='hero-img' />
        </div>
        <div className='hero2'>
          <h3>Wondering if this is for you?</h3>
          <p>
            Our philosophy revolves around empowering individuals to nurture their mental health through a holistic and personalized approach. We are committed to providing a safe, inclusive, and science-backed platform that enables users to cultivate resilience, embrace self-discovery, and connect with a supportive community.
          </p>
          <Card />
        </div>

      </section>
      <section className='section2' >
        <div className='container'>
          <div className='img'>
            <img src='h1.svg' alt='logo' />
          </div>
          
          <div className='content'>
              <h3>A platform that cares about you!</h3>
              <p>
                Our mental health shouldn’t be relegated to the background! Now we can have a place to express ourselves freely without the judging and condensing eyes.
              </p>
              <div className='img2'>
                <img src='h1.svg' alt='logo' />
              </div>
              { platform?.map( (p, index) => (
                  <div>
                    <span><img src={p.img} alt='logo' /> <h4>{p.title}</h4></span>
                    <p>{p.text}</p>
                  </div>
                ))
              }
              
          </div>
        </div>

        <div className='join-us' ref={ref}>
          <div className='design'>
            <img src='Vector (1).svg' alt='logo' />
          </div>
          <h3>Join our waitlist in 5 seconds!</h3>
          <p>We want to begin this journey with you. </p>
          <p className='p'>Join our waitlist to get the experience first hand.</p>
          <Join />
          <div className='design2'>
            <img src='Vectorl.svg' alt='logo' />
          </div>
        </div>
      </section>

      <footer>
        <div className='top'>
          <div className='text'>
            <h3>Keep an eye on us via our socials </h3>
            <p>Find out what we’re up to and stay updated as we cross each milestone!</p>
          </div>
          <div className='socials'>
            <ul>
              <li><a> <img src='instagram.svg' alt='insta' /></a> Instagram</li>
              <li><a> <img src='twitter.svg' alt='x' /></a> Twitter</li>
              <li><a> <img src='linkedin.svg' alt='linkedin' /></a> Linkedin</li>
            </ul>
          </div>
          
        </div>
        <p className='fp'> &copy;  2023 Mind - All Rights Reserved</p>
      </footer>
      
    </main>
  )
}

export default App
