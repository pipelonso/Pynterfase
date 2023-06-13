using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using Pynterfase.Entidades;


namespace Pynterfase.Datos
{
    public class ClRolD
    {

        public List<ClRolE> mtdAllRollById(string id)
        {

            string consulta = "SELECT * FROM Rol WHERE IdRol = " + id;
            ClProcesosSQL objSQl = new ClProcesosSQL();
            DataTable datos = objSQl.mtdconsultar(consulta);

            List<ClRolE> listaRol = new List<ClRolE>();

            for (int i = 0; i < datos.Rows.Count; i++)
            {

                ClRolE objRol = new ClRolE();
                objRol.idRol = int.Parse(datos.Rows[i]["IdRol"].ToString());
                objRol.nombre = datos.Rows[i]["nombre"].ToString();

                listaRol.Add(objRol);

            }

            return listaRol;

        }




    }
}