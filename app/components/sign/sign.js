import styles from './sign.module.css'
export const SignBase = ({children, ...props}) => {
    const classes = props.className ? styles.root + ' ' + props.className : styles.root
    return (
        <div {...props} className={classes}>
            {children}
        </div>
    )
}