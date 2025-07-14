interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ className = '', size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-10 w-10'
  };

  return (
    <img
      src="/assets/logos/abby-logo.jpg"
      alt="Abby Logo"
      className={`${sizeClasses[size]} ${className}`}
    />
  );
}