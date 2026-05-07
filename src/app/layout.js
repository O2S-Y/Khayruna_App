import "./globals.css";

export const metadata = {
  title: "Khayruna Premium Web Dashboard",
  description: "Khayruna uses AI to instantly turn your chaotic group chats into structured threads, actionable tasks, and formal ideas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        <div className="ambient-bg">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
