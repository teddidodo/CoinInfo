import logo from './logo.svg';
import './App.css';
import SwapCard from './components/SwapCard';
// import FloatButtonChart from './components/FloatButton';
import { FloatButton, Modal } from 'antd';
import { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
function App() {
  const [open, setOpen] = useState(false);

  const data = [
    {
      "name": "Page A",
      "uv": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "Page B",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "Page C",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "Page D",
      "uv": 2780,
      "pv": 3908,
      "amt": 2000
    },
    {
      "name": "Page E",
      "uv": 1890,
      "pv": 4800,
      "amt": 2181
    },
    {
      "name": "Page F",
      "uv": 2390,
      "pv": 3800,
      "amt": 2500
    },
    {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    }
  ]
  return (
    <div className="App">
      <SwapCard />
      {/* <FloatButtonChart /> */}
      <FloatButton onClick={() => setOpen(true)} />
      <Modal
        title='Ethereum Exchange Rate'
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={'100%'}
      >
        
        <p>Last updated: Sept 20, 2023 </p>
        <ResponsiveContainer width='100%' height={400}>
          <AreaChart data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            {/* <ReferenceLine x="Page C" label="Min PAGE" /> */}
            {/* <ReferenceLine y={4000} label="Max" strokeDasharray="3 3" /> */}
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </Modal>
    </div>
  );
}

export default App;
