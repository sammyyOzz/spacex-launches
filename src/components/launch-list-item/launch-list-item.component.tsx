import { LaunchGroup } from '../../types'
import { LaunchCard } from '../launch-card/launch-card.component'
import './launch-list-item.styles.css'


export function LaunchListItem({ date, items }: LaunchGroup) {

    return (
        <div className="launch-list-item">
            <div className="launch-list-item__date">
                <span>{date}</span>
            </div>
            { items?.map(item =>  <LaunchCard key={item.id} { ...item } /> )}
        </div>
    )
}