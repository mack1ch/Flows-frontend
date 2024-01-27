'use client';


import { PostViewScreen } from '@/screens/postView';

export default function FlowView({ params }: { params: { id: number } }) {
    return (
        <>
            <PostViewScreen id={params.id}/>
        </>
    );
}
