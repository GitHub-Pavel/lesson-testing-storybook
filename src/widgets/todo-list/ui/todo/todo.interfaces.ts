import {TodoInterface} from '@/shared/types'

export interface TodoPropsInterface {
    onRemove(): void;
    onComplete(isCompleted: boolean): void;
    todo: TodoInterface;
}