using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Pynterfase.Entidades
{
    public class ClVerificacionE
    {

        public int idcodVerificacion { get; set; }
        public int idUsuario { get; set; }
        public string codigo { get; set; }
        public int estado { get; set; }

    }
}