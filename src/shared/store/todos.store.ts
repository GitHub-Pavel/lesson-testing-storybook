import {atomWithStorage} from "jotai/utils"
import {TodoInterface} from "@/shared/types"

export const todosAtom = atomWithStorage<TodoInterface[]>('todos', [])