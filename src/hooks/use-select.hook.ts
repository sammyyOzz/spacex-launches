import { useState } from 'react'
import { SelectChangeEvent } from '@mui/material/Select';


export function useSelect(initValue: string) {
    const [value, setValue] = useState(initValue ?? "")

    const handleChange = (e: SelectChangeEvent) => {
        setValue(e.target.value as string)
    }

    return [
        value,
        handleChange,
        setValue
    ] as const
}