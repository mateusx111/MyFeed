import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLElement> {
    hasBorder?: boolean;
}

export function Avatar({hasBorder = true, ...props}: AvatarProps) {
    
    return (
        <img
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            {...props}

        />
    )
}