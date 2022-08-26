import { click, remove } from '@utils';

const karmaActions = {
  hideKarma: {
    selectors: ['.score', '.karma'],
    onElementFound: remove,
  },
  hideAwards: {
    selectors: ['.awarding-link', '.awarding-show-more-link'],
    onElementFound: remove,
  },
  hideVotingButtons: {
    selectors: ['.arrow'],
    onElementFound: remove,
  },
  hideUsernames: {
    selectors: ['.author'],
    onElementFound: remove,
  },
  hideOwnKarma: {
    selectors: ['.userkarma'],
    onElementFound: remove,
  },
  toggleCollapsedComments: {
    selectors: ['.comment.collapsed .expand'],
    onElementFound: click,
  },
};

export default karmaActions;
