import { parseDateToTextFormate } from '@/shared/lib/parse/data';
import { parseTimeToRuFormat } from '@/shared/lib/parse/time';
import styles from './ui.module.scss';
export const FlowGraphDate = ({ date }: { date: Date }) => {
    const parseDate = parseDateToTextFormate(date);
    const parseTime = parseTimeToRuFormat(date);
    return (
        <>
            <h5 className={styles.graphDate}>
                {parseDate} {parseTime}
            </h5>
        </>
    );
};
