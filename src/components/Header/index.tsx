import React from 'react';
import { Link } from 'react-router-dom';
import {
  FiArrowLeft,
  FiPlusCircle,
  FiRefreshCcw,
  FiSettings,
} from 'react-icons/fi';
import Logo from '../../assets/logo.png';

import { Container } from './styles';
import { useStorage } from '../../hooks/Storage';

interface IProps {
  toggleAddCoin?: () => void; //eslint-disable-line
}

const Header: React.FC<IProps> = ({ toggleAddCoin }: IProps) => {
  const { updateData } = useStorage();

  return (
    <Container>
      <img src={Logo} alt="Cryptobserver" />
      <div>
        {toggleAddCoin ? (
          <>
            <Link to="/settings">
              <FiSettings />
            </Link>
            <button type="button" onClick={updateData}>
              <FiRefreshCcw />
            </button>
            <button type="button" onClick={toggleAddCoin}>
              <FiPlusCircle />
            </button>
          </>
        ) : (
            <>
              <Link to="/">
                <FiArrowLeft />
              </Link>
            </>
          )}
      </div>
    </Container>
  );
};

export default Header;
