<%@ Page Title="" Language="C#" MasterPageFile="~/ProjectsContent.Master" AutoEventWireup="true" CodeBehind="Admin.aspx.cs" Inherits="Pynterfase.Vista.Admin" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link href="../Styles/sweetalert.css" rel="stylesheet" />
    <link href="css/bootstrap.min.css" rel="stylesheet" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="container-fluid">

        <h1>Administración</h1>

        <div class="navbar">

            <div class="nav-item col-12 col-sm-12 col-md-5 col-lg-6 p-2">
                <h4>Administración de usuarios</h4>
                <div>
                    <p>Buscar</p>
                    <asp:TextBox ID="txtSearchUser" runat="server" TextMode="Search" CssClass="w-100"></asp:TextBox>
                </div>

                <div class="w-100" style="overflow : auto; height:400px;">

                    <asp:Repeater ID="RPUsuarios" runat="server">

                        <ItemTemplate>

                            <div class="w-100">

                                <h5> <%# Eval("nombre") %> </h5>


                            </div>


                        </ItemTemplate>

                    </asp:Repeater>

                </div>

            </div>

            <div class="nav-item col-12 col-sm-12 col-md-5 col-lg-6 p-2">

                <h4>Administración de proyectos</h4>

                <div>
                    <p>Buscar</p>
                    <asp:TextBox ID="txtSearchProj" runat="server" CssClass="w-100" TextMode="Search"></asp:TextBox>
                </div>

                <div class="w-100" style="overflow : auto; height:400px;">

                    <asp:Repeater ID="RPProjects" runat="server">

                        <ItemTemplate>
                            <h5> <%# Eval("nombreProyecto")  %></h5>

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
