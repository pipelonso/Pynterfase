using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;

namespace Pynterfase.Logica
{
    public class ClRandomCodeGen
    {
        public string mtdRandomCodeGen() {

            string randomcode = "";
            Random rnd = new Random();

            int Nrandom = 0;

            string[] letras = {"a","b","c","d","e","f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s" , "t" ,"u" , "v" ,"w" ,"x" ,"y" ,"z"};
            
            //primera letra
            int selectedletter = rnd.Next(letras.Length);
            randomcode = randomcode + letras[selectedletter];
            //Segunda letra
            selectedletter = rnd.Next(letras.Length);
            randomcode = randomcode + letras[selectedletter];

            //numero aleatorio 1
            Nrandom = rnd.Next(10, 150);
            randomcode = randomcode + Nrandom.ToString();
            //tercera letra
            //Segunda letra
            selectedletter = rnd.Next(letras.Length);
            randomcode = randomcode + letras[selectedletter];
            //cuarta letra
            //Segunda letra
            selectedletter = rnd.Next(letras.Length);
            randomcode = randomcode + letras[selectedletter];

            return randomcode;



        }


    }
}