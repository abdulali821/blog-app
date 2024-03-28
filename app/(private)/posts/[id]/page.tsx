import NotFound from "@/app/not-found";
import { getCommentsByPostId, getPostById } from "@/app/slices/api";
import { BlogPostSkeleton, Error, PostPage } from "@/components";
import { store } from "@/provider/store";
import { Metadata } from "next";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { data: postData } = await store.dispatch(
    getPostById.initiate(params.id)
  );

  return {
    title: postData?.title + " - Blog App",
    description: postData?.body,
  };
}

const PostLayout = async ({ params }: Props) => {
  const {
    data: postData,
    isLoading: postLoading,
    isError: postError,
  } = await store.dispatch(getPostById.initiate(params.id));
  const {
    data: commentData,
    isLoading: commentLoading,
    isError: commentError,
  } = await store.dispatch(getCommentsByPostId.initiate(params.id));

  if (postLoading || commentLoading) {
    return <BlogPostSkeleton />;
  }

  if (postError || commentError) {
    return <NotFound />;
  }

  return <PostPage post={postData} comments={commentData} />;
};

export default PostLayout;
