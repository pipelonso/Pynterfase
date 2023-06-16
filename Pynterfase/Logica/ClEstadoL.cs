using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Pynterfase.Entidades;
using Pynterfase.Datos;


namespace Pynterfase.Logica
{
    public class ClEstadoL
    {

        public int mtRegisterStatus(string userID , string estado)
        {

           ClEstadoD objEstadoE = new ClEstadoD();
            int res = objEstadoE.mtdRegisterStatus(userID, estado);
            return res;

        }

        public ClEstadoE mtdGetUserStatusByMail(string correo)
        {
            ClEstadoD objEstadoD = new ClEstadoD();
            ClEstadoE objEstado = objEstadoD.mtdGetUserStatusByMail(correo);

            return objEstado;

        }

        public ClEstadoE mtdGetUserStatusById(string id)
        {
            ClEstadoD objEstadoE = new ClEstadoD();

            ClEstadoD objEstadoD = new ClEstadoD();
            ClEstadoE objEstado = objEstadoD.mtdGetUserStatusbyId(id);

            return objEstado;

        }

        public int mtdUpdateUserStatusByMail(string id, string status)
        {
            ClEstadoD objEstadoE = new ClEstadoD();
            int res = objEstadoE.mtdUpdateUserStatusByID(id, status);
            return res;

        }

    }

}