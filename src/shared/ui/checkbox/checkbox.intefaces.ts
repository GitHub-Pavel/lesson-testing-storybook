import {ComponentProps} from "react";

export interface CheckboxInterface extends Omit<ComponentProps<'input'>, 'type'> {
    label?: string
}