"use server";

import { getServerAuthSession } from "@/server/auth";
import { db } from "@/server/db";
import { revalidatePath } from "next/cache";

export const createPost = async (formData: FormData) => {
  const session = await getServerAuthSession();
  const user = session?.user;
  const title = formData.get("title") as string;
  if (!user) {
    throw new Error("Not logged in");
  }

  const newPost = await db.post.create({
    data: {
      name: title,
      createdBy: { connect: { id: user.id } },
    },
  });
  if (!newPost) {
    throw new Error("Failed to create post");
  }
  revalidatePath("/");
  return newPost;
};
