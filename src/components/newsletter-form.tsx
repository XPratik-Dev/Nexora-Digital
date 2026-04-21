"use client";

import { useState, useTransition } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  return (
    <form
      className="space-y-3"
      onSubmit={(event) => {
        event.preventDefault();
        setMessage(null);

        startTransition(async () => {
          const response = await fetch("/api/newsletter", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
          });

          const payload = (await response.json()) as { message?: string; error?: string };

          if (!response.ok) {
            setMessage(payload.error ?? "Could not subscribe right now.");
            return;
          }

          setEmail("");
          setMessage(payload.message ?? "You're on the list.");
        });
      }}
    >
      <label className="block">
        <span className="sr-only">Email address</span>
        <input
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Work email"
          className="w-full rounded-full border border-white/14 bg-brand-navy px-5 py-3 text-sm text-white placeholder:text-white/35 focus:border-brand-accent focus:outline-none"
        />
      </label>
      <button
        type="submit"
        disabled={isPending}
        className="cta-primary hover:cta-primary-hover disabled:cursor-wait disabled:opacity-70"
      >
        {isPending ? "Subscribing..." : "Subscribe"}
      </button>
      {message ? <p className="text-sm text-white/72">{message}</p> : null}
    </form>
  );
}
