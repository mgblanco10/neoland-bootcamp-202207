import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Header from '../components/Header';


export default function Home() {
    return (
        <div>
        <Header/>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2 box-decoration-slice bg-gradient-to-r from-indigo-500 to-green-400 text-white px-2">
            <img
                className="object-cover w-full border md:container md:mx-auto"
                src="http://arquitecturaideal.com/wp-content/uploads/2014/11/Las-12-oficinas-mas-chulas-del-mundo-Arquitectura-Ideal-Google-5.jpg"
            />
            <img
                className="object-cover w-full border md:container md:mx-auto"
                src="https://i.pinimg.com/736x/e8/cc/9f/e8cc9f1cfd4528f96951586bb8bb6fa5--the-office-jam.jpg"
            />
            <img
                className="object-cover w-full border md:container md:mx-auto"
                src="https://s3-eu-west-1.amazonaws.com/pa-digital-blog-pro/~paginaad/wp-content/uploads/2017/11/07174846/oficinas-mejores-mundo.jpg"
            />
            <img
                className="object-cover w-full border"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFZE2kdgDdtM5UMzw1DC9Ri0E-P4_FgbAw3w&usqp=CAU"
            />
            <img
                className="object-cover w-full border"
                src="https://i0.wp.com/infoniac.ru/upload/medialibrary/075/075cd08f5d73b3ae2b6eaf3c90aec94d.jpg"
            />
            <img
                className="object-cover w-full border"
                src="https://ovacen.com/wp-content/uploads/2014/11/oficinas-con-arte.jpg"
            />
            <img
                className="object-cover w-full border"
                src="https://anecdotasdesecretarias.com/wp-content/uploads/2015/08/oficina-nokia-1.jpg"
            />
            <img
                className="object-cover w-full border"
                src="https://www.equipotres14.com/wp-content/uploads/2019/06/hygge-office.png"
            />
            <img
                className="object-cover w-full border"
                src="https://i.pinimg.com/736x/5c/de/cb/5cdecb205c23e30c757a2e80e60afec1--office-workspace-office-spaces.jpg"
            />
             <img
                className="object-cover w-full border md:container md:mx-auto"
                src="http://arquitecturaideal.com/wp-content/uploads/2014/11/Las-12-oficinas-mas-chulas-del-mundo-Arquitectura-Ideal-Google-5.jpg"
            />
            <img
                className="object-cover w-full border md:container md:mx-auto"
                src="https://i.pinimg.com/736x/e8/cc/9f/e8cc9f1cfd4528f96951586bb8bb6fa5--the-office-jam.jpg"
            />
            <img
                className="object-cover w-full border md:container md:mx-auto"
                src="https://s3-eu-west-1.amazonaws.com/pa-digital-blog-pro/~paginaad/wp-content/uploads/2017/11/07174846/oficinas-mejores-mundo.jpg"
            />
            
        </div>
    </div>
    );
}




//==================

// function Home({onLinkClick}) {
    
//     const navigate = useNavigate()

//     const handleNavigationToLogin = () => {
//           navigate('login')
        
//         }
//          return (
//             <div class="bg-blue-500 md:bg-green-500 ...">
//       <img className="imgInfo" src="https://media0.giphy.com/media/osAcIGTSyeovPq6Xph/200w.gif?cid=82a1493bj0ogbe0skwz8to1pzm5zkzywsrfb14503z8s1swm&rid=200w.gif&ct=g" onLinkClick={handleNavigationToLogin}/>
      
//             </div>
//         )
//     }
//     export default Home

//===================================================
//     return (
//       <h1 className="text-3xl font-bold underline">
//         MARAVILLORO REGISTRO
//       </h1>
//     )
//   }