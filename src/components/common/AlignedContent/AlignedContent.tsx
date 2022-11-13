import React from 'react'
import './AlignedContent.scss';

interface AlignedContentProps {
    vAlign?: "top" | "center" | "bottom"
    hAlign?: "left" | "center" | "right"
    fullSize?: boolean
}

export const AlignedContent: React.FC<AlignedContentProps> = ({ vAlign, hAlign, fullSize, children }) => {

    let justifyContent = vAlign === "top" ? "flex-start" :
                         vAlign === "bottom" ? "flex-end" : "center"

    let alignItems = hAlign === "left" ? "flex-start" :
                     hAlign === "right" ? "flex-end" : "center"

    let sizeClass = fullSize? "fullsize" : ""

    return (
        <div 
            className={`AlignedContent ${sizeClass}`} 
            style={{justifyContent: justifyContent, alignItems: alignItems}}>
            { children }
        </div>
    )

}