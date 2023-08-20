using Pynterfase.Datos;
using Pynterfase.Entidades;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Globalization;
using System.Linq;
using System.Runtime.Remoting;
using System.Web;
using System.Web.UI.WebControls;

namespace Pynterfase.Logica
{
    public class AdminL
    {

        public int mtdAddContactMessage(ClSolitudE objSolicitud, List<Bitmap> listaImagenes)
        {

            ClAdminD objADMIN = new ClAdminD();
            int res = objADMIN.mtdAddContactMessage(objSolicitud, listaImagenes);
            return res;

        }

        public int mtdRegisterImages(List<Bitmap> listaImagenes , int solicitud, List<String> ruta)
        {

            ClAdminD objADMIND = new ClAdminD();
            int res = objADMIND.mtdRegisterIMG(listaImagenes, solicitud, ruta);
            return res;


        }

    }
}