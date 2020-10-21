import React, { useEffect, useState } from 'react';
import { VscLoading } from 'react-icons/vsc';
import StringMask from 'string-mask';

import Header from '../../components/Header';
import api from '../../service/api';
import { dynamicImport } from '../../utils/dynamicImport';
import StatsBoard from './components/StatsBoard';
import VariationBoard from './components/VariationBoard';

import { Container, LoadingDiv, CoinStats } from './styles';

interface IProps {
  history: { push(path: string): void };
  match: { params: { id: string } };
}

interface DetailedTicker {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  description: string;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  last_updated: string;
  is_new: boolean;
  is_active: boolean;
  type: string;
  links: {
    website: string[];
    facebook: string[];
    reddit: string[];
    source_code: string[];
    youtube: string[];
  };
  quotes: {
    USD: {
      price: number;
      percent_change_15m: number;
      percent_change_30m: number;
      percent_change_1h: number;
      percent_change_6h: number;
      percent_change_12h: number;
      percent_change_24h: number;
      ath_price: number;
      ath_date: string;
    };
  };
}

const Coin: React.FC<IProps> = ({ match, history }: IProps) => {
  const [coin, setCoin] = useState<DetailedTicker>();
  const [formattedPrice, setFormattedPrice] = useState(0);
  const [coinPic, setCoinPic] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getDetailedTicker() {
      const res1 = await api.get(`/coins/${match.params.id}`);
      const res2 = await api.get(`/tickers/${match.params.id}`);
      setCoin({ ...res1.data, ...res2.data });

      if (res1.status !== 200 || res2.status !== 200) {
        history.push('/');
      }
    }

    getDetailedTicker();
  }, []); //eslint-disable-line

  useEffect(() => {
    async function getIcon() {
      let pic = '';
      if (coin !== undefined) pic = await dynamicImport(coin.symbol);
      setCoinPic(pic);
    }

    getIcon();
    if (coin !== undefined) {
      const newPrice = String(coin.quotes.USD.price).replace('.', '');

      const mask = new StringMask('##,##0.00000000', { reverse: true });
      setFormattedPrice(mask.apply(newPrice));
      setLoading(false);
    }
  }, [coin]);

  return (
    <Container>
      <Header />
      {loading ? (
        <LoadingDiv>
          <VscLoading />
          <h1>Loading coin info</h1>
        </LoadingDiv>
      ) : (
          <>
            {coin !== undefined && (
              <CoinStats>
                <title>
                  <div>
                    <img src={coinPic} alt={match.params.id} />
                    <h1>{coin.name}</h1>
                  </div>
                  <div>
                    <span>$</span>
                    <strong>{formattedPrice}</strong>
                  </div>
                </title>
                <h2>USD Variation</h2>
                <VariationBoard quotes={coin.quotes} />
                <h2>Detailed statistics</h2>
                <StatsBoard data={coin} />
              </CoinStats>
            )}
          </>
        )}
    </Container>
  );
};

export default Coin;
