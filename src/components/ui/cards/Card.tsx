import type { ReactNode } from "react";

interface CardProps {
  titulo: string;
  children: ReactNode;
  color?: string;
}

export const Card = ({ titulo, children, color = "bg-neutral-900" }: CardProps) => {
  return (
    <div className={`${color} rounded-xl p-4 shadow-md`}>
      <h3 className="mb-2 font-semibold">{titulo}</h3>
      {children}
    </div>
  );
};
