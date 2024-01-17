import { IUser } from "@/shared/interface/user"
import Link from "next/link"
import styles from './ui.module.scss'
export const CreaterUser = ({ User, href = '/' }: { User?: IUser, href?: string }) => {
    const userFullName: string | undefined = User && User.lastname + ' ' + User.firstname + ' / ' + 'название отдела';
    return (<>
        <Link className={styles.user} href={href}>
            <p className={styles.text}>
                {userFullName || 'Загрузка...'}
            </p>
        </Link>
    </>)
}