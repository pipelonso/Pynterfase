using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;
using System.Web.Management;
using System.Threading;

namespace Pynterfase.Datos
{
    public class ClConexion
    {

        SqlConnection con = null;
        public SqlConnection mtdConexion() {
            int intentosMaximos = 3;
            int intentosRealizados = 0;
           
            while (intentosRealizados < intentosMaximos)
            {

                try
                {

                    con = new SqlConnection("Data Source=.;Initial Catalog=dbPynterfase;Integrated Security=True");
                    con.Open();
                    return con;
                }
                catch (Exception ex)
                {

                    intentosRealizados++;

                    Thread.Sleep(3000); // Esperar 3 segundos antes de intentar nuevamente


                }

            }
            
            return con;
            

        }


    }
}