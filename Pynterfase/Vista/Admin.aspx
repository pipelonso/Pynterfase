<%@ Page Title="" Language="C#" MasterPageFile="~/ProjectsContent.Master" AutoEventWireup="true" CodeBehind="Admin.aspx.cs" Inherits="Pynterfase.Vista.Admin" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link href="../Styles/sweetalert.css" rel="stylesheet" />
    <link href="css/bootstrap.min.css" rel="stylesheet" />
    <link href="mycss/Admin.css" rel="stylesheet" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="container-fluid">

        <h1 class="text-white my-2" style="background-image : url('imagenes/OnBar.svg'); padding : 10px; border-radius : 5px;" >Administración</h1>

        <div class="navbar">

            <div class="nav-item col-12 col-sm-12 col-md-5 col-lg-6 p-2 text-white">
                <h4>Busqueda de usuarios</h4>
                <div class="py-3">
                    <p>Buscar</p>
                    <asp:TextBox ID="txtSearchUser" runat="server" TextMode="Search" CssClass="w-100 txtcajas"></asp:TextBox>
                    <asp:Button ID="btnBuscarUser" runat="server" Text="Buscar" OnClick="btnBuscarUser_Click" CssClass="botones my-2" />
                </div>

                <div class="w-100 p-2 searchbox onratio" style="overflow : auto; height:400px;">

                    <asp:Repeater ID="RPUsuarios" runat="server">

                        <ItemTemplate>

                            <div class="w-100 navbar selection px-2 onratio my-2">

                                <h5 class="nav-item"> <%# Eval("nombre") %> </h5>
                                <asp:Label ID="lblCorreoUserRP" runat="server" Text='<%# Eval("correo") %>'></asp:Label>
                                <asp:Image ID="Image1" runat="server" ImageUrl='<%# Eval("imagenUsuario")  %>' Height="120px" CssClass="nav-item onratio" /> 
                                <asp:Label ID="lblUserID" runat="server" Text='<%# Eval("IdUsuario") %>' CssClass="NotVisible"></asp:Label>
                                
                                <asp:LinkButton ID="lblInspeccionarUser" runat="server" CssClass="w-100 text-decoration-none text-white btnIns my-1 p-2" OnClick="lblInspeccionarUser_Click">                                    
                                    <img src="imagenes/engrane.svg" alt="Engrane" />
                                    INSPECCIONAR
                                </asp:LinkButton>

                            </div>
                            


                        </ItemTemplate>

                    </asp:Repeater>

                </div>

            </div>

            <div class="nav-item col-12 col-sm-12 col-md-5 col-lg-6 p-2 text-white">

                <h4>Busqueda de proyectos</h4>

                <div class="py-3">
                    <p>Buscar</p>
                    <asp:TextBox ID="txtSearchProj" runat="server" CssClass="w-100 txtcajas" TextMode="Search" ></asp:TextBox>
                    <asp:Button ID="btnSearchProj" runat="server" Text="Buscar" OnClick="btnSearchProj_Click" CssClass="botones my-2"/>
                </div>

                <div class="w-100 p-2 searchbox onratio" style="overflow : auto; height:400px;">

                    <asp:Repeater ID="RPProjects" runat="server" >

                        <ItemTemplate>  
                            <div class="selection my-2 px-2 onratio navbar">
                                <h5 class="nav-item"> <%# Eval("nombreProyecto")  %></h5>
                                <asp:Label ID="lblIDProj" runat="server" Text='<%# Eval("IdProyecto") %>' CssClass="NotVisible"></asp:Label>
                                <asp:LinkButton ID="lblInspeccionarProj" runat="server" CssClass=" text-decoration-none text-white nav-item btnIns p-2">                                    
                                    <img src="imagenes/engrane.svg" alt="Engrane" />
                                    INSPECCIONAR
                                </asp:LinkButton>


                            </div>
                            

                        </ItemTemplate>

                    </asp:Repeater>


                </div>

            </div>


        </div>


        <div >

            <div class="text-white searchbox onratio p-2 my-2">
                <div class="selection p-2 onratio my-2">

                    <h4>Usuario Seleccionado</h4>

                    <asp:Image ID="userPickImg" runat="server" CssClass="onratio" ImageUrl="~/Vista/Pynterfase avatars/1.png" Height="150px" Width="150px"/>
                    <asp:Label ID="lblUserNameF" runat="server" Text="NN" Font-Size="20px" CssClass="my-2 py-2 mx-2"></asp:Label>
                    <hr />
                    <p>Id de Usuario</p>
                    <asp:Label ID="lblIdUser" runat="server" Text="--id--" CssClass="my-3 py-2"></asp:Label>
                    <hr />
                    <p>Correo</p>
                    <asp:Label ID="lblUserMail" runat="server" Text="--Mail--" CssClass="my-3 py-2"></asp:Label>
                    <hr />
                    <p>Verificado</p>
                    <asp:Label ID="lblVerificado" runat="server" Text="--Verify--" CssClass="my-3 py-2"></asp:Label>

                </div>
                

                <div class="controles p-2">

                    <p>Estado :: Si el usuario a cometido alguna infracción puede ser suspendido</p>
                    <asp:DropDownList ID="ddlEstado" runat="server" CssClass="txtcajas"></asp:DropDownList>
                    <asp:Button ID="btnApplyState" runat="server" Text="Aplicar estado" CssClass="botones" OnClick="btnApplyState_Click" Enabled="true"/>
                    <hr />
                    <p>Cambiar nombre :: Solo has esto si el usuario tiene un nombre en contra de las politicas</p>
                    <asp:TextBox ID="txtUserName" runat="server" CssClass="txtcajas"></asp:TextBox>
                    <asp:Button ID="btnChangeUserName" runat="server" Text="APLICAR CAMBIO DE NOMBRE" CssClass="botones" Enabled="true" OnClick="btnChangeUserName_Click"/>
                    <hr />
                    <p>Restablecer Foto de perfil :: Solo puedes establecer la imagen a una por defecto, por la seguridad del usuario</p>
                    <asp:Button ID="btnRestablecerFoto" runat="server" Text="Restablecer Foto" CssClass="botones" Enabled="true" OnClick="btnRestablecerFoto_Click"/>
                    <hr />
                    <p>Borrar usuario :: ADVERTENCIA --- ESTA ACCIÓN SERA IRREVERSIBLE</p>
                    <asp:Button ID="btnDeleteUser" runat="server" Text="☠ ELIMINAR USUARIO ☠" CssClass="Deletebtn" Enabled="true"/>

                </div>




            </div>

        </div>

        <div>

            <div class="text-white searchbox onratio p-2 my-2">
               
                <div class="selection p-2">

                    <h4>Proyecto seleccionado</h4>
                    
                    <asp:Label ID="lblNumbreProj" runat="server" Text="--Nombre--"></asp:Label>
                    <br />
                    <asp:Label ID="lblIdProj" runat="server" Text="--Id--"></asp:Label>
                    <br />
                    <asp:Label ID="lblAutorProj" runat="server" Text="--Autor--"></asp:Label>
                    <br />
                  
                    <asp:Label ID="lblVisibilidad" runat="server" Text="--Visibilty--"></asp:Label>

                </div>

                <div class="controles p-2">

                    <asp:Repeater ID="RpUsersOnProj" runat="server">

                        <ItemTemplate>

                            <div class="navbar  isuserbox container-fluid my-2">
                                            <div class="nav-item navbar col-sm-10 col-md-10 col-lg-10">
                                                <asp:Label ID="lblNombreUserRP" runat="server" Text='<%# Eval("nombre") %>' CssClass="nav-item mx-2 text-white"></asp:Label>
                                                <asp:Label ID="lblCorreoRp" runat="server" Text='<%# Eval("correo") %>' CssClass="nav-item mx-2 text-white"></asp:Label>
                                                <asp:Image ID="imgUserRP" runat="server" ImageUrl='<%# Eval("imagenUsuario") %>' CssClass="nav-item mx-2 imgUser" Height="40px" Width="40px" />
                                            </div>
                                            <asp:CheckBox ID="chkEditableUser" runat="server" CssClass="nav-item mx-2 col-sm-1 col-md-1 col-lg-1 text-white" Text="Puede editar" Checked='<%# Eval("editable") %>'  />
                                            
                                            <asp:Button ID="btnDeleteUserRp" runat="server" Text="" CssClass="btnDeleteUser nav-item mx-2 col-sm-1 col-md-1 col-lg-1"  />
                                            <asp:Button ID="btnUpdateUser" runat="server" Text="Actualizar" CssClass="botones col-sm-12 col-md-12 col-lg-12" />
                                        </div>




                        </ItemTemplate>

                    </asp:Repeater>



                </div>


            </div>


        </div>






    </div>


    <script src="js/bootstrap.min.js"></script>
    <script src="alertManager.js"></script>
    <script src="../Scripts/sweetalert.min.js"></script>
</asp:Content>
