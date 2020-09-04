import hidePage from './hidePage';
import showPage from './showPage';
import expandDownvotedComments from './expandDownvotedComments';
import deleteKarmaElements from './deleteKarmaElements';

export default function purgeKarma() {
  deleteKarmaElements();
  expandDownvotedComments();

  document.querySelectorAll('.morecomments a').forEach((comment) => {
    comment.addEventListener('click', () => {
      hidePage();
      // TODO: This is hacky. Figure out some other way to fire this. Maybe listen for DOM changes?
      setTimeout(purgeKarma, 2000);
    });
  });

  showPage();
}
