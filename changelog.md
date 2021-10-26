# Changelog
Todos los cambios significativos del proyecto serán documentados en este documento.

Sigue el formato [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), y se adhiere a [Versionamiento semantico](https://semver.org/spec/v2.0.0.html).

## [Unreleased] - 28/10/2021
### Nuevo
- En Estudiantes/Homeworks falta un botón de enviar. La verificación del tipo de archivo (.pdf, .word, .excel, .ppt, .zip, .imagen) se hace en el momento de pulsar el botón de subir y cuando se le da en Enviar es cuando se aplica el método para subirlo al Drive y se vuelve a Submissions, ahora en submissions esa tarea no aparece.

### Arreglos
- Arreglar el botón de "Enviar" que vuelve atrás en todas los lugares donde aparece.
- En donde hay dropdown con checkboxes, éstos no se limitan o expanden en tamaño y quedan tapando lo demás.
- En Professor/AssignTask colocar: "If you have a link to a file explaining the homework please paste it here:"
- En Professor/AssignTask cambiar: "Indicators"

### Cambiado / Mejorado
- En "Professor/Student Assesment" cada vez que se unda el botón "Calificar tarea", se envía un mensaje de pop up diciendo calificado, sólo cuando se termina de calificar a todos entonces pulsar ese botón hace que vuelvan atrás.
- Si yo califico en ese dropdown con checkboxes debe haber un metodo para que los estudiantes ya calificados se muestren como tal, no puede ser quitandolos pero sí una manera en que aparezcan indicados como calificados. Yo sugiero que los calificados aparezcan de últimos en el dropdown y cambiarles el color del texto a verde por ejemplo.
- Ahí donde dice "Group of the student assesed" dirá algo como "Is this a group project?" y al lado de eso (dentro de la caja azul o al lado) un checkbox que permita habilitar el campo. Una vez se de click en ese checkbox el texto en la caja azul pasará a decir "Group of the student assesed" y el campo para escribir quedará habilitado.
- Cuando se cambie el switch, modificar el texto de arriba diciendo: "Seleccione la calificación numerica que mejor identifique el desempeño del estudiante, siendo 0 un mal desempeño y 5 un excelente desempeño:"
- Al lado de la pregunta debería haber un dropdown que permita elegir entre 0 y 5.
- En Estudiantes/Homeworks con la modificación de que el profesor pueda colocar un enlace, entonces ese enlace no se enviaría a la base de datos como un campo aparte, sino que se pegaría a la parte de Task Description. El estudiante vería el enlace al final de la descripción.

## [0.6.0 - Pilot] - 26/10/2021
### Nuevo
- Se agregó una página intermedia en Professor/Student Assesment donde el profesor puede elegir qué tarea es la que va a calificar. Se llama HomeworkPicker.
- Se cambió el layout de Professor/Student Assesment, ahora primero se encuentra la opción de seleccionar estudiantes a través de un dropdown con checkboxes.
- Para el Professor/Student Assesment, se colocó una opción de switch para cambiar entre rúbrica textual y númerica.
- Se agregó un botón para enviar tarea en Professor/Student Assesment.
- Se agregó un botón para enviar tarea en Professor/Assign Task.
- En Professor/Assign Task se agregó una caja de texto para que los profesores coloquen un enlace a su guía.

### Cambiado / Mejorado
- Para calificación se colocó en segundo campo lo del grupo de manera opcional. Por defecto está inhabilitado, sólo seleccionando el checkbox se habilita.
- Para las rúbricas se usó un radiobutton (que de todas las 4 opciones por pregunta/texto en negrilla) sólo se pueda seleccionar una única.
- En Professor/AssignTask el segundo campo se cambió por un dropdown con checkboxes.
- Errores de grámatica y tweaks de texto.

## [0.5.0 - Pilot] - 15/10/2021
### Nuevo
- Creado un readme para el front.
- Creado un changelog para llevar la documentación de las versiones

### Cambiado / Mejorado
- Actualizado readme del back con algunas recomendaciones.
- Actualizados header y footer.

### Eliminado
- Assets repetidos y breadcrumb que no se usa.

### Arreglos
- Solucionado error de los doble slash en las URL.

-----------------

<!-- TIPOLOGIAS

Nuevo
Cambiado / Mejorado
Deprecated
Eliminado
Arreglos
Seguridad

-->
