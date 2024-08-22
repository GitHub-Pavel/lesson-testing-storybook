import {FC} from "react"
import {useForm} from "react-hook-form"
import {Button, FieldController} from "@/shared/ui"
import {zodResolver} from "@hookform/resolvers/zod"
import {AddFormPropsInterfaces} from "./add-form.interfaces"
import {AddFormSchemaType, AddFormSchema, AddFromDefaultValues} from "./add-form.config"
import styles from './add-form.module.scss'

export const AddForm: FC<AddFormPropsInterfaces> = ({onSubmit}) => {
    const {control, handleSubmit, reset} = useForm<AddFormSchemaType>({
        resolver: zodResolver(AddFormSchema),
        defaultValues: AddFromDefaultValues,
        mode: 'onSubmit',
    })
    const submitDecorator = (formData: AddFormSchemaType) => {
        reset({})
        onSubmit(formData)
    }
    return (
        <form onSubmit={handleSubmit(submitDecorator)} className={styles.form}>
            <FieldController
                type='text'
                name='name'
                placeholder='Enter a name'
                control={control}
            />
            <Button text='Submit' />
        </form>
    )
}