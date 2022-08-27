import { karmaActions } from '@constants';
import store from '@store';
import { hidePage, showPage } from '@utils';

function purgeKarma() {
  Object.entries(karmaActions).forEach(async ([settingName, config]) => {
    const { selectors, onElementFound } = config;
    const setting = await store.get(settingName);
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
