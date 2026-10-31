import { createFileRoute } from "@tanstack/react-router";

import { MocklabWorkspace } from "@/components/MocklabWorkspace";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mocklab — Unseen Pre-Boards & Mark Schemes for CAIE & Edexcel" },
      {
        name: "description",
        content:
          "Generate unseen, mathematically verified mock exam papers and official M1/A1/B1 examiner mark schemes from O-Level and A-Level past paper questions.",
      },
      { property: "og:title", content: "Mocklab — Unseen Pre-Boards & Examiner Mark Schemes" },
      {
        property: "og:description",
        content: "Isomorphic CAIE & Edexcel mock papers with verified examiner mark schemes, ready to print.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <MocklabWorkspace />;
}
