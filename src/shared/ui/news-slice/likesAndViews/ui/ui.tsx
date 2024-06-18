import styles from './ui.module.scss';
import SmileySadGrey from '../../../../../../public/icons/smileySad.svg';
import SmileySadGreyRed from '../../../../../../public/icons/smileySad-red.svg';
import HeartGrey from '../../../../../../public/icons/heart-grey.svg';
import HeartRed from '../../../../../../public/icons/heart-red.svg';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { IPost } from '@/shared/interface/post';
import { postLikeOrDislike } from '../api';

import { message } from 'antd';
import { IFlow } from '@/shared/interface/flow';
export const LikesAndViews = ({
    post,

    flow,
}: {
    post?: IPost;
    flow?: IFlow;
}) => {
    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState<boolean>(false);
    const [messageApi, contextHolder] = message.useMessage();
    const [dislikeCount, setDislikeCount] = useState<number>(0);
    const [likeCount, setLikeCount] = useState<number>(0);

    useEffect(() => {
        setLikeCount(post?.likes || flow?.post?.likes || 0);
        setDislikeCount(post?.dislikes || flow?.post?.dislikes || 0);
    }, [post, flow]);
    useEffect(() => {
        setIsLiked(post?.isLiked || flow?.post?.isLiked || false);
        setIsDisliked(post?.isDisliked || flow?.post?.isDisliked || false);
    }, [flow, post]);

    const handleLike = async (type: 1 | 2) => {
        try {
            const response = await postLikeOrDislike(post?.id || flow?.post?.id || 0, type);
            if (!(response instanceof Error)) {
                setLikeCount(response.likes);
                setDislikeCount(response.dislikes);
                setIsLiked(response.isLiked);
                setIsDisliked(response.isDisliked);
            } else throw new Error();
        } catch (error) {
            messageApi.open({
                type: 'error',
                content: 'Произошла ошибка на сервере, мы уже работаем над решением проблемы',
            });
        }
    };

    return (
        <>
            {contextHolder}
            <div className={styles.layout}>
                <button onClick={() => handleLike(1)} className={styles.like}>
                    {isLiked ? (
                        <Image src={HeartRed} width={14} height={14} alt="Лайки" />
                    ) : (
                        <Image src={HeartGrey} width={14} height={14} alt="Лайки" />
                    )}
                    <p style={{ color: isLiked ? '#FF5A49' : undefined }} className={styles.text}>
                        {likeCount}
                    </p>
                </button>
                <button onClick={() => handleLike(2)} className={styles.like}>
                    {isDisliked ? (
                        <Image src={SmileySadGreyRed} width={18} height={18} alt="Дизлвйк" />
                    ) : (
                        <Image src={SmileySadGrey} width={18} height={18} alt="Дизлайк" />
                    )}
                    <p
                        style={{ color: isDisliked ? '#FF5A49' : undefined }}
                        className={styles.text}>
                        {dislikeCount}
                    </p>
                </button>
            </div>
        </>
    );
};
