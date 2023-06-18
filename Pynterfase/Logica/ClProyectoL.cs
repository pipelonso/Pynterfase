using Microsoft.SqlServer.Server;
using Pynterfase.Datos;
using Pynterfase.Entidades;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Runtime.Remoting;
using System.Web;

namespace Pynterfase.Logica
{
    public class ClProyectoL
    {

        public List<ClproyectoE> mtdGetAllByUser(string iduser) {

            ClProyectoD obProyD = new ClProyectoD();
            List<ClproyectoE> listaproyectos = obProyD.mtdGetAllProjects(iduser);
            return listaproyectos;

        }

        public List<ClproyectoE> mtdGetAllProjectsInApp()
        {

            ClProyectoD objProjD = new ClProyectoD();
            List<ClproyectoE> listaproyectos = objProjD.mtdGetAllProjectsInApp();
            return listaproyectos;

        }


        public int mtdAddProject(ClproyectoE objProyecto) {

            ClProyectoD objProyectoD = new ClProyectoD();
            int res = objProyectoD.mtdAddProject(objProyecto);

            return res;

        }

        public int mtdEditProjectNameById(string id, string NewName)
        {
            ClProyectoD objPROJD = new ClProyectoD();
            int res = objPROJD.mtdUpdateProjectNamebyId(id, NewName);
            return res;
        }

        public ClproyectoE mtdGetRecentProjectIdByMail(string correo) {

            ClProyectoD objProyectoD = new ClProyectoD();
            ClproyectoE objProyecto = objProyectoD.mtdGetRecentProjectIdByMail(correo);
            return objProyecto;

        }

        public ClUsuarioE mtdGetProjectOwner(String id)
        {

            ClProyectoD objPROJD = new ClProyectoD();
            ClUsuarioE objEDD = objPROJD.mtdGetProjectOwner(id);
            return objEDD;
        }


        public ClproyectoE mtdGetProjectById(string id) {

            ClProyectoD objProyectoD = new ClProyectoD();
            ClproyectoE objProyecto = objProyectoD.mtdGetProjectById(id);
            return objProyecto;

        }

        public List<ClCompartirUserInfo> mtdGetAllUserInProject(string idProyecto)
        {

            ClProyectoD objProjD = new ClProyectoD();
            List<ClCompartirUserInfo> listaUsuarios = objProjD.mtdGetAllusersInProject(idProyecto);
            return listaUsuarios;

        }

        public int mtdAddUserToProject(string idProject, string correo) {

            ClProyectoD objProjD = new ClProyectoD();
            int proceso = objProjD.mtdAddUserToProject(idProject,correo);
            return proceso;
        
        }

        public int mtdUpdateEditableUserByMail(string correo , string editable) {

            ClProyectoD objProjD = new ClProyectoD();
            int res = objProjD.mtdUpdateEditableUserByMail(correo, editable);
            return res;
        
        }

        public int mtdDeleteUserOnProjectByMail(string email, string idProyecto)
        {

            ClProyectoD objProJD = new ClProyectoD();
            int res = objProJD.mtdDeleteUserOnProjectByMail(email , idProyecto);
            return res;

        }

        public int mtdUpdateVisibilityById(string idProj, string visibility)
        {

            ClProyectoD objProjD =new ClProyectoD();    
            int res = objProjD.mtdUpdateProjectVisibilityById(idProj,visibility);
            return res;


        }

        public List<ClCompartirProj> mtdGetSharedProjectsByUserId(string id)
        {

            ClProyectoD objProjD = new ClProyectoD();
            List<ClCompartirProj> listaproj = objProjD.mtdGetSharedProjectsByUserId(id);
            return listaproj;

        }

        public int mtdCheckIfUserIsOnProjectById(string id, string projectID)
        {

            ClProyectoD objProjD = new ClProyectoD();
            int res = objProjD.mtdChekIfUserIsOnProjectById(id,projectID);
            return res;
        }

        public int mtdCheckIfUserIsOwner(string UserID, string ProjectId) {

            ClProyectoD objProjD = new ClProyectoD();
            int res = objProjD.mtdCheckIfUserIsOwner(UserID , ProjectId);
            return res;

        }

        public ClCompartirE mtdGetUserOnCompartirById(string userID , String ProjectID)
        {

            ClProyectoD objProjD = new ClProyectoD();
            ClCompartirE objCompE = objProjD.mtdGetUserOnCompartirByID(userID , ProjectID);
            return objCompE;

        }

        public List<ClproyectoE> mtdSearchProjectsByName(string nombre)
        {

            ClProyectoD objProjD = new ClProyectoD();
            List<ClproyectoE> listaProj = objProjD.mtdSearchAllProjectByName(nombre);
            return listaProj;

        }

        public int mtdDeleteProjectKiller(string id)
        {

            ClProyectoD objProjD = new ClProyectoD();
            int res = objProjD.mtdDeleteProjectByid(id);
            return res;
            
        }

    }
}