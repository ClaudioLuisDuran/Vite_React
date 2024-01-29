import { useEffect, useState } from 'react'

function App() {

  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({x:0, y:0})
  
  useEffect(() => {
    console.log('efecto', {enabled})

    const handleMove = (event) =>{
      const {clientX, clientY} = event
      console.log('handleMove', {clientX, clientY})
      setPosition({x: clientX, y:clientY})
    }

    if(enabled){
      window.addEventListener('pointermove', handleMove)
    }
    //cleanup: actua al desmontar o cuando cambian las dependencias
    console.log('cleanup activado')
    return () =>{
      window.removeEventListener('pointermove', handleMove)
    }
  },[enabled]) //se ejecuta el useEffect al principio y cada vez que cambia enabled

  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        border: '3px solid #000',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25, 
        top: -25,
        width:40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}/>
      <button onClick={()=> setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero</button>
    </main>
  )
}

export default App
