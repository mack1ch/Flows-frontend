import './index.css';
import ApproveIcon from '../../../../../public/icons/approve-orange.svg';
import Image from 'next/image';
export const Approve = () => {
    return (
        <>
            <Image className="approve_icon" src={ApproveIcon} width={18} height={18} alt="Icon" />
        </>
    );
};
