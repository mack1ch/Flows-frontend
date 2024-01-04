import './index.css';
import ShowHistoryIcon from '../../../../public/icons/arrow-right-grey.svg';
import Image from 'next/image';
export const ShowHistory = () => {
    return (
        <>
            <Image
                className="showHistory_icon"
                src={ShowHistoryIcon}
                width={18}
                height={18}
                alt="Icon"
            />
        </>
    );
};
