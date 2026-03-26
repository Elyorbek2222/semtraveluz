import { ImageResponse } from "next/og";

export const alt = "SEM Travel — Sayohat Agentligi Toshkent";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(160deg, #0057A8 0%, #003F7A 100%)",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Background pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.05,
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #fff 1px, transparent 1px), radial-gradient(circle at 80% 20%, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(255,255,255,0.15)",
            border: "1px solid rgba(255,255,255,0.3)",
            borderRadius: 50,
            padding: "8px 20px",
            marginBottom: 24,
            color: "white",
            fontSize: 18,
            fontWeight: 600,
          }}
        >
          ✈️ Toshkentdagi ishonchli sayohat agentligi
        </div>

        {/* Logo placeholder + Title */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 16,
              background: "rgba(255,255,255,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
            }}
          >
            🌍
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "white", fontSize: 56, fontWeight: 900, lineHeight: 1 }}>
              SEM Travel
            </span>
            <span style={{ color: "#F5C518", fontSize: 22, fontWeight: 700 }}>
              semtravel.uz
            </span>
          </div>
        </div>

        {/* Subtitle */}
        <p
          style={{
            color: "rgba(255,255,255,0.8)",
            fontSize: 22,
            textAlign: "center",
            maxWidth: 700,
            lineHeight: 1.4,
            marginBottom: 40,
          }}
        >
          50+ mamlakatga tur paketlar • Viza yordam • Mehmonxona bron
        </p>

        {/* Stats row */}
        <div style={{ display: "flex", gap: 40 }}>
          {[
            { num: "2011", label: "Yildan beri" },
            { num: "30 000+", label: "Mamnun mijoz" },
            { num: "50+", label: "Mamlakat" },
            { num: "15+", label: "Yil tajriba" },
          ].map((s) => (
            <div
              key={s.num}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "rgba(255,255,255,0.12)",
                borderRadius: 16,
                padding: "16px 24px",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <span style={{ color: "#F5C518", fontSize: 28, fontWeight: 900 }}>{s.num}</span>
              <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, marginTop: 4 }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* Phone */}
        <div
          style={{
            position: "absolute",
            bottom: 30,
            color: "rgba(255,255,255,0.5)",
            fontSize: 16,
          }}
        >
          📞 +998 71 275-55-55 • +998 94 664-22-22
        </div>
      </div>
    ),
    { ...size }
  );
}
