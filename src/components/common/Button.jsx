import React from 'react';
import './Button.css';

export default function Button({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass' | 'white'
  size = 'md', // 'sm' | 'md' | 'lg'
  icon: Icon,
  iconPosition = 'right',
  fullWidth = false,
  className = '',
  onClick,
  href,
  target,
  rel,
  disabled = false,
  type = 'button',
  ...props
}) {
  const btnClasses = `citi-btn citi-btn--${variant} citi-btn--${size} ${fullWidth ? 'citi-btn--full' : ''} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="citi-btn__icon citi-btn__icon--left" size={size === 'lg' ? 20 : 18} />}
      <span className="citi-btn__text">{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="citi-btn__icon citi-btn__icon--right" size={size === 'lg' ? 20 : 18} />}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={btnClasses}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
        onClick={onClick}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={btnClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
}
