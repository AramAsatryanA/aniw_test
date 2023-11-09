import { createSlice } from "@reduxjs/toolkit";

import FileAvatar from "@@@/avatar_file.png";
import FileImage from "@@@/img_file.png";
import CommentAvatar from "@@@/avatar_comment.png";

const filesSlice = createSlice({
  name: "files",
  initialState: [
    {
      id: "file_1",
      avatar: FileAvatar,
      author: "Lucas Pacheco",
      date: "2023, 08, 19",
      time: "10:30",
      isPremium: true,
      title: "A game is a form of play goals and structure",
      image: "",
      text: "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, or online; by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
      tools: "Blender",
      fileType: "exe",
      size: 112,
      categories: ["StarCraft 2", "Diablo 4"],
      likesNumber: 0,
      downloadsNumber: 83,
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
      id: "file_2",
      avatar: FileAvatar,
      author: "Lucas Pacheco",
      date: "2023, 08, 19",
      time: "10:30",
      isPremium: true,
      title: "A game is a form of play goals and structure",
      image: FileImage,
      text: "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, or online; by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
      tools: "Blender",
      fileType: "exe",
      size: 112,
      categories: ["StarCraft 2", "Diablo 4"],
      likesNumber: 0,
      downloadsNumber: 83,
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
  ],
});

export default filesSlice.reducer;
