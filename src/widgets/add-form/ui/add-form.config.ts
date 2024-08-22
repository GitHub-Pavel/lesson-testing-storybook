import {z} from 'zod'

export const AddFormSchema = z.object({
    name: z.string({
        invalid_type_error: 'Please enter a name',
        required_error: 'Please enter a name',
        message: 'Please enter a task name'
    })
        .min(3, 'Please enter a name')
})

export type AddFormSchemaType = z.infer<typeof AddFormSchema>
export const AddFromDefaultValues: AddFormSchemaType = {
    name: ''
}