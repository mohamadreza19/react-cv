import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addPost } from "../post/postSlice";
import { selectAllUsers } from "../users/usersSlice";
export const AddPostForm = () => {
  const dispatch = useDispatch();
  const allUsers = useSelector(selectAllUsers);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userID, setSUserID] = useState("");

  const users = useSelector(selectAllUsers);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAutherChanged = (e) => setSUserID(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(addPost(title, content, userID));
    }
  };
  const canSave = Boolean(title) && Boolean(content) && Boolean(userID);
  const usersOption = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));
  return (
    <div>
      <h2>add a new post</h2>

      <form>
        <label htmlFor="postTitle">post title</label>
        <input
          type="text"
          value={title}
          onChange={onTitleChanged}
          id="postTitle"
          name="postTitle"
        />
        <br />
        <label htmlFor="postAuther">Auther:</label>
        <input
          type="text"
          value={userID}
          onChange={onAutherChanged}
          id="postAuther"
          name="postAuther"
        />
        <br />
        <label htmlFor="postContent">post content</label>
        <textarea
          type="text"
          value={content}
          onChange={onContentChanged}
          id="postContent"
          name="postContent"
        />
        <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
          save postk
        </button>
      </form>
    </div>
  );
};
