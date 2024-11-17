"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import axios from 'axios';

export default function CryptoList() {
    const [logo, setLogo] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [change, setChange] = useState("");
    const [mc, setMC] = useState("");
  useEffect(() => {
    axios.get("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,SOL&tsyms=USD&api_key=f76a5486d7e0a12c999cbee3866bdb97a44239c3469783ae6e85acc0db67b541")
        .then((res) => {
            setPrice(res.data.DISPLAY.BTC.USD.PRICE);
            setLogo("https://www.cryptocompare.com"+res.data.DISPLAY.BTC.USD.IMAGEURL);
            setName(res.data.RAW.BTC.USD.FROMSYMBOL);
            setChange(res.data.DISPLAY.BTC.USD.CHANGEPCT24HOUR+"%");
            setMC(res.data.DISPLAY.BTC.USD.MKTCAP);
        })
  }, []);
  return (
    <div className="rounded-xl flex flex-col bg-gray-200 p-4">
      <div className="text-lg font-bold mb-4">All cryptocurrencies</div>
      <div className="grid grid-cols-2 border pb-3">
        <div className="font-medium">Asset</div>
        <div className="flex justify-around">
          <div className="font-medium">Price</div>
          <div className="font-medium">Change (24H)</div>
          <div className="font-medium">Market cap</div>
        </div>
      </div>
      <div className="grid grid-cols-2 ">
        <div className="flex items-center gap-2\">
          <div><Image src={logo} alt="crypto image" height={40} width={40}/></div>
          <div>{name}</div>
        </div>
        <div className="flex justify-around">
          <div>{price}</div>
          <div>{change}</div>
          <div>{mc}</div>
        </div>
      </div>
    </div>
  );
}
