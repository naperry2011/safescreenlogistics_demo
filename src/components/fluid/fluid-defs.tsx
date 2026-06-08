/**
 * Global SVG filter definitions for the "fluid" system. Mounted once in the
 * root layout. The gooey filter blurs then sharpens alpha so nearby blobs
 * merge into organic, liquid (metaball) shapes.
 */
export function FluidDefs() {
  return (
    <svg
      aria-hidden
      width="0"
      height="0"
      style={{ position: "absolute" }}
    >
      <defs>
        <filter id="goo-filter">
          <feGaussianBlur in="SourceGraphic" stdDeviation="14" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -9"
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </defs>
    </svg>
  );
}
