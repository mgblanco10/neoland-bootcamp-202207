
function ChangeNoteColor ({onChangeNoteColor, noteId}) {

    const handleChangeNoteColor = (color) => {
        onChangeNoteColor(noteId, color)
    }

    return (
        <div className="changeNoteColorContainer">
            <div className="changeNoteBlue" onClick={() => handleChangeNoteColor('blue')}></div>
            <div className="changeNotePink" onClick={() => handleChangeNoteColor('pink')}></div>
        </div>
    )

}

export default ChangeNoteColor