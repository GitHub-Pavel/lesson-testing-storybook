import {AddFormSchemaType} from "./add-form.config"

export interface AddFormPropsInterfaces {
    onSubmit(formData: AddFormSchemaType): void
}