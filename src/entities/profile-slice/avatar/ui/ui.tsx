'use client';

import Image from 'next/image';
import styles from './ui.module.scss';
import Avatar from '../../../../../public/icons/avatar-black.svg';
import Edit from '../../../../../public/icons/edit-white.svg';
import { useEffect, useRef, useState } from 'react';
import { postAvatar } from '../api';

export const UserAvatar = ({ avatarLink }: { avatarLink?: string }) => {
    const [avatar, setAvatar] = useState<string | null>(avatarLink || null);
    const filePicker = useRef<HTMLInputElement | null>(null);
    async function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.files && event.target.files.length > 0) {
            const formData = new FormData();
            formData.append('file', event.target.files[0]);
            const postAvatarRes = await postAvatar(formData);
            if (postAvatarRes instanceof Error) {
                return;
            } else {
                setAvatar(URL.createObjectURL(event.target.files[0]));
            }
        }
    }
    function handlePick() {
        if (filePicker.current) {
            filePicker.current.click();
        }
    }
    useEffect(() => {
        if (typeof avatarLink === 'undefined') return;
        setAvatar(avatarLink);
    }, [avatarLink]);
    return (
        <>
            <article
                className={styles.avatar}
                onClick={handlePick}
                style={{
                    backgroundImage: `url(${avatar ? avatar : Avatar.src})`,
                }}>
                <input
                    ref={filePicker}
                    accept="image/*"
                    className={styles.inputHidden}
                    type="file"
                    onChange={handleChange}
                />
                <span className={styles.edit}>
                    <Image className={styles.img} src={Edit} alt="Edit" width={64} height={64} />
                </span>
            </article>
        </>
    );
};
