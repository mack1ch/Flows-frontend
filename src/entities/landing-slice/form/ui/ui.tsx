'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './ui.module.scss';

export const Form = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [divHeight, setDivHeight] = useState<number>(200);
    const [formData, setFormData] = useState<{ [key: string]: string }>({
        name: '',
        email: '',
        phone: '',
        companyInfo: '',
    });
    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    useEffect(() => {
        if (ref.current !== null) {
            const height = ref.current.getBoundingClientRect().height;
            setDivHeight(height ? height : 200);
        }
    }, [ref]);

    return (
        <>
            <div className={styles.layout}>
                <h2 id="contact" className={styles.h2}>
                    Связь с нами
                </h2>
                <div className={styles.formLayout}>
                    <form className={styles.form}>
                        <div ref={ref} className={styles.inputs}>
                            <input
                                className={styles.input}
                                placeholder="Как вас зовут?"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                            <input
                                className={styles.input}
                                placeholder="Почта"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                            <input
                                className={styles.input}
                                placeholder="Телефон"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                            />
                        </div>
                        <textarea
                            style={{ height: `${divHeight}px`, resize: 'none' }}
                            className={styles.area}
                            placeholder="Расскажите немного о вашей компании (специфика, размер и т.д.)"
                            name="companyInfo"
                            value={formData.companyInfo}
                            onChange={handleInputChange}
                        />
                    </form>
                    <button className={styles.btn} type="submit">
                        Отправить
                    </button>
                </div>
            </div>
        </>
    );
};
