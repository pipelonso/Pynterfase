using Org.BouncyCastle.Asn1.Mozilla;
using Pynterfase.Entidades;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace Pynterfase.Datos
{
    public class Procedimientos
    {

        public List<ClproyectoE> mtdGetAllProjects(string idUsuario)
        {

            string consulta = "selectprojectsitems " + idUsuario;

            ClProcesosSQL objSQL = new ClProcesosSQL();

            DataTable datos = objSQL.mtdconsultar(consulta);
            List<ClproyectoE> listaProyectos = new List<ClproyectoE>();


            for (int i = 0; i < datos.Rows.Count; i++)
            {
                ClproyectoE Proj = new ClproyectoE();
                Proj.IdProyecto = int.Parse(datos.Rows[i]["Idproyecto"].ToString());
                Proj.idUsuarioP = int.Parse(datos.Rows[i]["IdUsuario"].ToString());
                Proj.nombreProyecto = datos.Rows[i]["nombreProyecto"].ToString();
                Proj.visibilidad = datos.Rows[i]["visibilidad"].ToString();
                Proj.nombre = datos.Rows[i]["nombre"].ToString();
                listaProyectos.Add(Proj);

            }

            return listaProyectos;

        }

        public int mtdDeleteUserById(string idUser)
        {

            string killer = "DeleteUser " + idUser;
            ClProcesosSQL objSQL = new ClProcesosSQL(); 
            int res = objSQL.mtdInsert(killer);
            return res;

        }

        public int mtdDeleteProject(string id)
        {

            string killer = "DeleteProject " + id;
            ClProcesosSQL objSQL = new ClProcesosSQL();
            int res = objSQL.mtdInsert(killer);
            return res;

        }

        public int AddContactMessage(ClSolitudE objSolicitud)
        {

            string exec = "";
            exec += "DECLARE @newIdSolicitud INT;\n";
            exec += "EXEC insgetSolicitud\n";
            exec += "@idTipoSolicitud = "+objSolicitud.idTipoSolicitud+",\n";
            exec += "@Titulo = '"+objSolicitud.Titulo+"',\n";
            exec += "@Correo = '"+objSolicitud.Correo+"',\n";
            exec += "@Mensaje = '"+objSolicitud.Mensaje+"',\n";
            exec += "@idSolicitud = @newIdSolicitud OUTPUT;\n";
            exec += "SELECT CAST(@newIdSolicitud AS INT) AS 'id';";

            ClProcesosSQL objSQL = new ClProcesosSQL();
            DataTable datos = objSQL.mtdconsultar(exec);
            return int.Parse(datos.Rows[0]["id"].ToString());

        }

    }
}