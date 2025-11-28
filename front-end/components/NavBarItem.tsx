"use client";

import React from "react";

interface NavBarItemProps {
    activeIcon: string;
    inactiveIcon: string;
    title: string;
    isActive: boolean;
    onClick: () => void;
    showLabel?: boolean;
}

export function NavBarItem({
                               activeIcon,
                               inactiveIcon,
                               title,
                               isActive,
                               onClick,
                               showLabel = true
                           }: NavBarItemProps) {
    return (
        <button
            className="flex items-center justify-center gap-1 mx-2 py-2 px-4
                       transition-all duration-300 hover:scale-110 hover:shadow-lg
                       rounded-md hover:bg-gradient-to-r hover:from-green-200 hover:to-blue-300"
            onClick={onClick}
        >
            <img
                src={isActive ? activeIcon : inactiveIcon}
                alt={title}
                width={28}
                className="sm:w-6 md:w-7 lg:w-8 lg:pr-2"
            />

            {showLabel && (
                <span
                    className={`${
                        isActive ? "font-semibold" : "font-medium"
                    } text-xs md:text-sm lg:text-base`}
                >
                    {title}
                </span>
            )}
        </button>
    );
}
