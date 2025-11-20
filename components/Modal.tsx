import React, { ReactNode } from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

export function Modal({ isOpen, onClose, children,}: ModalProps) {
    if (!isOpen) return null;

    return (
        <div className= {"absolute inset-0 flex items-center justify-center z-50"}>
            <div className={"h-100vh w-full bg-black opacity-40 fixed inset-0"}></div>
            <div className="bg-gradient-to-br from-blue-300 via-green-100 to-indigo-300 rounded-xl shadow-xl w-[90%] max-w-md p-0 relative animate-fadeIn">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-black"
                >
                    X
                </button>
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
}