import { useCallback, useEffect, useMemo, useState } from 'react';
import './home.styles.css';

import { useLazyQuery } from "@apollo/client";
import { SPACEX_QUERY } from "../../graphql";

import { useFilter } from '../../hooks/use-filter.hook';
import { useSearchInput } from '../../hooks/use-search-input.hook';
import { useSelect } from '../../hooks/use-select.hook';

import { MISSION_NAME, ROCKET_NAME, ROCKET_TYPE, searchFields } from '../../utils/constants';

import { Button, Divider, Grid, Stack } from '@mui/material';

import { Select } from '../../components/select/select.component';
import { SearchInput } from '../../components/search-input/search-input.component';
import { Filter } from '../../components/filter/filter.component';
import { RenderLaunches } from '../../components/render-launches/render-launches.component';
import { ListLaunches } from '../../components/list-launches/list-launches.component';


const LIMIT = 10

function Home() {
    //=================================================================================
    // graphql
    //================================================================================= 

    const [getLaunches, { data, loading, error }] = useLazyQuery(SPACEX_QUERY);

    //=================================================================================
    // state
    //================================================================================= 
    
    const [currentPage, setCurrentPage] = useState(1)

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

    //=================================================================================
    // hooks
    //=================================================================================  
    
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


    useEffect(() => {
        getLaunches({ variables: { limit: LIMIT, find: queryValue } })
    }, [getLaunches, queryValue])

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

            <Stack 
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 3 }}
                divider={<Divider orientation="vertical" flexItem />}
                className="home__filter-stack"
            >
                <Stack direction="row" spacing={1}>
                    <Filter 
                        label="Falcon 9" 
                        filter={rocketNameFilter} 
                        handleClick={setRocketNameFilter} 
                    />
                    <Filter 
                        label="Falcon 1" 
                        filter={rocketNameFilter} 
                        handleClick={setRocketNameFilter} 
                    />
                    <Filter 
                        label="Falcon Heavy" 
                        filter={rocketNameFilter} 
                        handleClick={setRocketNameFilter} 
                    />
                </Stack>

                <Stack direction="row" spacing={1}>
                    <Filter 
                        label="v1.1" 
                        filter={rocketTypeFilter} 
                        handleClick={setRocketTypeFilter} 
                    />
                    <Filter 
                        label="FT" 
                        filter={rocketTypeFilter} 
                        handleClick={setRocketTypeFilter} 
                    />
                    <Filter 
                        label="Merlin A" 
                        filter={rocketTypeFilter} 
                        handleClick={setRocketTypeFilter} 
                    />
                </Stack>

                <Stack direction="row" spacing={1}>
                    <Filter 
                        label="CASSIOPE" 
                        filter={missionNameFilter} 
                        handleClick={setMissionNameFilter} 
                    />
                    <Filter 
                        label="FalconSat" 
                        filter={missionNameFilter} 
                        handleClick={setMissionNameFilter} 
                    />
                    <Filter 
                        label="Jason 3" 
                        filter={missionNameFilter} 
                        handleClick={setMissionNameFilter} 
                    />
                </Stack>
            </Stack>

            <RenderLaunches loading={loading} error={error}>
                { data?.launches?.length === 0
                    ? <h2>No launches found</h2>
                    : <ListLaunches launches={data?.launches ?? []} />
                }
            </RenderLaunches>

            { data?.launches.length > 0 && (
                <Stack spacing={2} direction="row">
                    <Button variant="outlined" onClick={handlePreviousPage}>Previous</Button>
                    <Button variant="outlined" onClick={handleNextPage}>Next</Button>
                </Stack>
            )}
        </>
    )
}

export default Home;