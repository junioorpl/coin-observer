import React from 'react';
import { FiDelete, FiHardDrive, FiRefreshCcw } from 'react-icons/fi';

import { Container } from './styles';

interface FunctionProps {
  tab: string;
}

interface IProps {
  handleTabChange({ tab }: FunctionProps): void;
}

const CategoryTabs: React.FC<IProps> = ({ handleTabChange }: IProps) => {
  return (
    <Container>
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
        <button type="button" onClick={() => handleTabChange({ tab: 'wipe' })}>
          Wipe data
        </button>
      </div>
    </Container>
  );
};

export default CategoryTabs;
