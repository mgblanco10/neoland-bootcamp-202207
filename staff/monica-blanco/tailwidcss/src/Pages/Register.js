import Loggito from '../utils/Loggito'
import registerUser from '../logic/registerUser'

export default function Register(onLinkClick) {
    const logger = new Loggito(Register.name)

    logger.info('constructor')

    const handleLinkClick = event => {
        event.preventDefault()

        onLinkClick()
    }
    const handleFormSubmit = event => {
        event.preventDefault()

        const form = event.target

        const nameInput = form.name
        const emailInput = form.email
        const passwordInput = form.password

        const name = nameInput.value
        const email = emailInput.value
        const password = passwordInput.value

        try {
            registerUser(name, email, password, (error) => {
                if (error) {
                    
                    logger.warn(error.message)

                    return
                }
                logger.debug('register reset')
                form.reset()
                onLinkClick()
            })
        } catch (error) {

            logger.warn(error.message)
        }
    }
    return (
        <div className='bg-white px-10 py-20 rounded-3xl border-2 border-gray-100'>
            <h1 className='text-5xl font-semibold'> Welcome Back</h1>
            <p className='font-medium text-lg text-gray-500 mt-4'> Welcome! please enter your information to register.</p>
            <div className='mt-8'>
                <form metod="get" onSubmit={handleFormSubmit}>
                            <div>
                                <label className='text-lg font-medium'>Name</label>
                                <input
                                    className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                                    placeholder='Enter your name'
                                />
                            </div>
                            <div>
                                <label className='text-lg font-medium'>Email</label>
                                <input
                                    className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                                    placeholder='Enter your email'
                                    type="email"
                                />
                            </div>
                <div>
                    <label className='text-lg font-medium' >Password</label>
                    <input
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Enter your email'
                        type='password'
                        />
                </div>
                </form>
                                <div className='mt-8 flex flex-col gap-y-4'>
                                    <button className='active:scale-[.98] active:duration-75 transition-all hoover:scale-[1.01] ease-in-out py-3 rounded-xl bg-blue-500 text-white text-lg font-bold' type="submit">Sing in</button>
                                    <a className="anchor" href="login.html" onClick={handleLinkClick}>Login</a>
                                </div>
            </div>
        </div>

    )
    
}


