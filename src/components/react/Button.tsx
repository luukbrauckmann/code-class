import type { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ ...props }: Props) {
  return (
    <button {...props} />
  );
}
