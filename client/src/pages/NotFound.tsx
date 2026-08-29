import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { VariableFontHoverByLetter } from '../components/fancy/variable-font-hover-by-letter';

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center px-6">
      <div className="space-y-8 text-center">
        <span className="eyebrow justify-center">Error 404</span>
        <h1 className="font-sans text-display-lg font-medium leading-none">
          <VariableFontHoverByLetter label="404" fromWeight={400} toWeight={700} />
        </h1>
        <p className="text-lg text-muted-foreground">
          This page wandered off. Let's get you back on track.
        </p>
        <Link
          to="/"
          className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          Back to home
        </Link>
      </div>
    </div>
  );
}
