import {useState, useEffect} from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {getExchangeRateForChart} from '../api/api'

const ChartComponent = () => {
  const [data, setData] = useState([])
  const fetchData = async () => {
    try {
        const exchangeRateData = await getExchangeRateForChart()
        const formattedData = exchangeRateData.map(item => ({
          created_at: new Date(item.created_at).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}) + ' ' + new Date(item.created_at).toLocaleDateString([], {day: 'numeric', month: 'short'}),
          rate: item.rate
        }));

        setData(formattedData);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}
  useEffect(() => {
    fetchData()
  }, []);
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="created_at" />
          <YAxis domain={[18, 19]}/>
          <Tooltip />
          <Area type="monotone" dataKey="rate" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartComponent;
