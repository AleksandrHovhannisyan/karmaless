import readSetting from 'store/readSetting';

const karmaIdentifiers = {
  hideKarma: ['.score', '.karma'],
  hideAwards: ['.awarding-link', '.awarding-show-more-link'],
  hideVotingButtons: ['.arrow'],
  hideUsernames: ['.author'],
  hideOwnKarma: ['.userkarma'],
};

function hidePage() {
  document.documentElement.style.transition = 'filter ease-in-out 0.2s';
  document.documentElement.style.filter = 'blur(8px)';
}

function showPage() {
  document.documentElement.style.filter = 'none';
}

// TODO: handle "comment score below threshold"s?

// TODO: new reddit interface is using obfuscated class names :( One more reason to prefer old reddit.

function purgeKarma() {
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

hidePage();
window.onload = purgeKarma;
