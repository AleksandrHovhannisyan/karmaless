document.documentElement.style.visibility = "hidden";

window.onload = function purgeKarma() {
  const karmaIdentifiers = [
    ".score",
    ".karma",
    ".arrow",
    ".userkarma",
    ".awarding-link",
    ".awarding-show-more-link",
    ".author-tooltip__karma",
    ".author",
  ];

  karmaIdentifiers.forEach((identifier) =>
    document.querySelectorAll(identifier).forEach((element) => {
      element.remove();
    })
  );
  document.documentElement.style.visibility = "";
};
