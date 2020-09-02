import { store } from 'store/store';
import updateCheckbox from 'utils/updateCheckbox';

export default function writeSetting(settingName, value) {
  store.set({ [settingName]: value });
  updateCheckbox(settingName, value);
}
