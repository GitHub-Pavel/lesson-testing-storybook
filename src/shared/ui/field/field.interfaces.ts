import {UseControllerProps} from "react-hook-form";
import {HTMLInputTypeAttribute} from "react";

export interface FieldControllerInterface extends UseControllerProps<any> {
    placeholder?: string;
    type?: HTMLInputTypeAttribute;
}