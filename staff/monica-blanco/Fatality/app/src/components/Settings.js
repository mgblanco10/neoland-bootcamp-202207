import Loggito from '../utils/Loggito'
import updateUserPassword from '../logic/updateUserPassword'
import withContext from '../utils/withContext'

function Settings({ onCloseClick }) {
    const logger = new Loggito('Settings')

    logger.info('return')

    const handleFormSubmit = event => {
        event.preventDefault()

        const { target: form } = event

        const {
            oldPassword: { value: oldPassword },
            newPassword: { value: newPassword },
            newPasswordRepeat: { value: newPasswordRepeat }
        } = form

        try {
            updateUserPassword(sessionStorage.token, oldPassword, newPassword, newPasswordRepeat, error => {
                if (error) {

                    logger.warn(error.message)

                    return
                }

                form.reset()
            })
        } catch (error) {

            logger.warn(error.message)
        }
    }
    return (
        <div className="flex w-full h-screen">
                         <div className="w-full items-center justify-center lg:w-1/2">
                       
                       <div className='bg-white px-10 py-20 rounded-3xl border-2 border-gray-100'>
                       <h1 className='text-5xl font-semibold'> Welcome Back</h1>
                       <p className='font-medium text-lg text-gray-500 mt-4'>Change Password</p>
                       <div className='mt-8'>
                           <form onSubmit={handleFormSubmit}>
                               <div>
                                   <label className='text-lg font-medium' htmlFor='oldPassword'>Current Password</label>
                                   <input
                                       className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                                       placeholder='Enter your name'
                                       type="password"
                                       name="oldPassword"
                                       id="oldPpassword"
                                   />
                               </div>
                               <div>
                                   <label className='text-lg font-medium' htmlFor='password' >New Password</label>
                                   <input
                                       className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                                       placeholder='Enter your email'
                                       type='NewPassword'
                                       name="NewPassword"
                                       id="NewPassword"
               
                                   />
                               </div>
                               <div>
                                   <label className='text-lg font-medium' htmlFor='password' >Repeat New Password</label>
                                   <input
                                       className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                                       placeholder='Enter your email'
                                       type='password'
                                       name="newPasswordRepeat"
                                       ide="NewPasswordRepeat"
               
                                   />
                               </div>
                               <div className='mt-8 flex flex-col gap-y-4'>
                                   <button className='active:scale-[.98] active:duration-75 transition-all hoover:scale-[1.01] ease-in-out py-3 rounded-xl bg-blue-500 text-white text-lg font-bold' type="submit">Sing in</button>
                               </div>
                           </form>
                       </div>
                   </div>   
                         </div>
                         <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center h-full bg-gray-200">
                           <div className="w-60 h-60 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-bounce" />
                               <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" />
                             </div>
                             <button className="anchor" href="login.html" onClick={onCloseClick}>Login</button>
                           </div>
 
   
   )    
   }
   export default withContext(Settings)