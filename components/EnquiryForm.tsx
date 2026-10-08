"use client";

import { useActionState } from "react";
import { submitEnquiry, type EnquiryState } from "@/app/actions";
import { SERVICES } from "@/lib/services";

const field = "mt-2 block w-full border-0 border-b-2 border-canal/40 bg-transparent px-0 py-3 text-lg text-canal placeholder:text-graphite/60 focus:border-copper-deep focus:outline-none focus:ring-0";
const label = "block font-medium";
const initial: EnquiryState = { status: "idle", message: "" };

/** `full` adds service, urgency and email. Always rendered on a light (bone) background. */
export function EnquiryForm({ full = false }: { full?: boolean }) {
  const [state, action, pending] = useActionState(submitEnquiry, initial);

  return (
    <form action={action} className="grid gap-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <label className={label}>Name<input name="name" type="text" autoComplete="name" required className={field} /></label>
        <label className={label}>Phone<input name="phone" type="tel" autoComplete="tel" required className={field} /></label>
      </div>
      <div className="grid gap-8 sm:grid-cols-2">
        <label className={label}>Postcode<input name="postcode" type="text" autoComplete="postal-code" className={field} /></label>
        {full && <label className={label}>Email (optional)<input name="email" type="email" autoComplete="email" className={field} /></label>}
      </div>

      {full && (
        <>
          <label className={label}>
            What do you need help with?
            <select name="service" defaultValue="" className={`${field} appearance-none`}>
              <option value="">Not sure / something else</option>
              {SERVICES.map((s) => <option key={s.slug} value={s.name}>{s.name}</option>)}
            </select>
          </label>
          <fieldset>
            <legend className={label}>How urgent is it?</legend>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              {["Emergency: water escaping now", "Today or tomorrow", "Planned job"].map((u, i) => (
                <label key={u} className="flex min-h-14 cursor-pointer items-center gap-3 border border-canal/30 px-4 has-[:checked]:border-canal has-[:checked]:bg-canal has-[:checked]:text-bone">
                  <input type="radio" name="urgency" value={u} defaultChecked={i === 1} className="sr-only" />
                  <span className="text-sm font-medium leading-tight">{u}</span>
                </label>
              ))}
            </div>
          </fieldset>
        </>
      )}

      <label className={label}>What’s the problem?<textarea name="message" rows={full ? 5 : 4} required className={field} /></label>
      <input name="company" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />

      <div>
        <button
          type="submit"
          disabled={pending}
          className="btn btn-ghost min-h-14 w-full bg-canal px-8 font-display text-lg font-semibold text-bone disabled:opacity-60 sm:w-auto [&::before]:bg-copper hover:text-canal"
        >
          {pending ? "Sending…" : "Send request"}
        </button>
        <p role="status" aria-live="polite" className={`mt-4 text-sm ${state.status === "error" ? "font-medium text-copper-deep" : "text-graphite"}`}>
          {state.message}
        </p>
      </div>
    </form>
  );
}
