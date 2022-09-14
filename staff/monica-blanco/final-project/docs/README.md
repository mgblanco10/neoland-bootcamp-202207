## Name and short description aplication: 
Bienvenidos a mi proyecto donde pongo en práctica todos los conocimientos que he adquirido durante el Bootcamp. Ha sido un viaje muy desafiante pero me siento muy orgullosa del trabajo realizado.
Mi aplicación es una replica de una página de alquiler de espacios de trabajo coworking, la cual se llama WORKSPACES

https://giphy.com/gifs/newquest-coffee-hands-3oriO7A7bt1wsEP4cw

https://giphy.com/gifs/lCbSAbRrFEfkY
my giphy

# Description 

Una de las cosas más difíciles es aprender lo que no sabes. Y una de las maneras más rápidas de aprender esto es interactuar con personas de diferentes orígenes y disciplinas. El coworking te permite dejar tu burbuja y trabajar con otros que saben lo que tu no sabes, y de esta forma puedes abrir tu mente encontrando capacidades que jamás pensantes que tenías y eso fue justamente lo que me paso a mi en un coworking y por eso decidí que mi primer proyecto como developer fuera sobre el sitio donde he estado formandome y aprendiendo los últimos meses y donde he conocido gente increible con la que he vivido la experiencia de un Bootcamp, que además va a toda velocidad.
Porque hay mil y una maneras de trabajar,pero aquí hemos logrado encontrar soluciones realmente espaciales y especiales para trabajar en equipo. Definitivamente lo mejor ha sido los compañeros y profesores, son realmente increibles, dispuestos a dar todo para que realmente aprendas y consigas superar tús límites, y este es justamente un homenaje a cada uno de ellos, porque estos meses he conocido y compartido con personas increibles.
Y es que ya sabía que un coworking es un espacio donde nacen emprendedores y permite que profesionales de distintos sectores se relacionen y hacer networking, pero no pense que formaría parte de uno de ellos.

## Technical Description

La página de alquiler de espacios de trabajo que hago espero poder reflejar la existencia de varios espacios de trabajo flexibles para cada gusto, donde encontraras espacios compartidos hasta oficinas privadas; lugares abiertos y colaborativos, con características y diseños modernos donde tendrás a tu disposición todo lo que puedas necesitar. Capaz de reflejar con un diseño limpio que se puede romper la monotonía cotidiana de la configuración corporativa ó de la casa

Ahora en cuanto especificaciones técnicas está página es una aplicación firts mobile, pero donde la idea es trabajar con media queries que permita al usuario también verla en un destock , aquí la idea es tener dos front distintos y jugar un poco con los tamaños de dispositivos, tendrá una parte de calendario donde el usuario podrá seleccionar las fechas donde necesita espacio, tendrá una parte de filtrado por precio, quizás un range y por último tendrá una parte de loggin,register esto en una primera versión.
En una siguiente versión me gustaría hacer la parte de pago, y ampliar a otras ciudades, incluso pensar en las rutas y poner medios de transporte disponibles,etc.

Extra-Iteracion 1 --------V2 ....:S espero llegar antes de dos semanas y no abrumarme, para poder hacer todo 
tendrá una parte de mapa para poder hacer la ubicación del espacio de trabajo,
En una segunda versión, permitir que los usuarios puedan darle like a sus espacios favoritos, además poder agregar un map con geospatial queries mongodb, y quizás un apartado de noticias 


## Functional Description

##Use Cases
-search building
-search workspace
-wiew workspace
-wiew prices
-explore workspace
-reservation workspace
-adjust settings(name, email,password,...)

## Technical Description
- Blocks
- Sequence
- Components
- Code Coverage (Testing)
- Technologies

### Data Model

 User
- id: ObjectId --> automático mongo
- name:string
- email: string
- password:string

Reservation
- id: ObjectId --> automático mongo
- user: ObjectId ref: 'User'
- workspace: ObjectId
- date: Date
-createdAt: Date
- modifiedAt: Date

Building
- name: string
- address: string
- image: string

Workspace
- building: ObjectId
- name: string
- price: number
- image: string
- description: string





## Roadmap

Sprint 
--ver que librerías necesito para mi proyecto y entender como utilizarlas (WIP)
--Descarga de react (LISTOOO)
--Limpieza de las carpetas para empezar mi app (LISTO)
--leer e instlar mui (WIP Ahora New librería)
--leer e intalar redux 
--componente Header (ya que se repite en todas las páginas empezaré por él)
--componente Office ó espacios, 1 solo porque la idea es luego hacer base de datos de lugares y que cojan ese mismo diseño
--pagina Home hacer asi sea un h1 :S
--Enruta de home a seach con react router-dom (LISTO)
-- trabajar home cargar carrusel 
--ver si puedo montar baner
--galeria fotos quizas componetizar
--calendario
--trabajar search 
--favicon
-- trabajo api (WIP)
--componente
--header
--login
--register
--logicas reservation
--navigation api & app
--tailwind
--pagina map
--imagenes
--rutas api(listo)
--responsive (WIP)
--MODEL Y SCHEMAS(listo)
--homePage
--WorkspacePage y resto de paginas
Cacturar pecios y ver para que usuare seleccines

==========Falta
createReservation implementacion
deleteReservation completa
calendario
pago


V2---Mapa en página e Home con ubications





/* ver colores cuando este menos agotada y decidir que hacer.. revisar header, hacer algo con el botton del banner */
