import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

interface Settings {
  useLocalStorage: boolean;
  autoRefresh: boolean;
  timer: number;
  intervalId?: number;
}

interface SettingsContextData {
  settings: Settings;
  toggleLocalStorage(): void;
  toggleAutoRefresh(): void;
  setIntervalId(intervalId: number): void;
  setAutoRefreshTimer(timerString: string): void;
  wipeData(): void;
}

interface SettingsState {
  settings: Settings;
}

const SettingsContext = createContext<SettingsContextData>(
  {} as SettingsContextData
);

const SettingsProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<SettingsState>(() => {
    const item = localStorage.getItem('@coinobserver/settings');

    if (item) {
      const { useLocalStorage, autoRefresh, timer } = JSON.parse(item);
      return {
        settings: {
          useLocalStorage,
          autoRefresh,
          timer,
        },
      };
    }

    return {
      settings: {
        useLocalStorage: false,
        autoRefresh: false,
        timer: 0,
      },
    };
  });

  const toggleLocalStorage = useCallback(() => {
    setData({
      settings: {
        ...data.settings,
        useLocalStorage: !data.settings.useLocalStorage,
      },
    });
  }, [data.settings]);

  const toggleAutoRefresh = useCallback(() => {
    setData({
      settings: {
        ...data.settings,
        autoRefresh: !data.settings.autoRefresh,
      },
    });
  }, [data.settings]);

  const setIntervalId = useCallback(
    (intervalId: number) => {
      clearInterval(data.settings.intervalId);
      setData({
        settings: {
          ...data.settings,
          intervalId,
        },
      });
    },
    [data.settings]
  );

  const setAutoRefreshTimer = useCallback(
    (timerString: string) => {
      setData({
        settings: {
          ...data.settings,
          timer: Number(timerString),
        },
      });
    },
    [data.settings]
  );

  const wipeData = useCallback(() => {
    localStorage.removeItem('@coinobserver/settings');
    localStorage.removeItem('@coinobserver/my_coins');
    setData({
      settings: {
        useLocalStorage: false,
        autoRefresh: false,
        timer: 0,
      },
    });
  }, []);

  useMemo(() => {
    if (data !== undefined)
      localStorage.setItem(
        '@coinobserver/settings',
        JSON.stringify(data.settings)
      );
  }, [data]);

  return (
    <SettingsContext.Provider
      value={{
        settings: data.settings,
        toggleLocalStorage,
        toggleAutoRefresh,
        setIntervalId,
        setAutoRefreshTimer,
        wipeData,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

function useSettings(): SettingsContextData {
  const context = useContext(SettingsContext);

  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }

  return context;
}

export { useSettings, SettingsProvider };
