import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { MokkappsRed } from '../../styles/variables';

const ListElement = styled.li`
  border-bottom: 1px dotted #ddd;
  
  &:last-child {
    border-bottom: none;
  }
`;

const UnorderedList = styled.ul`
  list-style: none;
  font-size: 1.3em;

  a {
    text-decoration: none;
    padding: 0.6em 5px;
    position: relative;
    display: block;
    color: ${MokkappsRed};

    &:hover {
      color: ${MokkappsRed};
      text-decoration: underline;
    }
  }
`;

const List = props => {
  const { items } = props;

  return (
    <div>
      <UnorderedList>
        {items.map(item => {
          const {
            frontmatter: { title },
            fields: { slug },
          } = item;

          return (
            <ListElement key={slug}>
              <Link to={slug} activeClassName="active">
                {title}
              </Link>
            </ListElement>
          );
        })}
      </UnorderedList>
    </div>
  );
};

List.propTypes = {
  items: PropTypes.array.isRequired,
};

export default List;
