import karmaIdentifiers from 'constants/karmaIdentifiers';
import readSetting from 'store/readSetting';

export default function deleteKarmaElements() {
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
}
