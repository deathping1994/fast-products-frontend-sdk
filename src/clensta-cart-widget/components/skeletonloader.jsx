export function SkeletonLoader({ width = "30px", height = "10px" }) {
  return (
    <>
      <div
        class="skeletonloader"
        style={{
          width: width,
          height: height,
        }}
      ></div>
    </>
  );
}
