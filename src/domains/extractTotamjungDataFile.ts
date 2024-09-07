import { extractToTextFileByString } from '~utils/extractToTextFileByString';
import { COMMANDS } from '~constants/commands';
import { formatDate } from '~utils/formatDate';

export const extractTotamjungDataFile = async () => {
  const optionsData = await chrome.runtime.sendMessage({
    command: COMMANDS.FETCH_OPTIONS_DATA,
  });

  const stringifiedOptionsData = JSON.stringify(optionsData);
  const fileName = `totamjung_savefile_${formatDate(new Date()).replace(
    ' ',
    '_',
  )}.ttj`;

  extractToTextFileByString(stringifiedOptionsData, fileName);
};
