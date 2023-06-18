using Microsoft.SqlServer.Server;
using Org.BouncyCastle.Asn1.Mozilla;
using Pynterfase.Entidades;
using System.Collections.Generic;
using System.Data;
using System.Runtime.InteropServices;
using System.Security.Cryptography.Xml;
using System.Web.UI.WebControls;

namespace Pynterfase.Datos
{
    public class ClProyectoD
    {
        public List<ClproyectoE> mtdGetAllProjects(string idUsuario)
        {

            Procedimientos proc = new Procedimientos();
            List<ClproyectoE> listaProyectos = proc.mtdGetAllProjects(idUsuario);
            return listaProyectos;

        }

        public List<ClproyectoE> mtdGetAllProjectsInApp()
        {

            ClProcesosSQL objSQL = new ClProcesosSQL();
            string consulta = "SELECT * FROM Proyecto";
            DataTable datos = objSQL.mtdconsultar(consulta);

            List<ClproyectoE> listaProyectos = new List<ClproyectoE>();


            for (int i = 0; i < datos.Rows.Count; i++)
            {

                ClproyectoE objProjE = new ClproyectoE();
                objProjE.IdProyecto = int.Parse(datos.Rows[i]["IdProyecto"].ToString());
                objProjE.IdUsuario = int.Parse(datos.Rows[i]["idUsuario"].ToString());
                objProjE.nombreProyecto = datos.Rows[i]["nombreProyecto"].ToString();
                objProjE.visibilidad = datos.Rows[i]["visibilidad"].ToString();

                listaProyectos.Add(objProjE);
            }

            return listaProyectos;

        }


        public int mtdAddProject(ClproyectoE objProyecto)
        {

            ClProcesosSQL objSQL = new ClProcesosSQL();
            string insert = "INSERT INTO Proyecto (idUsuario , nombreProyecto , visibilidad) VALUES (" + objProyecto.idUsuarioP + ",'" + objProyecto.nombreProyecto + "','" + objProyecto.visibilidad + "')";
            int res = objSQL.mtdInsert(insert);

            return res;

        }

        public ClproyectoE mtdGetRecentProjectIdByMail(string correo)
        {

            ClProcesosSQL objSQL = new ClProcesosSQL();
            string consulta = "select MAX(idProyecto) as idProyecto FROM Proyecto , Usuario WHERE Usuario.correo = '" + correo + "' AND Proyecto.idUsuario = Usuario.IdUsuario";
            DataTable datos = objSQL.mtdconsultar(consulta);

            ClproyectoE objProyecto = new ClproyectoE();
            objProyecto.IdProyecto = int.Parse(datos.Rows[0]["idProyecto"].ToString());
            return objProyecto;

        }

        public int mtdUpdateProjectNamebyId(string projectID , string NewName)
        {
            string udpated = "UPDATE Proyecto SET nombreProyecto = '"+NewName+"' WHERE IdProyecto = " +  projectID   ;
            ClProcesosSQL objSQL = new ClProcesosSQL();
            int res = objSQL.mtdInsert(udpated);
            return res;
        }


        public ClproyectoE mtdGetProjectById(string id)
        {

            ClProcesosSQL objSQL = new ClProcesosSQL();
            string consulta = "SELECT * FROM Proyecto WHERE IdProyecto = " + id;
            DataTable datos = objSQL.mtdconsultar(consulta);

            ClproyectoE objProyecto = new ClproyectoE();
            objProyecto.IdProyecto = int.Parse(datos.Rows[0]["IdProyecto"].ToString());
            objProyecto.idUsuarioP = int.Parse(datos.Rows[0]["IdUsuario"].ToString());
            objProyecto.nombreProyecto = datos.Rows[0]["nombreProyecto"].ToString();
            objProyecto.visibilidad = datos.Rows[0]["visibilidad"].ToString();

            return objProyecto;

        }

        public List<ClCompartirUserInfo> mtdGetAllusersInProject(string idProyecto)
        {

            ClProcesosSQL objSQL = new ClProcesosSQL();
            string consulta = "SELECT Usuario.* , Compartir.editable FROM Usuario , Compartir WHERE compartir.idUsuarioCompartir = Usuario.IdUsuario AND Compartir.idProyecto = " + idProyecto;
            DataTable datos = objSQL.mtdconsultar(consulta);

            List<ClCompartirUserInfo> listaUsuarios = new List<ClCompartirUserInfo>();

            for (int i = 0; i < datos.Rows.Count; i++)
            {
                ClCompartirUserInfo objUSE = new ClCompartirUserInfo();

                objUSE.IdUsuario = int.Parse(datos.Rows[i]["IdUsuario"].ToString());
                objUSE.IdRol = int.Parse(datos.Rows[i]["IdRol"].ToString());
                objUSE.nombre = datos.Rows[i]["nombre"].ToString();
                objUSE.correo = datos.Rows[i]["correo"].ToString();
                objUSE.password = datos.Rows[i]["password"].ToString();
                objUSE.imagenUsuario = datos.Rows[i]["imagenUsuario"].ToString();
                if (datos.Rows[i]["editable"].ToString() == "True")
                {
                    objUSE.editable = true;
                }
                else
                {
                    objUSE.editable = false;
                }


                listaUsuarios.Add(objUSE);

            }

            return listaUsuarios;

        }

