'use client';

import { Comment } from '@/widgets/comment-slice/comment';

export default function FlowComment({ params }: { params: { id: number } }) {
    return (
        <>
            <Comment flowID={params.id} />
        </>
    );
}
