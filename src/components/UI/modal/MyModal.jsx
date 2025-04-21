import React from 'react';
import cl from './MyModal.module.css'

const MyModal = ({children, visible, setVisible}) => {

    const rooClasses = [cl.myModal]

    if (visible) {
        rooClasses.push(cl.active)
    }

    return (
        <div
            className={rooClasses.join(' ')}
            onClick={() => setVisible(false)}
        >
            <div
                className={cl.myModalContent}
                onClick={e => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default MyModal;