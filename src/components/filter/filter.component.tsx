import Chip from '@mui/material/Chip';

export interface FilterProps {
    label: string;
    handleClick: () => void;
    filter: string;
}

export function Filter({ label, handleClick, filter }: FilterProps) {

    return (
        <Chip 
            label={label} 
            color="primary" 
            onClick={handleClick}
            variant={filter === label ? "filled" : "outlined"}
        />
    )
}