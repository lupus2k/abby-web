interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ className = '', size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'h-6 w-auto',
    md: 'h-8 w-auto',
    lg: 'h-10 w-auto'
  };

  return (
    <img
      src="/assets/logos/abby-logo.png"
      alt="Abby Logo"
      className={`${sizeClasses[size]} ${className}`}
    />
  );
}