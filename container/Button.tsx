import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, disabled, type = "button", children, ...props }, ref) => {
        return (
            <button
                className={twMerge(
                    `flex items-center justify-center w-[50px] h-[50px] rounded-full border-2 border-white cursor-pointer`,
                    className
                )}
                type={type}
                disabled={disabled}
                ref={ref}
                {...props}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";
export default Button;
