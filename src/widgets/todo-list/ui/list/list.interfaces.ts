import {TodoInterface} from "@/shared/types"

export interface ListInterface {
    list: [TodoInterface[], (todos: TodoInterface[]) => void]
}