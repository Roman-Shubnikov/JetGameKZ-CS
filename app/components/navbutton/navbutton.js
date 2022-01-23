
import styles from './navbutton.module.css'
import Link from 'next/link'
export const WellNavButton = ({icon, href, ...props}) => {
    return (
        <Link href={href}>
            <NavButton icon={icon} {...props} />
        </Link>
    )
}

export const NavButton = ({icon, ...props}) => {
    return (
        <div {...props} className={styles.root}>
            <img src={icon} alt='icon' width={24} height={24} />
        </div>
    )
}