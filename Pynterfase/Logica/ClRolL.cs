using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Pynterfase.Datos;
using Pynterfase.Entidades;

namespace Pynterfase.Logica
{
    public class ClRolL
    {

        public List<ClRolE> mtdGetAllRolById(string id)
        {

            ClRolD objRolD = new ClRolD();
            List<ClRolE> listaRoles = objRolD.mtdAllRollById(id);
            return listaRoles;


        }



    }
}