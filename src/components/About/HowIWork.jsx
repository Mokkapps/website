import React from 'react';
import { FormattedMessage } from 'react-intl';

export default class HowIWork extends React.Component {
  createHowIWorkList = () => {
    let list = [];

    for (let i = 1; i <= 12; i++) {
      list.push(
        <li key={i}>
          <FormattedMessage id={'whatIDo' + i} />
        </li>
      );
    }
    return list;
  };

  render() {
    return (
      <section className="flex flex-col justify-center items-start">
        <div className="my-4">
          <h3>
            <FormattedMessage id="whatIDo" />
          </h3>
          <ul>{this.createHowIWorkList()}</ul>
        </div>

        <div className="my-4">
          <h3>
            <FormattedMessage id="whoIWorkWithHeading" />
          </h3>
          <p>
            <FormattedMessage id="whoIWorkWithDesc" />
          </p>
        </div>

        <div className="my-4">
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
      </section>
    );
  }
}
