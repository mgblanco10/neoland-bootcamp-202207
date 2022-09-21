## Name and short description aplication: 
Project where I put into practice all the knowledge I have acquired during the Bootcamp.
The application that I have made is a replica of a page for renting workspaces.

https://giphy.com/gifs/newquest-coffee-hands-3oriO7A7bt1wsEP4cw

https://giphy.com/gifs/lCbSAbRrFEfkY
my giphy

# Description 

One of the hardest things is learning what you don't know. And one of the fastest ways to learn this is to interact with people from different backgrounds and disciplines. Coworking allows you to leave your bubble and work with others who know what you don't know, and in this way you can open your mind finding capabilities that you never thought you had and that was exactly what happened to me in a coworking and that's why I decided that my first project as a developer would be about the site where I have been training and learning for the last few months.
Because there are a thousand and one ways of working, but here we have managed to find solutions to different problems, working as a team. Definitely the best thing has been the classmates and teachers, they are really incredible, willing to give everything so that you really learn and overcome your limits.

## Technical Description

The page is for the rental of workspaces, I seek to reflect the existence of several flexible workspaces for each taste, where you will find shared spaces to private offices; open and collaborative places, with modern features and designs where you will have everything you need at your disposal. Able to reflect with a clean design that can break the daily monotony of corporate or home settings.

Now in terms of technical specifications, this page is a first mobile application made with javascript, react and tailwind, it plays with the sizes of the devices, making the application navigable both on desktop and mobile, it has a calendar where the user can select the dates where you need space and finally you have a loggin, register and password change.

EXTRA
Extra-Iteracion 1 --------V2 :S  para poder hacer todo tendrá una parte de mapa para poder hacer la ubicación del espacio de trabajo esto en V2,
En una segunda versión, permitir que los usuarios puedan darle like a sus espacios favoritos, además poder agregar un map con geospatial queries mongodb, y quizás un apartado de noticias, videos de  


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
- id: ObjectId 
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

Version 0
-- Figma
-- Data model & schemas
--Data model to mongoose
--Implement tailwind
--Implement user logic
--implement routes
--implement the pages 
--implement the components
--test insomnia
--navigate api & app
--responsive app

V1---
--payment 
-- map ubication geospatial 
-- calendar not input
-- menu the version mobile
-- theme color, application
--favorite the ubication
--range price filter
-- shearch the ubication



