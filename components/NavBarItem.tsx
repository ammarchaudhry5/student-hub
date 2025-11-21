import React from "react";

interface NavBarItemProps {
    activeIcon: string;
    inactiveIcon: string;
    title: string;
    isActive: boolean;
    onClick: () => void;
}

export function NavBarItem({ activeIcon, inactiveIcon, title, isActive, onClick }: NavBarItemProps) {
    return (
        <button
            className="mx-2 py-2 px-5 transition-all duration-300 hover:scale-110 hover:shadow-2xl rounded-md hover:bg-gradient-to-r hover:from-green-200 hover:to-blue-300"
            onClick={onClick}
        >
            <div className="flex items-center">
                <img
                    src={isActive ? activeIcon : inactiveIcon}
                    alt={title}
                    width={32}
                />
                <h1 className={` ${isActive ? "text-xl font-semibold" : "text-lg font-medium"} text-xl ml-4 font-sans`}>{title}</h1>
            </div>
        </button>
    );
}
