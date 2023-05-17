using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Pynterfase.TkElements
{
    public class Labels
    {


        
        
        
        public int xz { get; set; }
        public int yz { get; set; }
        public int anchor { get; set; } //anclaje el texto
        public string bg { get; set; } // color de fondo
        public string cursor { get; set; } //cursor del mouse (Lista de cursores: https://www.pythontutorial.net/tkinter/tkinter-cursors/ )
        public string font { get; set; } //fuente 
        public string fg { get; set; } //color del texto
        public int height { get; set; } //altura 
        public string image { get; set; } //imagen https://pythonguides.com/python-tkinter-image/
        public string justify { get; set; } // Alineación del texto   https://www.tutorialspoint.com/how-to-justify-text-in-label-in-tkinter-in-python-need-justify-in-tkinter
        public int padx { get; set; } //llenado horizontal
        public int pady { get; set; } //llenado vertical
        public string relief { get; set; } //Tipo de relieve https://www.tutorialspoint.com/python/tk_relief.htm
        public string text { get; set; } //testo testonico
        public string textvarible { get; set; } //varible de texto
        public string underline { get; set; } //delineado
        public int width { get; set; } //ancho
        public int wraplength { get; set; }  //Numero de catacteres visibles

    }
}