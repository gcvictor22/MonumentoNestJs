# RepositorioProyecto01

<h2>Documentación REST API NESTJS</h2>
 
A partir de las historias de usuarios dispuestas en ./historiasUsuario/nestJs.pdf, se ha
creado la siguiente Rest Api con los cinco endpoints más básicos:
 
   - Obtener todos los monumentos.
   - Obtener un monumento.*
   - Añadir un monumento a la base de datos.
   - Editar un monumento.*
   - Eliminar un monumento.*
 
    *A partir de un identificador.
 
Toda esta documentación se puede consultar en el Swagger (http://localhost:3000/api)
 
<img src="./resources/CapturaSwagger.png"/>
 
El sistema gestor de base de datos, al no poder disponer de H2, es MySQL. Su empleo ha sido gracias a
los servicios ofrecidos por XAMPP (MySQL Database, Apache Web Service).
 
<img src="./resources/CapturaXAMPP.png"/>
 
Desde el panel de control de PHPmyadmin (http://localhost/phpmyadmin/) se puede observar un diseño
de la base de datos junto con la tabla "monumento", donde se encuentran todos sus atributos, siendo el id tipo INTEGER y el resto tipo TEXT. Esta base se puede importar a partir del documento ./monumentos.sql. A parte también se incluyen 3 monumento de ejemplo
 
<img src="./resources/CapturaPhpMyAdmin.png"/>