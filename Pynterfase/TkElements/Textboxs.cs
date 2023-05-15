using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Pynterfase.TkElements
{
    public class Textboxs
    {

        public string Text { get; set; } // Obtiene o establece el texto que se muestra en el control.
        public int Width { get; set; } // Obtiene o establece el ancho del control.
        public int Height { get; set; } // Obtiene o establece la altura del control.
        public int MaxLength { get; set; } // Obtiene o establece el número máximo de caracteres que se pueden escribir en el control.
        public bool Multiline { get; set; } // Obtiene o establece un valor que indica si se permite la entrada de varias líneas de texto.
        public bool ReadOnly { get; set; } // Obtiene o establece un valor que indica si el control se muestra en modo de solo lectura.
        public bool WordWrap { get; set; } // Obtiene o establece un valor que indica si el texto debe ajustarse automáticamente al ancho del control.
        public bool AcceptsTab { get; set; } // Obtiene o establece un valor que indica si se pueden escribir caracteres de tabulación en el control.
        public bool AcceptsReturn { get; set; } // Obtiene o establece un valor que indica si se pueden escribir caracteres de retorno de carro en el control.
        public bool HideSelection { get; set; } // Obtiene o establece un valor que indica si el texto seleccionado debe mostrarse cuando el control pierde el foco.
        public int SelectionStart { get; set; } // Obtiene o establece la posición inicial de la selección actual en el control.
        public int SelectionLength { get; set; } // Obtiene o establece la longitud de la selección actual en el control.
        public bool ScrollBars { get; set; } // Obtiene o establece un valor que indica si se muestran barras de desplazamiento en el control.



    }
}