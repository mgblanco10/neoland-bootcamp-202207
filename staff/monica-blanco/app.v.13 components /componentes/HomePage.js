class HomePage extends Component {
    constructor() {
        super(`<div class="home-page container container--full">
        <main class="main">
            <ul class="list-panel list">
                <li class="list__item"><button class="list__item-delete-button">x</button>
                    <p contenteditable="true" class="list__item-text">Lorem electus distinctio?</p>     
                </li>
                <li class="list__item"><button class="list__item-delete-button">x</button>
                    <p contenteditable="true" class="list__item-text">Hello, Note!</p>
                </li>
                <li class="list__item"><button class="list__item-delete-button">x</button>
                    <p contenteditable="true" class="list__item-text">Lorem imilique ipsam deserunt eius soluta adipisci
                        blanditiis nobis fugiat aut nesciunt rerum porro delectus distinctio?</p>
                </li>
                <li class="list__item"><button class="list__item-delete-button">x</button>
                    <p contenteditable="true" class="list__item-text">Lorem delectus distinctio?</p>
                </li>
                <li class="list__item"><button class="list__item-delete-button">x</button>
                    <p contenteditable="true" class="list__item-text">Lorem  delectus distinctio?</p>
                </li>
                <li class="list__item"><button class="list__item-delete-button">x</button>
                    <p contenteditable="true" class="list__item-text">Lorem rerum porro delectus distinctio?</p>
                </li>
                <li class="list__item"><button class="list__item-delete-button">x</button>
                    <p contenteditable="true" class="list__item-text">Lorem ipsuectustio?</p>
                </li>
            </ul>           
        </main>          
            <footer class="footer">
                <button class="add-button transparent-button"> + </button>
            </footer>
        </div>`)

        const addButton = this.container.querySelector('.add-button')
        addButton.onclick = () => {
            this.onAddNote()
        }

        const headerPanel = new HeaderPanel
        this.container.prepend(headerPanel.container)

        headerPanel.onMenuButtonClick = () => {
            if (main.contains(settingsPanel.container))
                headerPanel.hideMenuSettingsButton()
        }

        const footer = this.container.querySelector('.footer')

        headerPanel.onSettingsButtonClick = () => {
            if (footer.contains(addButton))
                footer.removeChild(addButton)

            main.removeChild(listPanel.container)
            main.append(settingsPanel.container)
        }

        const main = this.container.querySelector('.main')

        const settingsPanel = new SettingsPanel

        const listPanel = new ListPanel
        this.listPanel = listPanel
        main.append(listPanel.container)

        listPanel.onDeleteNote = noteId => this.onDeleteNote(noteId)
        listPanel.onUpdateNote = (noteId, text) => this.onUpdateNote(noteId, text)

        headerPanel.onLogoutButtonClick = () => {
            if (main.contains(settingsPanel.container))
                settingsPanel.close()

            this.onLogoutButtonClick()
        }

        settingsPanel.onUpdatePassword = (oldPassword, newPassword, newPasswordRepeat) => {
            this.onUpdatePassword(oldPassword, newPassword, newPasswordRepeat)
        }

        settingsPanel.onClose = () => {
            main.removeChild(settingsPanel.container)

            headerPanel.closeMenu()

            main.append(listPanel.container)
            footer.append(addButton)
        }
    }

    setName(name) {
        this.container.querySelector('.title').innerText = 'Hello, ' + name + '!'
    }

    renderList(notes) {
        this.listPanel.renderList(notes)
    }

    onDeleteNote = null

    onUpdateNote = null

    onLogoutButtonClick = null

    onAddNote = null

    onUpdatePassword = null
}

 // <header class="header container">
        //     <img class="imgHome" src="https://media4.giphy.com/media/lnyLJ57x8jJ13ZDhTZ/giphy.gif?cid=a267dfa35mpqsy8edagjq1n6d14c20r903cyt2gneqzbgona&rid=giphy.gif&60490a1f0d4f710d77dfff46&1653264000136">
        //     <div class= "header-top container container--row container--distributed">
        //     <h1 class="title"> Hello, Pepito!! </h1>
        //     <button class="menu-button transparent-button"><span class="material-symbols-outlined">menu</span></button>
        //     </div>   
        //         </header> 