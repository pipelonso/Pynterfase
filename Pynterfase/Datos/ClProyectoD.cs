using Pynterfase.Entidades;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace Pynterfase.Datos
{
    public class ClProyectoD
    {
        public List<ClproyectoE> mtdGetAllProjects(string idUsuario) {
            
            Procedimientos proc = new Procedimientos();
            List<ClproyectoE> listaProyectos = proc.mtdGetAllProjects(idUsuario);
            return listaProyectos;

        }

        public int mtdAddProject(ClproyectoE objProyecto) {

            ClProcesosSQL objSQL = new ClProcesosSQL();
            string insert = "INSERT INTO Proyecto (idUsuario , nombreProyecto , visibilidad) VALUES ("+objProyecto.idUsuarioP+",'"+objProyecto.nombreProyecto+"','"+objProyecto.visibilidad+"')";
            int res = objSQL.mtdInsert(insert);

            return res;
        
        }



    }
}