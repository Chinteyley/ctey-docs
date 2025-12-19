"use client";

import { motion } from "motion/react";
import { Mail, Github, Twitter } from "lucide-react";
import Link from "next/link";

const contacts = [
  {
    label: "chintey@ctey.dev",
    icon: Mail,
    href: "mailto:chintey@ctey.dev",
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
    <div className="h-full flex flex-col">
      <h2 className="text-lg font-semibold mb-4">Get in Touch</h2>
      <div className="flex flex-wrap gap-3">
        {contacts.map((contact, i) => {
          const content = (
            <motion.div
              key={contact.label}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 + i * 0.1, duration: 0.3 }}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl bg-muted/50 ${
                contact.href ? "hover:bg-muted transition-colors cursor-pointer" : ""
              }`}
            >
              <contact.icon className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">{contact.label}</span>
            </motion.div>
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
