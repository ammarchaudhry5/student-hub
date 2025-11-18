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
            className="mx-2 p-2 rounded hover:bg-green-200"
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
