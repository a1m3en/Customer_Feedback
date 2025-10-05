import React from "react";
import Link from "next/link";

export default function ItemPage({ params }) {
  const { category, slug } = params;
  const title = slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <main style={{ padding: 48 }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <h1>{title}</h1>
        <p>Category: {category}</p>
        <p>This is a placeholder page for <strong>{title}</strong>. Replace with real content.</p>
        <p><Link href="/">Back home</Link></p>
      </div>
    </main>
  );
}

// Provide static params so `next export` can generate these pages.
// This mirrors the LINKS used in the navbar. Update this list when you add
// new customer/case-study items.
export async function generateStaticParams() {
  const LINKS = [
    {
      label: "Product",
      children: [
        { title: "Product Tour" },
        { title: "Changelog" },
        { title: "Integrations" },
      ],
    },
    {
      label: "Customers",
      children: [
        { title: "Canva" },
        { title: "Notion" },
        { title: "Apollo" },
        { title: "Figma" },
      ],
    },
    {
      label: "Solutions",
      children: [
        { title: "Product Teams" },
        { title: "Support" },
        { title: "Research" },
      ],
    },
    {
      label: "Resources",
      children: [
        { title: "Templates" },
        { title: "Docs" },
        { title: "Community" },
      ],
    },
  ];

  const params = [];
  for (const l of LINKS) {
    if (!l.children || !l.children.length) continue;
    const category = l.label.toLowerCase();
    for (const c of l.children) {
      const slug = c.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      params.push({ category, slug });
    }
  }

  // Add a couple of safe defaults (optional)
  params.push({ category: 'product', slug: 'example-item' });
  params.push({ category: 'customers', slug: 'notion-case-study' });

  return params;
}
