import { LucideCross, LucideLink2Off } from 'lucide-react';
import React from 'react';

const Modal = ( { children, closeModal } ) => {
    return (
        <div className="fixed inset-0 bg-opacity-50 bg-black flex justify-center items-start z-50">
            <div className="bg-black p-4 rounded shadow-lg relative transform translate-y-2 animate__animated animate__fadeIn">
                <button className="absolute top-2 right-2 text-xl" onClick={closeModal}>
                    <LucideCross className='rotate-45'/>
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
