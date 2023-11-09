import { createSlice } from "@reduxjs/toolkit";

import PostAvatar from "@@@/avatar_post.png";
import PostImage from "@@@/img_post.png";
import CommentAvatar from "@@@/avatar_comment.png";

const postSlice = createSlice({
  name: "posts",
  initialState: [
    {
      id: "post_1",
      avatar: PostAvatar,
      author: "Lucas Pacheco",
      date: "2023, 08, 19",
      time: "10:30",
      title: "A game is a form of play goals and structure",
      image: "",
      text: "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, or online; by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
      categories: ["StarCraft 2", "Diablo 4"],
      likesNumber: 0,
      viewsNumber: 83,
      commentsNumber: 83,
      commentsList: [
        {
          id: "comment_1",
          avatar: CommentAvatar,
          author: "Roelof Bekkenenks",
          date: "2023, 08, 19",
          time: "10:30",
          comment:
            "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
          likesNumber: 0,
          repliesNumber: 83,
          replies: [
            {
              id: "reply_1",
              avatar: CommentAvatar,
              author: "Gatsharan Sangrota",
              date: "2023, 08, 19",
              time: "10:30",
              reply:
                "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
              likesNumber: 0,
            },
            {
              id: "reply_2",
              avatar: CommentAvatar,
              author: "Martín Abasto",
              date: "2023, 08, 19",
              time: "10:30",
              reply:
                "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
              likesNumber: 0,
            },
            {
              id: "reply_3",
              avatar: CommentAvatar,
              author: "Samuil Sadovsky",
              date: "2023, 08, 19",
              time: "10:30",
              reply:
                "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
              likesNumber: 0,
            },
          ],
        },
        {
          id: "comment_2",
          avatar: CommentAvatar,
          author: "Fátima Cambeiro",
          date: "2023, 08, 19",
          time: "10:30",
          comment:
            "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
          likesNumber: 0,
          repliesNumber: 83,
          replies: [],
        },
      ],
    },
    {
      id: "post_2",
      avatar: PostAvatar,
      author: "Lucas Pacheco",
      date: "2023, 08, 19",
      time: "10:30",
      title: "A game is a form of play goals and structure",
      image: PostImage,
      text: "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, or online; by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
      categories: ["StarCraft 2", "Diablo 4"],
      likesNumber: 0,
      viewsNumber: 83,
      commentsNumber: 83,
      commentsList: [
        {
          id: "comment_1",
          avatar: CommentAvatar,
          author: "Roelof Bekkenenks",
          date: "2023, 08, 19",
          time: "10:30",
          comment:
            "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
          likesNumber: 0,
          repliesNumber: 83,
          replies: [
            {
              id: "reply_1",
              avatar: CommentAvatar,
              author: "Gatsharan Sangrota",
              date: "2023, 08, 19",
              time: "10:30",
              reply:
                "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
              likesNumber: 0,
            },
            {
              id: "reply_2",
              avatar: CommentAvatar,
              author: "Martín Abasto",
              date: "2023, 08, 19",
              time: "10:30",
              reply:
                "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
              likesNumber: 0,
            },
            {
              id: "reply_3",
              avatar: CommentAvatar,
              author: "Samuil Sadovsky",
              date: "2023, 08, 19",
              time: "10:30",
              reply:
                "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
              likesNumber: 0,
            },
          ],
        },
        {
          id: "comment_2",
          avatar: CommentAvatar,
          author: "Fátima Cambeiro",
          date: "2023, 08, 19",
          time: "10:30",
          comment:
            "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
          likesNumber: 0,
          repliesNumber: 83,
          replies: [],
        },
      ],
    },
    {
      id: "post_3",
      avatar: PostAvatar,
      author: "Lucas Pacheco",
      date: "2023, 08, 19",
      time: "10:30",
      title: "A game is a form of play goals and structure",
      image: "",
      text: "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, or online; by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
      categories: ["StarCraft 2", "Diablo 4"],
      likesNumber: 0,
      viewsNumber: 83,
      commentsNumber: 83,
      commentsList: [],
    },
  ],
});

export default postSlice.reducer;
