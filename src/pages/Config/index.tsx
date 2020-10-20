import React, { useCallback, useEffect, useState } from 'react';
import { FiDelete, FiHardDrive, FiRefreshCcw } from 'react-icons/fi';

import Header from '../../components/Header';
import { useSettings } from '../../hooks/Settings';

import { CategoryDiv, Container, SettingsDiv, OptionsDiv } from './styles';

interface ITabs {
  tab: 'storage' | 'refresh' | 'wipe';
}

const Config: React.FC = () => {
  const {
    settings,
    wipeData,
    toggleLocalStorage,
    toggleAutoRefresh,
    setAutoRefreshTimer,
  } = useSettings();

  const [loading, setLoading] = useState(true);
  const [currentTab, setCurrentTab] = useState<ITabs>({ tab: 'refresh' });

  useEffect(() => {
    setLoading(false);
  }, []); //eslint-disable-line

  const handleTabChange = useCallback((tab: ITabs) => {
    setCurrentTab(tab);
  }, []);

  return (
    <Container>
      <Header />
      <div>
        <h1>Settings</h1>
      </div>
      {loading ? (
        <h2>Loading settings...</h2>
      ) : (
          <SettingsDiv>
            <CategoryDiv>
              <div>
                <FiHardDrive />
                <button
                  type="button"
                  onClick={() => handleTabChange({ tab: 'storage' })}
                >
                  Storage
              </button>
              </div>
              <div>
                <FiRefreshCcw />
                <button
                  type="button"
                  onClick={() => handleTabChange({ tab: 'refresh' })}
                >
                  Auto-refresh
              </button>
              </div>
              <div>
                <FiDelete />
                <button
                  type="button"
                  onClick={() => handleTabChange({ tab: 'wipe' })}
                >
                  Wipe data
              </button>
              </div>
            </CategoryDiv>
            <OptionsDiv>
              {currentTab.tab === 'storage' && (
                <>
                  <h2>Storage</h2>
                  <label htmlFor="enable-local-storage">
                    <input
                      type="checkbox"
                      defaultChecked={settings.useLocalStorage}
                      onClick={() => toggleLocalStorage()}
                      name="enable-local-storage"
                      id="enable-local-storage"
                    />
                  Enable Local Storage
                </label>
                </>
              )}
              {currentTab.tab === 'refresh' && (
                <>
                  <h2>Auto-refresh</h2>
                  <label htmlFor="enable-auto-refresh">
                    <input
                      type="checkbox"
                      defaultChecked={settings.autoRefresh}
                      onClick={() => toggleAutoRefresh()}
                      name="enable-auto-refresh"
                      id="enable-auto-refresh"
                    />
                  Enable Auto-refresh
                </label>
                  {settings.autoRefresh && (
                    <>
                      <label htmlFor="auto-refresh-timer">
                        Auto-refresh timer
                    </label>
                      <select
                        defaultValue={String(settings.timer)}
                        name="auto-refresh-timer"
                        id="auto-refresh-timer"
                        onChange={e => setAutoRefreshTimer(e.target.value)}
                      >
                        <option value="60000">1 minute</option>
                        <option value="300000">5 minutes</option>
                        <option value="900000">15 minutes</option>
                        <option value="1800000">30 minutes</option>
                        <option value="3600000">60 minutes</option>
                      </select>
                    </>
                  )}
                </>
              )}
              {currentTab.tab === 'wipe' && (
                <>
                  <h2>Wipe Data</h2>
                  <p>This action can not be undone. Proceed with caution!</p>
                  <button type="button" onClick={() => wipeData()}>
                    WIPE STORED DATA
                </button>
                </>
              )}
            </OptionsDiv>
          </SettingsDiv>
        )}
    </Container>
  );
};

export default Config;
