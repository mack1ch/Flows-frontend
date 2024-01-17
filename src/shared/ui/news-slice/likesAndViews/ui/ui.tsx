import styles from './ui.module.scss'
import Eye from '../../../../../../public/icons/eye-grey.svg';
import HeartGrey from '../../../../../../public/icons/heart-grey.svg';
import HeartRed from '../../../../../../public/icons/heart-red.svg';
import Image from 'next/image';
import { useState } from 'react';
export const LikesAndViews = () => {
    const [isLike, setLike] = useState(false);
    const [likeCount, setLikeCount] = useState<number>(256);
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
                    <p className={styles.text}>134</p>
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