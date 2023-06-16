using Pynterfase.Entidades;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Globalization;
using System.Linq;
using System.Web;

namespace Pynterfase.Datos
{
    public class ClusuarioD
    {

        public void mtdRegisterUser(ClUsuarioE objUserE) {
            
            string insert = "INSERT INTO dbo.Usuario (idRol , nombre , correo , password) VALUES (1,'" + objUserE.nombre + "','" + objUserE.correo + "','" + objUserE.password + "')";
            ClProcesosSQL objProcesosSQL = new ClProcesosSQL();
            int res = objProcesosSQL.mtdInsert(insert);

            //llama al registro de verificación para ponerlo en No
            registerVertification(objUserE.correo);
        }

        public void registerVertification(string correo) {

            ClUsuarioE objusuarioE = mtdGetAllUser(correo);
            string insert = "INSERT INTO dbo.Verificacion (idUsuario , codigo , estado) VALUES("+objusuarioE.IdUsuario+",'','No')";
            ClProcesosSQL objProcesosSQL = new ClProcesosSQL();
            int res = objProcesosSQL.mtdInsert(insert);


        }


        public int mtdLogin(string correo, string clave) {

            string consulta = "SELECT * FROM Usuario WHERE correo = '"+correo+"' AND password = '"+clave+"'";
            ClProcesosSQL objSLQ = new ClProcesosSQL();
            DataTable datos = objSLQ.mtdconsultar(consulta);

            int res = 0;

            if (datos.Rows.Count >= 1) {

                res = 1;

            }


            return res;
        
        }

        public ClUsuarioE mtdGetAllUser(string email) {
            string consulta = "SELECT * FROM Usuario WHERE correo = '"+email+"'";
            ClProcesosSQL objSQL = new ClProcesosSQL();
            DataTable datos = objSQL.mtdconsultar(consulta);

            ClUsuarioE objUsuarioE = new ClUsuarioE();
            objUsuarioE.IdUsuario = int.Parse(datos.Rows[0]["IdUsuario"].ToString());
            objUsuarioE.IdRol = int.Parse(datos.Rows[0]["IdRol"].ToString());
            objUsuarioE.nombre = datos.Rows[0]["nombre"].ToString();
            objUsuarioE.correo = datos.Rows[0]["correo"].ToString();
            objUsuarioE.password = datos.Rows[0]["password"].ToString();
            objUsuarioE.imagenUsuario = datos.Rows[0]["imagenUsuario"].ToString();


            return objUsuarioE;
        }

        public List<ClUsuarioE> mtdGetAllUsersInApp()
        {
            
            string consulta = "SELECT * FROM Usuario";
            ClProcesosSQL objSQL = new ClProcesosSQL();
            DataTable datos = objSQL.mtdconsultar(consulta);

            List<ClUsuarioE> listaUsuario = new List<ClUsuarioE>();

            for (int i = 0; i < datos.Rows.Count; i++)
            {

                ClUsuarioE objUSE = new ClUsuarioE();
                objUSE.IdUsuario = int.Parse(datos.Rows[i]["IdUsuario"].ToString());
                objUSE.IdRol = int.Parse(datos.Rows[i]["IdRol"].ToString());
                objUSE.nombre = datos.Rows[i]["nombre"].ToString();
                objUSE.correo = datos.Rows[i]["correo"].ToString();
                objUSE.password = datos.Rows[i]["password"].ToString();
                objUSE.imagenUsuario = datos.Rows[i]["imagenUsuario"].ToString();

                listaUsuario.Add(objUSE);

            }

            return listaUsuario;

        }


        public int CheckUserVerification(string correo) {

            string consulta = "SELECT dbo.Verificacion.* FROM dbo.Verificacion , dbo.Usuario WHERE dbo.Usuario.IdUsuario = dbo.Verificacion.IdUsuario AND dbo.Usuario.correo = '"+correo+"'; ";
            ClProcesosSQL objSQL = new ClProcesosSQL();
            DataTable datos = objSQL.mtdconsultar(consulta);
            int res = 0;


            

                if (datos.Rows[0][3].ToString() == "Si")
                {
                    res = 1;
                }

            

            


            return res;
        
        }

        public void mtdAddVerificationCode(string correo, string codigo) {
            ClProcesosSQL objSql = new ClProcesosSQL();
            //Consutar a la persona que se le insertaran los datos
            string consulta = "SELECT * FROM Usuario WHERE correo = '"+correo+"'";
            DataTable datos = objSql.mtdconsultar(consulta);

            int currentUserID = int.Parse(datos.Rows[0][0].ToString());


            //editar valores creados en el registro y añadir un codigo
            string updated = "UPDATE dbo.Verificacion SET codigo = '"+codigo+"' WHERE dbo.Verificacion.IdUsuario = "+currentUserID+" ";
            int res = objSql.mtdInsert(updated);


        }

        public ClVerificacionE mtdGetVerificationCode(string correo) {

            string consulta = "SELECT dbo.Verificacion.* FROM dbo.Verificacion , dbo.Usuario WHERE dbo.Usuario.IdUsuario = dbo.Verificacion.IdUsuario AND dbo.Usuario.correo = '" + correo + "'";
            ClProcesosSQL objSQL = new ClProcesosSQL();
            DataTable datos = objSQL.mtdconsultar(consulta); 

            ClVerificacionE objVerificacionE = new ClVerificacionE();
            objVerificacionE.idcodVerificacion = int.Parse(datos.Rows[0][0].ToString());
            objVerificacionE.idUsuario = int.Parse(datos.Rows[0][1].ToString());
            objVerificacionE.codigo = datos.Rows[0][2].ToString();

            return objVerificacionE;

        }

