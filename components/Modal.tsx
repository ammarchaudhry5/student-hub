import React, { ReactNode } from "react";

interface ModalProps {
    bgColor?: string;
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

export function Modal({ isOpen, onClose, children, bgColor }: ModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50"
             // style={
             //     {color: bgColor ||  "white"}
             // }
        >
            <div className="bg-gradient-to-br from-blue-300 via-green-100 to-indigo-300 rounded-xl shadow-xl w-[90%] max-w-md p-0 relative animate-fadeIn">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
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