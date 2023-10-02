import { useState, useEffect } from 'react'
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

  // Ésta variable pacientes será un arreglo de objetos, cargados desde el componente Formulario
  const [ pacientes, setPacientes ] = useState( JSON.parse( localStorage.getItem( 'pacientes' ) ) ?? [] ) // Revisando 'pacientes' en Local Storage y trayendolos
  const [ paciente, setPaciente ]   = useState( {} )

  // Guardar 'pacientes' en localStorage
  useEffect( () => {
    localStorage.setItem( 'pacientes', JSON.stringify( pacientes ) )
  }, [ pacientes ] )

  const eliminarPaciente = ( id ) => {
    const pasientesActualizados = pacientes.filter( paciente => paciente.id !== id )
    setPacientes( pasientesActualizados )
  }

  // const imprime2mas2 = () => {
  //   console.log( 2 + 2 )
  // }

  // Ejemplo de cómo pasar valores del hijo al padre
  // const toma1Valor = ( valor ) => {
  //   console.log( valor )
  // }


  return (
    <div className="container mx-auto mt-20">
      {/* <Header
        numeros={ 1 }
        isAdmin={ false }
        fn={ imprime2mas2 }
      /> */}
      {/* <Header
        toma1Valor={ toma1Valor }
      /> */}
      <Header />

      <div className="mt-12 md:flex">
          <Formulario
            pacientes={ pacientes }
            setPacientes={ setPacientes }
            paciente={ paciente }
            setPaciente={ setPaciente }
          />
          <ListadoPacientes
            pacientes={ pacientes }
            setPaciente={ setPaciente }
            eliminarPaciente={ eliminarPaciente }
          />
      </div>

    </div>
  )
}

export default App
