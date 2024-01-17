import { CSSProperties } from 'react'
import styles from './ui.module.scss'
export const NewsTag = ({ text, bg, textColor, style }: { text: string, bg?: CSSProperties['background'], textColor?: CSSProperties['color'], style?: CSSProperties }) => (<>
    <div style={{ ...style, background: bg, color: textColor }} className={styles.tag}>
        #{text}
    </div>
</>)