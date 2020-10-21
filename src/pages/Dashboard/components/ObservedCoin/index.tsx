import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { FiInfo, FiTrash2 } from 'react-icons/fi';
import { Change, Container } from './styles';
import { dynamicImport } from '../../../../utils/dynamicImport';
import { useStorage } from '../../../../hooks/Storage';

interface IProps {
  ticker: ITicker;
}

interface ITicker {
  id: string;
  name: string;
  last_updated: string;
  symbol: string;
  rank: number;
  quotes: {
    USD: {
      price: number;
      percent_change_24h: number;
    };
  };
}

const ObservedCoins: React.FC<IProps> = ({ ticker }: IProps) => {
  const { deleteCoin } = useStorage();
  const [coinPic, setCoinPic] = useState('');

  useEffect(() => {
    async function getIcon() {
      const pic = await dynamicImport(ticker.symbol);

      setCoinPic(pic);
    }

    getIcon();
  }, [ticker.symbol]);

  return (
    <Container>
      <img src={coinPic} alt={ticker.name} />
      <strong>{ticker.name}</strong>
      <div>
        <span>
          Current value:&nbsp;
          <strong>{`$${ticker.quotes.USD.price}`}</strong>
        </span>
        <span>
          24 hour change:&nbsp;
          <Change value={ticker.quotes.USD.percent_change_24h}>
            {`${ticker.quotes.USD.percent_change_24h}%`}
          </Change>
        </span>
      </div>
      <div>
        <Link to={`/coin/${ticker.id}`}>
          <FiInfo />
        </Link>
        <button type="button" onClick={() => deleteCoin(ticker.id)}>
          <FiTrash2 />
        </button>
      </div>
    </Container>
  );
};

export default ObservedCoins;
