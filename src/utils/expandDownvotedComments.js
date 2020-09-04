export default function expandDownvotedComments() {
  document
    .querySelectorAll('.comment.collapsed .expand')
    .forEach((collapsedComment) => {
      collapsedComment.click();
    });
}
