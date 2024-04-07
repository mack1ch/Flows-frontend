import { RegForm } from '@/features/regForm-slice/regForm';

export default function RegFormScreen({ params }: { params: { id: number } }) {
    return (
        <>
            <RegForm id={params.id} />
        </>
    );
}
