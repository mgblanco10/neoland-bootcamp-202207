import Header from '../components/Header'

export default function Search() {
    return (
      <div class="flex justify-center my-6">
  <div class="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
    <div class="flex-1">
      <table class="w-full text-sm lg:text-base" cellspacing="0">
        <thead>
          <tr class="h-12 uppercase">
            <th class="hidden md:table-cell"></th>
            <th class="text-left">Product</th>
            <th class="lg:text-right text-left pl-5 lg:pl-0">
              <span class="lg:hidden" title="Quantity">Qtd</span>
              <span class="hidden lg:inline">Quantity</span>
            </th>
            <th class="hidden text-right md:table-cell">Unit price</th>
            <th class="text-right">Total price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="hidden pb-4 md:table-cell">
              <a href="#">
                <img src="https://limg.app/i/Calm-Cormorant-Catholic-Pinball-Blaster-yM4oub.jpeg" class="w-20 rounded" alt="Thumbnail"/>
              </a>
            </td>
            <td>
              <a href="#">
                <p class="mb-2 md:ml-4">Earphone</p>
                <form action="" method="POST">
                  <button type="submit" class="text-gray-700 md:ml-4">
                    <small>(Remove item)</small>
                  </button>
                </form>
              </a>
            </td>
            <td class="justify-center md:justify-end md:flex mt-6">
              <div class="w-20 h-10">
                <div class="relative flex flex-row w-full h-8">
                <input type="number" value="2" 
                  class="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black" />
                </div>
              </div>
            </td>
            <td class="hidden text-right md:table-cell">
              <span class="text-sm lg:text-base font-medium">
                10.00€
              </span>
            </td>
            <td class="text-right">
              <span class="text-sm lg:text-base font-medium">
                20.00€
              </span>
            </td>
          </tr> 
          <tr>
            <td class="hidden pb-4 md:table-cell">
              <a href="#">
                <img src="https://limg.app/i/Cute-Constrictor-Super-Sexy-Military-Enforcer-W7mvBp.png" class="w-20 rounded" alt="Thumbnail"/>
              </a>
            </td>
            <td>
              <p class="mb-2 md:ml-4">Tesla Model 3</p>
              <form action="" method="POST">
                <button type="submit" class="text-gray-700 md:ml-4">
                  <small>(Remove item)</small>
                </button>
              </form>
            </td>
            <td class="justify-center md:justify-end md:flex md:mt-4">
            <div class="w-20 h-10">
              <div class="relative flex flex-row w-full h-8">
              <input type="number" value="3" 
                class="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black" />
              </div>
            </div>
            </td>
            <td class="hidden text-right md:table-cell">
              <span class="text-sm lg:text-base font-medium">
                49,600.01€
              </span>
            </td>
            <td class="text-right">
              <span class="text-sm lg:text-base font-medium">
                148,800.03€
              </span>
            </td>
          </tr> 
          <tr>
            <td class="hidden pb-4 md:table-cell">
              <a href="#">
                <img src="https://limg.app/i/Successful-Spider-Biblical-Mutant---Total-War-lKoE7D.jpeg" class="w-20 rounded" alt="Thumbnail"/>
              </a>
            </td>
            <td>
              <p class="mb-2 md:ml-4">Bic 4 colour pen</p>
              <form action="" method="POST">
                <button type="submit" class="text-gray-700 md:ml-4">
                  <small>(Remove item)</small>
                </button>
              </form>
            </td>
            <td class="justify-center md:justify-end md:flex md:mt-8">
            <div class="w-20 h-10">
              <div class="relative flex flex-row w-full h-8">
              <input type="number" value="5" 
                class="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black" />
              </div>
            </div>

            </td>
            <td class="hidden text-right md:table-cell">
              <span class="text-sm lg:text-base font-medium">
                1.50€
              </span>
            </td>
            <td class="text-right">
              <span class="text-sm lg:text-base font-medium">
                7.50€
              </span>
            </td>
          </tr> 
        </tbody>
      </table>
      <hr class="pb-6 mt-6">
      <div class="my-4 mt-6 -mx-2 lg:flex">
        <div class="lg:px-2 lg:w-1/2">
          <div class="p-4 bg-gray-100 rounded-full">
            <h1 class="ml-2 font-bold uppercase">Coupon Code</h1>
          </div>
          <div class="p-4">
            <p class="mb-4 italic">If you have a coupon code, please enter it in the box below</p>
            <div class="justify-center md:flex">
              <form action="" method="POST">
                  <div class="flex items-center w-full h-13 pl-3 bg-white bg-gray-100 border rounded-full">
                    <input type="coupon" name="code" id="coupon" placeholder="Apply coupon" value="90off"
                            class="w-full bg-gray-100 outline-none appearance-none focus:outline-none active:outline-none"/>
                      <button type="submit" class="text-sm flex items-center px-3 py-1 text-white bg-gray-800 rounded-full outline-none md:px-4 hover:bg-gray-700 focus:outline-none active:outline-none">
                        <svg aria-hidden="true" data-prefix="fas" data-icon="gift" class="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z"/></svg>
                        <span class="font-medium">Apply coupon</span>
                      </button>
                  </div>
              </form>
            </div>
          </div>
          <div class="p-4 mt-6 bg-gray-100 rounded-full">
            <h1 class="ml-2 font-bold uppercase">Instruction for seller</h1>
          </div>
          <div class="p-4">
            <p class="mb-4 italic">If you have some information for the seller you can leave them in the box below</p>
            <textarea class="w-full h-24 p-2 bg-gray-100 rounded"></textarea>
          </div>
        </div>
        <div class="lg:px-2 lg:w-1/2">
          <div class="p-4 bg-gray-100 rounded-full">
            <h1 class="ml-2 font-bold uppercase">Order Details</h1>
          </div>
          <div class="p-4">
            <p class="mb-6 italic">Shipping and additionnal costs are calculated based on values you have entered</p>
              <div class="flex justify-between border-b">
                <div class="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                  Subtotal
                </div>
                <div class="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                  148,827.53€
                </div>
              </div>
                <div class="flex justify-between pt-4 border-b">
                  <div class="flex lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-gray-800">
                    <form action="" method="POST">
                      <button type="submit" class="mr-2 mt-1 lg:mt-2">
                        <svg aria-hidden="true" data-prefix="far" data-icon="trash-alt" class="w-4 text-red-600 hover:text-red-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M268 416h24a12 12 0 0012-12V188a12 12 0 00-12-12h-24a12 12 0 00-12 12v216a12 12 0 0012 12zM432 80h-82.41l-34-56.7A48 48 0 00274.41 0H173.59a48 48 0 00-41.16 23.3L98.41 80H16A16 16 0 000 96v16a16 16 0 0016 16h16v336a48 48 0 0048 48h288a48 48 0 0048-48V128h16a16 16 0 0016-16V96a16 16 0 00-16-16zM171.84 50.91A6 6 0 01177 48h94a6 6 0 015.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0012-12V188a12 12 0 00-12-12h-24a12 12 0 00-12 12v216a12 12 0 0012 12z"/></svg>
                      </button>
                    </form>
                    Coupon "90off"
                  </div>
                  <div class="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-green-700">
                    -133,944.77€
                  </div>
                </div>
                <div class="flex justify-between pt-4 border-b">
                  <div class="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                    New Subtotal
                  </div>
                  <div class="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                    14,882.75€
                  </div>
                </div>
                <div class="flex justify-between pt-4 border-b">
                  <div class="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                    Tax
                  </div>
                  <div class="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                    2,976.55€
                  </div>
                </div>
                <div class="flex justify-between pt-4 border-b">
                  <div class="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                    Total
                  </div>
                  <div class="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                    17,859.3€
                  </div>
                </div>
              <a href="#">
                <button class="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-gray-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none">
                  <svg aria-hidden="true" data-prefix="far" data-icon="credit-card" class="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"/></svg>
                  <span class="ml-2 mt-5px">Procceed to checkout</span>
                </button>
              </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
)}

