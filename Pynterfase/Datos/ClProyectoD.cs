using Pynterfase.Entidades;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Runtime.InteropServices;
using System.Security.Cryptography;
using System.Web;

namespace Pynterfase.Datos
{
    public class ClProyectoD
    {
        public List<ClproyectoE> mtdGetAllProjects(string idUsuario) {
            
            Procedimientos proc = new Procedimientos();
            List<ClproyectoE> listaProyectos = proc.mtdGetAllProjects(idUsuario);
            return listaProyectos;

        }

        public int mtdAddProject(ClproyectoE objProyecto) {

            ClProcesosSQL objSQL = new ClProcesosSQL();
            string insert = "INSERT INTO Proyecto (idUsuario , nombreProyecto , visibilidad) VALUES ("+objProyecto.idUsuarioP+",'"+objProyecto.nombreProyecto+"','"+objProyecto.visibilidad+"')";
            int res = objSQL.mtdInsert(insert);

            return res;
        
        }

        public ClproyectoE mtdGetRecentProjectIdByMail(string correo) {

            ClProcesosSQL objSQL = new ClProcesosSQL();
            string consulta = "select MAX(idProyecto) as idProyecto FROM Proyecto , Usuario WHERE Usuario.correo = '"+correo+"' AND Proyecto.idUsuario = Usuario.IdUsuario";
            DataTable datos = objSQL.mtdconsultar(consulta);

            ClproyectoE objProyecto = new ClproyectoE();
            objProyecto.IdProyecto = int.Parse(datos.Rows[0]["idProyecto"].ToString());
            return objProyecto;

        }


        public ClproyectoE mtdGetProjectById(string id) {

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

        public List<ClCompartirUserInfo> mtdGetAllusersInProject(string idProyecto) {

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
                if (datos.Rows[i]["editable"].ToString() == "true")
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
                if (datos.Rows[i]["editable"].ToString() == "true")
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


        public ClUsuarioE mtdGetProjectOwner(string idProyecto) {
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


        public int mtdAddUserToProject(string idProyecto, string correo) {

            ClUsuarioE objUSuarioE = new ClUsuarioE();
            objUSuarioE = mtdGetProjectOwner(idProyecto);
            ClusuarioD objUSD = new ClusuarioD();
            ClUsuarioE objUsuarioECompartir = objUSD.mtdGetAllUser(correo);

            string insert = "INSERT INTO Compartir (idOwner , idUsuarioCompartir, idProyecto, editable) VALUES ("+objUSuarioE.IdUsuario+","+objUsuarioECompartir.IdUsuario+","+idProyecto+",1)";
            
            ClProcesosSQL objSQL = new ClProcesosSQL();
            int res = objSQL.mtdInsert(insert);

            return res;
            
        }

        



    }
}