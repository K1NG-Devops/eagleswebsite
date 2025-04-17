import './App.css'
import youngEaglesLogo from './assets/youngeagles-logo.png' // Import your logo

function App() {
  return (
    <div>
      <img src={youngEaglesLogo} alt="Young Eagles Logo" style={{ width: '150px', height: 'auto' }} />
      <h2>Welcome to Young Eagles Day Care</h2>
      <p>
        At Young Eagles Day Care, we are dedicated to nurturing young minds and helping them soar to new heights. 
        Our upcoming services will include exciting skill-building activities such as robotics, coding, baking, 
        handyman skills, and much more. Stay tuned for more updates as we prepare to launch these amazing programs!
      </p>
    </div>
  )
}

export default App