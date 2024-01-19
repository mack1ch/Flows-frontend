import { FlowsListHeader } from '@/shared/ui/pageHeaders-slice/flowsList'
import styles from './ui.module.scss'
import { useEffect, useState } from 'react';

import { Articles } from '@/features/news-slice/articles';
import { IFlow } from '@/shared/interface/flow';
import { getFlows } from '../api';

export const NewsViewScreen = () => {
    const [flows, setFlows] = useState<IFlow[]>([] as IFlow[]);
    useEffect(() => {
        const GetFlows = async () => {
            const fetchFlows: IFlow[] | Error = await getFlows();
            if (fetchFlows instanceof Error) return
            else {
                setFlows(fetchFlows)
            }
        };
        GetFlows();
    }, []);
    return (<>
        <div className={styles.layout}>



            <Articles />
        </div>
    </>)
} /*
<FlowsListHeader
    onSort={setFlows}
    searchItemsArray={flows}
    filterName="Статус заявки"
    title="Лента"
    onSearch={(searchText) => {
        if (searchText) {
            const filteredArray = flows.filter((item) =>
                item.name.toLowerCase().includes(searchText.toLowerCase()),
            );
            setFlows(filteredArray);
        } else {
            setFlows(flows);
        }
    }}
/>*/