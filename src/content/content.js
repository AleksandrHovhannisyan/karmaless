import { karmaActions } from '@constants';
import store from '@store';
import { hidePage, showPage } from '@utils';

hidePage();

window.onload = function purgeKarma() {
  Object.entries(karmaActions).forEach(async ([settingName, config]) => {
    const { selectors, onElementFound } = config;
    const setting = await store.get(settingName);
    if (!setting || !Object.keys(setting).length) return;
    if (!setting.isEnabled) return;

    // Join all of the individual selectors into one for improved performance
    const selector = selectors.join(', ');
    document.querySelectorAll(selector).forEach(onElementFound);
  });

  document.querySelectorAll('.morecomments a').forEach((comment) => {
    comment.addEventListener('click', () => {
      hidePage();
      // TODO: This is hacky. Figure out some other way to fire this. Maybe listen for DOM changes?
      setTimeout(purgeKarma, 2000);
    });
  });

  showPage();
};
