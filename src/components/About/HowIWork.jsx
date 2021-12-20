import React from 'react';
import { FormattedMessage } from 'react-intl';
import AboutParagraph from './AboutParagraph';

import config from '../../content/meta/config';

export default class HowIWork extends React.Component {
  createHowIWorkList = () => {
    let list = [];

    for (let i = 1; i <= 10; i++) {
      list.push(
        <li key={i}>
          <AboutParagraph id={'aboutPage.whatIDo' + i} values={{tech: config.baseTechFocus}} />
        </li>
      );
    }
    return list;
  };

  render() {
    return (
      <section className="flex flex-col justify-center items-start">
        <div className="my-4">
          <ul>{this.createHowIWorkList()}</ul>
        </div>

        <div className="my-4">
          <h3 className="text-center">
            <FormattedMessage id="aboutPage.whoIWorkWithHeading" />
          </h3>
          <AboutParagraph id="aboutPage.whoIWorkWithDesc" />
        </div>

        <div className="my-4">
          <h3 className="text-center">
            <FormattedMessage id="aboutPage.whatDontDoHeading" />
          </h3>
          <AboutParagraph className="text-justify" id="aboutPage.whatDontDoDesc1" />
          <AboutParagraph id="aboutPage.whatDontDoDesc2" />
        </div>
      </section>
    );
  }
}
