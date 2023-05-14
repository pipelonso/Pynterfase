﻿using Microsoft.SqlServer.Server;
using Pynterfase.Datos;
using Pynterfase.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
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

        public int mtdAddProject(ClproyectoE objProyecto) {

            ClProyectoD objProyectoD = new ClProyectoD();
            int res = objProyectoD.mtdAddProject(objProyecto);

            return res;

        }

        public ClproyectoE mtdGetRecentProjectIdByMail(string correo) {

            ClProyectoD objProyectoD = new ClProyectoD();
            ClproyectoE objProyecto = objProyectoD.mtdGetRecentProjectIdByMail(correo);
            return objProyecto;
        
        }



    }
}