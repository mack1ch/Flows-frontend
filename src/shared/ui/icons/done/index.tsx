import './index.css';
import DoneIcon from '../../../../../public/icons/doubleChecks-darkGreen.svg';
import Image from 'next/image';
export const Done = () => {
    return (
        <>
            <Image className="done_icon" src={DoneIcon} width={18} height={18} alt="Icon" />
        </>
    );
};
