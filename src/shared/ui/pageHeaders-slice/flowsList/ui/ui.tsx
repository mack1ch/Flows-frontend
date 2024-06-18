'use client ';

import { Filter } from '@/shared/ui/icons/filter';
import { Plus } from '@/shared/ui/icons/plusWhite';
import styles from './ui.module.scss';
import type { MenuProps, ThemeConfig } from 'antd';
import { AutoComplete, Button, ConfigProvider, Dropdown, Flex, Space } from 'antd';
import { useEffect, useState } from 'react';
import { mapFlowTableItemsToMenuArray, sortFlowTableItems } from '../model';
import Link from 'next/link';
import { useWindowSize } from '@/shared/hooks/useWindowSize';
import { IFlow, IFlowStatus } from '@/shared/interface/flow';

export const FlowsListHeader = ({
    id,
    title,
    filterName,
    searchItemsArray,
    filterItemsArray,
    onSort,
    onSearch,
    setFlowStatusChoise,
}: {
    id?: number;
    title: string;
    filterName: string;
    searchItemsArray: IFlow[];
    filterItemsArray: IFlowStatus[];
    setFlowStatusChoise?: (flowStatusChoiseID: string[]) => void | undefined;
    onSort: (sortedArray: IFlow[]) => void;
    onSearch: (searchText: string) => void;
}) => {
    const [inputValue, setInputValue] = useState('');
    const [options, setOptions] = useState<{ value: string }[]>([]);
    const { width, height } = useWindowSize();
    const [items, setItems] = useState<MenuProps['items']>([]);
    const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

    useEffect(() => {
        onSearch(inputValue);
    }, [inputValue, onSearch]);
    useEffect(() => {
        const sortedArray = sortFlowTableItems(searchItemsArray, 'id');
        onSort(sortedArray);
    }, [searchItemsArray, onSort]);
    useEffect(() => {
        setItems(mapFlowTableItemsToMenuArray(filterItemsArray));
    }, [filterItemsArray]);
    const handleMenuClick: MenuProps['onClick'] = (e) => {
        const key = e.key;
        let newSelectedKeys;
        if (selectedKeys.includes(key)) {
            newSelectedKeys = selectedKeys.filter((selectedKey) => selectedKey !== key);
        } else {
            newSelectedKeys = [...selectedKeys, key];
        }
        setSelectedKeys(newSelectedKeys);
        setFlowStatusChoise && setFlowStatusChoise(newSelectedKeys);
    };

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
                        <Link href="/flows/choice">
                            <Button type="primary" size="large">
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
                            {items && setFlowStatusChoise && (
                                <Dropdown
                                    menu={{
                                        items,
                                        selectable: true,
                                        defaultSelectedKeys: undefined,
                                        selectedKeys: selectedKeys,
                                        onClick: handleMenuClick,
                                    }}
                                    placement="bottomLeft">
                                    <Button type="primary" size="large">
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
                        <Link href="/flows/choice">
                            <Button type="primary" size="large">
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
            colorPrimary: '#73AE62',
            colorText: '#fff',
            colorPrimaryHover: '#449429',
        },
        Select: {
            colorPrimaryHover: '#73AE62',
            colorPrimary: '#73AE62',
        },
        Dropdown: {
            colorPrimary: '#73AE62',
            controlItemBgActive: '#D6ECDB',
            controlItemBgActiveHover: '#D6ECDB',
        },
    },
};

const createFlowButtonTheme: ThemeConfig = {
    components: {
        Button: {
            colorPrimary: '#73AE62',
            colorText: '#fff',
            colorPrimaryHover: '#449429',
        },
    },
};
