import { useCallback, useEffect, useMemo, useState } from 'react';
import './home.styles.css';

import { useLazyQuery } from "@apollo/client";
import { SPACEX_QUERY } from "../../graphql";

import { useFilter } from '../../hooks/use-filter.hook';
import { useSearchInput } from '../../hooks/use-search-input.hook';
import { useSelect } from '../../hooks/use-select.hook';

import { MISSION_NAME, ROCKET_NAME, ROCKET_TYPE, searchFields } from '../../utils/constants';

import { Grid } from '@mui/material';
import { Select } from '../../components/select/select.component';
import { SearchInput } from '../../components/search-input/search-input.component';


const LIMIT = 10

function Home() {
    //=================================================================================
    // graphql and effect
    //================================================================================= 

    const [getLaunches, { data, loading, error }] = useLazyQuery(SPACEX_QUERY);

    useEffect(() => {
        getLaunches({ variables: { limit: LIMIT } })
    }, [])

    //=================================================================================
    // state
    //================================================================================= 
    
    const [currentPage, setCurrentPage] = useState<number>(1)


    //=================================================================================
    // hooks
    //=================================================================================  
    
    const [rocketNameFilter, setRocketNameFilter] = useFilter()
    const [rocketTypeFilter, setRocketTypeFilter] = useFilter()
    const [missionNameFilter, setMissionNameFilter] = useFilter()
    
    const [
        searchValue, 
        handleSearchValueChange,
        searchInputValue,
        handleSearchInputValueChange
    ] = useSearchInput()

    const [searchField, handleSearchFieldChange] = useSelect(searchFields[0])

    const buildQuery = useCallback((field: string, filter: string | null) => {
        const result = searchField === field && searchValue 
            ? searchValue 
            : filter
        return result
    }, [searchField, searchValue])

    const queryValue = useMemo(() => ({
        rocket_name: buildQuery(ROCKET_NAME, rocketNameFilter),
        rocket_type: buildQuery(ROCKET_TYPE, rocketTypeFilter),
        mission_name: buildQuery(MISSION_NAME, missionNameFilter)
    }), [rocketNameFilter, rocketTypeFilter, missionNameFilter, buildQuery])


    //=================================================================================
    // handlers
    //=================================================================================

    const handleChangePage = (action: 'next' | 'previous') => {
        if (action === 'previous' && currentPage === 1) return

        getLaunches({ 
            variables: { 
                limit: LIMIT, 
                find: queryValue, 
                offset: currentPage * LIMIT 
            } 
        })
        
        action === 'next'
            ? setCurrentPage(prevState => prevState + 1)
            : setCurrentPage(prevState => prevState - 1)
    }

    const handleNextPage = () => handleChangePage('next')

    const handlePreviousPage = () => handleChangePage('previous')

    return (
        <>
            <Grid container rowSpacing={1} sx={{ marginBottom: '20px' }}>
                <Grid item xs={12} md={4}>
                    <Select
                        value={searchField}
                        handleChange={handleSearchFieldChange}
                        list={searchFields}
                        label="Search By"
                    />
                </Grid>
                <Grid item xs={12} md={8}>
                    <SearchInput 
                        value={searchValue}
                        handleValueChange={handleSearchValueChange}
                        inputValue={searchInputValue}
                        handleInputValueChange={handleSearchInputValueChange}
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default Home;