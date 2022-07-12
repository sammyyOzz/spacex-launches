import React, { useState } from 'react'

export function useSearchInput() {
    const [value, setValue] = useState('')
    const [inputValue, setInputValue] = useState('')

    const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>, newValue: string) => {
        setValue(newValue)
    }

    const handleInputValueChange = (e: React.ChangeEvent<HTMLInputElement>, newValue: string) => {
        setInputValue(newValue)
    }

    return [
        value,
        handleValueChange,
        inputValue,
        handleInputValueChange
    ]
}