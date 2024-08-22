import {useDebounce} from "use-debounce"
import {FC, FormEvent, useEffect, useState} from "react"
import {SearchInterface} from "./search.interfaces"
import {Field} from "@/shared/ui"


export const Search: FC<SearchInterface> = ({onSearched, filterCallback, items, onSearching}) => {
    const [value, setValue] = useState('')
    const [debouncedValue] = useDebounce(value, 300)

    const handleInput = (e: FormEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
        onSearching(true)
    }

    useEffect(() => {
        onSearching(false)

        if (debouncedValue.length < 3) {
            onSearched(items)
            return;
        }

        onSearched(items.filter((item) => filterCallback(debouncedValue, item)))
    }, [debouncedValue, items])

    return (
        <div>
            <Field
                type="text"
                value={value}
                onInput={handleInput} 
                placeholder="Search..."
            />
        </div>
    )
}