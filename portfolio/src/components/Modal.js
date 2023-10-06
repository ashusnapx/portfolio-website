import React from 'react';

const Modal = ( { children, closeModal } ) => {
    return (
        <div className="fixed inset-0 bg-opacity-50 bg-black flex justify-center items-center z-50">
            <div className="bg-black/80 p-4 rounded shadow-lg relative">
                <button className="absolute top-2 right-2 text-xl" onClick={closeModal}>
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
