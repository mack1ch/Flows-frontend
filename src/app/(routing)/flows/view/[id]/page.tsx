'use client';

import { FlowViewScreen } from '@/screens/flows/view';

export default function FlowView({ params }: { params: { id: number } }) {
    return (
        <>
            <FlowViewScreen id={params.id}/>
        </>
    );
}
