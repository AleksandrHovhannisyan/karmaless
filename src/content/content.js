import hidePage from 'utils/hidePage';
import karmaIdentifiers from 'constants/karmaIdentifiers';
import readSetting from 'store/readSetting';
import showPage from 'utils/showPage';

hidePage();

window.onload = function purgeKarma() {
  Object.keys(karmaIdentifiers).forEach((settingName) => {
    readSetting(settingName).then((setting) => {
      if (!Object.keys(setting).length) return;
      if (!setting.enabled) return;

      const { identifiers, onElementFound } = karmaIdentifiers[settingName];
      identifiers.forEach((identifier) => {
        document.querySelectorAll(identifier).forEach(onElementFound);
      });
    });
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
