import { Schoolbell } from "next/font/google";

const schoolbell = Schoolbell({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

export default function LatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={`${schoolbell.variable} latin-crazy-font`}>{children}</div>;
}