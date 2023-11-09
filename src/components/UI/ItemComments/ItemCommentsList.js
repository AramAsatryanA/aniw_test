import CommentsListItem from "./CommentsListItem";

function ItemCommentsList({ commentsList, itemType }) {
  return (
    <ul className="flex flex-col gap-6">
      {commentsList.map((comment) => (
        <CommentsListItem
          key={comment.id}
          commentItem={comment}
          itemType={itemType}
        />
      ))}
    </ul>
  );
}

export default ItemCommentsList;
