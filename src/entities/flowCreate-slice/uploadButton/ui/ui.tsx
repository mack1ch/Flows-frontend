import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
import { props } from '../model';

export const UploadButton = () => {
    return (
        <>
            <Upload {...props}>
                <Button icon={<UploadOutlined />}>Добавить материалы</Button>
            </Upload>
        </>
    );
};
