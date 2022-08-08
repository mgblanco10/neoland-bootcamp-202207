class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = { view: 'select word', result: null, wordShown: null, counter: 10}
    }

    handleOnChooseWordFormSubmit = event => {
        const wordSelected = event.target.input.value

        event.target.reset()

        this.setState({ result: wordSelected, view: 'playing', wordShown: "_".repeat(wordSelected.length) })
    }

    handleOnCharacterForm = event => {
        const charTried = event.target.input.value

        event.target.reset()

        // VERIFICO SI EL CARACTER ESTÁ EN EL RESULTADO
        if (this.state.result.includes(charTried)) {
            // TRANSFORMO LA PALABRA MOSTRADA EN ARRAY
            let newWordShown = this.state.wordShown.split('')

            // LOCALIZO LOS ÍNDICES EN LOS QUE ESTÁ EL CARACTER Y MODIFICO LA PALABRA MOSTRADA EN ESOS ÍNDICES
            for (let i = 0; i < this.state.result.length; i++)
                if (this.state.result[i] === charTried)
                    newWordShown[i] = charTried

            // MODIFICO EL ESTADO
            this.setState({ wordShown: newWordShown.join('')})

        } if (this.state.counter > 0) {
            const newCounter = this.state.counter - 1
    
            this.setState({ counter: newCounter}) 
            return    
        
        } else{

            this.setState ({view:'gameOver'})

        }
        
    }
    
    
    render() {
        return (
            <main>

                {/* <h1>HANGMAN</h1> */}
                {this.state.view === "select word" &&
                    <Form placeholder="enter a word" onSubmit={this.handleOnChooseWordFormSubmit} buttonText="START" />
                }

                {this.state.view === "playing" &&
                    <>
                        <h1 className="wordShown">{this.state.wordShown}</h1>
                        <Form placeholder="enter a character" buttonText="TRY" onSubmit={this.handleOnCharacterForm} />
                        <h2> counter: {this.state.counter} </h2>
                    </>
                }
                {this.state.view === "gameOver" &&
                <>
                    <h2> wordSelected: {this.state.result}</h2>
                    <h2>gameOver</h2>
                    <span> 0 tries left </span>
                    <button type="submit">PLAY AGAIN</button>
                </>}

            </main>
        )
    }
}

            // gameOver = event =>{
        
                // if (this.state.counter<0){
                //     this.setState({ result: wordSelected, view: 'gameOver', counter:0 })
            
        //             if (this.state.counter < 0 ){
        //                 <h2> Game Over {this.wordSelected}</h2>
        //             }else{
        //                 <h2> You Win!!!</h2>
        //             }
            
        //         }
        // }
