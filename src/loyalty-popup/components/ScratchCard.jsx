import axios from "axios";
import { useEffect, useState } from "preact/hooks";

const ScratchCard = ({ shadowRoot }) => {
  const [isLocked, setIsLocked] = useState(true)
  const [scratchCardWinData, setScratchCardWinData] = useState({
    win_message: "default"
  })
  
  useEffect(() => {
    const screenContent = shadowRoot.querySelector('.screenContent');
    const canvas = screenContent.querySelector('#scratchCardCanvas');
    const context = canvas.getContext("2d");
    const init = () => {
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

    init()
  }, [shadowRoot]);
  
  const drawUnlockedScratchCard = ()=>{
      const screenContent = shadowRoot.querySelector('.screenContent');
      const canvas = screenContent.querySelector('#scratchCardCanvas');
      const context = canvas.getContext("2d");
      setIsLocked(false)
      
      let mouseX = 0;
      let mouseY = 0;
      let isDragged = false;

      //Events for touch and mouse
      let events = {
          mouse: {
              down: "mousedown",
              move: "mousemove",
              up: "mouseup",
          },
          touch: {
              down: "touchstart",
              move: "touchmove",
              up: "touchend",
          },
      };

      let deviceType = "";

      //Detech touch device
      const isTouchDevice = () => {
          try {
              //We try to create TouchEvent. It would fail for desktops and throw error.
              document.createEvent("TouchEvent");
              deviceType = "touch";
              return true;
          } catch (e) {
              deviceType = "mouse";
              return false;
          }
      };

      //Get left and top of canvas
      let rectLeft = canvas.getBoundingClientRect().left;
      let rectTop = canvas.getBoundingClientRect().top;

      //Exact x and y position of mouse/touch
      const getXY = (e) => {
          mouseX = (!isTouchDevice() ? e.pageX : e.touches[0].pageX) - rectLeft;
          mouseY = (!isTouchDevice() ? e.pageY : e.touches[0].pageY) - rectTop;
      };

      isTouchDevice();
      //Start Scratch
      canvas.addEventListener(events[deviceType].down, (event) => {
          isDragged = true;
          //Get x and y position
          getXY(event);
          scratch(mouseX, mouseY);
      });

      //mousemove/touchmove
      canvas.addEventListener(events[deviceType].move, (event) => {
          if (!isTouchDevice()) {
              event.preventDefault();
          }
          if (isDragged) {
              getXY(event);
              scratch(mouseX, mouseY);
          }
      });

      //stop drawing
      canvas.addEventListener(events[deviceType].up, () => {
          isDragged = false;
      });

      //If mouse leaves the square
      canvas.addEventListener("mouseleave", () => {
          isDragged = false;
      });

      let scratchedPixels = 0;
      const threshold = 300;
      let cardScratchable = true;
      const scratch = async (x, y) => {
          //destination-out draws new shapes behind the existing canvas content
          context.globalCompositeOperation = "destination-out";
          context.beginPath();
          //arc makes circle - x,y,radius,start angle,end angle
          context.arc(x, y, 12, 0, 2 * Math.PI);
          context.fill();

          const centerX = canvas.width / 2;
          const centerY = canvas.height / 2;
          const distanceFromCenter = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
          const centerAreaRadius = 200; // Radius of the center area

          if (distanceFromCenter <= centerAreaRadius) {
              // Increment the scratchedCenterAreaPixels count
              scratchedPixels++;
          }
          if (scratchedPixels >= threshold && cardScratchable) {
              // card scratch completed
              cardScratchable = false;
              alert("You won YAY")
              
          }

      };
  }


  

  return (
    <>
      <div class="walletCoinContainer">
        <div class="walletCoinsBox">
          <img src="https://media.farziengineer.co/farziwallet/coin-icon.png" alt="" />
          <p>85</p>
        </div>
        <h4>Scratch and Win</h4>
      </div>
      <div class="scratchCardDiv">
        <h4>{scratchCardWinData?.win_message || `no msg`}</h4>
        {isLocked && <img src="https://media.farziengineer.co/farziwallet/lock.png" alt="" />}
        <canvas width={300} height={300} id="scratchCardCanvas"></canvas>
      </div>
      <div class="spinWheelBottom">
        <hr />
        <h4>Click and drag your cursor across the card</h4>
        <button onClick={drawUnlockedScratchCard} class="couponUnlockBtn">Tap to Unlock</button>
      </div>
    </>
  );
};

export default ScratchCard;