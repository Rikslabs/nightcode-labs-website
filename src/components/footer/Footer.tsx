import { NightCoreMark } from "@/components/layout/NightCoreMark";
import styles from "./Footer.module.css";

type FooterLink = { label: string; href: string };
type ProductLink = FooterLink & { status: string };

const navigation: readonly FooterLink[] = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "NightCore", href: "#nightcore" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Engineering Status", href: "#console" },
];

const products: readonly ProductLink[] = [
  { label: "JARVIS", status: "Developer Preview", href: "#cta" },
  { label: "AI Smart Attendance", status: "Active Project", href: "#products" },
  { label: "NightCode Platform", status: "In Development", href: "#products" },
];

function LinkGroup({ heading, links }: { heading: string; links: readonly FooterLink[] }) {
  return <nav aria-label={`${heading} navigation`}><h2 className={styles.heading}>{heading}</h2><div className={styles.nav}>{links.map((link) => <a key={link.label} className={styles.link} href={link.href}>{link.label}</a>)}</div></nav>;
}

export function Footer() {
  return <footer className={styles.footer}><div className="container-shell"><div className={styles.top}><div className={styles.brand}><a href="#home" aria-label="NightCode Labs home"><NightCoreMark className={styles.mark} /></a><p className="text-base font-medium text-pure-white">NightCode Labs</p><p className={styles.motto}>Engineering Tomorrow. Today.</p><p className={styles.description}>Building intelligent software with an engineering-first mindset.</p></div><LinkGroup heading="Navigate" links={navigation} /><nav aria-label="Products navigation"><h2 className={styles.heading}>Products</h2><div className={styles.nav}>{products.map((product) => <div className={styles.product} key={product.label}><a className={styles.link} href={product.href}>{product.label}</a><span className={styles.productStatus}>{product.status}</span></div>)}</div></nav></div><div className={styles.bottom}><span>© 2026 NightCode Labs. All rights reserved.</span><span className={styles.version}>Website v1.0</span></div></div></footer>;
}
