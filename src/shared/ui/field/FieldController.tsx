import {FC} from "react"
import {Field} from "@/shared/ui"
import {Controller} from "react-hook-form"
import {FieldControllerInterface} from "./field.interfaces"
import styles from './field.module.scss'

export const FieldController: FC<FieldControllerInterface> = ({placeholder, type, ...props}) => {
    return (
        <Controller render={({ field, fieldState: { error }}) => (
            <label className={styles.controller}>
                <Field type={type} placeholder={placeholder} {...field} />
                {error && (<div className="text-error">{error.message}</div>)}
            </label>
        )} {...props} />
    )
}