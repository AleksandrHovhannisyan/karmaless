import { settings } from 'constants/settings';

export default function writeSetting(settingName, value) {
  settings.set({ [settingName]: value });
}
