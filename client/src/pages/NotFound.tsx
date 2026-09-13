import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useDocumentMeta } from "@/lib/useDocumentMeta";

export default function NotFound() {
  useDocumentMeta("404 — Allyson Keightley");

  return (
    <div className="flex min-h-[80vh] items-center justify-center px-6">
      <div className="space-y-8 text-center">
        <h1 className="display text-display-lg">404</h1>
        <p className="text-lg text-muted-foreground">
          This page wandered off. Let&rsquo;s get you back on track.
        </p>
        <Link
          to="/"
          className="group inline-flex items-center gap-2 border border-foreground px-6 py-3 text-sm font-medium transition-colors hover:bg-foreground hover:text-background"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          Back to home
        </Link>
      </div>
    </div>
  );
}
