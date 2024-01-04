import './index.css';
import EditIcon from '../../../../public/icons/edit-green.svg';
import Image from 'next/image';
export const Change = () => {
    return (
        <>
            <Image className="change_icon" src={EditIcon} width={18} height={18} alt="Icon" />
        </>
    );
};
