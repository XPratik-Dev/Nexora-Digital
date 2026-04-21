"use client";

import { startTransition, useState, useTransition } from "react";
import { budgetRanges } from "@/data/site";
import { services } from "@/data/services";

type FormState = {
  name: string;
  email: string;
  company: string;
  serviceNeeded: string;
  budgetRange: string;
  goals: string;
  website: string;
};

const defaultState: FormState = {
  name: "",
  email: "",
  company: "",
  serviceNeeded: services[0]?.slug ?? "seo",
  budgetRange: budgetRanges[1] ?? "$2,500-$5,000",
  goals: "",
  website: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(defaultState);
  const [message, setMessage] = useState<string | null>(null);
  const [isPending, startSubmit] = useTransition();

  function setField<K extends keyof FormState>(key: K, value: FormState[K]) {
    startTransition(() => {
      setForm((current) => ({ ...current, [key]: value }));
    });
  }

  return (
    <form
      className="grid gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        setMessage(null);

        startSubmit(async () => {
          const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
          });

          const payload = (await response.json()) as {
            message?: string;
            error?: string;
          };

          if (!response.ok) {
            setMessage(payload.error ?? "Something went wrong.");
            return;
          }

          setForm(defaultState);
          setMessage(
            payload.message ??
              "Thanks. We received your request and will reply within one business day.",
          );
        });
      }}
    >
      <input
        type="text"
        value={form.website}
        onChange={(event) => setField("website", event.target.value)}
        autoComplete="off"
        tabIndex={-1}
        className="hidden"
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-brand-navy">
          Name
          <input
            type="text"
            required
            value={form.name}
            onChange={(event) => setField("name", event.target.value)}
            className="rounded-[1.2rem] border border-brand-silver bg-white px-4 py-3 text-sm text-brand-charcoal focus:border-brand-accent focus:outline-none"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-brand-navy">
          Email
          <input
            type="email"
            required
            value={form.email}
            onChange={(event) => setField("email", event.target.value)}
            className="rounded-[1.2rem] border border-brand-silver bg-white px-4 py-3 text-sm text-brand-charcoal focus:border-brand-accent focus:outline-none"
          />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-brand-navy">
          Company
          <input
            type="text"
            required
            value={form.company}
            onChange={(event) => setField("company", event.target.value)}
            className="rounded-[1.2rem] border border-brand-silver bg-white px-4 py-3 text-sm text-brand-charcoal focus:border-brand-accent focus:outline-none"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-brand-navy">
          Service needed
          <select
            required
            value={form.serviceNeeded}
            onChange={(event) => setField("serviceNeeded", event.target.value)}
            className="rounded-[1.2rem] border border-brand-silver bg-white px-4 py-3 text-sm text-brand-charcoal focus:border-brand-accent focus:outline-none"
          >
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.title}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="grid gap-2 text-sm font-medium text-brand-navy">
        Budget range
        <select
          required
          value={form.budgetRange}
          onChange={(event) => setField("budgetRange", event.target.value)}
          className="rounded-[1.2rem] border border-brand-silver bg-white px-4 py-3 text-sm text-brand-charcoal focus:border-brand-accent focus:outline-none"
        >
          {budgetRanges.map((range) => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm font-medium text-brand-navy">
        Growth goal
        <textarea
          rows={5}
          value={form.goals}
          onChange={(event) => setField("goals", event.target.value)}
          placeholder="What are you trying to improve over the next 90 days?"
          className="rounded-[1.2rem] border border-brand-silver bg-white px-4 py-3 text-sm text-brand-charcoal focus:border-brand-accent focus:outline-none"
        />
      </label>
      <button
        type="submit"
        disabled={isPending}
        className="cta-primary hover:cta-primary-hover disabled:cursor-wait disabled:opacity-70"
      >
        {isPending ? "Sending..." : "Send inquiry"}
      </button>
      {message ? <p className="text-sm text-brand-charcoal/76">{message}</p> : null}
    </form>
  );
}
