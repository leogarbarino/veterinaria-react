import { useState, useEffect } from "react"
import ListadoPacientes from "./components/ListadoPacientes"
import Formulario from "./components/Formulario"
import Header from "./components/Header"


function App() {

  const [pacientes, setPacientes]= useState(JSON.parse(localStorage.getItem('pacientes')) ?? [])
  const [paciente, setPaciente]= useState({})

  // usamos useEffect 

  

  // Sincronizamos el state

  useEffect(() => {
     localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])

  
  const eliminarPaciente= (id) => {
    const pacientesActualizados= pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacientesActualizados)
  }
 
  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
      <Formulario
        pacientes= {pacientes}
        setPacientes= {setPacientes}
        paciente= {paciente}
        setPaciente= {setPaciente}
      />
      <ListadoPacientes
         pacientes={pacientes}
         setPaciente= {setPaciente}
         eliminarPaciente= {eliminarPaciente}
      />
      </div>

    </div>
  )
}

export default App
