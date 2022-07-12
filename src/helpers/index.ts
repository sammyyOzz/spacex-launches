import { Launch, LaunchGroup } from "../types";

export const groupByDate = (data: Array<Launch>) => {
    
    const groups = data.reduce((groups: any, item: any) => {
        const date = item.launch_date_local.split('T')[0];
        if (!groups[date]) {
            groups[date] = [];
        }
        groups[date].push(item);
        return groups;
    }, {});

    const groupArrays: LaunchGroup[] = Object.keys(groups).map((date) => {
        return {
            date,
            items: groups[date]
        };
    });

    return groupArrays
}
