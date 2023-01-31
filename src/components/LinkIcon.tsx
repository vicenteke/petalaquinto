import React from "react";

import Icon, { IconProps } from "./Icon";

export interface LinkIconProps extends IconProps {
    href: string
    src: string
    alt: string
    className?: string
    target?: string
}


export default function LinkIcon({ href, src, alt, className, target="_blank" }: LinkIconProps) {
    return (
        <a href={href} target={target}>
            <Icon src={src} className={className} alt={alt} />
        </a>
    )
}
