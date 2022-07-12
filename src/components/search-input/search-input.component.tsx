import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export interface SearchInputProps {
    value: string | null;
    handleValueChange: (event: any, newValue: string | null) => void;
    inputValue: string;
    handleInputValueChange: (event: any, newValue: string) => void;
}

export function SearchInput({ 
    value, 
    handleValueChange, 
    inputValue, 
    handleInputValueChange 
}: SearchInputProps) {

    return (
        <Autocomplete
            freeSolo
            disablePortal
            value={value}
            onChange={handleValueChange}
            inputValue={inputValue}
            onInputChange={handleInputValueChange}
            id="free-solo-demo"
            options={options.map(option => option.title)}
            renderInput={(params) => <TextField {...params} label="Launch" />}
        />
    );
}


const options = [
    { title: 'Falcon Heavy' },
    { title: 'Merlin' },
    { title: 'Falcon Sat' },
    { title: 'Asia Sat 6' },
    { title: 'Cassiope' },
    { title: 'Cots 1' },
    { title: 'Crs-11' },
    { title: 'Iridium NEXT Mission 1' },
    { title: 'Starlink Demo' },
    { title: 'Intelsat 35e' },
    { title: 'RatSat' },
    { title: 'Inmarsat-5 F4' },
    { title: 'BulgariaSat-1' },
    { title: 'Hispasat' },
    { title: 'RazakSat' }
]