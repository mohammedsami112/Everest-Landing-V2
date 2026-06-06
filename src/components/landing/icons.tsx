import type { SVGProps } from "react";

type IconProps = Omit<SVGProps<SVGSVGElement>, "stroke"> & {
  size?: number;
  stroke?: number;
};

const IconBase = ({
  children,
  size = 24,
  stroke = 1.6,
  ...rest
}: IconProps & { children: React.ReactNode }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={stroke}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...rest}
  >
    {children}
  </svg>
);

export const IconTree = (p: IconProps) => (
  <IconBase {...p}>
    <path d="M12 3c-2.5 2-4 4-4 6 0 1.6 1 2.6 2.2 3M12 3c2.5 2 4 4 4 6 0 1.6-1 2.6-2.2 3" />
    <path d="M7.5 9.5c-2 1.4-3 3-3 4.8 0 1.5 1 2.7 2.5 3M16.5 9.5c2 1.4 3 3 3 4.8 0 1.5-1 2.7-2.5 3" />
    <path d="M9 16c-1.5 0-3 .8-3 2.2 0 1.5 1.8 2.3 6 2.3s6-.8 6-2.3c0-1.4-1.5-2.2-3-2.2" />
    <path d="M12 13v8" />
  </IconBase>
);

export const IconBuilding = (p: IconProps) => (
  <IconBase {...p}>
    <path d="M4 21V8l8-4 8 4v13" />
    <path d="M4 21h16" />
    <path d="M9 12h.01M12 12h.01M15 12h.01M9 16h.01M12 16h.01M15 16h.01" />
    <path d="M10 21v-4h4v4" />
  </IconBase>
);

export const IconPin = (p: IconProps) => (
  <IconBase {...p}>
    <path d="M12 21s-7-6.5-7-12a7 7 0 1 1 14 0c0 5.5-7 12-7 12z" />
    <circle cx="12" cy="9" r="2.5" />
  </IconBase>
);

export const IconLeaf = (p: IconProps) => (
  <IconBase {...p}>
    <path d="M4 20c0-8 5-13 16-14 0 9-5 14-12 14-2 0-4-1-4-3z" />
    <path d="M4 20c5-6 9-8 12-9" />
  </IconBase>
);

