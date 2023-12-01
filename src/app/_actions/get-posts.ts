"use server";
import { getServerAuthSession } from "@/server/auth";
import { db } from "@/server/db";

export const getAllPosts = async () => {
  return await db.post.findMany({
    orderBy: { createdAt: "desc" },
  });
};

export const getAllPostsFromUser = async () => {
  const session = await getServerAuthSession();
  const user = session?.user;
  if (!user) {
    throw new Error("Not logged in");
  }
  return await db.post.findMany({
    where: { createdBy: { id: user.id } },
    orderBy: { createdAt: "desc" },
  });
};
