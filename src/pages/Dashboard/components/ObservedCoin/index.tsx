import React, { useEffect, useState } from 'react';
import { BiTrash } from 'react-icons/bi';

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
          <strong>{`$${ticker.quotes.USD.price.toFixed(4)}`}</strong>
        </span>
        <span>
          24 hour change:&nbsp;
          <Change value={ticker.quotes.USD.percent_change_24h}>
            {`${ticker.quotes.USD.percent_change_24h}%`}
          </Change>
        </span>
      </div>
      <button type="button" onClick={() => deleteCoin(ticker.id)}>
        <BiTrash />
      </button>
    </Container>
  );
};

export default ObservedCoins;
