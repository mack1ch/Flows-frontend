import { Form, Select } from 'antd';

const { Option } = Select;

export const prefixSelector = (
    <Form.Item name="prefix" noStyle>
        <Select style={{ width: 70 }}>
            <Option value="7">+7</Option>
            <Option value="9">8</Option>
        </Select>
    </Form.Item>
);
