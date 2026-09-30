import type { AnchorHTMLAttributes, ReactNode } from "react";

type SiteLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  href: string;
};

/**
 * Internal links use normal document navigation so every route remains reliable
 * on the deployed Cloudflare Worker, even when client-side routing is unavailable.
 */
export function SiteLink({ children, href, ...props }: SiteLinkProps) {
  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
}
