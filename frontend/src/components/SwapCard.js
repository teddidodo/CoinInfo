import React, { useState } from 'react';
import { Card, Row, Col, Image } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import ExchangeForm from './ExchangeForm';

const tabListNoTitle = [
    { key: 'Buy', label: 'Buy' }, { key: 'Sell', label: 'Sell' }, { key: 'Swap', label: 'Swap' }
];
const contentListNoTitle = {
    Buy:  <ExchangeForm />
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
