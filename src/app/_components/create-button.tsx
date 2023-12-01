"use client";

import { useEffect } from "react";
import { useFormStatus } from "react-dom";

export const FormButton = () => {
  const { pending } = useFormStatus();
  useEffect(() => {
    console.log("pending", pending);
  }, [pending]);

  return (
    <button
      type="submit"
      className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"
      disabled={pending}
    >
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
};
