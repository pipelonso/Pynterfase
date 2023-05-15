using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Pynterfase.TkElements
{
    public class Lienzo
    {
        public int idLienzo { get; set; }
        public string xz { get; set; } //tamaño x de ventana para json
        public string yz { get; set; } //tamaño y ventana para json        
        public string geometry { get; set; } //Tamaño inicial  de la ventana
        public string Title { get; set; } // Obtiene o establece el título de la ventana.
        public int Width { get; set; } // Obtiene o establece el ancho de la ventana.
        public int Height { get; set; } // Obtiene o establece la altura de la ventana.
        public int X { get; set; } // Obtiene o establece la posición horizontal de la ventana en la pantalla.
        public int Y { get; set; } // Obtiene o establece la posición vertical de la ventana en la pantalla.
        public bool Resizable { get; set; } // Obtiene o establece si la ventana se puede redimensionar.
        public bool Maximizable { get; set; } // Obtiene o establece si la ventana se puede maximizar.
        public bool Minimizable { get; set; } // Obtiene o establece si la ventana se puede minimizar.
        public bool Fullscreen { get; set; } // Obtiene o establece si la ventana se muestra en modo de pantalla completa.
        public bool ShowInTaskbar { get; set; } // Obtiene o establece si la ventana se muestra en la barra de tareas.
        public bool Transparency { get; set; } // Obtiene o establece si la ventana tiene transparencia.
        public string BackgroundColor { get; set; } // Obtiene o establece el color de fondo de la ventana.
        public string Icon { get; set; } // Obtiene o establece el ícono de la ventana.
        public bool AlwaysOnTop { get; set; } // Obtiene o establece si la ventana siempre se muestra en la parte superior de otras ventanas.
        public bool Overrideredirect { get; set; } // Obtiene o establece si la ventana no tiene barra de título ni bordes.
        public bool UseTk { get; set; } // Obtiene o establece si se utiliza la biblioteca Tk para crear la ventana.
        public bool CursorVisible { get; set; } // Obtiene o establece si el cursor es visible en la ventana.
        public bool TakeFocus { get; set; } // Obtiene o establece si la ventana toma el enfoque cuando se muestra.
        public bool AutoMeasures { get; set; } // Obtiene o establece si se ajustan automáticamente las dimensiones de la ventana en función de su contenido.




    }
}