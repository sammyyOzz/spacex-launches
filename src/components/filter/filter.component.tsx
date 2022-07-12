import Chip from '@mui/material/Chip';

export interface FilterProps {
    label: string;
    handleClick: (event: React.MouseEvent<HTMLDivElement>) => void;
    filter: string | null;
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