export function SkeletonLoader({ width = "30px", height = "10px", styles={} }) {
  return (
    <>
      <div
        class="skeletonloader"
        style={{
          width: width,
          height: height,
          backgroundImage:
            "linear-gradient(90deg, #ccc 0px, rgb(229 229 229 / 90%) 40px, #ccc 80px)",
          backgroundSize: "300%",
          backgroundPosition: "100% 0",
          borderRadius: "inherit",
          animation: "shimmer 1.4s infinite",
          ...styles
        }}
      ></div>
    </>
  );
}
