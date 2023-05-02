using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;
using System.Web.Management;

namespace Pynterfase.Datos
{
    public class ClConexion
    {

        SqlConnection con = null;
        public SqlConnection mtdConexion() {

            con = new SqlConnection("Data Source=.;Initial Catalog=dbPynterfase;Integrated Security=True");
            con.Open();
            return con;
        
        }


    }
}