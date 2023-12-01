"use client";

import { FormButton } from "./create-button";
import { createPost } from "../_actions/create-posts";

export function CreatePost() {
  return (
    <form
      action={createPost}
      key={Math.random()}
      className="flex flex-col gap-2"
    >
      <input
        type="text"
        placeholder="Title"
        name="title"
        className="w-full rounded-full px-4 py-2 text-black"
      />
      <FormButton />
    </form>
  );
}
