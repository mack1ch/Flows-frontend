import styles from './ui.module.scss';
import Eye from '../../../../../../public/icons/eye-grey.svg';
import HeartGrey from '../../../../../../public/icons/heart-grey.svg';
import HeartRed from '../../../../../../public/icons/heart-red.svg';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { IPost } from '@/shared/interface/post';
import { postLike } from '../api';
import { message } from 'antd';
export const LikesAndViews = ({ post, isLiked = false }: { post: IPost; isLiked: boolean }) => {
    const [isLike, setLike] = useState(isLiked);
    const [messageApi, contextHolder] = message.useMessage();
    const [viewsCount, setViewsCount] = useState<number>(post.views || 0);
    const [likeCount, setLikeCount] = useState<number>(post.likes || 0);
    useEffect(() => {
        setViewsCount(post.views);
        setLikeCount(post.likes);
    }, [post]);
    useEffect(() => {
        setLike(isLiked);
    }, [isLiked]);
    const handleLike = async () => {
        if (!isLike) {
            try {
                const response = await postLike(post.id);
                if (!(response instanceof Error)) {
                    setLikeCount((prev) => prev + 1);
                    setLike(!isLike);
                } else throw new Error();
            } catch (error) {
                messageApi.open({
                    type: 'error',
                    content: 'Произошла ошибка на сервере, мы уже работаем над решением проблемы',
                });
            }
        } else {
            try {
                const response = await postLike(post.id);
                if (!(response instanceof Error)) {
                    setLikeCount((prev) => prev - 1);
                    setLike(!isLike);
                } else throw new Error();
            } catch (error) {
                messageApi.open({
                    type: 'error',
                    content: 'Произошла ошибка на сервере, мы уже работаем над решением проблемы',
                });
            }
        }
    };
    return (
        <>
            {contextHolder}
            <div className={styles.layout}>
                <span className={styles.item}>
                    <Image src={Eye} width={14} height={14} alt="Количество просмотров" />
                    <p className={styles.text}>{viewsCount}</p>
                </span>
                <button onClick={handleLike} className={styles.like}>
                    {isLike ? (
                        <Image src={HeartRed} width={14} height={14} alt="Лайки" />
                    ) : (
                        <Image src={HeartGrey} width={14} height={14} alt="Лайки" />
                    )}
                    <p style={{ color: isLike ? '#FF5A49' : undefined }} className={styles.text}>
                        {likeCount}
                    </p>
                </button>
            </div>
        </>
    );
};
