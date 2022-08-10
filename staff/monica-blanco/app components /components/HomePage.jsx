class HomePage extends Component {
    constructor() {
        super()

        this.state = { name: null }
    }

    componentDidMount = () => { // override
        super.componentDidMount()

        try {
            retrieveUser(sessionStorage.token, (error, user) => {
                if (error) {
                    alert(error.message)

                    this.logger.warn(error.message)

                    return
                }

                this.setState({ name: user.name })

            })
        } catch (error) {
            alert(error.message)

            this.logger.warn(error.message)
        }
    }

    render() {
        this.logger.info('render')

        return (<div className="home-page container container--full">
        <main className="main">
            
        </main>          
            <footer className="footer">
                <button className="add-button transparent-button"> + </button>
            </footer>
        </div>)
    }
}
