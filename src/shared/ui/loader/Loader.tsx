import {FC, PropsWithChildren} from "react"
import {LoaderInterface} from "./loader.interfaces"
import {ComponentWithClassName} from "@/shared/types"
import styles from './loader.module.scss'

export const Loader: FC<PropsWithChildren<ComponentWithClassName<LoaderInterface>>> = ({children, className, isLoading}) => {
    return (
        <div className={styles.wrap}>
            <div className={className}>{children}</div>
            {isLoading && (
                <div className={styles.loader}>Loading...</div>
            )}
        </div>
    )
}