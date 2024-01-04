import './index.css';
import PrintIcon from '../../../../public/icons/printer-grey.svg';
import Image from 'next/image';
export const Print = () => {
    return (
        <>
            <Image className="print_icon" src={PrintIcon} width={18} height={18} alt="Icon" />
        </>
    );
};
