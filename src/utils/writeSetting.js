import { settings } from 'constants/settings';
import updateCheckbox from './updateCheckbox';

export default function writeSetting(settingName, value) {
  settings.set({ [settingName]: value });
  updateCheckbox(settingName, value);
}
