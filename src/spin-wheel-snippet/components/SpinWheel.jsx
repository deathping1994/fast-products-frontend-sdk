
import { useEffect, useState } from "preact/hooks";
import { WALLET_API_URI } from "..";
import Alert from '../../global/Alert';
import fetchApi from '../../global/FetchApi';
import Loading from '../../global/Loading';

const SpinWheel = ({ shadowRoot, spinWheelAmount, showSpinGameScreen, customerDetails }) => {
  const spinAudio = new Audio('https://media.farziengineer.co/farziwallet/spinwheel.mp3');
  const [btnVisibility, setBtnVisibility] = useState(true);
  const [showWinPopup, setShowWinPopup] = useState(false);
  const [spinWheelRewardData, setSpinWheelRewardData] = useState([])
  const [loading, setLoading] = useState(true);
  const [walletAmount, setWalletAmount] = useState(0);
  const [error, setError] = useState({
    error: false,
    msg: ""
  })
  const [winData, setWinData] = useState({
    win_message:"",
    win_index: -1
  })
  const showError = (msg)=>{
    setError({
      error: true,
      msg:msg
    })
    setTimeout(()=>{
      console.log(error);
      setError({
        error: false,
        msg:msg
      })
    }, 3000)
  }
  function winAudio() {
    const audio = new Audio('https://media.farziengineer.co/farziwallet/success.mp3');
    audio.play();
}
  function splitStringOnLength(inputString, maxLength) {
    if (typeof inputString !== "string") {
      return [];
    }

    const words = inputString.split(" ");
    const result = [];
    let currentSubstring = "";

    for (const word of words) {
      if (currentSubstring.length + word.length + 1 <= maxLength) {
        // If adding the current word to the currentSubstring doesn't exceed maxLength
        if (currentSubstring.length > 0) {
          currentSubstring += " ";
        }
        currentSubstring += word;
      } else {
        // If adding the current word would exceed maxLength, push the currentSubstring and start a new one
        result.push(currentSubstring);
        currentSubstring = word;
      }
    }

    if (currentSubstring.length > 0) {
      result.push(currentSubstring);
    }

    return result;
  }

  function wrap(text, width) {
    text.each(function () {
      // @ts-ignore
      var text = d3.select(this),
        words = splitStringOnLength(text.text(), 12).reverse(),
        word,
        line = [],
        lineNumber = 1,
        // @ts-ignore
        lineHeight = 1.1, // ems
        x = text.attr("x"),
        y = text.attr("y"),
        dy = 0, //parseFloat(text.attr("dy")),
        tspan = text
          .text(null)
          .append("tspan")
          .attr("x", x)
          .attr("y", y)
          .attr("dy", -1 + "em");
      while ((word = words.pop())) {
        line.push(word);
        tspan.text(line.join(" "));
        if (tspan.node().getComputedTextLength() > width) {
          line.pop();
          tspan.text(line.join(" "));
          line = [word];
          tspan = text
            .append("tspan")
            .attr("x", x)
            .attr("y", y)
            .attr("dy", "1" + "em")
            .attr("dx", "-" + ++lineNumber + dy + "em")
            .text(word);
        }
      }
    });
  }
  const loadD3JS = async () => {
    const res1 = await fetch("https://d3js.org/d3.v3.min.js");
    const fileContent1 = await res1.text();
    var script1 = document.createElement("script");
    script1.innerHTML = fileContent1;

    // console.log("adding", script1);

    document.querySelector("body").appendChild(script1);
      
  };

  useEffect(()=>{
    const fetchWalletAmount = async ()=>{
      const amountResp = await fetchApi("/user-wallet-amount", 'post', {...customerDetails})
      setWalletAmount(amountResp?.data?.userWallet?.amount)
      window.setHeaderButtonAmount(amountResp?.data?.userWallet?.amount)
    }
    fetchWalletAmount()
  },[showWinPopup])

    useEffect(()=>{
        const fetchRewardArray = async()=>{
        const response = await fetchApi(`/get-spin-wheel-rewards`, 'post',
        {
            ...customerDetails,
            couponAmount: spinWheelAmount,
        })
        return response
        // console.log("spin wheel reward array",response);
        }
    // console.log("use effect chala");
    loadD3JS().then(()=>{
      fetchRewardArray().then((resp)=>{
        // console.log("====== data", resp);
        if(resp?.status === "success"){
            setSpinWheelRewardData(resp?.data)
            drawWheel(shadowRoot, resp?.data.map((item, index) => {
              return {
                label: item,
                value: index,
              };
            }), false)
            setLoading(false)
            const spinWheelMainContainer = shadowRoot.querySelector(".spinWheelMainContainer")
            spinWheelMainContainer.style.width = "fit-content"
            const spinStyles = shadowRoot.querySelector(".chart-spin-container")
            spinStyles.style.display = "flex"
            spinStyles.style.justifyContent = "center"
            spinStyles.style.alignItems = "center"
            const widgetContainer = shadowRoot.querySelector(".fc-spin-wheel-snippet-19212-root .widget-container")
            widgetContainer.style.display = "flex"
            
            setBtnVisibility(false)
          }else{
            setLoading(false)
            showError(resp?.error)
          }
      })
      
    }).catch((error)=>{
        console.log("error in loading d3", error);
    })
},[])

  function drawWheel(shadowRoot, data, unlock, winningIdx, spinnedCallback) {
    // console.log("drawwheel", data);
    // console.log("shadowRoot", shadowRoot);
    // console.log("screenContent", shadowRoot.querySelector(".screenContent"));
    // console.log("mainCOntinaire", hhh);
    (function auto() {
    //   const ggg = shadowRoot.querySelector(".screenContent")
    //   const hhh = ggg.querySelector(".spinWheelMainContainer")
      const chartElement = shadowRoot.querySelector("#fw-chart-spin-wheel")
      // console.log("charele", chartElement);
      var padding = { top: 20, right: 40, bottom: 0, left: 0 },
        w = chartElement.offsetWidth - padding.left - padding.right,
        h = chartElement.offsetWidth - padding.top - padding.bottom,
        r = Math.min(w, h) / 2,
        rotation = 0,
        oldrotation = 0,
        picked = winningIdx,
        // @ts-ignore
        color = d3.scale.category20();

      // @ts-ignore
      var svg = d3
        .select(chartElement)
        .append("svg")
        .data([data])
        .attr("width", w + padding.left + padding.right)
        .attr("height", h + padding.top + padding.bottom);
      // console.log(w + padding.left + padding.right);
      // console.log("ye hai data",data);
        var container = svg
        .append("g")
        .attr("class", "chartholder")
        .attr(
          "transform",
          "translate(" +
            (w / 2 + padding.left) +
            "," +
            (h / 2 + padding.top) +
            ")"
        );
      var vis = container.append("g");

      // @ts-ignore
      var pie = d3.layout
        .pie()
        .sort(null)
        .value(function (d) {
          return 1;
        });
      // declare an arc generator function
      // @ts-ignore
      var arc = d3.svg.arc().outerRadius(r);
      // select paths, use arc generator to draw
      var arcs = vis
        .selectAll("g.slice")
        .data(pie)
        .enter()
        .append("g")
        .attr("class", "slice");

      arcs
        .append("path")
        // @ts-ignore
        .attr("fill", function (d, i) {
          return color(i);
        })
        .attr("d", function (d) {
          return arc(d);
        });

      // add the text
      arcs
        .append("text")
        .attr("transform", function (d) {
          d.innerRadius = 0;
          d.outerRadius = r;
          d.angle = (d.startAngle + d.endAngle) / 2;
          return (
            "rotate(" +
            ((d.angle * 180) / Math.PI - 90) +
            ")translate(" +
            (d.outerRadius - 10) +
            ")"
          );
        })
        .attr("text-anchor", "end")
        // @ts-ignore
        .text(function (d, i) {
          return data[i].label;
        })
        // console.log("draw comp");
      unlock && container.on("click", spin);
      // @ts-ignore
      function spin(d) {
        spinAudio.play()
        container.on("click", null);

        var totalValues = data.length;
        var x = winningIdx - 1; //since the wheel starts at 1 instead of 0
        var anglePerValue = 360 / totalValues;
        rotation = -(x * anglePerValue + 360 * 3); // 3 rotations

        vis
          .transition()
          .duration(3000)
          .attrTween("transform", rotTween)
          // @ts-ignore
          .each("end", function () {
            // @ts-ignore
            d3.select(".slice:nth-child(" + (picked + 1) + ") path").attr(
              "fill",
              "#111"
            );

            // d3.select("#question h1")
            //     .text(data[picked].question);
            oldrotation = rotation;

            // /* Get the result value from object "data" */
            // console.log(data[picked].value)

            // add the text
            // arcs.append("text")
            //     .attr("transform", function (d, i) {
            //         d.innerRadius = 0;
            //         d.outerRadius = r;
            //         d.angle = (d.startAngle + d.endAngle) / 2;
            //         if (i === picked) {
            //             var style = document.createElement("style");
            //             style.innerHTML = `text[text-anchor="end"] {
            //                 transform: ${"rotate(" + (d.angle * 180 / Math.PI - 90) + "deg)translate(" + (d.outerRadius - 30) + "px,30px)" + "rotateZ(90deg)"};
            //             }`
            //             shadowRoot.querySelector("#fw-chart-spin-wheel").appendChild(style);
            //         }
            //         return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")translate(" + (d.outerRadius - 20) + ")";
            //     })
            //     .attr("text-anchor", "end")
            //     .text(function (d, i) {
            //         return i === picked ? data[i].label : "";
            //     });

            spinnedCallback();
            // spinAudio.pause()
          });
      }
      //make arrow
      svg
        .append("g")
        .attr(
          "transform",
          "translate(" +
            (w + padding.left + padding.right) +
            "," +
            (h / 2 + padding.top) +
            ")"
        )
        .append("path")
        .attr(
          "d",
          "M-" + r * 0.15 + ",0L0," + r * 0.05 + "L0,-" + r * 0.05 + "Z"
        )
        // @ts-ignore
        .style({ fill: "black" });
      //draw spin circle
      container
        .append("circle")
        .attr("cx", 0)
        .attr("cy", 0)
        .attr("r", 45)
        // @ts-ignore
        .style({ fill: "white", cursor: "pointer" });
      //spin text
      container
        .append("text")
        .attr("x", 0)
        .attr("y", 15)
        .attr("text-anchor", "middle")
        .text("SPIN")
        // @ts-ignore
        .style({
          "font-weight": "bold",
          "font-size": "30px",
          transform: "rotate(90deg)",
        });

      // @ts-ignore
      function rotTween(to) {
        // @ts-ignore
        var i = d3.interpolate(oldrotation % 360, rotation);
        return function (t) {
          return "rotate(" + i(t) + ")";
        };
      }
    })();
  }
  const spinCB = () => {
    winAudio()
    setTimeout(()=>{
      setShowWinPopup(true)
    }, 1000)
  };


  const playAgain = ()=>{
    setBtnVisibility(false)
    setShowWinPopup(false)
    // fetchSpinWheelReward()
  }
  const closeWinPopup = ()=>{
      showSpinGameScreen()
  }
  
  const drawUnlockSpinWheel = ()=>{
    const widgetContainer = shadowRoot.querySelector(".fc-spin-wheel-snippet-19212-root .widget-container")
    widgetContainer.style.display = "block"
    const spinWheelMainContainer = shadowRoot.querySelector(".spinWheelMainContainer")
    spinWheelMainContainer.style.width = ""
    const spinStyles = shadowRoot.querySelector(".chart-spin-container")
    console.log("sdfdsfsdf",spinStyles);
    spinStyles.style.display = "block"
    const redeemSpinWheel = async ()=>{
        try {
          setLoading(true)
          const response = await fetchApi(`/redeem-spin-wheel`,'post',
          { 
            ...customerDetails,
            couponAmount: spinWheelAmount,
          })
          setWinData(response?.data)
          return response
        // console.log("win spinwheel data",response?.data);
        } catch (error) {
          console.log("error in redeem spinwheel");
        } finally {
          setLoading(false)
        }
    }
    redeemSpinWheel().then((resp)=>{
      // console.log("redepinwheel WIN", data);
      if(resp?.status === "success"){
        setBtnVisibility(true)
        drawWheel(
          shadowRoot,
          spinWheelRewardData.map((item, index) => {
            return {
              label: item,
              value: index,
            };
          }),
          true, resp?.data?.win_index, spinCB );
      }else{
        showError(resp?.error)
        drawWheel(shadowRoot, spinWheelRewardData?.map((item, index) => {
          return {
            label: item,
            value: index,
          };
        }), false)
        setBtnVisibility(false)
      }
      const spinStyles = shadowRoot.querySelector(".chart-spin-container")
      spinStyles.style.display = "flex"
    }).catch((error)=>{
      console.log("error in reddeemo spin wheel", error);
    })
    const unlockSpinWheel = shadowRoot.querySelector("#fw-chart-spin-wheel")
    unlockSpinWheel.innerHTML = ``
  }
  
  return (
    <>
      <div class="spinWheelMainContainer">
        <div class="walletCoinContainer">
          <div class="walletCoinsBox">
            <div class="coinIcon"></div>
            <p>{walletAmount}</p>
          </div>
          <h4>Spin and Win</h4>
        </div>
        <div class="chart-spin-container">
          <div id="fw-chart-spin-wheel">
          {
            !btnVisibility &&
            <div class="lockedIcon">
              <img src="https://media.farziengineer.co/farziwallet/lock.png" alt="" />
            </div>
          }
          </div>
          {
          showWinPopup && 
            <div class="spinWinContainer">
                <div class="spinWinPopup">
                  <h3>Congratulations!</h3>
                  <p>You Won</p>
                  <h2>{winData.win_message}</h2>
                  <button onClick={playAgain} class="playagainbtn">Play Again</button>
                  <button onClick={closeWinPopup} class="closebtn">close</button>
                </div>
              </div>
          }
        </div>
        <div class="spinWheelBottom">
            {!loading && <hr />}
            {btnVisibility ? <h4>Click 'SPIN' to start</h4> : <h4>Unlock for {spinWheelAmount} {window.fc_loyalty_vars.coin_name} Coins</h4>}
            {!btnVisibility && <button onClick={()=> drawUnlockSpinWheel()} class="couponUnlockBtn">Tap to Unlock</button>}
        </div>
        
        {loading && <div class="loader"><Loading/></div>}
        {error.error && <Alert message={error?.msg}/>}
      </div>
    </>
  );
};

export default SpinWheel;
