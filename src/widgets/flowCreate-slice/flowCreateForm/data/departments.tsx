import { Input, Space } from 'antd';
import { ReactNode } from 'react';

interface IDepartments {
    value: string | number | null;
    label: string | ReactNode;
}

export const OtherDepartments = ({
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
export const departmentsData: IDepartments[] = [
    {
        value: 1,
        label: 'Бухгалтерия',
    },
    {
        value: 2,
        label: 'Колл-центр и забота о клиентах',
    },
];
