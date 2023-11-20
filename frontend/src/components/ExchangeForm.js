import React, { useState, useEffect } from 'react';
import { Button, Form, Input, Typography } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'
import InfoCollapse from './InfoCollapse';
import { getPriceETH } from '../api/api'
import AvatarButton from './AvatarButton';
import {convertUSD_ETH, convertETH_USD} from '../utils/calculate'
const { Text } = Typography;

const ExchangeForm = () => {
    const [data, setData] = useState(null)
    const [currency, setCurrency] = useState(300);
    const [coin, setCoin] = useState((300 - 3.99 - 6.4)/1955.64);
    const [error, setError] = useState('')
    const [error2, setError2] = useState('')
    const [countDown, setCountDown] = useState(10)
    const [valueTurn, setValueTurn] = useState(true)
    const validateCurrencyNumber = (e) => {
        let value = e.target.value
        setCurrency(value)
        if (!value) {
            setError('Please type a valid amount > 30$')
            setCoin(0)
            return
        }
        if (value < 30) {
            setError('The minimum purchasable amount is $30 / 0.0115ETH')
            setCoin(0)
            return
        }
        if (value > 11940) {
            setError('The maximum purchasable amount for your account is $11,940')
            setCoin(0)
            return
        }
        setError('')
        setError2('')
        setCountDown(10)
        setValueTurn(true)
        setCoin(convertUSD_ETH(value, data.current_price))
        return
    }

    const validateCoinNumber = (e) => {
        let value = e.target.value
        let newCoinValue = convertETH_USD(value, data.current_price)
        setCoin(value)

        if (!value || value === '0') {
            setError2('Please type a valid amount')
            setCurrency(0)
            return
        }

        if (newCoinValue > 11940) {
            setError2('The maximum purchasable amount for your account is $11,940')
            setCurrency(0)
            return
        }
        setError2('')
        setError('')
        setCountDown(10)
        setValueTurn(false)
        setCurrency(newCoinValue)
        return
    }
    const fetchData = async () => {
        try {
            const newData = await getPriceETH()
            setData(newData.eth);
        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
    }
    useEffect(() => {
        if (countDown === -1) {
            fetchData()
            let newValue;
            if (valueTurn && !error) {
                newValue = convertUSD_ETH(currency, data.current_price)
                setCoin(newValue)
            } else if (valueTurn && error) {
                setCoin(0)
            } else if (!valueTurn && !error2) {
                newValue = convertETH_USD(coin, data.current_price)
                setCurrency(newValue)
            } else if (!valueTurn && error2) {
                setCurrency(0)
            }
            setCountDown(10)
            return;
        }

        const countdownAction = setInterval(() => {
            setCountDown((prevTime) => prevTime - 1);
        }, 1000);

        return () => {
            clearInterval(countdownAction)
        }
    }, [countDown]);

    useEffect(() => {
        fetchData()
    }, []);

    const seconds = countDown % 60;
    return (
        <Form>
            <Form.Item>
                <Input
                    onKeyPress={(e) => {
                        if (!/[0-9.]/.test(e.key)) {
                            e.preventDefault();
                        }
                    }}

                    bordered={false}
                    value={currency}
                    onChange={validateCurrencyNumber}
                    style={inputStyle}
                    controls={false}
                    suffix={
                        <AvatarButton
                            avatar={'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628'}
                            coin={'USD'}
                        />
                    }
                />
            </Form.Item>

            <Form.Item>
                <Input
                    onKeyPress={(e) => {
                        if (!/[0-9.]/.test(e.key)) {
                            e.preventDefault();
                        }
                    }}
                    onChange={validateCoinNumber}
                    value={coin}
                    style={inputStyle}
                    bordered={false}
                    controls={false}
                    suffix={
                        <AvatarButton
                            avatar={'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628'}
                            coin={'ETH'}
                        />
                    }
                />
            </Form.Item>

            <Form.Item style={{ marginBottom: '4%' }}>
                {(!error2 && !error) && <InfoCollapse coin={coin} currency={currency}  current_price={data?.current_price}/>}
                {(!error2 && !error) && <p style={{ fontSize: '12px' }}>Quote updates in {`${seconds.toString().padStart(2)}`}s</p>}
                {valueTurn && error && <p>{error}</p>}
                {!valueTurn && error2 && <p>{error2}</p>}
            </Form.Item>

            <Form.Item>
                <Button type="primary" style={continueButton} shape='round'>
                    Continue
                    <ArrowRightOutlined />
                </Button>
                <Text type='secondary'>
                    By continuing you agree to our <a href=''>cookie policy</a>.
                </Text>
            </Form.Item>
        </Form>
    );
};

const inputStyle = {
    backgroundColor: 'rgba(247, 247, 248, 1)',
    paddingTop: '2%',
    height: '50px',
    width: '100%'
}
const continueButton = { backgroundColor: 'rgba(125, 0, 255, 1)', width: '100%', marginBottom: '3%' }
export default ExchangeForm;