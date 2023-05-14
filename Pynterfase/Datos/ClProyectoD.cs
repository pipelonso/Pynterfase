using Pynterfase.Entidades;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Security.Cryptography;
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

        public ClproyectoE mtdGetRecentProjectIdByMail(string correo) {

            ClProcesosSQL objSQL = new ClProcesosSQL();
            string consulta = "select MAX(idProyecto) as idProyecto FROM Proyecto , Usuario WHERE Usuario.correo = '"+correo+"' AND Proyecto.idUsuario = Usuario.IdUsuario";
            DataTable datos = objSQL.mtdconsultar(consulta);

            ClproyectoE objProyecto = new ClproyectoE();
            objProyecto.IdProyecto = int.Parse(datos.Rows[0]["idProyecto"].ToString());
            return objProyecto;

        }

    }
}