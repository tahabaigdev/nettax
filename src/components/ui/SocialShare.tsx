import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

interface SocialShareProps {
  title: string;
  url: string;
}

const SocialShare = ({ title, url }: SocialShareProps) => {
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);

  const socialLinks = [
    {
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      Icon: Facebook,
      title: "Share on Facebook",
    },
    {
      href: "",
      Icon: Instagram,
      title: "Share on Instagram",
    },
    {
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      Icon: Twitter,
      title: "Share on Twitter",
    },
    {
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      Icon: Linkedin,
      title: "Share on LinkedIn",
    },
  ];

  return (
    <ul className="flex items-center gap-[2rem]">
      {socialLinks.map((item, idx) => (
        <li key={idx}>
          <a
            href={item.href}
            title={item.title}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <item.Icon className="size-[2rem] opacity-70 group-hover:opacity-100" />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialShare;
