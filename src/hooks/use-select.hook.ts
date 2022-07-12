import React, { useState } from 'react'


export function useSelect(initValue: string) {
    const [value, setValue] = useState(initValue ?? "")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return [
        value,
        handleChange,
        setValue
    ]
}