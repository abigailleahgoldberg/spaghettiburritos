import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Spaghetti Burritos — The Internet's Worst Best Website";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#FF0000",
          color: "#FFD700",
          fontFamily: "Arial Black, Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 120,
            height: 120,
            borderRadius: "50%",
            backgroundColor: "#FFD700",
            fontSize: 48,
            marginBottom: 24,
            color: "#FF0000",
            fontWeight: 900,
          }}
        >
          SB
        </div>
        <div style={{ fontSize: 64, fontWeight: 900, marginBottom: 12, color: "#FFFFFF" }}>
          Spaghetti Burritos
        </div>
        <div style={{ fontSize: 28, color: "#FFD700", marginBottom: 8 }}>
          The Internet&#39;s Worst Best Website
        </div>
        <div style={{ fontSize: 22, color: "#FFFFFF", opacity: 0.8 }}>
          spaghettiburritos.com
        </div>
      </div>
    ),
    { ...size }
  );
}
