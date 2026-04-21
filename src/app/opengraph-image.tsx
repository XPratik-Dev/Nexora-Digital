import { ImageResponse } from "next/og";

export const alt = "Nexora Digital";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, rgba(26,26,46,1) 0%, rgba(20,20,38,1) 55%, rgba(233,69,96,0.92) 100%)",
          color: "white",
          padding: "64px",
          position: "relative",
          overflow: "hidden",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "-60px",
            top: "-40px",
            width: "320px",
            height: "320px",
            borderRadius: "999px",
            background: "rgba(255,255,255,0.08)",
            filter: "blur(4px)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <div
              style={{
                width: "88px",
                height: "88px",
                borderRadius: "24px",
                background: "rgba(255,255,255,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "42px",
                fontWeight: 700,
              }}
            >
              N
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ fontSize: "34px", fontWeight: 700, letterSpacing: "0.32em" }}>
                NEXORA
              </div>
              <div style={{ marginTop: "6px", fontSize: "18px", letterSpacing: "0.28em", opacity: 0.75 }}>
                DIGITAL
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "22px", maxWidth: "800px" }}>
            <div style={{ fontSize: "78px", fontWeight: 700, lineHeight: 1 }}>
              We Turn Clicks Into Clients.
            </div>
            <div style={{ fontSize: "28px", lineHeight: 1.4, opacity: 0.84 }}>
              Performance-driven marketing for e-commerce, SaaS, and professional
              services brands.
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
