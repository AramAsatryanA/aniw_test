import RepliesListItem from "./RepliesListItem";

function CommentItemRepliesList({ repliesList }) {
  return (
    <ul className="flex flex-col gap-6">
      {repliesList.map((reply) => (
        <RepliesListItem key={reply.id} replyItem={reply} />
      ))}
    </ul>
  );
}

export default CommentItemRepliesList;
