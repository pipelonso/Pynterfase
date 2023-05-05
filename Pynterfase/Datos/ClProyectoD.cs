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

            string consulta = "selectprojectsitems " + idUsuario;

            ClProcesosSQL objSQL = new ClProcesosSQL();
            //Pendiente redirigirlo a una nueva clase de procesos de sql destinada para procedimientos alcenados
            DataTable datos = objSQL.mtdconsultar(consulta);
            List<ClproyectoE> listaProyectos = new List<ClproyectoE>();


            for (int i = 0; i < datos.Rows.Count; i++)
            {
                ClproyectoE Proj = new ClproyectoE();
                Proj.IdProyecto = int.Parse(datos.Rows[i]["Idproyecto"].ToString());
                Proj.idUsuario = int.Parse(datos.Rows[i]["IdUsuario"].ToString());
                Proj.nombreProyecto = datos.Rows[i]["nombreProyecto"].ToString();
                Proj.visibilidad = datos.Rows[i]["visibilidad"].ToString();
                Proj.nombre = datos.Rows[i]["nombre"].ToString();
                listaProyectos.Add(Proj);

            }

            return listaProyectos;

        }


    }
}