export const IconGlobe = (p: IconProps) => (
  <IconBase {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 3 4 6.5 4 9s-1.5 6-4 9c-2.5-3-4-6.5-4-9s1.5-6 4-9z" />
  </IconBase>
);

export const IconChart = (p: IconProps) => (
  <IconBase {...p}>
    <path d="M3 21h18" />
    <path d="M6 17v-5M10 17v-9M14 17v-6M18 17v-11" />
  </IconBase>
);

export const IconCheck = (p: IconProps) => (
  <IconBase {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M8 12.5l2.5 2.5L16 9.5" />
  </IconBase>
);

export const IconAward = (p: IconProps) => (
  <IconBase {...p}>
    <circle cx="12" cy="9" r="5.5" />
    <path d="M8.5 13.5L7 21l5-3 5 3-1.5-7.5" />
    <path d="M12 7v4M10 9h4" />
  </IconBase>
);

export const IconHeadphones = (p: IconProps) => (
  <IconBase {...p}>
    <path d="M4 15v-3a8 8 0 0 1 16 0v3" />
    <path d="M4 15v3a2 2 0 0 0 2 2h1v-7H6a2 2 0 0 0-2 2zM20 15v3a2 2 0 0 1-2 2h-1v-7h1a2 2 0 0 1 2 2z" />
  </IconBase>
);

export const IconShield = (p: IconProps) => (
  <IconBase {...p}>
    <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" />
    <path d="M9 12l2 2 4-4" />
  </IconBase>
);

export const IconArrow = ({ size = 18, stroke: _s, ...rest }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...rest}
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const IconCompass = (p: IconProps) => (
  <IconBase {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 3v2M12 19v2M3 12h2M19 12h2" />
    <path d="M15 9l-1.5 4.5L9 15l1.5-4.5L15 9z" />
  </IconBase>
);

export const IconPhone = (p: IconProps) => (
  <IconBase {...p}>
    <path d="M5 4h3l2 5-2 1a11 11 0 0 0 6 6l1-2 5 2v3a2 2 0 0 1-2 2A17 17 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </IconBase>
);

export const IconMail = (p: IconProps) => (
  <IconBase {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </IconBase>
);

export const IconWA = (p: IconProps) => (
  <IconBase {...p}>
    <path d="M4 20l1.5-4A8 8 0 1 1 9 19.5L4 20z" />
    <path d="M9 10.5c.5 2 2 3.5 4 4l1.5-1.2 2.2 1c-.3 1.3-1.4 2-2.7 2-3 0-6-3-6-6 0-1.3.7-2.4 2-2.7l1 2.2L9 10.5z" />
  </IconBase>
);

export const IconMenu = (p: IconProps) => (
  <IconBase {...p}>
    <path d="M4 7h16M4 12h16M4 17h10" />
  </IconBase>
);

export const IconHome = (p: IconProps) => (
  <IconBase {...p}>
    <path d="M4 10.5 12 4l8 6.5" />
    <path d="M6 9.5V20h12V9.5" />
    <path d="M10 20v-5h4v5" />
  </IconBase>
);

export const IconBed = (p: IconProps) => (
  <IconBase {...p}>
    <path d="M3 18v-6h14a2 2 0 0 1 2 2v4" />
    <path d="M3 12V7" />
    <path d="M3 18v1.5M19 18v1.5" />
    <path d="M7 12v-2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2" />
  </IconBase>
);

export const IconStar = (p: IconProps) => (
  <IconBase {...p}>
    <path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 17l-5.2 2.6 1-5.8-4.3-4.1 5.9-.9z" />
  </IconBase>
);

export const IconSun = (p: IconProps) => (
  <IconBase {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19" />
  </IconBase>
);

export const IconScale = (p: IconProps) => (
  <IconBase {...p}>
    <path d="M12 3v18" />
    <path d="M5 7h14" />
    <path d="M7 7l-3 6a3 3 0 0 0 6 0z" />
    <path d="M17 7l-3 6a3 3 0 0 0 6 0z" />
    <path d="M8 21h8" />
  </IconBase>
);

export const IconWaves = (p: IconProps) => (
  <IconBase {...p}>
    <path d="M3 8c1.5-1.6 3-1.6 4.5 0s3 1.6 4.5 0 3-1.6 4.5 0 3 1.6 4.5 0" />
    <path d="M3 13c1.5-1.6 3-1.6 4.5 0s3 1.6 4.5 0 3-1.6 4.5 0 3 1.6 4.5 0" />
    <path d="M3 18c1.5-1.6 3-1.6 4.5 0s3 1.6 4.5 0 3-1.6 4.5 0 3 1.6 4.5 0" />
  </IconBase>
);

export const IconAnchor = (p: IconProps) => (
  <IconBase {...p}>
    <circle cx="12" cy="5" r="3" />
    <path d="M12 22V8" />
    <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
  </IconBase>
);

export const IconUtensils = (p: IconProps) => (
  <IconBase {...p}>
    <path d="M8 2v6a2 2 0 1 0 4 0V2" />
    <path d="M10 12v10" />
    <path d="M17 2c-1.5 0-2.5 2.2-2.5 5s1 4 2.5 4V2z" />
    <path d="M17 11v11" />
  </IconBase>
);

export const IconBag = (p: IconProps) => (
  <IconBase {...p}>
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <path d="M3 6h18" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </IconBase>
);

export const IconClock = (p: IconProps) => (
  <IconBase {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </IconBase>
);

export const IconCalendar = (p: IconProps) => (
  <IconBase {...p}>
    <rect x="3" y="4.5" width="18" height="16" rx="2" />
    <path d="M3 9h18M8 2.5v4M16 2.5v4" />
  </IconBase>
);

export const IconWallet = (p: IconProps) => (
  <IconBase {...p}>
    <path d="M21 8V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1" />
    <path d="M21 8h-5a2 2 0 0 0 0 8h5V8z" />
    <circle cx="16.5" cy="12" r="0.7" fill="currentColor" stroke="none" />
  </IconBase>
);

export const IconKey = (p: IconProps) => (
  <IconBase {...p}>
    <circle cx="7.5" cy="15.5" r="4.5" />
    <path d="M10.7 12.3 20 3" />
    <path d="M16 7l3 3M14 9l2 2" />
  </IconBase>
);
