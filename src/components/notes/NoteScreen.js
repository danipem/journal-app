import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">
                <input 
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                />

                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                ></textarea>

                <div className="notes__image">
                    <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmUJR1NPLY8pRE46c8yesARPBIbV_Ohoc6OQ&usqp=CAU"
                        alt="imagen"
                    />
                    
                </div>
            </div>

        </div>
    )
}
