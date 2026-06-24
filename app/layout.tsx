import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "대화에서 위임으로 — AI에게 일을 맡기는 방식의 진화",
  description: "AI 활용 5단계 인터랙티브 강의 슬라이드",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full">
      <body className="h-full overflow-hidden">{children}</body>
    </html>
  );
}
