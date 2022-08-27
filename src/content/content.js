import { karmaActions } from '@constants';
import store from '@store';
import { hidePage, showPage } from '@utils';

async function purgeKarma() {
  // Read all settings ahead of time. The returned object will look like { [settingName]: { isEnabled: true, ...otherValues } }.
  const settings = await store.getAll();
  // Loop over the config, check if the setting is enabled, and, if so, query all relevant DOM nodes and run their handlers
  Object.entries(karmaActions).forEach(([settingName, config]) => {
    const { selectors, onElementFound } = config;
    const setting = settings[settingName];
    if (!setting?.isEnabled) return;

    // Join all of the individual selectors into one for improved performance
    const selector = selectors.join(', ');
    document.querySelectorAll(selector).forEach(onElementFound);
  });

  // When a user clicks on a "Load more comments" link, hide the page and run through the purge again
  document.querySelectorAll('.morecomments a').forEach((comment) => {
    comment.addEventListener('click', () => {
      hidePage();
      // TODO: This is hacky. Figure out some other way to fire this. Maybe listen for DOM changes?
      setTimeout(purgeKarma, 2000);
    });
  });

  showPage();
}

// In the future, it may be better to show some sort of splash screen or loader instead of just blurring the page
hidePage();
window.onload = purgeKarma;
