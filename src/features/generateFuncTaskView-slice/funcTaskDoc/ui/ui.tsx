import rehypeHighlight from 'rehype-highlight'
import styles from './ui.module.scss'
import Markdown from 'react-markdown'
import { Modal } from 'antd';

export const FuncTaskDoc = ({ document, isModalOpen = false, setModalOpen }: { document: string; isModalOpen: boolean; setModalOpen: (arg: boolean) => void }) => {

    return (<>
        <Modal
            centered
            title={<h1>Сгенерированный документ</h1>}
            open={isModalOpen}
            onOk={() => setModalOpen(false)}
            onCancel={() => setModalOpen(false)}
            width='100%'>
            <div className={styles.layout}>
                <p className={styles.document}>
                    <Markdown rehypePlugins={[rehypeHighlight]}>{document}</Markdown>
                </p>
            </div>
        </Modal>
    </>)
}