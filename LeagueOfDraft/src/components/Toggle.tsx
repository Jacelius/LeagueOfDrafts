import { useState } from 'react'
import * as React from 'react'
import '../style/Toggle.css';

interface ToggleProps {
    label: string
    toggled: boolean
    onClick: (toggled: boolean) => void
}

export const Toggle = ({ label, toggled, onClick } : ToggleProps) => {
    const [isToggled, toggle] = useState(toggled)

    const callback = () => {
        toggle(!isToggled)
        onClick(!isToggled)
    }

    return (
        <label>
            <input type="checkbox" defaultChecked={isToggled} onClick={callback} />
            <span />
            <strong>{label}</strong>
        </label>
    )
}