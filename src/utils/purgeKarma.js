import karmaIdentifiers from 'constants/karmaIdentifiers';
import readSetting from 'store/readSetting';
import hidePage from './hidePage';
import showPage from './showPage';

// TODO: handle "comment score below threshold"s?
// TODO: new reddit interface is using obfuscated class names :( One more reason to prefer old reddit.

export default function purgeKarma() {
  const removeKarmaElements = () => {
    // Complexity seems bad, but this is really O(n) since the nested loops are short and don't scale
    Object.keys(karmaIdentifiers).forEach((settingName) => {
      readSetting(settingName, (setting) => {
        if (!Object.keys(setting).length) return;
        if (!setting[settingName]) return;

        karmaIdentifiers[settingName].forEach((identifier) => {
          document.querySelectorAll(identifier).forEach((element) => {
            element.remove();
          });
        });
      });
    });
  };

  removeKarmaElements();

  const moreComments = document.querySelectorAll('.morecomments');

  // TODO: optimize
  moreComments.forEach((moreComment) => {
    const anchor = moreComment.querySelector('a');
    anchor.addEventListener('click', () => {
      hidePage();

      // TODO: This is hacky. Figure out some other way to fire this. Maybe listen for DOM changes?
      setTimeout(() => {
        removeKarmaElements();
        showPage();
      }, 2000);
    });
  });

  showPage();
}