        public List<ClCompartirE> mtdGetCompartirInfoByProjectID(string ProjectId)
        {

            string consulta = "SELECT * FROM Compartir WHERE idProyecto = " + ProjectId;
            ClProcesosSQL objSQL = new ClProcesosSQL();
            DataTable datos = objSQL.mtdconsultar(consulta);

            List<ClCompartirE> listacompartir = new List<ClCompartirE>();

            for (int i = 0; i < datos.Rows.Count; i++)
            {
                ClCompartirE objCompartirE = new ClCompartirE();
                objCompartirE.IdCompartir = int.Parse(datos.Rows[i]["IdCompartir"].ToString());
                objCompartirE.IdOwner = int.Parse(datos.Rows[i]["IdOwner"].ToString());
                objCompartirE.IdUsuarioCompartir = int.Parse(datos.Rows[i]["IdUsuarioCompartir"].ToString());
                objCompartirE.IdProyecto = int.Parse(datos.Rows[i]["IdProyecto"].ToString());
                if (datos.Rows[i]["editable"].ToString() == "True")
                {
                    objCompartirE.editable = true;
                }
                else
                {
                    objCompartirE.editable = false;
                }


                listacompartir.Add(objCompartirE);

            }

            return listacompartir;

        }


        public ClUsuarioE mtdGetProjectOwner(string idProyecto)
        {
            ClProcesosSQL objSQL = new ClProcesosSQL();
            string consulta = "SELECT Usuario.* FROM Usuario , Proyecto WHERE Usuario.IdUsuario = Proyecto.idUsuario AND Proyecto.IdProyecto =" + idProyecto;
            DataTable datos = objSQL.mtdconsultar(consulta);

            ClUsuarioE objUSE = new ClUsuarioE();

            objUSE.IdUsuario = int.Parse(datos.Rows[0]["IdUsuario"].ToString());
            objUSE.IdRol = int.Parse(datos.Rows[0]["IdRol"].ToString());
            objUSE.nombre = datos.Rows[0]["nombre"].ToString();
            objUSE.correo = datos.Rows[0]["correo"].ToString();
            objUSE.password = datos.Rows[0]["password"].ToString();
            objUSE.imagenUsuario = datos.Rows[0]["imagenUsuario"].ToString();

            return objUSE;

        }

        public int mtdUserExistOnProjectById(string correo, string ProjectID)
        {


            ClusuarioD objUSD = new ClusuarioD();
            ClUsuarioE objUSE = objUSD.mtdGetAllUser(correo);

            string consulta = "SELECT * FROM Compartir WHERE idUsuarioCompartir = " + objUSE.IdUsuario + " AND idProyecto = " + ProjectID;
            ClProcesosSQL ObjSQL = new ClProcesosSQL();
            DataTable datos = ObjSQL.mtdconsultar(consulta);

            return datos.Rows.Count;

        }

        public int mtdAddUserToProject(string idProyecto, string correo)
        {

            int existeEnProyecto = mtdUserExistOnProjectById(correo, idProyecto);

            if (existeEnProyecto == 0)
            {

                ClUsuarioE objUSuarioE = new ClUsuarioE();
                objUSuarioE = mtdGetProjectOwner(idProyecto);
                ClusuarioD objUSD = new ClusuarioD();
                ClUsuarioE objUsuarioECompartir = objUSD.mtdGetAllUser(correo);

                string insert = "INSERT INTO Compartir (idOwner , idUsuarioCompartir, idProyecto, editable) VALUES (" + objUSuarioE.IdUsuario + "," + objUsuarioECompartir.IdUsuario + "," + idProyecto + ",'True')";

                ClProcesosSQL objSQL = new ClProcesosSQL();
                int res = objSQL.mtdInsert(insert);

                return res;

            }
            else
            {

                return 0;

            }

        }

        public int mtdUpdateEditableUserByMail(string correo, string editable)
        {

            ClusuarioD objUSD = new ClusuarioD();
            ClUsuarioE objUSE = objUSD.mtdGetAllUser(correo);


            string actualizar = "UPDATE Compartir SET editable ='" + editable + "' WHERE idUsuarioCompartir =" + objUSE.IdUsuario;
            ClProcesosSQL objSQL = new ClProcesosSQL();
            int res = objSQL.mtdInsert(actualizar);
            return res;

        }

        public int mtdDeleteUserOnProjectByMail(string correo, string idProyecto)
        {

            ClusuarioD objUSD = new ClusuarioD();
            ClUsuarioE objUSE = objUSD.mtdGetAllUser(correo);

            string deletestatement = "DELETE FROM Compartir WHERE idUsuarioCompartir =" + objUSE.IdUsuario + " AND idProyecto = " + idProyecto;

            ClProcesosSQL objProcesos = new ClProcesosSQL();
            int res = objProcesos.mtdInsert(deletestatement);

            return res;




        }

