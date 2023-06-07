using Pynterfase.Entidades;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Runtime.InteropServices;
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


        public ClproyectoE mtdGetProjectById(string id) {

            ClProcesosSQL objSQL = new ClProcesosSQL();
            string consulta = "SELECT * FROM Proyecto WHERE IdProyecto = " + id;
            DataTable datos = objSQL.mtdconsultar(consulta);

            ClproyectoE objProyecto = new ClproyectoE();
            objProyecto.IdProyecto = int.Parse(datos.Rows[0]["IdProyecto"].ToString());
            objProyecto.idUsuarioP = int.Parse(datos.Rows[0]["IdUsuario"].ToString());
            objProyecto.nombreProyecto = datos.Rows[0]["nombreProyecto"].ToString();
            objProyecto.visibilidad = datos.Rows[0]["visibilidad"].ToString();

            return objProyecto;

        }

        public List<ClUsuarioE> mtdGetAllusersInProject(string idProyecto) {

            ClProcesosSQL objSQL = new ClProcesosSQL();
            string consulta = "SELECT Usuario.* FROM Usuario , compartir WHERE compartir.idUsuarioCompatir = Usuario.IdUsuario AND compartir.idProyecto = " + idProyecto;
            DataTable datos = objSQL.mtdconsultar(consulta);

            List<ClUsuarioE> listaUsuarios = new List<ClUsuarioE>();

            for (int i = 0; i < datos.Rows.Count; i++)
            {
                ClUsuarioE objUSE = new ClUsuarioE();

                objUSE.IdUsuario = int.Parse(datos.Rows[i]["IdUsuario"].ToString());
                objUSE.IdRol = int.Parse(datos.Rows[i]["IdRol"].ToString());
                objUSE.nombre = datos.Rows[i]["nombre"].ToString();
                objUSE.correo = datos.Rows[i]["correo"].ToString();
                objUSE.password = datos.Rows[i]["password"].ToString();
                objUSE.imagenUsuario = datos.Rows[i]["imagenUsuario"].ToString();
                
                listaUsuarios.Add(objUSE);

            }

            return listaUsuarios;

        }




    }
}