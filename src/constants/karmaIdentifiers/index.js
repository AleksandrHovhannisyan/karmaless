import { click, remove } from '@utils';

const karmaIdentifiers = {
  hideKarma: {
    identifiers: ['.score', '.karma'],
    onElementFound: remove,
  },
  hideAwards: {
    identifiers: ['.awarding-link', '.awarding-show-more-link'],
    onElementFound: remove,
  },
  hideVotingButtons: {
    identifiers: ['.arrow'],
    onElementFound: remove,
  },
  hideUsernames: {
    identifiers: ['.author'],
    onElementFound: remove,
  },
  hideOwnKarma: {
    identifiers: ['.userkarma'],
    onElementFound: remove,
  },
  toggleCollapsedComments: {
    identifiers: ['.comment.collapsed .expand'],
    onElementFound: click,
  },
};

export default karmaIdentifiers;
