describe('createNotes', () => {
    beforeEach(() => {
        users.length = 0
        notes.length = 0
    })

    it('create notes for an existing user', () => {
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
})