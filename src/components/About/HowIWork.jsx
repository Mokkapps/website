import React from 'react';
import { FormattedMessage } from 'react-intl';
import AboutParagraph from './AboutParagraph';

export default class HowIWork extends React.Component {
  createHowIWorkList = () => {
    let list = [];

    for (let i = 1; i <= 12; i++) {
      list.push(
        <li key={i}>
          <AboutParagraph id={'whatIDo' + i} />
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
          <AboutParagraph id="whoIWorkWithDesc" />
        </div>

        <div className="my-4">
          <h3>
            <FormattedMessage id="whatDontDoHeading" />
          </h3>
          <AboutParagraph className="text-justify" id="whatDontDoDesc1" />
          <AboutParagraph id="whatDontDoDesc2" />
        </div>
      </section>
    );
  }
}
