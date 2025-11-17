import React from "react";

interface NavBarItemProps {
    icon: string,
    title: string,
    onClick: ()=>void
}

export function NavBarItem({icon, title, onClick}: NavBarItemProps) {
  return <button
      className="mx-2 p-1 rounded hover:bg-indigo-600"
      onClick={onClick}
  >
      <div className="flex">
          <img src={icon} alt="Logo" width={32}/>
          <h1 className="text-lg ml-2 my-3 font-semibold font-sans">{title}</h1>
      </div>
  </button>;
}