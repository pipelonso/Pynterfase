using Pynterfase.Entidades;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.WebSockets;

namespace Pynterfase.Datos
{
    public class ClAdminD
    {

        public int mtdAddContactMessage(ClSolitudE solicitud, List<Bitmap> listaImagenes)
        {

            Procedimientos objPROCS = new Procedimientos();
            int res = objPROCS.AddContactMessage(solicitud);
            return res;

        }

        public int mtdRegisterIMG(List<Bitmap> listaImagenes, int idSolicitud, List<string> listaruta)
        {
            string imgregist = "";

            for (int i = 0; i < listaImagenes.Count; i++)
            {

                imgregist += "INSERT INTO ImagenSolicitud (IdSolicitud , Nombre , Ruta) VALUES (" + idSolicitud + ",'" + i + " " + idSolicitud.ToString() + "','" + listaruta[i] + "');\n";

            }

            ClProcesosSQL objSQL = new ClProcesosSQL();
            int res = objSQL.mtdInsert(imgregist);
            return res;


        }


    }
}