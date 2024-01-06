'use client';

import { CreateFlowScreen } from '@/screens/flows/create';
import Link from 'next/link';

export default function Home() {
    return (
        <>
            <Link
                style={{ textDecoration: 'underline' }}
                href="https://www.youtube.com/watch?v=t1kaSUweJ9E&list=RDMMt1kaSUweJ9E&start_radio=1">
                Слушаю группу ЗВЕРИ
            </Link>
        </>
    );
}
