import { useState, type ChangeEvent, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Check, LoaderCircle } from "lucide-react";

type Status = "idle" | "sending" | "success" | "error";

const fieldStyle =
  "w-full rounded-lg border border-line bg-page px-5 py-4 text-ink outline-none transition focus:border-coral focus:shadow-[0_0_0_4px_rgba(240,95,87,0.2)]";

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-3xl border border-line bg-card p-6 dark:bg-card/30 md:p-8"
    >
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Your name"
        aria-label="Your name"
        required
        className={fieldStyle}
      />
      <input
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Your email"
        aria-label="Your email"
        required
        className={fieldStyle}
      />
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Tell me about your project"
        aria-label="Message"
        rows={5}
        required
        className={fieldStyle}
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className={`flex w-full items-center justify-center gap-2 rounded-lg px-6 py-4 font-medium text-white transition hover:opacity-90 disabled:opacity-70 ${
          status === "success" ? "bg-green-600" : "bg-coral"
        }`}
      >
        {status === "sending" && (
          <>
            <LoaderCircle className="animate-spin" size={20} /> Sending
          </>
        )}
        {status === "success" && (
          <>
            <Check size={20} /> Message sent
          </>
        )}
        {(status === "idle" || status === "error") && "Send message"}
      </button>

      {status === "error" && (
        <p role="alert" className="text-sm text-coral">
          Something went wrong. Please email me directly instead.
        </p>
      )}
    </form>
  );
}

export default ContactForm;
