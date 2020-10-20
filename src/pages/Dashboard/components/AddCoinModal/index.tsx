/* eslint-disable react/jsx-indent */

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { VscLoading } from 'react-icons/vsc';
import { useStorage } from '../../../../hooks/Storage';

import api from '../../../../service/api';

import { Container, LoadingDiv } from './styles';

interface IProps {
  addingCoins: boolean;
  toggleAddCoin: () => void;
}

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;

  type: string;
}

const AddCoinModal: React.FC<IProps> = ({
  addingCoins,
  toggleAddCoin,
}: IProps) => {
  const { addCoin, my_coins } = useStorage();
  const [loading, setLoading] = useState(true);
  const [searchWord, setSearchWord] = useState('');
  const [filteredList, setFilteredList] = useState<ICoin[]>([]);
  const [coinList, setCoinList] = useState<ICoin[]>([]);

  useEffect(() => {
    async function getCryptocurrencies() {
      if (addingCoins) {
        const response = await api.get('/coins');
        const currencies = response.data;
        setCoinList(
          currencies.filter((currency: ICoin) => currency.is_active && currency)
        );
        setLoading(false);
      }
    }

    getCryptocurrencies();
  }, [addingCoins]);

  // search function
  useMemo(() => {
    if (searchWord === '') {
      setFilteredList(
        coinList.filter(
          (currency: ICoin, index: number) => index < 50 && currency
        )
      );
    } else {
      let count = 0;
      setFilteredList(
        coinList.filter((currency: ICoin | undefined) => {
          if (
            !!currency &&
            count < 50 &&
            currency.name.search(searchWord) > -1
          ) {
            count += 1;
            return currency;
          }
          return undefined;
        })
      );
    }
  }, [searchWord, coinList]);

  const handleAdd = useCallback(
    ticker => {
      const checkExistence = my_coins.filter(c => c.id === ticker.id);

      if (checkExistence.length === 0) {
        addCoin(ticker.id);
        toggleAddCoin();
      }
    },
    [addCoin, toggleAddCoin, my_coins]
  );

  return (
    <Container>
      <button type="button" onClick={toggleAddCoin}>
        &nbsp;
      </button>
      <div>
        <h2>Available Coins:</h2>
        <input
          type="text"
          name="SearchBar"
          id="search-bar"
          placeholder="Search cryptocurrency"
          onChange={e => setSearchWord(e.target.value)}
        />
        {loading ? (
          <LoadingDiv>
            <h3>
              <VscLoading />
              Getting available coins
            </h3>
          </LoadingDiv>
        ) : (
            <div>
              {filteredList.map(c => (
                <button type="button" key={c.id} onClick={() => handleAdd(c)}>
                  {`${c.symbol} - ${c.name}`}
                </button>
              ))}
            </div>
          )}
      </div>
    </Container>
  );
};

export default AddCoinModal;
