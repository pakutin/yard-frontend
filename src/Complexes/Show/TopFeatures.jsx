import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';
import TopFeature from './TopFeature';

const TopFeatures = styled.section`
  display: flex;
  margin-top: 2.75rem;
  padding-bottom: 1.625rem;
  margin-bottom: 2rem;
  font-family: "Philosopher", "Iowan", serif;
  border-bottom: 1px solid #e0e0e1;
`;

export default props =>
  (<Grid>
    <TopFeatures>
      <TopFeature value={props.offers} label="предложений" />
      <TopFeature value={props.architect} label="архитектор" />
      <TopFeature value="Группа «ПСН»" label="застройщик" />
    </TopFeatures>
  </Grid>);
