import { useEffect } from "react";

/** Per-route document title + description for a client-rendered SPA. */
export const useDocumentMeta = (title: string, description?: string) => {
  useEffect(() => {
    document.title = title;
    if (description) {
      const el = document.querySelector<HTMLMetaElement>('meta[name="description"]');
      if (el) el.content = description;
    }
  }, [title, description]);
};
