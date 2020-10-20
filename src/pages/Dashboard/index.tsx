import React, { useCallback, useEffect, useState } from 'react';
import { BsPlusCircle } from 'react-icons/bs';
import { VscLoading } from 'react-icons/vsc';
import { format } from 'date-fns';
import AddCoinModal from './components/AddCoinModal';
import Header from '../../components/Header';

import ObservedCoin from './components/ObservedCoin';
import GlobalData from './components/GlobalData';
import { useStorage } from '../../hooks/Storage';
import api from '../../service/api';

import {
  Container,
  MainCoins,
  ObservedCoins,
  Loading,
  MyCoinsDiv,
} from './styles';
import Footer from '../../components/Footer';
import { useSettings } from '../../hooks/Settings';

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

interface IGlobalData {
  market_cap_usd: number;
  market_cap_ath_value: number;
  market_cap_change_24h: number;
  cryptocurrencies_number: number;
}

const Dashboard: React.FC = () => {
  const { my_coins, updateData } = useStorage();
  const { settings, setIntervalId } = useSettings();
  const [coins, setCoins] = useState<ITicker[]>([]);
  const [lastUpdated, setLastUpdated] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [globalData, setGlobalData] = useState<IGlobalData>({} as IGlobalData);
  const [addingCoins, setAddingCoins] = useState(false);

  useEffect(() => {
    async function getGlobalData() {
      const response = await api.get<IGlobalData>('/global');
      setGlobalData(response.data);
      setLoading(false);
    }

    getGlobalData();

    // start auto update function
    if (settings.autoRefresh === true) {
      autoUpdate();
    }
  }, []); //eslint-disable-line

  const toggleAddCoin = useCallback(() => {
    setAddingCoins(!addingCoins);
  }, [addingCoins]);

  const autoUpdate = useCallback(() => {
    function handleAutoUpdate() {
      updateData();
      const date = format(new Date(), 'HH:mm:ss');
      setLastUpdated(date);
    }

    const id = setInterval(() => {
      handleAutoUpdate();
    }, settings.timer);

    setIntervalId(id);
  }, [setIntervalId, settings.timer, updateData]);

  const cancelAutoUpdate = useCallback(() => {
    clearInterval(settings.intervalId);
  }, [settings.intervalId]);

  // stops auto update function
  useEffect(() => {
    if (settings.autoRefresh === false) {
      cancelAutoUpdate();
    }
  }, [settings.autoRefresh, cancelAutoUpdate]);

  useEffect(() => {
    setCoins(my_coins);
  }, [my_coins]);

  return (
    <>
      {addingCoins && (
        <AddCoinModal addingCoins={addingCoins} toggleAddCoin={toggleAddCoin} />
      )}
      <Container>
        <Header toggleAddCoin={toggleAddCoin} />
        <MainCoins>
          <h2>Global Data</h2>
          {loading ? (
            <Loading>
              <VscLoading />
              <span>Getting global info...</span>
            </Loading>
          ) : (
              <GlobalData data={globalData} />
            )}
        </MainCoins>
        <ObservedCoins>
          <MyCoinsDiv>
            <h1>My Coins</h1>
            {lastUpdated !== '' && <aside>{`Updated at ${lastUpdated}`}</aside>}
          </MyCoinsDiv>
          {my_coins.length > 0 ? (
            <div>
              {coins.map(ticker => (
                <ObservedCoin key={ticker.id} ticker={ticker} />
              ))}
            </div>
          ) : (
              <div>
                <span>You don`t have any coins yet :(</span>
                <p>
                  Press&nbsp;
                <BsPlusCircle />
                &nbsp;to add your first coin!
              </p>
              </div>
            )}
        </ObservedCoins>
      </Container>
      <Footer />
    </>
  );
};

export default Dashboard;
