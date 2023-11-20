import React from 'react';
import { FloatButton, Modal } from 'antd';
import { useState } from 'react';
import Chart from '../components/Chart';
const ChartModal = () => {
    const [open, setOpen] = useState(false);
    const time = String(
        new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
        + ', '
        + new Date().toLocaleDateString([], { day: 'numeric', month: 'numeric', year: 'numeric' })
    )
    return (
        <>
            <FloatButton onClick={() => setOpen(true)} />
            <Modal
                title='Ethereum Exchange Rate'
                centered
                open={open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                width={'100%'}
            >
                <p>Last updated: {time}</p>
                <Chart />
            </Modal>
        </>
    )
}



export default ChartModal;