import './index.css';
import DeleteIcon from '../../../../../public/icons/logout-red.svg';
import Image from 'next/image';
export const Logout = () => {
    return (
        <>
            <Image className="logout_icon" src={DeleteIcon} width={18} height={18} alt="Icon" />
        </>
    );
};
