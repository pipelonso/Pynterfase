using Org.BouncyCastle.Asn1.Mozilla;
using Pynterfase.Datos;
using Pynterfase.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Management;

namespace Pynterfase.Logica
{
    public class ClusuarioL
    {

        public void mtdRegister(ClUsuarioE objUserE) { 
        
            ClusuarioD objUserD = new ClusuarioD();
            objUserD.mtdRegisterUser(objUserE);
            
        
        }
        public int mtdLogin(string correo, string clave) { 
            
            ClusuarioD objUsuarioD = new ClusuarioD();
            int res = objUsuarioD.mtdLogin(correo, clave);

            return res;
        
        
        }

        public int mtdCheckVerification(string correo) { 
        
            ClusuarioD objUsuarioD = new ClusuarioD();

            int res = objUsuarioD.CheckUserVerification(correo);

            return res;

        }

        public void mtdAddVerificationCode(string correo) { 
        
            ClusuarioD objUsuarioD = new ClusuarioD();
            ClRandomCodeGen gencode = new ClRandomCodeGen();
            string codigo = gencode.mtdRandomCodeGen();
            objUsuarioD.mtdAddVerificationCode(correo , codigo);

        }

        public ClUsuarioE mtdGetAllUser(string correo) { 
        
            ClusuarioD objUsuarioD = new ClusuarioD();
            ClUsuarioE objUsuarioE = objUsuarioD.mtdGetAllUser(correo);
            return objUsuarioE;
        
        }

        public ClVerificacionE mtdGetVerificationCode(string correo) { 
            
            ClusuarioD objUsuarioD = new ClusuarioD();
            ClVerificacionE objVerificacionE = objUsuarioD.mtdGetVerificationCode(correo);
            return objVerificacionE;
        
        }

        public int mtdValidateVerification(string codigo) { 
        
            ClusuarioD objUsuarioD = new ClusuarioD();
            int res = objUsuarioD.mtdValidateVerification(codigo);
            return res;
        
        }

        public int mtdCheckUserExist(string correo) { 
        
            ClusuarioD objUsuarioD = new ClusuarioD();
            int exist = objUsuarioD.mtdCheckUserExist(correo);
            return exist;

        }



    }
}