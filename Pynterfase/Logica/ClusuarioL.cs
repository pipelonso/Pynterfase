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
            ClEncript Encriptador = new ClEncript();
            objUserE.password = Encriptador.mtdCript(objUserE.password);
            objUserD.mtdRegisterUser(objUserE);
            
        
        }
        public int mtdLogin(string correo, string clave) { 
            
            ClusuarioD objUsuarioD = new ClusuarioD();

            ClEncript Encriptador = new ClEncript();
            string Passcript = Encriptador.mtdCript(clave);

            int res = objUsuarioD.mtdLogin(correo, Passcript);

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

        public int mtdForceVerification(int userID)
        {

            ClusuarioD objUSD = new ClusuarioD();
            int res = objUSD.mtdForceVerifyUser(userID);
            return res;

        }

        public ClUsuarioE mtdGetAllUser(string correo) { 
        
            ClusuarioD objUsuarioD = new ClusuarioD();
            ClUsuarioE objUsuarioE = objUsuarioD.mtdGetAllUser(correo);
            return objUsuarioE;
        
        }

        public ClUsuarioE mtdGetAllUserByID(string id)
        {

            ClusuarioD objUsuarioD = new ClusuarioD();
            ClUsuarioE objUsuarioE = objUsuarioD.mtdGetAllUserByID(id);
            return objUsuarioE;

        }

        public List<ClUsuarioE> mtdGetAllUsersInApp()
        {

            ClusuarioD objUSD = new ClusuarioD();
            List<ClUsuarioE> listaUsuarios = objUSD.mtdGetAllUsersInApp();
            return listaUsuarios;


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

        public int mtdRecuperacionPass(string correo , string codigo) { 
        
            ClusuarioD objUsD = new ClusuarioD();
            int operacion = objUsD.mtdRecuperarPass(correo, codigo);
            return operacion;

        }

        public int mtdVerificateRecuperationCode(string codigo, string idUsuario) {

            ClusuarioD objUSD = new ClusuarioD();
            int ndatos = objUSD.mtdVerifyRestaurationCode(codigo,idUsuario);
            return ndatos;
        
        
        }

        public int mtdUpdatePassword(string correo , string newpass) {

            ClusuarioD objUSD = new ClusuarioD();
            ClEncript Encriptador = new ClEncript();
            string newpassCript = Encriptador.mtdCript(newpass);
            int operacion = objUSD.mtdUpdatePassword(correo , newpassCript);
            return operacion;

        
        }

        public int mtdUpdateName(string nombre , string correo) { 
        
            ClusuarioD objUSD = new ClusuarioD();
            int operacion = objUSD.mtdUpdateName(nombre , correo);
            return operacion;   


        
        }

        public int UpdatePic(string imgpath , string correo) {

            ClusuarioD objUSD = new ClusuarioD();
            int operacion = objUSD.UpdatePicture(imgpath , correo);
            return operacion;
        
        
        }

        public List<ClUsuarioE> mtdSearchUserByName(string nombre) {

            ClusuarioD objUSD = new ClusuarioD();
            List<ClUsuarioE> listaUsuarios = objUSD.mtdSearchUsersByName(nombre);
            return listaUsuarios;

        }

        public int mtdDeleteUserByidKiller(string id)
        {

            ClusuarioD objUSD = new ClusuarioD();
            int res = objUSD.mtdDeleteUserbyIDKiller(id);
            return res;

        }

        public int mtdGrantAdmin(int userID, string adminMail)
        {

            ClusuarioD USD = new ClusuarioD();
            int res = USD.mtdGrantAdmin(userID, adminMail);
            return res;

        }

        public int mtdRevokeAdmin(int userID, string adminMail) {

            ClusuarioD USD = new ClusuarioD();
            int res = USD.mtdRevokeAdmin(userID, adminMail);
            return res;

        }

    }
}