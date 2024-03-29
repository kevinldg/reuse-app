import { useRouter } from "next/router";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import Form from "@/components/Form";
import AccessDeniedMessage from "@/lib/AccessDeniedMessage";

export default function EditIdeas({ ideas, editIdea }) {
  const { status } = useSession();
  const router = useRouter();
  const { id } = router.query;
  const {
    data: ideaToEdit,
    is,
    mutate,
  } = useSWR(id ? `/api/ideas/${id}` : null);

  if (status !== "authenticated") {
    return <AccessDeniedMessage />;
  }

  async function onEdit(data) {
    const response = await fetch(`/api/ideas/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    mutate(`/api/ideas`);
    mutate(`/api/ideas/${id}`);
    router.push("/");
  }
  if (!ideaToEdit || is) {
    return "";
  }

  return (
    <>
      <Form idea={ideaToEdit} onSubmit={onEdit} />
    </>
  );
}
