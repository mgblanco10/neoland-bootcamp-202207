import './Settings.css'
import IconButton from './IconButton'
import Loggito from '../utils/Loggito'
import updateUserPassword from '../logic/updateUserPassword'
import updateUserEmail from '../logic/updateUserEmail'

function Settings({onCloseClick, onFeedback}) {
    const logger = new Loggito('Settings')

    logger.info('render')

    const handleFormSubmit = event => {
        event.preventDefault()

        // const {target: {oldPassword:{value:oldPassword}, newPassword:{value:newPassword}, newPasswordRepeat:{value:newPasswordRepeat}}} = event
        const { target: form } = event

        const {
            oldPassword: { value: oldPassword },
            newPassword: { value: newPassword },
            newPasswordRepeat: { value: newPasswordRepeat },
            oldEmail: { value: oldEmail },
            newEmail: { value: newEmail },
            newEmailRepeat: { value: newEmailRepeat }
        } = form

        try {
            updateUserPassword(sessionStorage.token, oldPassword, newPassword, newPasswordRepeat, error => {
                if (error) {
                    onFeedback({message:error.message, level: 'warning'})
                    
                    logger.warn(error.message)

                    return
                }
                onFeedback({message:`Password update`, level: 'success'})
                form.reset()
                onCloseClick()
                
            })
        } catch(error) {
            onFeedback({message:error.message, level: 'warning'})

            logger.warn(error.message)
        }
        
        try {
            updateUserEmail(sessionStorage.token, oldEmail, newEmail, newEmailRepeat, error => {
                if (error) {
                    alert(error.message)
                    
                    return
                }
    
                onFeedback({message:`Email update`, level: 'success'})
                form.reset()
                onCloseClick()
            })
        } catch(error) {
            onFeedback({message:error.message, level: 'warning'})

            logger.warn(error.message)
        }
    }

    logger.info('return')

        return <div className="Settings container">

            <form className="update-password-form form" onSubmit={handleFormSubmit}>

                <div className="form__field">
                    <label htmlFor="oldPassword">Current password</label>
                    <input className="input" type="password" name="oldPassword" placeholder="old password" id="oldPassword" />
                </div>

                <div className="form__field">
                    <label htmlFor="newPassword">New password</label>
                    <input class="input" type="password" name="newPassword" placeholder="new password" id="newPassword" />
                </div>

                <div className="form__field">
                    <label htmlFor="newPasswordRepeat">Repeat new password</label>
                    <input className="input" type="password" name="newPasswordRepeat" placeholder="repeat new password" id="newPasswordRepeat" />
                </div>
                <div className="form__field">
                    <label htmlFor="oldEmail">Current Email</label>
                    <input className="input" type="email" name="oldEmail" placeholder="old email" id="oldEmail" />
                </div>

                <div className="form__field">
                    <label htmlFor="newEmail">New Email</label>
                    <input class="input" type="email" name="newEmail" placeholder="new email" id="newEmail" />
                </div>

                <div className="form__field">
                    <label htmlFor="newEmailRepeat">Repeat New Email</label>
                    <input className="input" type="email" name="newEmailRepeat" placeholder="repeat new email" id="newEmailRepeat" />
                </div>

                <button className="button" type="submit">Update</button>
            </form>
            <IconButton text="home" onClick={onCloseClick} />
        </div>
    }
export default Settings
