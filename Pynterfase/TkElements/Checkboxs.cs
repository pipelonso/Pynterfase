using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Pynterfase.TkElements
{
    public class Checkboxs
    {

        public int idCheckbox { get; set; }
        public int x { get; set; }
        public int y { get; set; }

        public bool Checked { get; set; }  // Obtiene o establece si el checkbox está marcado
        public string Text { get; set; }  // Obtiene o establece el texto que se muestra junto al checkbox
        public bool State { get; set; }  // Obtiene o establece el estado del checkbox (seleccionado o no seleccionado)
        public string OnValue { get; set; }  // Obtiene o establece el valor que se asigna a la variable vinculada cuando el checkbox está marcado
        public string OffValue { get; set; }  // Obtiene o establece el valor que se asigna a la variable vinculada cuando el checkbox no está marcado
        public string Variable { get; set; }  // Obtiene o establece el nombre de la variable de controlador asociada al checkbox
        public string Command { get; set; }  // Obtiene o establece el nombre de la función que se llamará cuando se haga clic en el checkbox
        public bool Tristate { get; set; }  // Obtiene o establece si el checkbox admite tres estados: marcado, no marcado y en un estado indeterminado



    }
}