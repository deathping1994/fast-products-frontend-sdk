import { useEffect, useRef } from "preact/hooks";

const ScratchCard = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Draw on the canvas
    context.fillStyle = 'lightblue';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = 'green';
    context.fillRect(10, 10, 50, 50);

    // You can add more drawing operations here

  }, []);

  return (
    <>
        <div className="spinwheelclass">
          <canvas ref={canvasRef} width={400} height={400} />;
        </div>
        {/* {init()} */}
    </>
  );
};

export default ScratchCard;
