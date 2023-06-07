using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Pynterfase.Entidades
{
    public class ClCompartirE
    {

        public int IdCompartir { get; set; }
        public int IdOwner { get; set; }
        public int IdUsuarioCompartir { get; set; }
        public int IdProyecto { get; set; }
        public bool editable { get; set; }

    }
}