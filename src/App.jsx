
import './App.css'

import { BGWLogo } from './components/Global/BGWLogo.jsx';
import { VerticalNavbar } from './components/Global/VerticalNavbar.jsx';

import { TextReveal } from "./components/Section1/TextReveal";
import { ExploreButton } from "./components/Section1/ExploreButton";
import { Tilt3dBackground } from './components/Section1/Tilt3dBackground';

function App() {

  return (
    <div className="App">
        <BGWLogo  />
      <div className="vertical-nav">
        <VerticalNavbar />
      </div>
      <div className='section one'>
        <div className="one-left" >
          <TextReveal />
          <ExploreButton />
        </div>
        <div className="one-right">
          <Tilt3dBackground />
        </div>
      </div>
      <div className='section two'>
      Test
      </div>
      <div className='section three'>
      Test
      </div>
      <div className='section four'>
      Test
      </div>
      <div className='section five'>
      Test
      </div>

    </div>
  )
}

export default App
