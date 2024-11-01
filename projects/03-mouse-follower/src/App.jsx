import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({x:0, y:0})
  const stateButton = enabled ? 'Desactivar' : 'Activar' 
  useEffect(()=>{
    console.log('efecto', {enabled})
    const handleMove=(event)=>{
      const {clientX, clientY} = event
      setPosition({x:clientX, y:clientY})
    }
    if(enabled){
      window.addEventListener('pointermove', handleMove)
    }
    
    return () => {
      console.log('cleanup')
      window.removeEventListener('pointermove', handleMove)
    }
    
  }, [enabled])
  
  return (
    <main>
      <div style={{
        position:'absolute',
        backgroundColor:'#09f',
        borderRadius:'50%',
        opacity:'0.8',
        pointerEvents:'none',
        left:-20,
        top:-20,
        width:40,
        height:40,
        transform:`translate(${position.x}px, ${position.y}px)`
      }} />
      <button onClick={()=>{ setEnabled(!enabled) }}>{stateButton} seguir puntero</button>
    </main>
  )
}
function App() {
  // const [mounted, setMounted] = useState(true)
  return (
    <main>
      <FollowMouse />
      {/* {mounted && <FollowMouse />} */}
      {/* <button onClick={()=>{setMounted(!mounted)}}>
        Toogle mounted FollowMouse component
      </button> */}
    </main>
  )
}

export default App
