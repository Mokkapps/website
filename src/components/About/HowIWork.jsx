import React from 'react';
import { FormattedMessage } from 'react-intl';
import AboutParagraph from './AboutParagraph';

export default class HowIWork extends React.Component {
  createHowIWorkList = () => {
    let list = [];

    for (let i = 1; i <= 12; i++) {
      list.push(
        <li key={i}>
          <AboutParagraph id={'aboutPage.whatIDo' + i} />
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
            <FormattedMessage id="aboutPage.whatIDoHeading" />
          </h3>
          <ul>{this.createHowIWorkList()}</ul>
        </div>

        <div className="my-4">
          <h3>
            <FormattedMessage id="aboutPage.whoIWorkWithHeading" />
          </h3>
          <AboutParagraph id="aboutPage.whoIWorkWithDesc" />
        </div>

        <div className="my-4">
          <h3>
            <FormattedMessage id="aboutPage.whatDontDoHeading" />
          </h3>
          <AboutParagraph className="text-justify" id="aboutPage.whatDontDoDesc1" />
          <AboutParagraph id="aboutPage.whatDontDoDesc2" />
        </div>
      </section>
    );
  }
}
