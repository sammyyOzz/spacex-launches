import React, { useState } from 'react'

export function useSearchInput() {
    const [value, setValue] = useState<string | null>('')
    const [inputValue, setInputValue] = useState('')

    const handleValueChange = (e: any, newValue: string | null) => {
        setValue(newValue)
    }

    const handleInputValueChange = (e: any, newValue: string) => {
        setInputValue(newValue)
    }

    return [
        value,
        handleValueChange,
        inputValue,
        handleInputValueChange
    ] as const
}