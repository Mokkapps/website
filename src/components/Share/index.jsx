import React from 'react';
import PropTypes from 'prop-types';
import { ShareBlockStandard } from 'react-custom-share';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 50px;
`;

const PostShare = props => {
  const { shareBlockProps } = props;

  return (
    <Container>
      <ShareBlockStandard {...shareBlockProps} />
    </Container>
  );
};

PostShare.propTypes = {
  shareBlockProps: PropTypes.object,
};

export default PostShare;
