using System;
using System.Text;

namespace ConsoleApp1
{
    class Program
    {
        public string myStr;
        public static string translate (string str)
        {
            StringBuilder sb = new StringBuilder(str);
            for (int i = 0; i < str.Length; i++)
            {
                if (str[i] == 'Q' || str[i] == 'q')
                {
                    sb[i] = 'й';
                }
                if (str[i] == 'W' || str[i] == 'w')
                {
                    sb[i] = 'ц';
                }
                if (str[i] == 'E' || str[i] == 'e')
                {
                    sb[i] = 'у';
                }
                if (str[i] == 'R' || str[i] == 'r')
                {
                    sb[i] = 'к';
                }
                if (str[i] == 'T' || str[i] == 't')
                {
                    sb[i] = 'е';
                }
                if (str[i] == 'Y' || str[i] == 'y')
                {
                    sb[i] = 'н';
                }
                if (str[i] == 'U' || str[i] == 'u')
                {
                    sb[i] = 'г';
                }
                if (str[i] == 'I' || str[i] == 'i')
                {
                    sb[i] = 'ш';
                }
                if (str[i] == 'O' || str[i] == 'o')
                {
                    sb[i] = 'щ';
                }
                if (str[i] == 'P' || str[i] == 'p')
                {
                    sb[i] = 'з';
                }
                if (str[i] == '{' || str[i] == '[')
                {
                    sb[i] = 'х';
                }
                if (str[i] == '}' || str[i] == ']')
                {
                    sb[i] = 'ъ';
                }
                if (str[i] == 'A' || str[i] == 'a')
                {
                    sb[i] = 'ф';
                }
                if (str[i] == 'S' || str[i] == 's')
                {
                    sb[i] = 'ы';
                }
                if (str[i] == 'D' || str[i] == 'd')
                {
                    sb[i] = 'в';
                }
                if (str[i] == 'F' || str[i] == 'f')
                {
                    sb[i] = 'а';
                }
                if (str[i] == 'G' || str[i] == 'g')
                {
                    sb[i] = 'п';
                }
                if (str[i] == 'H' || str[i] == 'h')
                {
                    sb[i] = 'р';
                }
                if (str[i] == 'J' || str[i] == 'j')
                {
                    sb[i] = 'о';
                }
                if (str[i] == 'K' || str[i] == 'k')
                {
                    sb[i] = 'л';
                }
                if (str[i] == 'L' || str[i] == 'l')
                {
                    sb[i] = 'д';
                }
                if (str[i] == ':' || str[i] == ';')
                {
                    sb[i] = 'ж';
                }
                if (str[i] == 'Z' || str[i] == 'z')
                {
                    sb[i] = 'я';
                }
                if (str[i] == 'X' || str[i] == 'x')
                {
                    sb[i] = 'ч';
                }
                if (str[i] == 'C' || str[i] == 'c')
                {
                    sb[i] = 'с';
                }
                if (str[i] == 'V' || str[i] == 'v')
                {
                    sb[i] = 'м';
                }
                if (str[i] == 'B' || str[i] == 'b')
                {
                    sb[i] = 'и';
                }
                if (str[i] == 'N' || str[i] == 'n')
                {
                    sb[i] = 'т';
                }
                if (str[i] == 'M' || str[i] == 'm')
                {
                    sb[i] = 'ь';
                }
                if (str[i] == '<' || str[i] == ',')
                {
                    sb[i] = 'б';
                }
                if (str[i] == '>' || str[i] == '.')
                {
                    sb[i] = 'ю';
                }
                if (str[i] == ' ')
                {
                    sb[i] = ' ';
                }
            }
            return sb.ToString();
        }

        static void Main(string[] args)
        {
            string str = "Jnghfdm vyt cktle.obv cjj,otybtv ntrcn gfnxyjenf b z lj,fdk. tuj d ,fpe lkz hfccskjr/❗️ <elm dybvfntkty? nfr rfr djpvj;yjcnb jnhtlfrnbhjdfnm tuj ytn/";
            Console.WriteLine(translate(str));
        }
    }
}
