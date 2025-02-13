import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Spalatorie covoare Timisoara MOCHETINO';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

const CheckIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    style={{ display: 'inline-block' }}
  >
    <path
      d="M20 6L9 17L4 12"
      stroke="#FF0000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to right, white, #FEE2E2)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
          fontFamily: 'system-ui',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
          }}
        >
          {/* Logo would be here */}
          <div
            style={{
              fontSize: 60,
              fontWeight: 'bold',
              color: '#FF0000',
              textAlign: 'center',
              marginBottom: '20px',
            }}
          >
            MOCHETINO
          </div>
          <div
            style={{
              fontSize: 40,
              color: '#1F2937',
              textAlign: 'center',
              marginBottom: '40px',
            }}
          >
            Spălătorie profesională de covoare Timișoara
          </div>
          <div
            style={{
              display: 'flex',
              gap: '40px',
              marginTop: '20px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'white',
                padding: '12px 24px',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              }}
            >
              <CheckIcon />
              <span style={{ color: '#4B5563', fontSize: 20 }}>Livrare gratuită</span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'white',
                padding: '12px 24px',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              }}
            >
              <CheckIcon />
              <span style={{ color: '#4B5563', fontSize: 20 }}>Calitate garantată</span>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
} 