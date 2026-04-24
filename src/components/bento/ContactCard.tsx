import { Mail, Github, Twitter } from "lucide-react";
import Link from "next/link";

const contacts = [
  {
    label: "hello@ctey.dev",
    icon: Mail,
    href: "mailto:hello@ctey.dev",
  },
  {
    label: "@chinteyley",
    icon: Github,
    href: "https://github.com/chinteyley",
    external: true,
  },
  {
    label: "@kimteyley",
    icon: Twitter,
    href: "https://x.com/kimteyley",
    external: true,
  },
];

export function ContactCard() {
  return (
    <div className="flex h-full flex-col">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-lg font-semibold">Get in Touch</h2>
        <span className="font-mono text-[0.65rem] uppercase text-muted-foreground/70">
          Open channel
        </span>
      </div>

      <div className="flex flex-wrap gap-3">
        {contacts.map((contact) => {
          const content = (
            <span className="nothing-command">
              <contact.icon className="h-4 w-4 text-foreground" />
              <span className="text-sm font-medium">{contact.label}</span>
            </span>
          );

          if (contact.href) {
            return (
              <Link
                key={contact.label}
                href={contact.href}
                target={contact.external ? "_blank" : undefined}
                rel={contact.external ? "noopener noreferrer" : undefined}
              >
                {content}
              </Link>
            );
          }

          return content;
        })}
      </div>
    </div>
  );
}
