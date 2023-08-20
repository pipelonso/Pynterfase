using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Pynterfase.Entidades
{
    public class ClSolitudE
    {
        public int idSolicitud { get; set; }
        public int idTipoSolicitud { get; set; }
        public string Titulo { get; set; }
        public string Correo { get; set; }
        public string Mensaje { get; set; }

    }
}