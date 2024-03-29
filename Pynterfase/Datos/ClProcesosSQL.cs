﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Runtime.Remoting;
using System.Web;

namespace Pynterfase.Datos
{
    public class ClProcesosSQL
    {
        /// <summary>
        /// Ejecuta cualquier comando de sql
        /// </summary>
        /// <param name="insert"></param>
        /// <returns>INT 1 - 0 (falso - verdadero)</returns>
        public int mtdInsert(string insert) { 
            
            ClConexion conexion = new ClConexion();
            using (SqlConnection con = conexion.mtdConexion())
            {
                SqlCommand comando = new SqlCommand(insert, con);
                int res = comando.ExecuteNonQuery();
                conexion.mtdConexion().Close();
                return res;
            }
                           
        }
        /// <summary>
        /// Ejecuta cualquier consulta
        /// </summary>
        /// <param name="consulta"></param>
        /// <returns>Datatable</returns>
        public DataTable mtdconsultar(string consulta) {
            
            ClConexion conexion = new ClConexion();
            using (SqlConnection con = conexion.mtdConexion()) {

                SqlDataAdapter adaptador = new SqlDataAdapter(consulta, con);
                DataTable datos = new DataTable();
                adaptador.Fill(datos);
                conexion.mtdConexion().Close();
                return datos;

            }
                    
        }


    }
}