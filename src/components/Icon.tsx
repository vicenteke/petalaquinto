import React from "react";

export interface IconProps {
    src: string
    alt: string
    className?: string
}


export default function Icon({ src, alt, className }: IconProps) {
    const path = 'resources/img/' + src
    const classNames = className ? "icon-image " + className : "icon-image"
    return (
        <img src={path} className={classNames} alt={alt} />
    )
}
