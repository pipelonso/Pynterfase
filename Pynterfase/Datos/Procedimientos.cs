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

    }
}