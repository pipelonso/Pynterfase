<%@ Page Title="" Language="C#" MasterPageFile="~/ProjectsContent.Master" AutoEventWireup="true" CodeBehind="ProjSaved.aspx.cs" Inherits="Pynterfase.Vista.ProjSaved" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link href="css/bootstrap.min.css" rel="stylesheet" />
    <link href="../Styles/sweetalert.css" rel="stylesheet" />
    <link href="../Content/animate.min.css" rel="stylesheet" />
    <link href="mycss/SavedBack.css" rel="stylesheet" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <div>
        <h1 class="m-2 text-white " style="background-image: url('imagenes/OnBar.svg'); padding: 10px; border-radius: 5px; animation: fadeInUp; animation-duration: 1s;">PROYECTOS GUARDADOS</h1>
    </div>

    <div>
        <div class="navbar container-fluid cajasanim">
            <asp:Repeater ID="RPProyectos" runat="server">
                <ItemTemplate>

                    <div class="nav-item text-white rounded-3 projBox col-12 col-sm-12 col-md-3 col-lg-3 mx-2 my-2">
                        <div class="bg-dark rounded-top-2 p-2">
                            <h4><%# Eval("nombreProyecto")  %> </h4>
                            <asp:Label ID="lblId" runat="server" Text='<%# Eval("IdProyecto") %>' CssClass="NotVisible"></asp:Label>
                        </div>
                        <div class="p-2">

                            <p>Autor:</p>
                            <asp:Label ID="lblAutor" runat="server" Text='<%# Eval("nombre") %>'></asp:Label>
                            <hr />
                            <p>Visibilidad:</p>
                            <asp:Label ID="lblVisibilidad" runat="server" Text='<%# Eval("visibilidad") %>'></asp:Label>
                            <div class="navbar p-2 bg-black rounded-2">
                                <asp:Button ID="btnOpen" runat="server" Text="Abrir" CssClass="nav-item botones" OnClick="btnOpen_Click"/>
                                <asp:ImageButton ID="btnIMGSave" CssClass="nav-item" runat="server" ImageUrl="~/Vista/imagenes/btnSavedOn.svg" Height="30px" Width="30px" OnClick="btnIMGSave_Click"/>
                            </div>
                        </div>

                    </div>

                </ItemTemplate>
            </asp:Repeater>
        </div>


    </div>




    <script src="../Scripts/sweetalert.min.js"></script>
    <script src="alertManager.js"></script>
    <script src="js/bootstrap.min.js"></script>
</asp:Content>
