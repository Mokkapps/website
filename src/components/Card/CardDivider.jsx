import React from 'react';
import styled from 'styled-components';

const Divider = styled.hr`
  border: 1px solid var(--text-main);
  opacity: 0.25;
`;

const CardDivider = () => <Divider className="mx-0 my-2 w-full" />;

export default CardDivider;
