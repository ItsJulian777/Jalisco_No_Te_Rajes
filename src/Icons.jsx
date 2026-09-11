export function WhatsappIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="white">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1s-.7.8-.9 1c-.2.2-.3.2-.6.1a6.6 6.6 0 0 1-2-1.2 7.4 7.4 0 0 1-1.4-1.7c-.1-.2 0-.4.1-.5l.4-.5c.1-.1.2-.3.2-.4a.5.5 0 0 0 0-.5c-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2c0 1.3.9 2.6 1.1 2.8.1.2 2 3 4.7 4.2a15.9 15.9 0 0 0 1.6.6 3.8 3.8 0 0 0 1.7.1c.5-.1 1.5-.6 1.7-1.2s.2-1.1.2-1.2-.1-.2-.3-.3Z" />
    </svg>
  );
}

export function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none" />
    </svg>
  );
}

export function TiktokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="white">
      <path d="M16.5 3c.3 1.9 1.6 3.4 3.5 3.7v2.6c-1.3 0-2.5-.4-3.5-1.1v6.6a5.4 5.4 0 1 1-5.4-5.4c.2 0 .5 0 .7.1v2.7a2.7 2.7 0 1 0 1.9 2.6V3h2.8Z" />
    </svg>
  );
}

export function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="white">
      <path d="M13.5 22v-8.2h2.75l.4-3.2h-3.15V8.4c0-.93.26-1.56 1.6-1.56h1.7V3.98A22.8 22.8 0 0 0 14.3 3.9c-2.44 0-4.1 1.49-4.1 4.22v2.46H7.44v3.2h2.76V22Z" />
    </svg>
  );
}

export function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="white">
      <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
    </svg>
  );
}

export function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
      <path d="M6 3v7a2 2 0 0 0 4 0V3M8 10v11M18 3c-2 1-3 3-3 6s1 3 3 3v9" />
    </svg>
  );
}

export const ICONS = {
  whatsapp: { Icon: WhatsappIcon, className: "icon whatsapp" },
  instagram: { Icon: InstagramIcon, className: "icon instagram" },
  tiktok: { Icon: TiktokIcon, className: "icon tiktok" },
  facebook: { Icon: FacebookIcon, className: "icon facebook" },
  pin: { Icon: PinIcon, className: "icon pin" },
  menu: { Icon: MenuIcon, className: "icon menu" },
};
