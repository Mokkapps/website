import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
const Container = styled.section`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

export default class HowIWork extends React.Component {
  createHowIWorkList = () => {
    let list = [];

    for (let i = 1; i <= 12; i++) {
      list.push(
        <li>
          <FormattedMessage id={'whatIDo' + i} />
        </li>
      );
    }
    return list;
  };

  render() {
    return (
      <Container>
        <div>
          <h3>
            <FormattedMessage id="whatIDo" />
          </h3>
          <ul>{this.createHowIWorkList()}</ul>
        </div>

        <div>
          <h3>
            <FormattedMessage id="whoIWorkWithHeading" />
          </h3>
          <p>
            <FormattedMessage id="whoIWorkWithDesc" />
          </p>
        </div>

        <div>
          <h3>
            <FormattedMessage id="whatDontDoHeading" />
          </h3>
          <p>
            <FormattedMessage id="whatDontDoDesc1" />
          </p>
          <p>
            <FormattedMessage id="whatDontDoDesc2" />
          </p>
        </div>
      </Container>
    );
  }
}
