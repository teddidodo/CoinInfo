import { CaretRightOutlined } from '@ant-design/icons';
import React from 'react';
import { Collapse, theme, Divider, Typography } from 'antd';
const { Text } = Typography
const { Panel } = Collapse;
const InfoCollapse = () => {
    const { token } = theme.useToken();
    const panelStyle = {
        background: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
    };
    return (
        <Collapse
            bordered={false}
            defaultActiveKey={['1']}
            expandIconPosition='right'
            expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 270 : 90} />}
            style={{
                background: token.colorBgContainer,
                textAlign: 'left'
            }}
        //   items={getItems(panelStyle)}
        >
            <Panel style={panelStyle} header="You get 0.00824 BTC for $300.0"
                key="1">
                <Divider />
                <Text>0.00825 BTC @ €35,106.72 €289.61
                </Text>
                


                <div>
                <Text>Network fee €6.40
                </Text>
                </div>
                <Text>Processing fee as low as €3.99
                </Text>
            </Panel>
        </Collapse>
    );
};
export default InfoCollapse;