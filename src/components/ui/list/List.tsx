import type { ReactNode } from "react";

interface ListProps<T> {
  items: T[];
  render: (item: T) => ReactNode;
}

export const List = <T,>({ items, render }: ListProps<T>) => {
  return (
    <ul className="list-inside list-disc space-y-1">
      {items.map((item, i) => (
        <li key={i}>{render(item)}</li>
      ))}
    </ul>
  );
};
