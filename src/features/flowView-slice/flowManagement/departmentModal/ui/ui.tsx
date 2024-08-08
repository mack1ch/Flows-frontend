import { IDepartment } from '@/shared/interface/user';
import { message, Modal, Select } from 'antd';
import { ReactNode, useState } from 'react';
import { changeDepartment } from '../api';
import { IFlow } from '@/shared/interface/flow';

interface ISelectOption {
    label: string;
    value: ReactNode;
}

export const DepartmentModal = ({
    isOpen,
    setIsOpen,
    departments,
    flow,
}: {
    isOpen: boolean;
    flow?: IFlow;
    departments?: IDepartment[];
    setIsOpen: (arg: boolean) => void;
}) => {
    const departmentsSelect: ISelectOption[] | undefined = departments?.map((department) => ({
        value: department.id,
        label: department.name,
    }));
    const [value, setValue] = useState<number>();
    const handleChangedDepartment = async () => {
        if (value) {
            const res = await changeDepartment(value || 0, flow?.id || 0);
            if (!(res instanceof Error)) {
                message.success('Ответственный успешно назначен');
                setIsOpen(false);
                setValue(undefined);
            } else {
                message.error('Произошла ошибка, попрбуйте ещё раз');
                setIsOpen(false);
                setValue(undefined);
            }
        }
    };
    return (
        <>
            <Modal
                onOk={handleChangedDepartment}
                title="Ответсвенный отдел"
                open={isOpen}
                onCancel={() => setIsOpen(false)}
                centered>
                <Select
                    value={flow ? Number(flow.responsibleDepartment?.id) : value}
                    onChange={(e) => setValue(e)}
                    size="large"
                    style={{ width: '100%' }}
                    options={departmentsSelect}
                />
            </Modal>
        </>
    );
};
