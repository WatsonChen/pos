"use client";
import Link from "next/link";

export default function AdminHomePage() {
  const links = [
    { href: "/admin/dashboard", label: "Dashboard" },
    { href: "/admin/menu", label: "菜單管理" },
    { href: "/admin/order", label: "訂單管理" },
    { href: "/admin/stock", label: "庫存管理" },
  ];

  return (
    <div style={{ padding: "2rem" }}>
      <h1>後台管理系統</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {links.map((link) => (
          <li key={link.href} style={{ margin: "1rem 0" }}>
            <Link
              href={link.href}
              style={{ fontSize: "1.2rem", color: "#0070f3" }}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
