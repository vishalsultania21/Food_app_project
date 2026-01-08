import { useState } from "react"

export function Categories({categoriesProps, setCurrentTabHandler, currentTab}) {
    const buttonClasses = `
        bg-transparent
        rounded-full
        py-2 px-4
        cursor-pointer
        transition-all duration-300
        ${categoriesProps === currentTab
            ? 'text-custom-orange border-2 border-custom-orange font-bold'
            : 'text-black border border-gray-300 font-normal'
        }
    `;

    return (
        <button onClick={()=>setCurrentTabHandler(categoriesProps)} className={buttonClasses}>
            {categoriesProps}
        </button>
    )
}