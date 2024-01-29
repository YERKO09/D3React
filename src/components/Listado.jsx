import React from "react";

const Listado = ({ colaboradores, eliminarColaborador }) => {

  return (
    <>
      <table className="table table-secondary table-striped table-hover">

        <thead className="table table-primary">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Teléfono</th>  
            <th></th>
          </tr>

        </thead>

        <tbody className="table-group-divider">
        {colaboradores.map((colaborador) => (
          <tr key={colaborador.id}>  
            <th>{colaborador.id}</th>
            <td>{colaborador.nombre}</td>
            <td>{colaborador.correo}</td>
            <td>{colaborador.edad}</td>
            <td>{colaborador.cargo}</td>
            <td>{colaborador.telefono}</td>
            <td>
              <span className="btnEliminar" onClick={ () => eliminarColaborador(colaborador)}>
                ❌
              </span>
            </td>
          </tr>      
        ))}
        </tbody>
      </table>
    </>
  );
};

export default Listado;
