using Pynterfase.Datos;
using Pynterfase.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Pynterfase.Logica
{
    public class ClSolicitudL
    {

        public List<ClTipoSolicitudE> GetAllTipoSolicitud()
        {

            ClSolicitudD objSolD = new ClSolicitudD();
            return objSolD.GetAllTipoSolicitud();

        }

        public List<ClSolitudE> mtdGetAllSolicitudes()
        {

            ClSolicitudD objSolD = new ClSolicitudD();
            return objSolD.mtdGetAllSolicitudes();

        }

        public List<ClSolitudE> mtdGetAllSolicitudesbyidTipo(int id)
        {

            ClSolicitudD objSolD = new ClSolicitudD();
            return objSolD.mtdGetAllSolicitudesbyidTipo(id);

        }

        public ClSolitudE mtdGetSolicitudWithId(int id)
        {

            ClSolicitudD objSolD = new ClSolicitudD();
            return objSolD.mtdGetSolicitudWithId(id);

        }

        public ClImagenSolicitudE mtdGetPostImage(int id)
        {

            ClSolicitudD objSolD = new ClSolicitudD();
            return objSolD.mtdGetPostImage(id);

        }

        public int mtdDeleteSolicitud(int id)
        {

            ClSolicitudD objSoLD = new ClSolicitudD();
            return objSoLD.mtdDeleteSolicitud(id);

        }

    }
}