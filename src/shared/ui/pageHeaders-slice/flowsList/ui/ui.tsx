'use client ';

import { Filter } from '@/shared/ui/icons/filter';
import { Plus } from '@/shared/ui/icons/plusWhite';
import styles from './ui.module.scss';
import type { MenuProps, ThemeConfig } from 'antd';
import { AutoComplete, Button, ConfigProvider, Dropdown, Flex, Space } from 'antd';
import { useEffect, useState } from 'react';
import { IFlowTableItems } from '@/shared/interface/flow';
import { mapFlowTableItemsToMenuArray, sortFlowTableItems } from '../model';
import Link from 'next/link';
import { useWindowSize } from '@/shared/hooks/useWindowSize';

export const FlowsListHeader = ({
    id,
    title,
    filterName,
    searchItemsArray,
    onSort,
    onSearch,
}: {
    id?: number;
    title: string;
    filterName: string;
    searchItemsArray: IFlowTableItems[];
    onSort: (sortedArray: IFlowTableItems[]) => void;
    onSearch: (searchText: string) => void;
}) => {
    const [inputValue, setInputValue] = useState('');
    const [options, setOptions] = useState<{ value: string }[]>([]);
    const { width, height } = useWindowSize();
    const [items, setItems] = useState<MenuProps['items']>(
        mapFlowTableItemsToMenuArray(searchItemsArray),
    );
    useEffect(() => {
        onSearch(inputValue);
    }, [inputValue, onSearch]);
    useEffect(() => {
        const sortedArray = sortFlowTableItems(searchItemsArray, 'id');
        onSort(sortedArray);
    }, [searchItemsArray, onSort]);
    return (
        <section className={styles.section} key={id}>
            {width < 768 ? (
                <ConfigProvider theme={createFlowButtonTheme}>
                    <div
                        style={{
                            display: 'flex',
                            width: '100%',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}>
                        <h1 className={styles.title}>{title}</h1>
                        <Link href="/flows/create">
                            <Button size="large">
                                <Space>
                                    <Plus />
                                    Создать заявку
                                </Space>
                            </Button>
                        </Link>
                    </div>
                </ConfigProvider>
            ) : (
                <h1 className={styles.title}>{title}</h1>
            )}
            <Space size="middle" className={styles.headManager}>
                <ConfigProvider theme={groupComponentTheme}>
                    {width > 420 ? (
                        <Space.Compact>
                            {items && (
                                <Dropdown
                                    menu={{
                                        items,
                                        selectable: true,
                                        defaultSelectedKeys: undefined,
                                    }}
                                    placement="bottomLeft">
                                    <Button size="large">
                                        <Space>
                                            <Filter />
                                            {filterName}
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
                                onSearch={(text) => setInputValue(text)}
                                size="large"
                            />
                        </Space.Compact>
                    ) : (
                        <AutoComplete
                            value={inputValue}
                            options={options}
                            onChange={setInputValue}
                            placeholder="Найти по названию"
                            style={{ minWidth: '320px' }}
                            onSearch={(text) => setInputValue(text)}
                            size="large"
                        />
                    )}
                </ConfigProvider>
                <ConfigProvider theme={createFlowButtonTheme}>
                    {width > 768 && (
                        <Link href="/flows/create">
                            <Button size="large">
                                <Space>
                                    <Plus />
                                    Создать заявку
                                </Space>
                            </Button>
                        </Link>
                    )}
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
        Dropdown: {
            colorPrimary: '#449429',
            controlItemBgActive: '#D6ECDB',
            controlItemBgActiveHover: '#D6ECDB ',
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
