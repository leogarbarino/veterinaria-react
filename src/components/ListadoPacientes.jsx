
import Paciente from "./Paciente";

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
 

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      { pacientes && pacientes.length ? (

        <>
        <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
        <p className="text-lg mt-5 text-center mb-10">
          Administra tus {""}
          <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
        </p>
  
        { pacientes.map( (paciente) => 
           (
               <Paciente paciente={paciente} 
               key={paciente.id}
               setPaciente={setPaciente}
               eliminarPaciente= {eliminarPaciente} />
           )
        )}
        </>

      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes registrados</h2>
        <p className="text-lg mt-5 text-center mb-10">
          Agrega pacientes {""}
          <span className="text-indigo-600 font-bold"> para crear una lista</span>
        </p>
        </>
      )}
      

      

    </div>
  );
};

export default ListadoPacientes;
