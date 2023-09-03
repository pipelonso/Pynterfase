using Pynterfase.Entidades;
using System;
using System.Collections.Generic;
using System.Data;
using System.Diagnostics;
using System.Linq;
using System.Runtime.InteropServices;
using System.Security.AccessControl;
using System.Web;

namespace Pynterfase.Datos
{
    public class ClSolicitudD
    {

        public List<ClTipoSolicitudE> GetAllTipoSolicitud()
        {

            ClProcesosSQL objSQl = new ClProcesosSQL();
            string selected = "SELECT * FROM TipoSolicitud";
            DataTable datos = objSQl.mtdconsultar(selected);
            List<ClTipoSolicitudE> ListaTipoSolicitudes = new List<ClTipoSolicitudE>();
            for (int i = 0; i < datos.Rows.Count;  i++)
            {

                ClTipoSolicitudE objTSolicitud = new ClTipoSolicitudE();
                objTSolicitud.idTipoSolicitud = int.Parse(datos.Rows[i]["idTipoSolicitud"].ToString());
                objTSolicitud.Nombre = datos.Rows[i]["Nombre"].ToString();
                ListaTipoSolicitudes.Add(objTSolicitud);

            }

            return ListaTipoSolicitudes;
        }

        public List<ClSolitudE> mtdGetAllSolicitudes()
        {

            string selected = "SELECT * FROM Solicitud";
            ClProcesosSQL objSQL = new ClProcesosSQL();
            DataTable datos = objSQL.mtdconsultar(selected);

            List<ClSolitudE> ListaSolicitudes = new List<ClSolitudE>();

            for (int i = 0; i < datos.Rows.Count ; i++)
            {

                ClSolitudE objSolicitud = new ClSolitudE();
                objSolicitud.idSolicitud = int.Parse(datos.Rows[i]["idSolicitud"].ToString());
                objSolicitud.idTipoSolicitud = int.Parse(datos.Rows[i]["idTipoSolicitud"].ToString());
                objSolicitud.Titulo = datos.Rows[i]["Titulo"].ToString();
                objSolicitud.Correo = datos.Rows[i]["Correo"].ToString();
                objSolicitud.Mensaje = datos.Rows[i]["Mensaje"].ToString();
                ListaSolicitudes.Add(objSolicitud);

            }

            return ListaSolicitudes;

        }

        public List<ClSolitudE> mtdGetAllSolicitudesbyidTipo(int id)
        {

            string selected = "SELECT * FROM Solicitud WHERE idTipoSolicitud = " + id;
            ClProcesosSQL objSQL = new ClProcesosSQL();
            DataTable datos = objSQL.mtdconsultar(selected);

            List<ClSolitudE> ListaSolicitudes = new List<ClSolitudE>();

            for (int i = 0; i < datos.Rows.Count; i++)
            {

                ClSolitudE objSolicitud = new ClSolitudE();
                objSolicitud.idSolicitud = int.Parse(datos.Rows[i]["idSolicitud"].ToString());
                objSolicitud.idTipoSolicitud = int.Parse(datos.Rows[i]["idTipoSolicitud"].ToString());
                objSolicitud.Titulo = datos.Rows[i]["Titulo"].ToString();
                objSolicitud.Correo = datos.Rows[i]["Correo"].ToString();
                objSolicitud.Mensaje = datos.Rows[i]["Mensaje"].ToString();
                ListaSolicitudes.Add(objSolicitud);

            }

            return ListaSolicitudes;

        }

        public ClSolitudE mtdGetSolicitudWithId(int id)
        {

            ClProcesosSQL objSQL = new ClProcesosSQL();
            string selected = "SELECT * FROM Solicitud WHERE idSolicitud = " + id;
            DataTable datos = objSQL.mtdconsultar(selected);
            ClSolitudE objSolicitud = new ClSolitudE();
            if (datos.Rows.Count >= 1)
            {
                
                objSolicitud.idSolicitud = int.Parse(datos.Rows[0]["idSolicitud"].ToString());
                objSolicitud.idTipoSolicitud = int.Parse(datos.Rows[0]["idTipoSolicitud"].ToString());
                objSolicitud.Titulo = datos.Rows[0]["Titulo"].ToString();
                objSolicitud.Correo = datos.Rows[0]["Correo"].ToString();
                objSolicitud.Mensaje = datos.Rows[0]["Mensaje"].ToString();

            }

            return objSolicitud;

        }

        public ClImagenSolicitudE mtdGetPostImage(int id)
        {

            string selected = "SELECT * FROM ImagenSolicitud WHERE IdSolicitud = " + id;
            ClProcesosSQL objSQL = new ClProcesosSQL();
            DataTable datos = objSQL.mtdconsultar(selected);

            ClImagenSolicitudE objIMGSolicitud = new ClImagenSolicitudE();
            if (datos.Rows.Count >= 1)
            {

                objIMGSolicitud.IdImagenSolicitud = int.Parse(datos.Rows[0]["IdImagenSolicitud"].ToString());
                objIMGSolicitud.idSolicitud = int.Parse(datos.Rows[0]["IdSolicitud"].ToString());
                objIMGSolicitud.nombre = datos.Rows[0]["Nombre"].ToString();
                objIMGSolicitud.Ruta = datos.Rows[0]["Ruta"].ToString();

            }

            return objIMGSolicitud;

        }

        public int mtdDeleteSolicitud(int id)
        {

            ClProcesosSQL objSQL = new ClProcesosSQL();
            string deleted = "DELETE FROM ImagenSolicitud WHERE IdSolicitud = " + id + "\n" +
                "DELETE FROM Solicitud WHERE idSolicitud = " + id;
            int res = objSQL.mtdInsert(deleted);

            return res;

        }


    }
}