        public int mtdUpdateProjectVisibilityById(string idProj, string visibility)
        {

            string updates = "UPDATE Proyecto SET visibilidad = '" + visibility + "' WHERE IdProyecto =" + idProj;
            ClProcesosSQL objSQL = new ClProcesosSQL();
            int res = objSQL.mtdInsert(updates);
            return res;

        }

        public List<ClCompartirProj> mtdGetSharedProjectsByUserId(string id)
        {

            string select = "SELECT Compartir.idProyecto, Usuario.nombre , Proyecto.nombreProyecto, Proyecto.visibilidad FROM Compartir , Usuario, Proyecto WHERE Usuario.IdUsuario = Proyecto.idUsuario AND Usuario.IdUsuario = Compartir.idOwner AND Proyecto.IdProyecto = Compartir.idProyecto AND Compartir.idUsuarioCompartir = " + id;
            ClProcesosSQL objSQL = new ClProcesosSQL();
            DataTable datos = objSQL.mtdconsultar(select);

            List<ClCompartirProj> listaSharedProjs = new List<ClCompartirProj>();

            for (int i = 0; i < datos.Rows.Count; i++)
            {

                ClCompartirProj objCompProj = new ClCompartirProj();
                objCompProj.idProyecto = int.Parse(datos.Rows[i]["idProyecto"].ToString());
                objCompProj.nombreProyecto = datos.Rows[i]["nombreProyecto"].ToString();
                objCompProj.nombre = datos.Rows[i]["nombre"].ToString();
                objCompProj.visibilidad = datos.Rows[i]["visibilidad"].ToString();

                listaSharedProjs.Add(objCompProj);

            }

            return listaSharedProjs;

        }

        public int mtdChekIfUserIsOnProjectById(string id, string projectID)
        {

            string consulta = "SELECT * FROM Compartir WHERE idUsuarioCompartir = " + id + "AND idProyecto = " + projectID;
            ClProcesosSQL objSQL = new ClProcesosSQL();
            DataTable datos = objSQL.mtdconsultar(consulta);

            return datos.Rows.Count;

        }

        public int mtdCheckIfUserIsOwner(string userID, string ProjectID)
        {

            string select = "SELECT * FROM Proyecto WHERE IdProyecto = " + ProjectID + " AND idUsuario =" + userID ;
            ClProcesosSQL objSQL = new ClProcesosSQL();
            DataTable datos = objSQL.mtdconsultar(select);            
            return datos.Rows.Count;

        }

        public ClCompartirE mtdGetUserOnCompartirByID(string UserID, string ProjID) {

            string consulta = "SELECT * FROM Compartir WHERE idUsuarioCompartir = " + UserID + " AND idProyecto =" + ProjID;
            ClProcesosSQL objSql = new ClProcesosSQL();
            DataTable datos = objSql.mtdconsultar(consulta);
            
            ClCompartirE objCompartirE = new ClCompartirE();

            objCompartirE.IdCompartir = int.Parse(datos.Rows[0]["IdCompartir"].ToString());
            objCompartirE.IdOwner = int.Parse(datos.Rows[0]["IdOwner"].ToString());
            objCompartirE.IdUsuarioCompartir = int.Parse(datos.Rows[0]["idUsuarioCompartir"].ToString());
            objCompartirE.IdProyecto = int.Parse(datos.Rows[0]["IdProyecto"].ToString());
            if (datos.Rows[0]["editable"].ToString() == "True" )
            {

                objCompartirE.editable = true;

            }
            else
            {

                objCompartirE.editable = false;

            }
            
            return objCompartirE;


        }

        public List<ClproyectoE> mtdSearchAllProjectByName (string nombre)
        {

            string consulta = "SELECT * FROM Proyecto WHERE nombreProyecto LIKE '%"+ nombre +"%'";
            ClProcesosSQL objSQL = new ClProcesosSQL();
            DataTable datos = objSQL.mtdconsultar(consulta);

            List<ClproyectoE> listaProyectos = new List<ClproyectoE>();


            for (int i = 0; i < datos.Rows.Count; i++)
            {

                ClproyectoE objProjE = new ClproyectoE();
                objProjE.IdProyecto = int.Parse(datos.Rows[i]["IdProyecto"].ToString());
                objProjE.IdUsuario = int.Parse(datos.Rows[i]["idUsuario"].ToString());
                objProjE.nombreProyecto = datos.Rows[i]["nombreProyecto"].ToString();
                objProjE.visibilidad = datos.Rows[i]["visibilidad"].ToString();

                listaProyectos.Add(objProjE);
            }

            return listaProyectos;


        }

        public int mtdDeleteProjectByid(string id) { 
        
            Procedimientos proc  = new Procedimientos();
            int res = proc.mtdDeleteProject(id);
            return res;

        }


    }

}