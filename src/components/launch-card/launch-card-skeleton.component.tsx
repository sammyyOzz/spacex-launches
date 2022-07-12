import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export function LaunchCardSkeleton() {

    return (
        <Stack spacing={2} direction="row" sx={{ marginBottom: '25px'}}>
            <Stack sx={{ width: '30%' }}>
                <Skeleton variant="rectangular"  height={95} />
            </Stack>
            <Stack spacing={1} sx={{ width: '70%' }}>
                <Skeleton variant="text" height={22} />
                <Skeleton variant="text" height={22} sx={{ width: '40%'}} />
                <Skeleton variant="text" height={22} sx={{ width: '75%'}} />
            </Stack>
        </Stack>
    );
}
