import AddCommentBlock from "./AddCommentBlock";
import ItemCommentsList from "./ItemCommentsList";
import NoCommentBlock from "./NoCommentBlock";

function ItemComments({ commentsList, itemType }) {
  return (
    <div className="item-card-type flex flex-col gap-6" id="addComment">
      <AddCommentBlock />
      {commentsList.length > 0 ? (
        <ItemCommentsList commentsList={commentsList} itemType={itemType} />
      ) : (
        <NoCommentBlock itemType="comment" />
      )}
    </div>
  );
}

export default ItemComments;
