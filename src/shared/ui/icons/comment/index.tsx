import './index.css';
import CommentIcon from '../../../../../public/icons/document-text-green.svg';
import Image from 'next/image';
export const Comment = () => {
    return (
        <>
            <Image className="comment_icon" src={CommentIcon} width={18} height={18} alt="Icon" />
        </>
    );
};
