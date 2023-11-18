// Poniendo rfce nos crea la base del componente con function
// Poniendo rafce nos crea lo mismo pero con const y arrow function
import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  // Hooks

  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if(Object.keys(paciente).length > 0){ // compruebo si paciente tiene algo
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }  
  }, [paciente])

 


  const generarId= () => {
     const random= Math.random().toString(36).substring(2)
     const fecha= Date.now().toString(36)

     return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar el formulario
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      console.log("Debes rellenar todos los campos");
      
      setError(true)
      return
    } 

    setError(false)

    // Objeto de Paciente

    const objetoPaciente= {
      nombre,
      propietario,
      email,
      fecha,
      sintomas
      
    }

    if(paciente.id){
      // Editamos el registro
      objetoPaciente.id= paciente.id
      
      const pacientesActualizados= pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)

      setPacientes(pacientesActualizados)
      setPaciente({})


    }else{
      // Nuevo registro
      objetoPaciente.id= generarId()
      setPacientes([...pacientes, objetoPaciente])
    }

    
    // reiniciamos el formulario para que no queden los datos (reseteamos el state)
    setNombre("")
    setPropietario("")
    setEmail("")
    setFecha("")
    setSintomas("")


  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}{" "}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && <Error><p>Todos los campos son obligatorios</p></Error>}
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>
          <input
            type="text"
            id="mascota"
            placeholder="Nombre de la mascota..."
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Propietario
          </label>
          <input
            type="text"
            id="propietario"
            placeholder="Nombre del dueño..."
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
            className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Ingresa email contacto..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="fechaAlta"
            className="block text-gray-700 uppercase font-bold"
          >
            Alta
          </label>
          <input
            type="date"
            id="fechaAlta"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
          />
        </div>

        <div>
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Sintomas de la mascota
          </label>
          <textarea
            name="sintomas"
            id="sintomas"
            cols="20"
            rows="5"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
            className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
            placeholder="Descripción de sintomas"
          ></textarea>
        </div>

        <input
          type="submit"
          value= { paciente.id ? "Editar mascota" : "Agregar mascota"}
          className="bg-indigo-600 w-full p-3 text-neutral-50 uppercase font-bold font-serif hover:bg-indigo-800 cursor-pointer transition-all"
        />
      </form>
    </div>
  );
};

export default Formulario;
