import requests
import os
from dotenv import load_dotenv
from fastapi import FastAPI, Response, status, HTTPException, Depends
from starlette.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from database import get_db
import model

load_dotenv()

app = FastAPI()
#: Configure CORS
origins = [
    "http://localhost:3000/",
    "https://top-news-td.vercel.app",
    "https://top-news-hck015lyd-teddidodo.vercel.app/"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



@app.get("/exchange_rate/eth")
async def get_btc_exchange_rate(db: Session = Depends(get_db)):
    url = os.environ.get('COIN_API') + "exchange_rates"
    params = {'id': 'eth'}
    response = requests.get(url, params=params)
    if response.status_code != 200:
        raise HTTPException(status_code=response.status_code, detail="Failed to fetch data")
    
    data = response.json()
    eth_exchange_rate = {}
    for item in data['rates']:
        if item == 'eth':
            eth_exchange_rate = data['rates'][item] 

    new_rate = {'coin': 'ETH', 'rate': eth_exchange_rate['value']}
    new_rate = model.ExchangeRate(**new_rate)
    db.add(new_rate)
    db.commit()
    db.refresh(new_rate)

    return {'rate': eth_exchange_rate}

@app.get("/eth-price")
async def get_eth_price():
    url = os.environ.get('COIN_API') + 'coins/markets?vs_currency=usd&ids=ethereum'
    headers = {
        'Content-Type': 'application/json'
    }

    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        return {"eth_price": response.json()}
    else:
        raise HTTPException(status_code=response.status_code, detail="Failed to fetch data")
    