        public int mtdValidateVerification(string codigo) {

            string consulta = "SELECT * FROM Verificacion WHERE codigo = '"+codigo+"'";
            ClProcesosSQL objSql = new ClProcesosSQL();
            DataTable datos = objSql.mtdconsultar(consulta);

            int res = 0;

            if (datos.Rows.Count >= 1) {
                
                res = 1;
                string edit = "UPDATE Verificacion SET estado = 'Si'";
                objSql.mtdInsert(edit);


            }


            return res;

        }

        public int mtdCheckUserExist(string correo) {

            string consulta = "SELECT * FROM Usuario WHERE correo = '"+correo+"'";
            ClProcesosSQL objProcesosSQL = new ClProcesosSQL();
            DataTable datos = objProcesosSQL.mtdconsultar(consulta);

            int exist = 0;

            if (datos.Rows.Count >= 1) { 
            
                exist = 1;
            
            }

            return exist;

        }

        public int mtdRecuperarPass(string correo,string codigo) {

            ClProcesosSQL objSQL = new ClProcesosSQL();
            string consulta = "SELECT Recuperacion.* FROM Recuperacion , Usuario WHERE Recuperacion.IdUsuario = Usuario.IdUsuario AND Usuario.correo = '"+correo+"'";
            DataTable conteo = objSQL.mtdconsultar(consulta);

            int operacion = 0;

            if (conteo.Rows.Count >= 1)
            {
                //Edita

                ClUsuarioE datosusuario = mtdGetAllUser(correo);
                string actualizar = "UPDATE Recuperacion SET codigo = '"+codigo+"' WHERE IdUsuario = '"+datosusuario.IdUsuario+"';";
                operacion = objSQL.mtdInsert(actualizar);
                


            }
            else
            {
                //agrega
                ClUsuarioE datosusuario = mtdGetAllUser(correo);
                string agregar = "INSERT INTO Recuperacion (IdUsuario, codigo) VALUES ("+datosusuario.IdUsuario+",'"+codigo+"')";
                operacion = objSQL.mtdInsert(agregar);

                
            }


            return operacion;
        }

        public int mtdVerifyRestaurationCode(string codigo, string idUsuario)
        {

            ClProcesosSQL objSQL = new ClProcesosSQL();
            string consulta = "SELECT * FROM Recuperacion WHERE codigo = '" + codigo + "' AND idUsuario = '"+idUsuario+"'";
            DataTable datos = objSQL.mtdconsultar(consulta);

            return datos.Rows.Count;


        }

        public int mtdUpdatePassword(string correo , string newpass)
        {

            ClProcesosSQL objSQL = new ClProcesosSQL();
            string Actualizacion = "UPDATE Usuario SET password = '"+newpass+"' WHERE correo = '"+correo+"'";
            int operacion = objSQL.mtdInsert(Actualizacion);
            return operacion;


        }

        public int mtdUpdateName(string nombre, string correo) {


           

            ClProcesosSQL objSQL = new ClProcesosSQL();
            string insert = "UPDATE Usuario SET nombre = '"+nombre+"' WHERE correo = '"+correo+"'";
            int operacion = objSQL.mtdInsert(insert);
            return operacion; 

        
        }

        public int UpdatePicture(string imgpath , string correo)
        {

            ClProcesosSQL objProcesosSQL = new ClProcesosSQL();
            string updatepic = "UPDATE Usuario SET imagenUsuario = '"+imgpath+"' WHERE correo = '"+correo+"'"  ;
            int operacion = objProcesosSQL.mtdInsert(updatepic);
            return operacion;


        }

        public List<ClUsuarioE> mtdSearchUsersByName(string nombre)
        {

            string consulta = "SELECT * FROM usuario WHERE nombre LIKE '%"+ nombre +"%'";
            ClProcesosSQL objSQL = new ClProcesosSQL();
            DataTable datos = objSQL.mtdconsultar(consulta);

            List<ClUsuarioE> listaUsuario = new List<ClUsuarioE>();

            for (int i = 0; i < datos.Rows.Count; i++)
            {

                ClUsuarioE objUSE = new ClUsuarioE();
                objUSE.IdUsuario = int.Parse(datos.Rows[i]["IdUsuario"].ToString());
                objUSE.IdRol = int.Parse(datos.Rows[i]["IdRol"].ToString());
                objUSE.nombre = datos.Rows[i]["nombre"].ToString();
                objUSE.correo = datos.Rows[i]["correo"].ToString();
                objUSE.password = datos.Rows[i]["password"].ToString();
                objUSE.imagenUsuario = datos.Rows[i]["imagenUsuario"].ToString();

                listaUsuario.Add(objUSE);

            }

            return listaUsuario;



        }

        public int mtdDeleteUserbyIDKiller(string id) {

            Procedimientos objPROC = new Procedimientos();
            int res = objPROC.mtdDeleteUserById(id);
            return res;
        
        }



    }
}