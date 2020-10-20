import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useMemo,
} from 'react';
import api from '../service/api';
import { useSettings } from './Settings';

// localstorage coins: @coinobserver/my_coins

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

interface StorageContextData {
  my_coins: ITicker[];
  addCoin(id: string): void;
  deleteCoin(id: string): void;
  updateData(): void;
}

interface StorageState {
  my_coins: ITicker[];
}

const StorageContext = createContext<StorageContextData>(
  {} as StorageContextData
);

const StorageProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<StorageState>(() => {
    return { my_coins: [] } as StorageState;
  });
  const { settings } = useSettings();

  // save coin to localstorage
  const storeItem = useCallback((id: string) => {
    const items = localStorage.getItem('@coinobserver/my_coins');

    if (items) {
      const ids = JSON.parse(items);
      ids.push(id);
      localStorage.setItem('@coinobserver/my_coins', JSON.stringify(ids));
    } else {
      const ids = [id];
      localStorage.setItem('@coinobserver/my_coins', JSON.stringify(ids));
    }
  }, []);

  // delete coin from localstorage
  const removeItem = useCallback((id: string) => {
    const items = localStorage.getItem('@coinobserver/my_coins');

    if (items) {
      const ids = JSON.parse(items);
      const newItems = ids.filter((item: string) => item !== id);
      localStorage.setItem('@coinobserver/my_coins', JSON.stringify(newItems));
    }
  }, []);

  // recover coins from localstorage
  const retrieveCoins = useCallback(() => {
    async function getTickers() {
      const items = localStorage.getItem('@coinobserver/my_coins');
      if (items) {
        const ids = JSON.parse(items);
        const response = await Promise.all(
          ids.map((id: string) => api.get(`/tickers/${id}`))
        ).then(res => res);

        const tickers = response.map((res: any) => res.data);//eslint-disable-line

        setData({ my_coins: tickers });
      }
    }

    getTickers();
  }, []);

  const addCoin = useCallback(
    (id: string) => {
      async function getTicker() {
        const response = await api.get<ITicker>(`/tickers/${id}`);
        const ticker = response.data;
        setData({ my_coins: [...data.my_coins, ticker] });
      }

      getTicker();

      if (settings.useLocalStorage) storeItem(id);
    },
    [data.my_coins, storeItem, settings.useLocalStorage]
  );

  const deleteCoin = useCallback(
    (id: string) => {
      const arr = data.my_coins.filter(c => c.id !== id);
      setData({ my_coins: arr });

      if (settings.useLocalStorage) removeItem(id);
    },
    [data.my_coins, removeItem, settings.useLocalStorage]
  );

  const updateData = useCallback(() => {
    async function updateTickers() {
      const newData = await Promise.all(
        data.my_coins.map(async c => {
          const res = await api.get<ITicker>(`/tickers/${c.id}`);

          return res.data;
        })
      );

      setData({ my_coins: newData });
    }

    updateTickers();
  }, [data.my_coins]);

  useMemo(() => {
    if (settings.useLocalStorage) retrieveCoins();
  }, [settings.useLocalStorage, retrieveCoins]);

  return (
    <StorageContext.Provider
      value={{
        my_coins: data.my_coins,
        addCoin,
        deleteCoin,
        updateData,
      }}
    >
      {children}
    </StorageContext.Provider>
  );
};

function useStorage(): StorageContextData {
  const context = useContext(StorageContext);

  if (!context) {
    throw new Error('useStorage must be used within a StorageProvider');
  }

  return context;
}

export { useStorage, StorageProvider };
