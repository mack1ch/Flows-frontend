import './index.css';
import DownloadIcon from '../../../../public/icons/arrowLineDown-grey.svg';
import Image from 'next/image';
export const Download = () => {
    return (
        <>
            <Image className="download_icon" src={DownloadIcon} width={18} height={18} alt="Icon" />
        </>
    );
};
