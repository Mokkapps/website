import localDe from './de.json';
import localEng from './en.json';

// see https://formatjs.io/docs/react-intl/upgrade-guide-2x/#flatten-messages-object
function flattenMessages(nestedMessages, prefix = '') {
  return Object.keys(nestedMessages).reduce((messages, key) => {
    let value = nestedMessages[key];
    let prefixedKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === 'string') {
      messages[prefixedKey] = value;
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey));
    }

    return messages;
  }, {});
}

export default {
  german: flattenMessages(localDe),
  english: flattenMessages(localEng),
};
