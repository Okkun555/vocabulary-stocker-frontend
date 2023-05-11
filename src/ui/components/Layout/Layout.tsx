import { ReactNode } from "react";
import Header from "../Header/Header";

type Props = {
  children: ReactNode;
};

export default function Layout(props: Props) {
  return (
    <div>
      <Header />
      <main>{props.children}</main>
    </div>
  );
}
