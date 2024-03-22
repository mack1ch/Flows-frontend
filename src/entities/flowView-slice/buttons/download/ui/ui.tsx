'use client';

import { IFlow } from '@/shared/interface/flow';
import { Download } from '@/shared/ui/icons/download';
import { Button, ConfigProvider, Space, ThemeConfig } from 'antd';
import { useEffect, useState } from 'react';
import { getFlowByID } from '../api';
import Link from 'next/link';
import { isURL } from '@/shared/lib/parse/link';

export const DownloadButton = ({ flowID }: { flowID: number }) => {
    const [viewFlowData, setFlowData] = useState<IFlow>({} as IFlow);
    useEffect(() => {
        const GetFlowByID = async () => {
            const fetchFlowByID: IFlow | Error = await getFlowByID(flowID);
            if (fetchFlowByID instanceof Error) return;
            else {
                setFlowData(fetchFlowByID);
            }
        };

        GetFlowByID();
    }, []);

    return (
        <>
            {isURL(viewFlowData.documentLink) ? (
                <ConfigProvider theme={downloadButtonTheme}>
                    <Link
                        href={viewFlowData.documentLink ? viewFlowData.documentLink : ''}
                        download={viewFlowData.document}>
                        <Button size="large" type="text">
                            <Space>
                                <Download />
                                Скачать
                            </Space>
                        </Button>
                    </Link>
                </ConfigProvider>
            ) : undefined}
        </>
    );
};

const downloadButtonTheme: ThemeConfig = {
    components: {
        Button: {
            colorText: '#74757A',
        },
    },
};
