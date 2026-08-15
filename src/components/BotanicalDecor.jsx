export function LeafCorner({ className = '', flip = false }) {
  return (
    <svg
      className={`botanical-leaf ${className} ${flip ? 'botanical-leaf--flip' : ''}`}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M8 72C8 72 4 48 16 32C28 16 48 8 72 4C72 4 56 20 52 36C48 52 32 64 8 72Z"
        stroke="currentColor"
        strokeWidth="0.8"
        fill="none"
        opacity="0.5"
      />
      <path
        d="M20 60C28 48 40 36 56 28"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.35"
      />
      <path
        d="M24 52C32 44 44 34 58 26"
        stroke="currentColor"
        strokeWidth="0.4"
        opacity="0.25"
      />
    </svg>
  )
}

export function LeafDivider() {
  return (
    <div className="leaf-divider" aria-hidden="true">
      <svg viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="12" x2="42" y2="12" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
        <path
          d="M52 12C52 8 56 4 60 4C64 4 68 8 68 12C68 16 64 20 60 20C56 20 52 16 52 12Z"
          stroke="currentColor"
          strokeWidth="0.6"
          fill="none"
          opacity="0.5"
        />
        <path
          d="M58 8C62 10 64 14 64 18"
          stroke="currentColor"
          strokeWidth="0.4"
          opacity="0.35"
        />
        <line x1="78" y1="12" x2="120" y2="12" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
      </svg>
    </div>
  )
}

export function SmallSprig({ className = '' }) {
  return (
    <svg
      className={`botanical-sprig ${className}`}
      viewBox="0 0 40 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M20 58V20"
        stroke="currentColor"
        strokeWidth="0.6"
        opacity="0.4"
      />
      <path
        d="M20 40C14 36 8 34 4 30"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.35"
      />
      <path
        d="M20 32C26 28 32 24 36 18"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.35"
      />
      <ellipse cx="6" cy="28" rx="4" ry="2.5" stroke="currentColor" strokeWidth="0.4" opacity="0.3" transform="rotate(-30 6 28)" />
      <ellipse cx="34" cy="16" rx="4" ry="2.5" stroke="currentColor" strokeWidth="0.4" opacity="0.3" transform="rotate(25 34 16)" />
    </svg>
  )
}
