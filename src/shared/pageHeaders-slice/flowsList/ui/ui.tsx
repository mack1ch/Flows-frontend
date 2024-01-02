'use client ';

import { Filter } from '@/shared/icons/filter';
import { Plus } from '@/shared/icons/plusWhite';
import styles from './ui.module.scss';
import type { MenuProps, ThemeConfig } from 'antd';
import { AutoComplete, Button, ConfigProvider, Dropdown, Space } from 'antd';
import { useState } from 'react';
import { getPanelValue } from '../model';

export const FlowsListHeader = ({
    id,
    title,
}: /**
 * 	Элементы, по которым необходимо сортировать
 */
// items,
{
    id?: number;
    title: string;
    // items?: MenuProps['items'];
}) => {
    const [inputValue, setInputValue] = useState('');
    const [options, setOptions] = useState<{ value: string }[]>([]);
    return (
        <section className={styles.section} key={id}>
            <h1 className={styles.title}>{title}</h1>
            <Space size="middle" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                <ConfigProvider theme={groupComponentTheme}>
                    <Space.Compact>
                        {items && (
                            <Dropdown menu={{ items }} placement="bottomLeft">
                                <Button size="large">
                                    <Space>
                                        <Filter />
                                        Сортировка
                                    </Space>
                                </Button>
                            </Dropdown>
                        )}
                        <AutoComplete
                            value={inputValue}
                            options={options}
                            onChange={setInputValue}
                            placeholder="Найти по названию"
                            style={{ width: '242px' }}
                            onSearch={(text) => setOptions(getPanelValue(text))}
                            size="large"
                        />
                    </Space.Compact>
                </ConfigProvider>
                <ConfigProvider theme={createFlowButtonTheme}>
                    <Button size="large">
                        <Space>
                            <Plus />
                            Создать заявку
                        </Space>
                    </Button>
                </ConfigProvider>
            </Space>
        </section>
    );
};

const groupComponentTheme: ThemeConfig = {
    components: {
        Button: {
            defaultBg: '#73AE62',
            colorText: '#fff',
            colorBorder: '#73AE62',
            colorPrimaryHover: '#ebebeb',
            colorPrimaryActive: '#ebebeb',
        },
        Select: {
            colorPrimaryHover: '#73AE62',
            colorPrimary: '#73AE62',
        },
    },
};

const createFlowButtonTheme: ThemeConfig = {
    components: {
        Button: {
            defaultBg: '#449429',
            colorText: '#fff',
            colorPrimaryHover: '#ebebeb',
            colorPrimaryActive: '#ebebeb',
        },
    },
};

const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                1st menu item
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                2nd menu item
            </a>
        ),
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                3rd menu item
            </a>
        ),
    },
];
