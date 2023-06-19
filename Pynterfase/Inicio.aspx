<%@ Page Title="" Language="C#" MasterPageFile="~/Principal.Master" AutoEventWireup="true" CodeBehind="Inicio.aspx.cs" Inherits="Pynterfase.Inicio" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link href="Vista/mycss/Inicio.css" rel="stylesheet" />
    <link href="Content/animate.css" rel="stylesheet" />
    <link href="Vista/css/bootstrap.min.css" rel="stylesheet" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="">
        
        <div style="height: 200px; position : sticky; top:0px; z-index : 100000;" class="TitleBack" id="titleBack">
            <div class="intoTitleBack" style="height:200px;">
                <h1 class="text-center text-white" style="position:relative; top:70px; font-size : 60px; ">PYNTERFASE</h1>
            </div>
        </div>
        
        <div style="position : relative; top : 0px; height:200px;" class="TransMint">

            <h1 style="position :relative; top: 70px;" class="text-white text-center">BIENVENIDO</h1>

        </div>

        <div class="m-2 p-2 TransPink rounded-3 selection isInitialHiden" id="1Box">

            <div class="rounded-3 bg-dark p-2">
                <h4 class="text-white">QUE ES PYNTERFASE</h4>
            </div>
            <div class="container-fluid navbar">
                <p class="col-12 col-sm-12 col-md-5 col-lg-6 text-white nav-item">Pynterfase es una herramienta diseñada para la creación de interfaces para python que usan tkinter para funcionar, esta diseñado para generar codigo que puedes descargar y ejecutar. Se cargara la interfaz que hallas creado.</p>
                <img src="Vista/imagenes/Inicio/Cap1Editor.png" alt="Editor" class="col-12 col-sm-12 col-md-4 col-lg-5 nav-item rounded-3" />                              
            </div>                  
        </div>

        <div class="TransBlue m-2 p-2 rounded-3 selection isInitialHiden" id="2Box">
                <div class="rounded-3 bg-dark p-2">
                    <h4 class="text-white">Comparte Proyectos</h4>
                </div>
                <div class="container-fluid ">

                    <p class="col-12 col-sm-12 col-md-5 col-lg-6 text-white nav-item">Puedes agregar usuarios a tu proyecto para que ellos puedan tanto ver como agregar, editar y eliminar elementos de tu proyecto Pynterfase</p>

                    <div class="navbar rounded-3">
                        <img src="Vista/imagenes/Inicio/CapCompartidos.png" alt="capShared" class="nav-item col-12 col-sm-12 col-md-6 col-lg-5"/>
                        <img src="Vista/imagenes/Inicio/CapAddPeople.png" alt="capPeople" class="nav-item col-12 col-sm-12 col-md-6 col-lg-5"/>                        
                    </div>

                </div>               
            </div>    
            
        <div class="m-2 p-2 TransPink rounded-3 selection isInitialHiden" id="3Box">

            <div class="rounded-3 bg-dark p-2">
                <h4 class="text-white">CREA PROYECTOS</h4>
            </div>

            <div class="container-fluid navbar">
                <p class="col-12 col-sm-12 col-md-5 col-lg-6 text-white nav-item">Puedes crear todos los proyectos que quieras, estos se almacenaran dentro del sitio web</p>
                <img src="Vista/imagenes/Inicio/CapProjects.png" alt="saved" class="col-12 col-sm-12 col-md-4 col-lg-5 nav-item rounded-3"  />
            </div>

        </div>


        <div class="m-2 p-2 TransBlue rounded-3 selection isInitialHiden" id="4Box">

            <div class="rounded-3 bg-dark p-2">
                <h4 class="text-white">GUARDA PROYECTOS</h4>
            </div>

            <div class="container-fluid navbar">
                <p class="col-12 col-sm-12 col-md-5 col-lg-6 text-white nav-item">Puedes guardar proyectos de otras personas para ver sus avances y usar las creaciones de ellos</p>
                <img src="Vista/imagenes/Inicio/capSaved.png" alt="saved" class="col-12 col-sm-12 col-md-4 col-lg-5 nav-item rounded-3"  />
            </div>

        </div>


        <div style="" class="p-2 bg-dark">

            <p class ="text-center text-white" style="">Este proyecto ha llevado mucho tiempo de elaboración, es complaciente poder llegar a escribir este mensaje, nos vemos hasta la proxima.</p>

        </div>


    </div>
    <script src="Vista/js/bootstrap.min.js"></script>
    <script src="Inicio.js"></script>
</asp:Content>
