import React, { useState } from 'react';
import { Card, Row, Col, Image, Button, Checkbox, Form, Input, Typography, Space, InputNumber } from 'antd'
import { MenuOutlined, LockOutlined, UserOutlined, ArrowRightOutlined, DownOutlined } from '@ant-design/icons'
import InfoCollapse from './InfoCollapse';
const tabListNoTitle = [
    { key: 'Buy', label: 'Buy' }, { key: 'Sell', label: 'Sell' }, { key: 'Swap', label: 'Swap' }
];

const { Title, Text } = Typography;
const onFinish = (values) => {
    console.log('Received values of form: ', values);
};
const contentListNoTitle = {

    Buy:
        <>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                    ]}>

                    <InputNumber style={{ paddingTop: '2%', height: '50px', width: '100%' }} controls={false} suffix={<Button>ETH <DownOutlined /></Button>} />

                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <InputNumber style={{ paddingTop: '2%', height: '50px', width: '100%' }} controls={false} suffix={<Button>ETH <DownOutlined /></Button>} />
                </Form.Item>
                <Form.Item>
                    <InfoCollapse />
                    <p style={{fontSize: '12px'}}>Quote updates in 5s</p>
    </Form.Item>

                <Form.Item>
                    <Button type="primary" style={{ width: '100%', marginBottom: '3%' }} shape='round'>
                        Continue
                        <ArrowRightOutlined />
                    </Button>
                    <Text type='secondary'>
                        By continuing you agree to our cookie policy.
                    </Text>
                </Form.Item>
            </Form>
        </>
}

const SwapCard = () => {
    const [activeTabKey2, setActiveTabKey2] = useState('app');
    const onTab2Change = (key) => {
        setActiveTabKey2(key);
    };
    return (
        <>
            <Row justify="center" align="top">
                <Col span={12}>
                    <div style={{ marginTop: '3%', marginBottom: '1%' }}>
                        <Image src='https://media.licdn.com/dms/image/D560BAQH3JRMy9Iwxog/company-logo_200_200/0/1690022679820/saola_labs_logo?e=2147483647&v=beta&t=TWh92AVpS5d68pQFL5qBVG3PPssTkjCGKV1ZP_MwCOg' width='11%' />
                    </div>
                    <Card
                        style={{ width: '60%', marginLeft: '20%' }}
                        tabList={tabListNoTitle}
                        activeTabKey={activeTabKey2}
                        tabBarExtraContent={<MenuOutlined />}
                        onTabChange={onTab2Change}
                    >
                        {contentListNoTitle[activeTabKey2]}
                    </Card>
                </Col>
            </Row>

        </>
    );
};

export default SwapCard;