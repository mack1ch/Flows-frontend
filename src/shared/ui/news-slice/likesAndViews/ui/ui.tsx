import styles from './ui.module.scss'
import Eye from '../../../../../../public/icons/eye-grey.svg';
import HeartGrey from '../../../../../../public/icons/heart-grey.svg';
import HeartRed from '../../../../../../public/icons/heart-red.svg';
import Image from 'next/image';
import { useState } from 'react';
import { IPost } from '@/shared/interface/post';
export const LikesAndViews = ({ post }: { post: IPost }) => {
    const [isLike, setLike] = useState(false);
    const [viewsCount, setViewsCount] = useState<number>(post.views || 0);
    const [likeCount, setLikeCount] = useState<number>(post.likes || 0);
    const handleLike = () => {
        setLike(!isLike);
        if (!isLike) {
            setLikeCount((prev) => prev + 1);
        } else { setLikeCount((prev) => prev - 1) }
    }
    return (
        <>
            <div className={styles.layout}>
                <span className={styles.item}>
                    <Image src={Eye} width={14} height={14} alt='Количество просмотров' />
                    <p className={styles.text}>{viewsCount}</p>
                </span>
                <button onClick={handleLike} className={styles.like}>
                    {
                        isLike ? <Image src={HeartRed} width={14} height={14} alt='Лайки' /> : <Image src={HeartGrey} width={14} height={14} alt='Лайки' />
                    }
                    <p style={{ color: isLike ? '#FF5A49' : undefined }} className={styles.text}>{likeCount}</p>
                </button>
            </div>
        </>)
}