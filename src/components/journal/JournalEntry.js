import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            
            <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize: "cover",
                    backgroundImage: "url(https://static.wikia.nocookie.net/horadeaventura/images/0/09/Vlcsnap-2013-07-05-12h01m48s223.png/revision/latest/scale-to-width-down/340?cb=20130705150206&path-prefix=es)"
                }}
            ></div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un nuevo día
                </p>
                <p className="journal__entry-content">
                    Texto largo, no sé cómo hacer textos largos con lorem ipsum
                </p>
            </div>
            
            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>26</h4>
            </div>
        </div>
    )
}
