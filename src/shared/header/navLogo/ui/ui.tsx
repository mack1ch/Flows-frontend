import Image from 'next/image';
import styles from './ui.module.scss';
import ProductLogo from '../../../../../public/assets/productLogo.svg';
export const NavLogo = () => {
    return (
        <>
            <div className={styles.layout}>
                <Image src={ProductLogo} width={210} height={37} alt="Inverse Заявки" />
            </div>
        </>
    );
};
