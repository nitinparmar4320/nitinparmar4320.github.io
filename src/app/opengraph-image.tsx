import { ImageResponse } from 'next/og';

export const alt = 'Nitin Parmar — Full Stack Developer';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#F8F7F2',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
          border: '14px solid #EDECE4',
        }}
      >
        {/* Top Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '12px',
                backgroundColor: '#F2F1EA',
                border: '2px solid #DEDED6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '28px',
                fontWeight: 800,
                color: '#20211F',
              }}
            >
              <span>N</span>
              <span style={{ color: '#E5533D', fontStyle: 'italic' }}>P</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '28px', fontWeight: 800, color: '#20211F', letterSpacing: '-0.02em' }}>
                NITIN PARMAR
              </span>
              <span style={{ fontSize: '16px', color: '#8C8E85', fontFamily: 'monospace', letterSpacing: '0.05em' }}>
                FULL STACK DEVELOPER
              </span>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              padding: '10px 20px',
              backgroundColor: '#EDECE4',
              borderRadius: '6px',
              fontFamily: 'monospace',
              fontSize: '16px',
              color: '#20211F',
              border: '1px solid #DEDED6',
            }}
          >
            AHMEDABAD, INDIA • 23.02° N
          </div>
        </div>

        {/* Center Headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              fontSize: '54px',
              lineHeight: 1.15,
              fontWeight: 600,
              color: '#20211F',
              letterSpacing: '-0.03em',
              maxWidth: '1000px',
            }}
          >
            <span>Building thoughtful digital experiences,</span>
            <span style={{ color: '#E5533D', fontStyle: 'italic', marginLeft: '12px', marginRight: '12px' }}>
              from interface
            </span>
            <span>to infrastructure.</span>
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: '24px',
              color: '#63655E',
              lineHeight: 1.5,
              maxWidth: '820px',
            }}
          >
            React.js • Next.js • Node.js • TypeScript • PostgreSQL • Microservices
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '2px solid #DEDED6',
            paddingTop: '28px',
            fontFamily: 'monospace',
            fontSize: '18px',
            color: '#8C8E85',
          }}
        >
          <span>PRODUCTION-PROVEN ARCHITECTURES</span>
          <span style={{ color: '#E5533D', fontWeight: 700 }}>nitinparmar.dev</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
