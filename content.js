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

  const moreComments = document.querySelectorAll(".morecomments");

  // moreComments.forEach((moreComment) => {
  //   const anchor = moreComment.querySelector("a");
  //   const newAnchor = document.createElement("a");
  //   newAnchor.innerText = moreLink.textContent;
  //   newAnchor.style.fontWeight = "bold";
  //   newAnchor.style.fontSize = "smaller";
  //   newAnchor.style.cursor = "pointer";
  //   newAnchor.setAttribute("href", "javascript:void(0)");
  //   anchor.parentNode.replaceChild(newAnchor, anchor);
  // });

  moreComments.forEach((moreComment) => {
    const anchor = moreComment.querySelector("a");
    anchor.addEventListener("click", () => {
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

      setTimeout(() => {
        karmaIdentifiers.forEach((identifier) =>
          document.querySelectorAll(identifier).forEach((element) => {
            element.remove();
          })
        );
      }, 2000);
    });
  });

  document.documentElement.style.visibility = "";
};
