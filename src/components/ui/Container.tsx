
import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  title?: string;
  className?: string;
}

export const ContainerLayout = ({ children, title, className = "" }: ContainerProps) => {
  return (
    <div className={`bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 p-6 ${className}`}>
      {title && (
        <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          {title}
        </h2>
      )}
      {children}
    </div>
  );
};