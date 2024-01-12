import { Checkbox, ConfigProvider, ThemeConfig } from 'antd'
import styles from './ui.module.scss'

export const FormHelpers = () => {
    return (<>
    <ConfigProvider theme={fotmHelpersTheme}>
        <div className={styles.layout}>
            <Checkbox><p className={styles.helperText}>Запомнить меня</p></Checkbox >
            <p className={styles.helperText}>Забыли пароль?</p>
        </div>
        </ConfigProvider>
    </>)
}
const fotmHelpersTheme: ThemeConfig = {
    components:{
        Checkbox:{
            colorPrimary: '#73AE62',
            colorPrimaryHover: '#538A1B',
        }
    }
}