import { Launch } from '../../types'
import { LaunchCardSkeleton } from '../launch-card/launch-card-skeleton.component'

export interface RenderLaunchesProps {
    children: React.ReactNode;
    loading: boolean;
    error: undefined | object;
    launches: Array<Launch>;
}

export function RenderLaunches({ children, loading, error, launches }: RenderLaunchesProps) {

    if (loading) {
        return (
            <>
                { Array<string>(5).fill('').map((_, index) => <LaunchCardSkeleton key={index} />) }
            </>
        )
    }

    if (error) {
        return <h2>Sorry an error occured!</h2>
    }

    if (launches.length === 0) {
        return <h2>No launches found</h2>
    }

    return <>{ children }</>
}