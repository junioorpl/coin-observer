import { format, parseISO } from 'date-fns';
import React from 'react';
import { FiFacebook, FiGithub, FiGlobe } from 'react-icons/fi';
import { AiOutlineReddit } from 'react-icons/ai';

import {
  Container,
  Column,
  Timestamp,
  Active,
  DescriptionDiv,
  LinksDiv,
} from './styles';

interface IProps {
  data: {
    description: string;
    is_new: boolean;
    is_active: boolean;
    type: string;
    rank: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    last_updated: string;
    links: {
      website: string[];
      facebook: string[];
      reddit: string[];
      source_code: string[];
      youtube: string[];
    };
  };
}

const StatsBoard: React.FC<IProps> = ({ data }: IProps) => {
  const formattedDate = format(parseISO(data.last_updated), 'hh:mm MM/dd/yyy');

  return (
    <Container>
      <Active isActive={data.is_active}>
        {data.is_active ? <span>Active</span> : <span>Inactive</span>}
      </Active>
      <DescriptionDiv>
        <div>
          <h3>Description</h3>
        </div>
        <p>{data.description}</p>
      </DescriptionDiv>
      <div>
        <Column>
          <div>
            <span>Rank</span>
            <strong>{data.rank}</strong>
          </div>
          <div>
            <span>Type</span>
            <strong>{data.type}</strong>
          </div>
          <div>
            <span>Is the coin new ?</span>
            <strong>{data.is_new ? 'Yes' : 'No'}</strong>
          </div>
        </Column>
        <Column>
          <div>
            <span>Circulating supply</span>
            <strong>{data.circulating_supply}</strong>
          </div>
          <div>
            <span>Total Supply</span>
            <strong>{data.total_supply}</strong>
          </div>
          <div>
            <span>Maximum Supply</span>
            <strong>{data.max_supply}</strong>
          </div>
        </Column>
      </div>
      <LinksDiv>
        <div>
          <span>Useful links</span>
        </div>
        <a href={data.links.facebook ? data.links.facebook[0] : '#'}>
          <FiFacebook />
        </a>
        <a href={data.links.reddit ? data.links.reddit[0] : '#'}>
          <AiOutlineReddit />
        </a>
        <a href={data.links.source_code ? data.links.source_code[0] : '#'}>
          <FiGithub />
        </a>
        <a href={data.links.website ? data.links.website[0] : '#'}>
          <FiGlobe />
        </a>
      </LinksDiv>
      <Timestamp>
        <span>Updated at</span>
        <strong>{formattedDate}</strong>
      </Timestamp>
    </Container>
  );
};

export default StatsBoard;
