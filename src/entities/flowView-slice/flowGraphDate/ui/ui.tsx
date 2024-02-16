import { parseTimeToRuFormat } from '@/shared/lib/parse/time';
import styles from './ui.module.scss';
import { parseDateToTextFormat } from '@/shared/lib/parse/date';
export const FlowGraphDate = ({ date }: { date: Date }) => {
    const parseDate = parseDateToTextFormat(date);
    const parseTime = parseTimeToRuFormat(date);
    return (
        <>
            <h5 className={styles.graphDate}>
                {parseDate} {parseTime}
            </h5>
        </>
    );
};
