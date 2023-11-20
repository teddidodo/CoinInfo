import { CaretRightOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Collapse, theme, Row, Col } from 'antd';

const InfoCollapse = ({ coin, currency, current_price }) => {
    const { token } = theme.useToken();
    const [showDivider, setShowDivider] = useState(false)
    const [activeKey, setActiveKey] = useState([]);
    let current_value = (currency - 6.4 - 3.99).toFixed(5)

    const onCollapseChange = (keys) => {
        setActiveKey(keys);
        setShowDivider(keys[0])
    };
    const panelStyle = {
        background: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
    };

    const getItems = (panelStyle) => [
        {
            key: '1',
            label:
                <div
                    style={{
                        borderBottom: showDivider ? '1px solid grey' : 'none', paddingBottom: '10px'
                    }}>
                    You get <strong>{coin}</strong> ETH for ${current_value}
                </div>,
            children:
                <>
                    <Row>
                        <Col span={12}>{coin} ETH @ ${current_price}</Col>
                        <Col span={6} offset={6} style={{ textAlign: 'right' }}>${current_value}</Col>
                    </Row>
                    <Row>
                        <Col span={12}>Network fee</Col>
                        <Col span={6} offset={6} style={{ textAlign: 'right' }}>$6.40</Col>
                    </Row>
                    <Row>
                        <Col span={12}>Processing fee</Col>
                        <Col span={6} offset={6} style={{ textAlign: 'right' }}>as low as $3.99</Col>
                    </Row>
                </>,
            style: panelStyle,
        }
    ];
    return (
        <Collapse
            bordered={false}
            defaultActiveKey={['1']}
            expandIconPosition='end'
            expandIcon={({ isActive }) => {
                return <CaretRightOutlined rotate={isActive ? 270 : 90} />
            }}
            onChange={onCollapseChange}
            style={{
                background: token.colorBgContainer,
                textAlign: 'left'
            }}
            items={getItems(panelStyle)}
        >
        </Collapse>
    );
};
export default InfoCollapse;
