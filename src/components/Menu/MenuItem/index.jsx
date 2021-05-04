import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { FormattedMessage, injectIntl } from 'react-intl';

const MobileItem = styled.li`
  padding: 0 10px 0 0;
  line-height: 1;

  .active {
    &:after {
      transform: scaleX(1);
    }
  }

  a {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    padding: 0 10px 0 0;
    color: var(--text-main);

    position: relative;
    text-decoration: none;
    background-size: 100% 0;

    font-weight: bold;
    font-size: 1.4rem;
    background-image: linear-gradient(
      var(--burger-menu-text),
      var(--burger-menu-text)
    );
    background-position: 0% 100%;
    background-repeat: no-repeat;
    transition: background-size cubic-bezier(0, 0.5, 0, 1) 0.3s;

    &:after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      right: 0;
      width: 100%;
      height: 3px;
      transform: scaleX(0);
      background-color: var(--accent);
      transition: transform 0.3s;
    }
  }

  svg {
    height: 30px;
  }
`;

const DesktopItem = styled.li`
  padding: 0 10px 0 0;
  line-height: 1;

  .active {
    &:after {
      transform: scaleX(1);
    }
  }

  a {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    padding: 0 10px 0 0;
    color: var(--text-main);

    position: relative;
    text-decoration: none;
    background-size: 100% 0;

    &:after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      right: 0;
      width: 100%;
      height: 3px;
      transform: scaleX(0);
      background-color: var(--accent);
      transition: transform 0.3s;
    }

    &:hover {
      text-decoration: none;

      &:after {
        transform: scaleX(1);
      }
    }
  }

  svg {
    height: 30px;
  }
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
`;

const ItemTitle = styled.span`
  display: block;
  margin-left: 0.5rem;
`;

const MenuItem = ({
  intl,
  className,
  to,
  ariaLabel,
  i18nId,
  linkProps,
  icon: Icon,
  dataCy,
  isMobile = false,
}) => {
  const link = (
    <Link
      to={to}
      title={intl.formatMessage({ id: i18nId })}
      aria-label={ariaLabel}
      activeClassName="active"
      data-cy={dataCy}
      {...linkProps}
    >
      <ItemContainer>
        {Icon && <Icon />}
        <ItemTitle>
          <FormattedMessage id={i18nId} />
        </ItemTitle>
      </ItemContainer>
    </Link>
  );

  return isMobile ? (
    <MobileItem className={className}>
      {link}
    </MobileItem>
  ) : (
    <DesktopItem className={className}>
      {link}
    </DesktopItem>
  );
};

MenuItem.propTypes = {
  intl: PropTypes.any.isRequired,
  to: PropTypes.string,
  className: PropTypes.string,
  isMobile: PropTypes.bool,
  ariaLabel: PropTypes.string,
  i18nId: PropTypes.string,
  linkProps: PropTypes.object,
  icon: PropTypes.object,
  dataCy: PropTypes.string,
};

export default injectIntl(MenuItem);
