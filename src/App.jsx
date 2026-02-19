import { useState } from 'react'
import {motion} from "framer-motion"

function App() {
  return (
    <>
      <motion.div id = "mainDiv" align="center"
      initial = {{scale: 0}} animate = {{scale: 1}} transition = {{duration: 1}}
      >
        <h1 id = "highlight">Bergen County Computers</h1>
        <h3 id = "highlight">We repair computers and laptops. If you have a device in need of repair, fill in the form below and send your device to us.</h3>
        <a href= "https://docs.google.com/forms/d/e/1FAIpQLSeoZ9TCKwTTu9yjeJ8pqrpHWPXpxPZOXFIlvKaa2aLx9w0t2Q/viewform?usp=dialog">
            <motion.button id = "button1"
            initial = {{scale: 1}} animate = {{}} whileHover={{scale:1.05, rotate: "5deg"}}>
              Assist Form
            </motion.button>
        </a>
        <h4 id = "highlight">Made by the Bergen Technical High School Paramus Campus Information Technology Seniors from the Class of 2026: Jay Rana, George Estrada, Jeffrey Bustos</h4>
      </motion.div>
    </>
  )
}

export default App
