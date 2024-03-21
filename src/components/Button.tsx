import clsx from 'clsx';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface BaseProps {
  children: ReactNode;
  style?: 'pill' | 'round';
  variant?: 'primary' | 'secondary';
}

interface ButtonLinkProps extends BaseProps {
  to: string;
}

interface ButtonProps extends BaseProps {
  type: 'submit' | 'reset' | 'button';
}

function Button(props: ButtonLinkProps | ButtonProps) {
  const { style = 'pill', variant = 'primary', ...otherProps } = props;
  const className = clsx('button', {
    [`button--${style}`]: style,
    [`button--${variant}`]: variant,
  });

  if ('to' in otherProps) {
    return <Link className={className} {...otherProps} />;
  }

  return <button className={className} {...otherProps} />;
}

export default Button;
