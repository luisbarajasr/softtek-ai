## Inspiration
La industria del e-commerce está creciendo rápidamente. Junto con ella, la cantidad de información que el cliente y el usuario están proporcionando como retroalimentación está aumentando. Los propietarios y emprendedores del comercio electrónico están luchando por analizar los comentarios y las reseñas de sus clientes debido a la misma razón: demasiada información y datos. En esa gran cantidad de información, un gran porcentaje es texto no útil y la mayor parte del tiempo los datos valiosos se pierden o son difíciles de encontrar en el montón de texto. No se pueden llegar a analisis detallados y en vez son mas generales. 

## What it does
Automatización con modelo propio LLM en el analisis de retroalimentación por parte de lo clientes sobre un producto. Nuestro modelo elimina texto basura y utiliza palabras y frases claves especificas para su mejor analisis. Identificador de frecuencias de palabras positivas y negativas. Identifica las palabras más utilizadas. Resumen por sección positiva y negativa utilizando estas frecuencias. 

## How we built it
Utilizando la documentacion de OpenAI API creamos un modelo LLM en el cual ingresamos 19,662 reseñas de productos para crear su conocimiento. 
Se tiene un Chatbot en donde se le puede preguntar al modelo cualquier duda sobre los productos, catgorias, reseñas, etc.
Basandonos en esto dividimos por categorias los productos que se encontraban dentro de estas reseñas y despues ingresamos los productos en su respectiva categoria. Al ingresar a un producto, el modelo analisa todas las palabras en las reseñas que ese producto tiene y divide la informacion de todas la reseñas de la siguiente manera: 

- porcentaje de felicidad del cliente en el producto 
- porcentaje de desagrado del cliente en el producto 
- palabras positivas mas utilizadas
- palabras negativas mas utilizadas
- resumen positivo: el modelo analiza todas las reseña y crea un resumen negativas utilizando las palabras y frases negativas mas importantes y usadas, creando un analisis mas detallado del porque el cliente no le gusto  
- resumen negativo: el modelo analiza todas las reseña y crea un resumen posotivo utilizando las palabras y frases positivas mas importantes y usadas, creando un analisis mas detallado del porque el cliente le gusto 

## Challenges we ran into
El despligue de funciones de python en la nube al igual que aprender como crear un modelo LLM con nuestros propios datos. Asi mismo, el poder "pasar" datos a la interfaz de usuario.

## Accomplishments that we're proud of
Logramos que el modelo analizara una gran cantidad de reseñas por producto o categorias y asi poder obtener las palabras y frases claves que el cliente ingreso como reseña. Logramos contar las palabras que marcaban 

## What we learned
Aprendimos como crear un modelo LLM propio en donde le dimos nosotros nuestros datos a utilizar. Ademas que este pudiera analizar grandes cantidades de reseñar, determinar y contar las palabras y frases mas importantes en todas las reseñas dentro de un producto. 
 
## What's next for Softtek x Generative AI
Que el modelo pueda aceptar como parametros grandes cantidades de reseñas sin antes ser cargadas. Es decir, que este modelo sea dinamico y se adapte a muchos casos. 