describe('createNotes', () => {
    beforeEach(() => {
        users.length = 0
        notes.length = 0
    })

    it('succeds for an existing user', () => {
        const peTete = {
            id: 'user-34534345',
            name: 'Pe Tete',
            email: 'pe@tete.com',
            password: '123123123'   
        }

        const peTeta = {
            id: 'user-34534346',
            name: 'Pe Teta',
            email: 'pe@teta.com',
            password: '123123123'   
        }

        users.push(peTete, peTeta)

        createNote(peTete.id, error => {
            expect(error).toBeNull()

            expect(notes).toBeInstanceOf(Array)
            expect(notes.length).toBe(1) // expect(notes).toHaveSize(1)
            expect(notes[0].user).toBe(peTete.id)
            expect(notes[0].text).toBe('')
            expect(notes[0].id).toBeDefined()

        })
    })

    it('returns error for a non-existing user', () => {
        const peTete = {
            id: 'user-34534345',
            name: 'Pe Tete',
            email: 'pe@tete.com',
            password: '123123123'   
        }

        const peTeta = {
            id: 'user-34534346',
            name: 'Pe Teta',
            email: 'pe@teta.com',
            password: '123123123'   
        }

        users.push(peTete, peTeta)

        const unknownUserId = 'user-782347234'

        createNote(unknownUserId, error => {
            expect(error).toBeInstanceOf(Error)
            expect(error.message).toBe('user with id ' + unknownUserId + ' not found')

            expect(notes).toHaveSize(0) // expect(notes.length).toBe(0)
        })
    })
    it('succeeds for an existing user', () => {
        const paTata = {
            id: 'user-' + Date.now(),
            name: 'Pa Tata',
            email: 'pa@tata.com',
            password: '123123123'
        }
        
        users.push(paTata)

        const cucaRacha = {
            id: 'user-' + Date.now(),
            name: 'Cuca Racha',
            email: 'cuca@racha.com',
            password: '123123123'
        }

        users.push(cucaRacha)

        const note1 = {
            id: 'note-' + Date.now(),
            text: 'hello world',
            user: cucaRacha.id
        }

        notes.push(note1)

        createNote(paTata.id, error => {
            expect(error).toBeNull()

            expect(notes.length).toBe(2)

            const note2 = notes[1]
            expect(note2.id).toBeDefined()
            expect(note2.text).toBe('')
            expect(note2.user).toBe(paTata.id)
        })
    })

    it('fails for a non-existent user', () => {
        const poRoto = {
            id: 'user-' + Date.now(),
            name: 'Po Roto',
            email: 'po@roto.com',
            password: '123123123'
        }
        
        users.push(poRoto)

        const peLudo = {
            id: 'user-' + Date.now(),
            name: 'Pe Ludo',
            email: 'pe@ludo.com',
            password: '123123123'
        }

        users.push(peLudo)

        const note1 = {
            id: 'note-' + Date.now(),
            text: 'hello world',
            user: peLudo.id
        }

        notes.push(note1)

        const unknownUserId = 'note-123123213'

        createNote(unknownUserId, error => {
            expect(error).toBeInstanceOf(Error)
            expect(error.message).toBe('user with id ' + unknownUserId + ' not found')
        })
    })
})