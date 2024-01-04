import './index.css';
import DeleteIcon from '../../../../public/icons/delete-red.svg';
import Image from 'next/image';
export const Delete = () => {
    return (
        <>
            <Image className="delete_icon" src={DeleteIcon} width={18} height={18} alt="Icon" />
        </>
    );
};
