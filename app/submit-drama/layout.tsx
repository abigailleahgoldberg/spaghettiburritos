import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Submit Your Drama | Spaghetti Burritos',
  description: 'Drop the tea anonymously. Our AI turns your mess into a masterpiece of comedic fiction. No name, no email, no consequences.',
};

export default function SubmitDramaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
