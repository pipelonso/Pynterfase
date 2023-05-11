using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Pynterfase.Entidades
{
    public class ClproyectoE : ClUsuarioE
    {

        public int IdProyecto { get; set; }
        public int idUsuarioP { get; set; }
        public string nombreProyecto { get; set; }
        public string visibilidad { get; set; }

    }
}