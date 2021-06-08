import React, { useState } from 'react'

const Modal = ({children, setMessageSent}) => {

    const [ show, setShow ] = useState(true);
    
    function closeModalHandler(e){
        setShow(false);
        setMessageSent(false);
    }

    if(show === false) return null;

    return (
        <div className="modal">
            <div className="card">
                <button className="modal-close" onClick={closeModalHandler}>Oi</button>
                {children}
            </div>
            <div className="modal-bg" onClick={closeModalHandler} />
        </div>
    )
}

export default Modal
