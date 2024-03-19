import { ICreateCommerceForm } from '@/shared/interface/flowsCreateForm';

export const RequestFields: (keyof ICreateCommerceForm)[] = [
    'address',
    'city',
    'description',
    'flowTarget',
    'material',
    'flowType',
    'title',
    'problem',
];

export const checkboxFlowTargetValues = [
    'Увеличение товарооборота',
    'Улучшение сервиса',
    'Узнаваемость бренда',
    'Снижение операционной нагрузки на магазине',
    'Проблема с системой учета',
    'Улучшение доставки',
    'Проблема с оборудованием (ломается)',
];
