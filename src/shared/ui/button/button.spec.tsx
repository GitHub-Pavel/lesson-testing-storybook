import {Button} from './Button';
import {MouseEvent} from "react";
import {describe, expect} from "vitest";
import userEvent from "@testing-library/user-event";
import {render, screen} from "@testing-library/react";

describe('UI Button', () => {
    it('Render', () => {
        render(<Button text='Submit' />)
        expect(screen.getByText('Submit')).toBeInTheDocument()
    })

    it('Click', async () => {
        const user = userEvent.setup()
        const handleClick = ({currentTarget}: MouseEvent<HTMLButtonElement>) => currentTarget.innerHTML = 'Click me!'
        render(<Button text='Submit' onClick={handleClick} />)
        const button = screen.getByText('Submit')
        await user.click(button)
        expect(screen.getByText('Click me!')).toBeInTheDocument()
    })
})