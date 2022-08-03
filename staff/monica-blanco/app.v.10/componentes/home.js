class Home {
    constructor() {
        const temp = document.createElement('temp')

        temp.innerHTML = `<div class="home-page container">
        <header class="header">
            <img class="imgHome" src="https://media4.giphy.com/media/lnyLJ57x8jJ13ZDhTZ/giphy.gif?cid=a267dfa35mpqsy8edagjq1n6d14c20r903cyt2gneqzbgona&rid=giphy.gif&60490a1f0d4f710d77dfff46&1653264000136">
            <h1 class="title"> Hello, Pepito!! </h1>
            <button class="menu-button transparent-button"><span class="material-symbols-outlined">menu</span></button>
            <button class="close-button transparent-button off"><span class="material-symbols-outlined">close</span></button>
        </header>          
        <main class="main">
        <div class="menu-panel off">
                    <ul>
                    <li><button class="settings-button transparent-button"><span class="material-symbols-outlined">settings</span></button></li>
                    <li><button class="settings-button transparent-button"><span class="material-symbols-outlined">settings</span></button></li>
                    <li><button class="logout-button transparent-button"><span class="material-symbols-outlined">logout</span></button></li>
                    </ul>
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
<!----------------NEW PASSWORD ------------------->            
            <form class="form-profile password off">
                <img class="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Ne6f06tRXhNZQl2jp5YjNepB8j5_hojl4LcOcyO-1s7TLzUHGuSIwblFSZ_ihI0BAlU&usqp=CAU">
                <div class="form__field">
                    <label for="name">Current Password</label>
                    <input class='input' type="text" name="name" placeholder="name" id="name">
                </div>
                <div class="form__field">
                    <label for="email">New Password</label>
                    <input class="input" type="password" name="email" placeholder="email" id="email">
                </div>
                <div class="form__field">
                    <label for="password">Repeat New Password</label>
                    <input class='input' type="password" name="password" placeholder="password" id="password">
                </div>
                <button class="button" type="submit">Register</button>
            
                <button class="button" type="submit">Home</button>
            </form>
<!------------------ NEW EMAIL----------->
<form class="form-profile email off">
<img class="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Ne6f06tRXhNZQl2jp5YjNepB8j5_hojl4LcOcyO-1s7TLzUHGuSIwblFSZ_ihI0BAlU&usqp=CAU">
<div class="form__field">
    <label for="name">Current Email</label>
    <input class='input' type="text" name="name" placeholder="name" id="name">
</div>
<div class="form__field">
    <label for="email">New Email</label>
    <input class="input" type="email" name="email" placeholder="email" id="email">
</div>
<div class="form__field">
    <label for="password">Repeat New Email</label>
    <input class='input' type="password" name="password" placeholder="password" id="password">
</div>
<button class="button" type="submit">Register</button>

<button class="button" type="submit">Home</button>
</form>
        </main>
<!-----------------FOOTER------------------>            
            <footer class="footer">
                <button class="add-button transparent-button"> + </button>
            </footer>
        <button class="logout-button transparent-button"><span class="material-symbols-outlined">logout </span></button>
    </div>`

    this.container = temp.firstChild
}

setName(name) {
    this.container.querySelector('.title').innerText = 'Hello, ' + name + '!'
}

renderList(notes) {
    const list = this.container.querySelector('.list')
    list.innerHTML = ''

    notes.forEach(note => {
        const item = document.createElement('li')
        item.classList.add('list__item')

        const deleteButton = document.createElement('button')
        deleteButton.classList.add('list__item-delete-button')
        deleteButton.innerText = 'x'
        deleteButton.onclick = () => {
            this.onDeleteNoteClick(note.id)
        }

        const text = document.createElement('p')
        text.contentEditable = true
        text.classList.add('list__item-text')
        text.onkeyup = () => {
            if (window.updateNoteTimeoutId)
                clearTimeout(window.updateNoteTimeoutId)

            window.updateNoteTimeoutId = setTimeout(() => {
                this.onUpdateNote(note.id, text.innerText)
            }, 1000)
        }
        text.innerText = note.text

        item.append(deleteButton, text)

        list.append(item)
    })
}

onDeleteNoteClick = null

onUpdateNote = null
}