import AddReplyBlock from "./AddReplyBlock";
import CommentItemRepliesList from "./CommentItemRepliesList";
import NoCommentBlock from "../NoCommentBlock";

function CommentItemReplies({ repliesList, onCloseCommentReplies }) {
  return (
    <div className="flex flex-col gap-6 pl-6">
      <AddReplyBlock onCloseCommentReplies={onCloseCommentReplies} />
      {repliesList.length > 0 ? (
        <CommentItemRepliesList repliesList={repliesList} />
      ) : (
        <NoCommentBlock itemType="reply" />
      )}
    </div>
  );
}

export default CommentItemReplies;
