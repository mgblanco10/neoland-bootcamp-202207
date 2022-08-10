function RegisterPage(props) {
    const logger = new Loggito(RegisterPage.name)

    logger.info('constructor')

    const handleLinkClick = event => {
        event.preventDefault()

        props.onLinkClick()
    }

    logger.info('render')

    return (<main className="register-page container container--full container--spaced">
        <form className="form form-register">
            <img class="imgRegister"
                src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png" />

            <div className="form__field">
                <label htmlFor="name">Name</label>
                <input className='input' type="text" name="name" placeholder="name" id="name" />
            </div>

            <div className="form__field">
                <label htmlFor="email">Email</label>
                <input className="input" type="email" name="email" placeholder="email" id="email" />
            </div>

            <div className="form__field">
                <label htmlFor="password">Password</label>
                <input className='input' type="password" name="password" placeholder="password" id="password" />
            </div>

            <button className="button" type="submit">Register</button>
        </form>
        <a className="anchor" href="#" onClick={handleLinkClick}> Login </a>
    </main>)
}


