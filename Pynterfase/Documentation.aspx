<%@ Page Title="" Language="C#" MasterPageFile="~/Principal.Master" AutoEventWireup="true" CodeBehind="Documentation.aspx.cs" Inherits="Pynterfase.Documentation" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link href="Vista/mycss/Documentacion.css" rel="stylesheet" />
    <link href="Vista/css/bootstrap.min.css" rel="stylesheet" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <div>
        <h1 class="bg-dark p-2 text-white rounded-3 m-2">Documentación</h1>
    </div>

    <div class="p-2" id="divIndice">

        <div class="p-2 text-white bg-dark rounded-3" style="border: double; border-color: white;">
            <h4 class="text-white">Tabla de contenido</h4>

            <ul>
                <li>
                    <a href="#divIndice" class="text-white">Indice</a>
                </li>
                <li>
                    <a href="#divTkinter" class="text-white">Tkinter</a>
                </li>
                <li>
                    <a href="#divCreate" class="text-white">Crear un proyecto</a>
                </li>
                <li>
                    <a href="#divButton" class="text-white">Botones</a>
                </li>
                <li>
                    <a href="#divLabel" class="text-white">Labels</a>
                </li>
                <li>
                    <a href="#divInput" class="text-white">Entry</a>
                </li>
                <li>
                    <a href="#divCheck" class="text-white">Checkbox</a>
                </li>
                <li>
                    <a href="#divPrivacy" class="text-white">Privacidad de contenido</a>
                </li>
                <li>
                    <a href="#divShare" class="text-white">Compartir proyectos</a>
                </li>
            </ul>

        </div>

        <div class="text-white p-2 " id="divTkinter">
            <div class="p-2 bg-dark rounded-3">
                <div>
                    <h4>TKINTER</h4>
                </div>
                <div class="navbar TransPink selection p-2">
                    <p class="col-12 col-s-12 col-md-6 col-lg-6">
                    Tkinter es una biblioteca de interfaz gráfica de usuario (GUI,
                        por sus siglas en inglés) para el lenguaje de programación Python. Proporciona una forma rápida
                        y sencilla de crear ventanas, botones, campos de entrada, cuadros de diálogo y otros elementos de interfaz gráfica.
                        Tkinter se basa en Tk, una biblioteca de GUI multiplataforma
                        que se originó en el lenguaje de programación Tcl (Tool Command Language).
                        Tk fue creado por John Ousterhout en la década de 1980 como parte de su investigación en el laboratorio de Ciencias de la Computación de la Universidad de California en Berkeley. Fue diseñado para proporcionar una forma sencilla de crear interfaces gráficas para aplicaciones Tcl.
                        En los años siguientes, Tk ganó popularidad y se convirtió en una de las bibliotecas de GUI más
                        utilizadas en el mundo Tcl. Debido a su éxito, se crearon enlaces para utilizar Tk desde otros lenguajes de programación,
                        incluido Python. Tkinter se incluye como parte de la biblioteca estándar de Python,
                        lo que significa que está disponible de forma predeterminada cuando instalas Python en tu sistema.
                    </p>
                    <img src="Vista/imagenes/Documentación/TkWindow.png" alt="Alternate Text" class="col-12 col-s-12 col-md-4 col-lg-4"/>

                </div>                

            </div>
        </div>

        <div class="text-white p-2" id="divCreate"> 
            <div class="p-2 bg-dark rounded-3">
                <div>
                    <h4>Como crear un proyecto</h4>
                </div>

                <div>
                    <ul>
                        <li>
                            <div class="navbar p-2 TransBlue selection">
                                <p class="nav-item col-12 col-sm-12 col-md-6 col-lg-6"> Entra a tu panel de proyectos, y dale al botón CREAR PROYECTO NUEVO </p> 
                                <img src="Vista/imagenes/Inicio/CapProjects.png" alt="Alternate Text" class="nav-item col-12 col-sm-12 col-md-5 col-lg-5" />
                            </div>                            
                        </li>
                        <li>
                            <div class="navbar p-2 TransBlue selection">
                                <p class="nav-item col-12 col-sm-12 col-md-6 col-lg-6">Escribe el nombre del proyecto y su visibilidad, dependera de eso que otros usuarios puedan interactuar con tu proyecto</p>                            
                                <img class="nav-item col-12 col-sm-12 col-md-5 col-lg-5" src="Vista/imagenes/Documentación/CreateProc.png" alt="a"/>
                            </div>                            
                        </li>
                        <li>
                            <div class="navbar p-2 TransBlue selection">
                                <p class="nav-item col-12 col-sm-12 col-md-6 col-lg-6">Una vez adentro puedes configurar las dimensiones que tendra la pantalla de la ventana de tkinter de tu proyecto y que nombre tendra la ventana</p>
                                <img  class="nav-item col-12 col-sm-12 col-md-5 col-lg-5" src="Vista/imagenes/Documentación/SetDimensions.png" />
                            </div>
                        </li>
                        <li>
                            <div class="navbar p-2 TransBlue selection">
                                <p class="nav-item col-12 col-sm-12 col-md-6 col-lg-6">Una vez ahi ya puedes comenzar a usar el editor</p>
                                <img class="nav-item col-12 col-sm-12 col-md-5 col-lg-5" src="Vista/imagenes/Documentación/bacnkeditor.png" />
                            </div>
                        </li>
                    </ul>
                </div>

                
            </div>
          
        </div>

        <div class="p-2 text-white" id="divButton"> 
                    <div class="p-2 bg-dark rounded-3">
                        <div class="bg-black p-2 navbar rounded-3 navbar-collapse">
                            <h4 class="nav-item"> Button </h4>
                            <img class="nav-item " style="height : 40px;" src="Vista/imagenes/TkButtons/btnButton.svg" alt="Alternate Text" />
                        </div>

                        <p>El boton es una parte escenacial de tkinter, con el ejecutamos acciones de click en una interfaz de tkinter</p>

                        <div >
                            <h5>Como crear un boton</h5>

                            <ul>
                                <li>
                                    <div class="navbar p-2 TransPink selection">

                                        <p class="nav-item col-12 col-sm-12 col-md-6 col-lg-6">Primero oprime el boton que dice Button para indicar que quieres crear un boton</p>
                                        <img class="nav-item col-12 col-sm-12 col-md-5 col-lg-5" src="Vista/imagenes/Documentación/ButtonButton.png" />

                                    </div>                                    
                                </li>
                                <li>
                                    <div class="navbar p-2 TransPink selection">

                                        <p class="nav-item col-12 col-sm-12 col-md-6 col-lg-6">Despues dale al boton de agregar para confirmar la selección y que el editor se encargue de crear el boton en el lienzo</p>
                                        <img class="nav-item col-12 col-sm-12 col-md-5 col-lg-5" src="Vista/imagenes/Documentación/AddElement.png" />

                                    </div>                                    
                                </li>
                                
                                <li>
                                    <div class="navbar p-2 TransPink selection">

                                        <p class="nav-item col-12 col-sm-12 col-md-6 col-lg-6">Se te creara un boton dentro del lienzo</p>
                                        <img class="nav-item col-12 col-sm-12 col-md-5 col-lg-5" src="Vista/imagenes/Documentación/createdBTN.png" />

                                    </div>                                    
                                </li>
                            </ul>

                        </div>


                    </div>
                </div>

        
        <div class="p-2 text-white" id="divLabel"> 
                    <div class="p-2 bg-dark rounded-3">
                        <div class="bg-black p-2 navbar rounded-3 navbar-collapse">
                            <h4 class="nav-item"> Label </h4>
                            <img class="nav-item " style="height : 40px;" src="Vista/imagenes/TkButtons/btnLabel.svg" alt="Alternate Text" />
                        </div>

                        <p>El label es una parte escenacial de tkinter, con el podemos poner textos o brindar información al usuario</p>

                        <div >
                            <h5>Como crear un label</h5>

                            <ul>
                                <li>
                                    <div class="navbar p-2 TransBlue selection">

                                        <p class="nav-item col-12 col-sm-12 col-md-6 col-lg-6">Primero oprime el boton que dice Label para indicar que quieres crear un label</p>
                                        <img class="nav-item col-12 col-sm-12 col-md-5 col-lg-5" src="Vista/imagenes/Documentación/btnLabel.png" />

                                    </div>                                    
                                </li>                              
                                <li>
                                    <div class="navbar p-2 TransBlue selection">
                                        <p class="nav-item col-12 col-sm-12 col-md-6 col-lg-6">Despues dale al boton de agregar para confirmar la selección y que el editor se encargue de crear el Label en el lienzo</p>
                                        <img class="nav-item col-12 col-sm-12 col-md-5 col-lg-5" src="Vista/imagenes/Documentación/AddLabel.png" />
                                    </div>                                    
                                </li>
                                <li>
                                    <div class="navbar p-2 TransBlue selection">

                                        <p class="nav-item col-12 col-sm-12 col-md-6 col-lg-6">Se te creara un Label dentro del lienzo</p>
                                        <img class="nav-item col-12 col-sm-12 col-md-5 col-lg-5" src="Vista/imagenes/Documentación/CreatedLalbe.png" />

                                    </div>                                    
                                </li>
                            </ul>

                        </div>


                    </div>
                </div>

        <div class="p-2 text-white" id="divInput"> 
                    <div class="p-2 bg-dark rounded-3">
                        <div class="bg-black p-2 navbar rounded-3 navbar-collapse">
                            <h4 class="nav-item"> Input </h4>
                            <img class="nav-item " style="height : 40px;" src="Vista/imagenes/TkButtons/btnTextBox.svg" alt="Alternate Text" />
                        </div>

                        <p>El input es escencial a la hora de crear interfaces ya que este nos permite obtener texto  del usuario para ser procesado despues</p>

                        <div >
                            <h5>Como crear un Input</h5>

                            <ul>
                                <li>
                                    <div class="navbar p-2 TransPink selection">

                                        <p class="nav-item col-12 col-sm-12 col-md-6 col-lg-6">Primero oprime el boton que dice Input para indicar que quieres crear un input</p>
                                        <img class="nav-item col-12 col-sm-12 col-md-5 col-lg-5" src="Vista/imagenes/Documentación/btnInput.png" />

                                    </div>                                    
                                </li>                              
                                <li>
                                    <div class="navbar p-2 TransPink selection">
                                        <p class="nav-item col-12 col-sm-12 col-md-6 col-lg-6">Despues dale al boton de agregar para confirmar la selección y que el editor se encargue de crear el Input en el lienzo</p>
                                        <img class="nav-item col-12 col-sm-12 col-md-5 col-lg-5" src="Vista/imagenes/Documentación/addInput.png" />
                                    </div>                                    
                                </li>
                                <li>
                                    <div class="navbar p-2 TransPink selection">

                                        <p class="nav-item col-12 col-sm-12 col-md-6 col-lg-6">Se te creara un Input dentro del lienzo</p>
                                        <img class="nav-item col-12 col-sm-12 col-md-5 col-lg-5" src="Vista/imagenes/Documentación/CreatedInput.png" />
                                    </div>                                    
                                </li>
                            </ul>

                        </div>


                    </div>
                </div>

        <div class="p-2 text-white" id="divCheck"> 
                    <div class="p-2 bg-dark rounded-3">
                        <div class="bg-black p-2 navbar rounded-3 navbar-collapse">
                            <h4 class="nav-item"> Checkbox </h4>
                            <img class="nav-item " style="height : 40px;" src="Vista/imagenes/TkButtons/btnCheckbox.svg" alt="Alternate Text" />
                        </div>

                        <p>El checkbox se usa para retornar valores de verdadero y falso, se puede usar para formularios o diferentes propositos</p>

                        <div >
                            <h5>Como crear un Checkbox</h5>

                            <ul>
                                <li>
                                    <div class="navbar p-2 TransBlue selection">

                                        <p class="nav-item col-12 col-sm-12 col-md-6 col-lg-6">Primero oprime el boton que dice Checkbox para indicar que quieres crear un Checkbox</p>
                                        <img class="nav-item col-12 col-sm-12 col-md-5 col-lg-5" src="Vista/imagenes/Documentación/btnCheckbox.png" />

                                    </div>                                    
                                </li>                              
                                <li>
                                    <div class="navbar p-2 TransBlue selection">
                                        <p class="nav-item col-12 col-sm-12 col-md-6 col-lg-6">Despues dale al boton de agregar para confirmar la selección y que el editor se encargue de crear el Checkbox en el lienzo</p>
                                        <img class="nav-item col-12 col-sm-12 col-md-5 col-lg-5" src="Vista/imagenes/Documentación/addCheckbox.png" />
                                    </div>                                    
                                </li>
                                <li>
                                    <div class="navbar p-2 TransBlue selection">
                                        <p class="nav-item col-12 col-sm-12 col-md-6 col-lg-6">Se te creara un Checkbox dentro del lienzo</p>
                                        <img class="nav-item col-12 col-sm-12 col-md-5 col-lg-5" src="Vista/imagenes/Documentación/CreatedCheckbox.png" />
                                    </div>                                    
                                </li>
                            </ul>

                        </div>


                    </div>
                </div>

        <div class="p-2 bg-dark rounded-2" id="divPrivacy">

            <div class="p-2 text-white">

                <div class="bg-black rounded-3 p-2" >
                    <h4>Privacidad del proyecto</h4>
                </div>

                <div class="navbar p-2 TransPink selection">

                    <p class="col-12 col-s-12 col-md-6 col-lg-6">Para alternar la visibilidad / privacidad de tu proyecto en la parte de arriba en el apartado de usuarios y privacidad se encuentran los controles de privacidad donde puedes seleccionar si el proyecto es publico o privado en cualquier momento</p>
                    <img class="col-12 col-s-12 col-md-5 col-lg-5" src="Vista/imagenes/Documentación/ChangePrivacy.png" alt="pr"/>


                </div>


            </div>

        </div>

        <div class="p-2 bg-dark" id="divShare">

            <div class="p-2 text-white">

                <div class="bg-black rounded-3 p-2" >
                    <h4>Compartir proyectos</h4>
                </div>

                <div class="navbar p-2 TransBlue selection">

                    <p class="col-12 col-s-12 col-md-6 col-lg-6">Puedes agregar personas escribiendo su corren y buscando el usuario, si el usuario existe se agregara al proyecto, puedes hacer que el usuario pueda editar o solo mirar, si el proyecto esta en privado el seguira teniendo acceso al proyecto aun asi no pueda editar</p>
                    <img class="col-12 col-s-12 col-md-5 col-lg-5" src="Vista/imagenes/Documentación/AddUsers.png" alt="pr"/>


                </div>


            </div>

        </div>




    </div>



    <script src="Vista/js/bootstrap.min.js"></script>
</asp:Content>
