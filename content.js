function hidePage() {
  document.documentElement.style.transition = "filter ease-in-out 0.2s";
  document.documentElement.style.filter = "blur(8px)";
}

function showPage() {
  document.documentElement.style.opacity = 1;
  document.documentElement.style.filter = "none";
}

function purgeKarma() {
  // TODO: make all optional except score.
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

  const moreComments = document.querySelectorAll(".morecomments");

  // TODO: optimize
  moreComments.forEach((moreComment) => {
    const anchor = moreComment.querySelector("a");
    anchor.addEventListener("click", () => {
      hidePage();

      setTimeout(() => {
        karmaIdentifiers.forEach((identifier) =>
          document.querySelectorAll(identifier).forEach((element) => {
            element.remove();
          })
        );

        showPage();
      }, 2000);
    });
  });

  showPage();
}

hidePage();
window.onload = purgeKarma;
