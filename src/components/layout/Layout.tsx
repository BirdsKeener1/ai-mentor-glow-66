import { AnimatedBackground } from '@/components/animations/AnimatedBackground';
import { Navbar } from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <AnimatedBackground />
      <Navbar />
      <main className="pt-16">
        {children}
      </main>
    </div>
  );
};