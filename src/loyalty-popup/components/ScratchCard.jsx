import { useEffect, useRef } from "preact/hooks";

const ScratchCard = ({shadowRoot}) => {
  const canvasRef = useRef(null);
  console.log(canvasRef);
  const init = () => {
        let canvas = shadowRoot.getElementById("scratch-card-element");
        let context = canvas.getContext("2d");
        let gradientColor = context.createLinearGradient(0, 0, 135, 135);
        gradientColor.addColorStop(0, "#AEE7FF");
        gradientColor.addColorStop(1, "#AEE7FF");
        context.fillStyle = gradientColor;
        context.fillRect(0, 0, 300, 300);

        // Adding dots for seats
        context.fillStyle = "#94DDFF"; // Set the dot color

        const seatSize = 5; // Size of each seat
        const gap = 40; // Gap between seats

        const rows = 6; // Number of rows
        const seatsPerRow = 6; // Number of seats per row

        const startX = 30; // Starting X position
        const startY = 30; // Starting Y position

        for (let row = 0; row < rows; row++) {
            for (let seat = 0; seat < seatsPerRow; seat++) {
                const x = startX + seat * (seatSize + gap);
                const y = startY + row * (seatSize + gap);
                context.beginPath();
                context.arc(x, y, seatSize, 0, 2 * Math.PI);
                context.fill();
            }
        }
    };

    useEffect(()=>{
      init()
      console.log("scratch card");
    },[])
    
  return (
    <>
      <canvas ref={canvasRef} id="scratch-card-element" width={300} height={300} />
    </>
  );
};

export default ScratchCard;
