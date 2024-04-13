import './index.css';
import BacklogIcon from '../../../../../public/icons/backlog-orange.svg';
import Image from 'next/image';
export const Backlog = () => {
    return (
        <>
            <Image className="backlog_icon" src={BacklogIcon} width={18} height={18} alt="Icon" />
        </>
    );
};
