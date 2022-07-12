import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import MuiSelect from '@mui/material/Select';

export interface SelectProps {
    label: string;
    value: string;
    handleChange: () => void;
    list: Array<string>;
}

export function Select({ label, value, handleChange, list }: SelectProps) {
   
    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">{ label }</InputLabel>
            <MuiSelect
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label={label}
                value={value}
                onChange={handleChange}
            >   
                { list.map((item, idx) => (
                    <MenuItem 
                        key={idx}
                        value={item}
                    >
                        { item }
                    </MenuItem>
                ))}
            </MuiSelect>
        </FormControl>
    );
}
