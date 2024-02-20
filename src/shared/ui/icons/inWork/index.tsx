import './index.css';
import SwipeIcon from '../../../../../public/icons/handsSwiperRight-yellow.svg';
import Image from 'next/image';
export const SwipeInWork = () => {
    return (
        <>
            <Image className="swipe_icon" src={SwipeIcon} width={18} height={18} alt="Icon" />
        </>
    );
};
