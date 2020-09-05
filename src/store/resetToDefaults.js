import checkboxes from 'constants/checkboxes';
import getName from 'utils/getName';
import { defaultSettings } from './defaultSettings';
import updateCheckbox from 'utils/updateCheckbox';
import { store } from './store';

export default function resetToDefaults() {
  store.clear();
  checkboxes.forEach((checkbox) => {
    const settingName = getName(checkbox);
    const defaultValue = defaultSettings[settingName];
    updateCheckbox(settingName, defaultValue.enabled);
  });
}
