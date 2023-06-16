using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using Pynterfase.Entidades;

namespace Pynterfase.Datos
{
    public class ClEstadoD
    {

        public int mtdRegisterStatus(string userID, string estado)
        {

            string insert = "INSERT INTO Estado (IdUsuario , estado) VALUES ("+ userID +" , '"+ estado +"') ";
            ClProcesosSQL objSQL = new ClProcesosSQL();
            int res = objSQL.mtdInsert(insert);

            return res;

        }

        public ClEstadoE mtdGetUserStatusByMail(string correo)
        {

            string select = "SELECT * FROM Estado , Usuario WHERE correo = '"+ correo  +"' AND Estado.IdUsuario = Usuario.IdUsuario";

            ClProcesosSQL objSQL = new ClProcesosSQL();

            DataTable datos = objSQL.mtdconsultar(select);
            
            ClEstadoE objEstadoE = new ClEstadoE();

            objEstadoE.IdEstado = int.Parse(datos.Rows[0]["Idestado"].ToString());
            objEstadoE.idUsuario = int.Parse(datos.Rows[0]["IdUsuario"].ToString());
            objEstadoE.estado = datos.Rows[0]["estado"].ToString();

            return objEstadoE;

        }




    }
}