{/* //       <div className="bg-gray-100">
//       <Header/>
//   <div className="container mx-auto mt-10">
//     <div className="flex shadow-md my-10">
//       <div className="w-3/4 bg-white px-10 py-10">
//         <div className="flex justify-between border-b pb-8">
//           <h1 className='font-semibold text-2xl">Shopping Cart</h1>
//           <h3 className='ont-semibold text-2xl'/</div>> 3 </h3>
//         </div>
//         <div className="flex mt-10 mb-5">
//           <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
//           <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
//           <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
//           <h3 classNameName="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
//         </div>
//         <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
//           <div className="flex w-2/5"> 
//             <div className="w-20">
//               <img className="h-24" src="https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z"/>
//             </div>
//             <div classNamw="flex flex-col justify-between ml-4 flex-grow">
//               <span className="font-bold text-sm">Iphone 6S</span>
//               <span className="text-red-500 text-xs">Apple</span>
//               <a href="#" class="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
//             </div>
//           </div>
//           <div className="flex justify-center w-1/5">
//             <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
//             </svg>

//             <input className="mx-2 border text-center w-8" type="text" value="1">

//             <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
//               <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
//             </svg>
//           </div>
//           <span className="text-center w-1/5 font-semibold text-sm">$400.00</span>
//           <span className="text-center w-1/5 font-semibold text-sm">$400.00</span>
//         </div>

//         <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
//           <div className="flex w-2/5"> <!-- product -->
//             <div className="w-20">
//               <img className="h-24" src="https://drive.google.com/uc?id=10ht6a9IR3K2i1j0rHofp9-Oubl1Chraw" alt="">
//             </div>
//             <div className="flex flex-col justify-between ml-4 flex-grow">
//               <span className="font-bold text-sm">Xiaomi Mi 20000mAh</span>
//               <span className="text-red-500 text-xs">Xiaomi</span>
//               <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
//             </div>
//           </div>
//           <div className="flex justify-center w-1/5">
//             <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
//             </svg>

//             <input className="mx-2 border text-center w-8" type="text" value="1">

//             <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
//               <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
//             </svg>
//           </div>
//           <span className="text-center w-1/5 font-semibold text-sm">$40.00</span>
//           <span className="text-center w-1/5 font-semibold text-sm">$40.00</span>
//         </div>

//         <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
//           <div className="flex w-2/5"> <!-- product -->
//             <div className="w-20">
//               <img className="h-24" src="https://drive.google.com/uc?id=1vXhvO9HoljNolvAXLwtw_qX3WNZ0m75v" alt="">
//             </div>
//             <div className="flex flex-col justify-between ml-4 flex-grow">
//               <span className="font-bold text-sm">Airpods</span>
//               <span className="text-red-500 text-xs">Apple</span>
//               <a href="#" class="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
//             </div>
//           </div>
//           <div className="flex justify-center w-1/5">
//             <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
//             </svg>
//             <input className="mx-2 border text-center w-8" type="text" value="1">

//             <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
//               <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
//             </svg>
//           </div>
//           <span className="text-center w-1/5 font-semibold text-sm">$150.00</span>
//           <span className="text-center w-1/5 font-semibold text-sm">$150.00</span>
//         </div>

//         <a href="#" class="flex font-semibold text-indigo-600 text-sm mt-10">
      
//           <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
//           Continue Shopping
//         </a>
//       </div>

//       <div id="summary" class="w-1/4 px-8 py-10">
//         <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
//         <div className="flex justify-between mt-10 mb-5">
//           <span className="font-semibold text-sm uppercase">Items 3</span>
//           <span className="font-semibold text-sm">590$</span>
//         </div>
//         <div>
//           <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
//           <select className="block p-2 text-gray-600 w-full text-sm">
//             <option>Standard shipping - $10.00</option>
//           </select>
//         </div>
//         <div className="py-10">
//           <label for="promo" class="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
//           <input type="text" id="promo" placeholder="Enter your code" class="p-2 text-sm w-full">
//         </div>
//         <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
//         <div className="border-t mt-8">
//           <div className="flex font-semibold justify-between py-6 text-sm uppercase">
//             <span>Total cost</span>
//             <span>$600</span>
//           </div>
//           <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
//         </div>
//       </div>

//     </div>
//   </div>
// </div>

//     )
//   }
      {/* // <h1 className="text-3xl font-bold underline">
      //  Buscar OFICINAS
      // </h1> */} 