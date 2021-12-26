import React from 'react';
import { FormattedMessage } from 'react-intl';

import { useFetch } from 'hooks/useFetch';
import { sendCustomAnalyticsEvent } from 'utils';
import Button from 'components/Button';

const Sponsors = () => {
  const { data: buyMeACoffeeData } = useFetch(
    `${process.env.API_URL}buy-me-a-coffee`
  );

  return (
    <>
      <span>
        <FormattedMessage
          id="statsPage.sponsors.description"
          values={{
            supporterCount: (
              <strong className="text-accent text-2xl">
                {buyMeACoffeeData && buyMeACoffeeData.supporters
                  ? buyMeACoffeeData.supporters.length
                  : '--'}
              </strong>
            ),
            coffeeCount: (
              <strong className="text-accent text-2xl">
                {buyMeACoffeeData ? buyMeACoffeeData.coffeeCount : '--'}
              </strong>
            ),
            supporterName: (
              <strong className="text-accent text-2xl">
                {buyMeACoffeeData && buyMeACoffeeData.supporters
                  ? buyMeACoffeeData.supporters[0].name
                  : '--'}
              </strong>
            ),
          }}
        />
      </span>
      <Button
        className="mt-4"
        onClick={() => {
          sendCustomAnalyticsEvent('Clicked sponsor button on stats page');
          window.open('https://www.buymeacoffee.com/mokkapps', '_blank');
        }}
      >
        <FormattedMessage id="statsPage.sponsors.button" />
      </Button>
    </>
  );
};

Sponsors.propTypes = {};

export default Sponsors;
