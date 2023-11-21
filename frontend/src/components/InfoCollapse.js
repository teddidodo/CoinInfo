import { CaretRightOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { useState } from 'react';
import {
    Collapse, theme, Row, Col,

    Tooltip
} from 'antd';

const InfoCollapse = ({ coin, currency, current_price }) => {
    const { token } = theme.useToken();
    const [showDivider, setShowDivider] = useState(true)
    const [activeKey, setActiveKey] = useState([]);
    let current_value = (currency - 6.4 - 3.99).toFixed(2)

    const onCollapseChange = (keys) => {
        setActiveKey(keys);
        setShowDivider(!showDivider)
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
                        borderBottom: showDivider ? '1px solid #E0E0E0' : 'none', paddingBottom: '10px'
                    }}>
                    You get <strong>{coin} ETH</strong> for <strong>${current_value}</strong>
                </div>,
            children:
                <>
                    <Row>
                        <Col span={12}>{coin} ETH <span style={{ color: 'grey' }}> @ ${current_price} </span> </Col>
                        <Col span={6} offset={6} style={{ textAlign: 'right' }}>${current_value}</Col>
                    </Row>
                    <Row>
                        <Col span={12}>Network fee
                            <Tooltip title='This is paid to ETH miners'> <InfoCircleOutlined style={{ color: 'grey' }} /> </Tooltip>
                        </Col>
                        <Col span={6} offset={6} style={{ textAlign: 'right' }}>$6.40</Col>
                    </Row>
                    <Row>
                        <Col span={12}>Processing fee <Tooltip title='This is charged by moonpay'> <InfoCircleOutlined style={{ color: 'grey' }} /> </Tooltip></Col>
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
