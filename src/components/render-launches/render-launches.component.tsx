import { LaunchCardSkeleton } from '../launch-card/launch-card-skeleton.component'

export interface RenderLaunchesProps {
    children: React.ReactNode;
    loading: boolean;
    error: undefined | object;
}

export function RenderLaunches({ children, loading, error }: RenderLaunchesProps) {

    if (loading) {
        return (
            <>
                { Array<string>(5).fill('').map((_, index) => <LaunchCardSkeleton key={index} />)}
            </>
        )
    }

    if (error) {
        return (
            <h2>Sorry an error occured!</h2>
        )
    }

    return (
        <>{ children }</>
    )
}