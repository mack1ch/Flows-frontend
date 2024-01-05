import { Input, Space } from 'antd';
import { ReactNode } from 'react';

interface IRequestType {
    value: string | number | null;
    label: string | ReactNode;
}

export const OtherTypeOfRadio = ({
    value,
    onChange,
}: {
    value: string;
    onChange: (value: string) => void;
}) => {
    return (
        <>
            <Space>
                Другое:
                <Input value={value} onChange={(e) => onChange(e.target.value)} />
            </Space>
        </>
    );
};
export const requestTypeData: IRequestType[] = [
    {
        value: 1,
        label: 'Доработка текущего функционала',
    },
    {
        value: 2,
        label: 'Создание и внедрение нового функционала',
    },
];
