  // @ts-nocheck
  import { useEffect, useState } from "preact/hooks";
  import Alert from '../../global/Alert';
  import fetchApi from '../../global/FetchApi';
  import Loading from '../../global/Loading';

  const ScratchCard = ({ shadowRoot, scratchCardAmount, walletAmount, showScratchCardScreen, customerDetails }) => {
    const [isLocked, setIsLocked] = useState(true);
    const [loading, setLoading] = useState(false);
    const [showWinPopup, setShowWinPopup] = useState(false)
    const [playAgain, setPlayAgain] = useState(false)
    const [error, setError] = useState({
      error:false,
      msg:""
    });
    const [winMessage, setWinMessage] = useState({
      win_message: ""
    });
    const showError = (msg)=>{
      setError({
        error:true,
        msg:msg
    })
      setTimeout(()=>{
        setError({
          error:false,
          msg:""
      })
      },3000)
    }
    const init = (context) => {
      let gradientColor = context.createLinearGradient(0, 0, 135, 135);
      // console.log("gradientColor", gradientColor);
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
    useEffect(() => {
        const canvas = shadowRoot.querySelector("#scratchCardCanvas")
        const context = canvas.getContext("2d");
        // console.log("useeffect", context);
        init(context)
    }, [shadowRoot, playAgain]);

    const handlePlayAgainBtn = () => {
      const existingCanvas = shadowRoot.querySelector('#scratchCardCanvas');
      
      if (existingCanvas) {
        existingCanvas.parentNode.removeChild(existingCanvas);
      }
    
      // Create a new canvas
      const newCanvas = document.createElement('canvas');
      newCanvas.setAttribute('id', 'scratchCardCanvas');
      newCanvas.width = 300;
      newCanvas.height = 300;
    
      // Append the new canvas to the scratchCardDiv element
      const scratchCardDiv = shadowRoot.querySelector('.scratchCardDiv');
      console.log("=======",scratchCardDiv);
      scratchCardDiv.appendChild(newCanvas);
    
      setPlayAgain(!playAgain);
      setShowWinPopup(false);
      setIsLocked(true);
      setWinMessage({
        win_message: "",
      });

      const context = newCanvas.getContext("2d");    
      init(context);
    
    };
    
    const getScratchCardWinData = async ()=>{
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      try {
        setLoading(true)
        const response = await fetchApi(`/redeem-scratch-card`, 'post',
        {
            ...customerDetails,
            couponAmount: scratchCardAmount,
        })
        if(response?.status !== "success"){
          showError(response?.error)
        }else{
          // console.log("scratchc card resp", response.data);
          setWinMessage(response?.data)
          drawUnlockedScratchCard()
        }
      } catch (error) {
        console.log("error in SC", error);
      } finally {
        setLoading(false)
      }
    }

    const drawUnlockedScratchCard = ()=>{
      setIsLocked(false)
      const canvas = shadowRoot.querySelector('#scratchCardCanvas');
      const context = canvas.getContext("2d");
      // console.log("context drawUnlockFunc", context);
      
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
      const threshold = 100;
      let cardScratchable = true;
      const scratch = async (x, y) => {
          //destination-out draws new shapes behind the existing canvas content
          context.globalCompositeOperation = "destination-out";
          context.beginPath();
          //arc makes circle - x,y,radius,start angle,end angle
          context.arc(x, y, 18, 0, 2 * Math.PI);
          context.fill();

          const centerX = canvas.width / 2;
          const centerY = canvas.height / 2;
          const distanceFromCenter = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2)/2;
          const centerAreaRadius = 200; // Radius of the center area

          if (distanceFromCenter <= centerAreaRadius) {
              // Increment the scratchedCenterAreaPixels count
              scratchedPixels++;
          }
          if (scratchedPixels >= threshold && cardScratchable) {
              // card scratch completed
              cardScratchable = false;
              setShowWinPopup(true)
              
          }
      };
      init(context)
    }

    return (
      <>
        {loading && <div class="loaderFullHeight"><Loading/></div>}
        <div class="walletCoinContainer">
          <div class="walletCoinsBox">
            <div class="coinIcon"></div>
            <p>{walletAmount}</p>
          </div>
          <h4>Scratch and Win</h4>
        </div>
        <div class="scratchCardDiv">
          <h4>{winMessage?.win_message}</h4>
          {isLocked && <img src="https://media.farziengineer.co/farziwallet/lock.png" alt="" />}
          <canvas width={300} height={300} id="scratchCardCanvas"></canvas>
          {
            showWinPopup && 
            <div class="spinWinContainer">
              <div class="spinWinPopup">
                <h3>Congratulations!</h3>
                <p>You Won</p>
                <h2>{winMessage?.win_message}</h2>
                <button onClick={handlePlayAgainBtn} class="playagainbtn">Play Again</button>
                <button onClick={()=> showScratchCardScreen()} class="closebtn">close</button>
              </div>
            </div>
          }
        </div>
        <div class="spinWheelBottom">
          <hr />
          <h4>{isLocked ? `Unlock for ${scratchCardAmount} ${window.fc_loyalty_vars.coin_name} Coin` : `Click and drag your cursor across the card`}</h4>
          {isLocked && <button onClick={getScratchCardWinData} class="couponUnlockBtn">Tap to Unlock</button>}
        </div>
        
        {error.error && <Alert message={error?.msg}/>}
      </>
    );
  };
  export default ScratchCard;