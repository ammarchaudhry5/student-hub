import React from 'react'

interface ActiveMemberProps {
    userImage: string,
    isActive: boolean,
    onClick: ()=>void
}

export function ActiveMember({userImage, isActive, onClick}: ActiveMemberProps) {
    return <div className="relative w-24 h-24 min-w-24 min-h-24 mx-2 my-3 snap-center">
        <div onClick={onClick} className="border-3 border-blue-500 rounded-full w-full h-full flex items-center justify-center overflow-hidden">
            <img
                src={userImage}
                alt="profile"
                className="w-full h-full object-cover"
            />
        </div>
        {isActive
            ? (
            <span className="absolute top-0 right-0 translate-x-0.5 translate-y-4 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>)
            : (
            <span className="absolute top-0 right-0 translate-x-0.5 translate-y-4 w-4 h-4 bg-gray-500 border-2 border-white rounded-full"></span>)
        }
    </div>;
}
