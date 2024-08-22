import {clsx} from "clsx"
import {FC, PropsWithChildren} from "react"
import {ComponentWithClassName} from "@/shared/types"
import styles from './layout.module.scss'

export const Layout: FC<PropsWithChildren<ComponentWithClassName>> = ({children, className}) => {
    return (
        <div className={clsx(className, styles.layout)}>{children}</div>
    )
}