import React from 'react'
import './list-launches.styles.css'
import { groupByDate } from "../../helpers"
import { LaunchListItem } from '../launch-list-item/launch-list-item.component'
import { Launch } from '../../types'


export const ListLaunches = React.memo(({ launches }: { launches: Launch[] }) => {
    const groupedLaunches = groupByDate(launches)

    return (
        <div>
            { groupedLaunches.map(launch => (
                <LaunchListItem key={launch.date} { ...launch } />
            ))}
        </div>
    )
})