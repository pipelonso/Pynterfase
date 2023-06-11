<%@ Page Title="" Language="C#" MasterPageFile="~/ProjectsContent.Master" AutoEventWireup="true" CodeBehind="ProjSharedWithMe.aspx.cs" Inherits="Pynterfase.Vista.ProjSharedWithMe" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">

    <link href="mycss/SharedWithMe.css" rel="stylesheet" />

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="container-fluid"> 

        <h1 class="text-white my-2" style="background-image : url('imagenes/OnBar.svg'); padding : 10px; border-radius : 5px;">COMPARTIDOS CONTIGO</h1>
        
        <div class="navbar nav-collapse"> 
            <asp:Repeater ID="RpProyectos" runat="server">
                <ItemTemplate>

                    
                        <div class="col-12 col-sm-12 col-md-6 col-lg-4 mx-2 nav-item my-2 cajaProj" style="background-image:url('imagenes/SharedBox.svg'); background-size:cover; border-radius : 10px; height:300px; ">
                            <div style="padding:5px; border-top-left-radius:10px; border-top-right-radius:10px; " class="bg-dark">                                
                                <h3 class="text-center text-white"> <%# Eval("nombreProyecto") %> </h3>                                                                   
                            </div>                           
                                <h5 class="text-white mx-2">Creador: <%# Eval("nombre") %></h5>
                                <p class="text-white mx-2">Acceso: <%# Eval("visibilidad") %></p>
                                <asp:Label ID="lblId" runat="server" Text='<%# Eval("idProyecto") %>' CssClass="NotVisible mx-2"></asp:Label>
                            <div class="container-fluid" style="position:relative;">
                                <asp:Button ID="btnOpenProj" runat="server" Text="ENTRAR" CssClass=" w-100 botones"/>                                
                            </div>
                                
                        </div>
                    


                </ItemTemplate>
            </asp:Repeater>
        </div>




    </div>
    

</asp:Content>
