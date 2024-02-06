import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Fitness from './pages/Fitness'
import Dropdown from './components/Dropdown'

// font 
import "@fontsource/metropolis"; // Defaults to weight 400
import "@fontsource/metropolis/400.css"; // Specify weight
import "@fontsource/metropolis/800.css"; // Specify weight
import "@fontsource/metropolis/700.css"; // Specify weight

import "@fontsource/metropolis/400-italic.css"; // Specify weight and style

function App() {
  // const [count, setCount] = useState(0)

  // const [fontsLoaded] = useFonts({
  //   Metropolis: require("./assets/fonts/metropolis.regular.otf"),
  // });

  // if (!fontsLoaded) {
  //   return undefined;
  // }



  return (
    <>
      {/* <Dropdown /> */}
      <Fitness />

    </>
  )
}

export default App
