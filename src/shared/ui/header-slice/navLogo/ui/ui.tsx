import Image from 'next/image';
import styles from './ui.module.scss';
import ProductLogo from '../../../../../../public/assets/inverseFlows.svg';
export const NavLogo = () => {
    return (
        <>
            <div className={styles.layout}>
                <Image priority src={ProductLogo} width={200} height={30} alt="Inverse Заявки" />
            </div>
        </>
    );
};
