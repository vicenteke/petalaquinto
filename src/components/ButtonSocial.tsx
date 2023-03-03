import React from "react";

import Icon, { IconProps } from "./Icon";

export interface ButtonSocialProps {
    text: string
    href: string
    className?: string
    target?: string
    iconSrc: string
    iconAlt: string
    iconClassName?: string
}


export default function ButtonSocial({
    text,
    href,
    className,
    iconSrc,
    iconAlt,
    iconClassName,
    target="_blank" }: ButtonSocialProps) {
    const iconClasses = "button-social-icon " + iconClassName
    const classes = "button-social " + className

    return (
        <a href={href} target={target}>
            <div className={classes}>
                <Icon src={iconSrc} className={className} alt={iconAlt} />
                <span>{text}</span>
            </div>
        </a>
    )
}
