import React, { useState } from 'react';


export function useFilter() {
    const [filter, setFilter] = useState<string | null>(null)

    const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (filter === e.target.textContent) {
            setFilter(null)
            return
        }
        setFilter(e.target.textContent)
    }

    return [
        filter,
        handleClick
    ] as const

}