
const Loading = () => {
  return (
    <>
        <main class="loading-screen">
            <svg class="spinner" width="50px" height="50px" viewBox="0 0 66 66"
                xmlns="http://www.w3.org/2000/svg">
                <circle class="path" fill="transparent" stroke-width="2" cx="33" cy="33" r="30"
                    stroke="url(#gradient)"></circle>
                <linearGradient id="gradient">
                    <stop offset="50%" stop-color="#009cdf" stop-opacity="1"></stop>
                    <stop offset="65%" stop-color="#009cdf" stop-opacity=".5"></stop>
                    <stop offset="100%" stop-color="#009cdf" stop-opacity="0"></stop>
                </linearGradient>
                <svg class="spinner-dot dot" width="5px" height="5px" viewBox="0 0 66 66"
                    xmlns="http://www.w3.org/2000/svg" x="37" y="1.5">
                    <circle class="path" fill="#009cdf" cx="33" cy="33" r="30"></circle>
                </svg>
            </svg>
            <p>Loading, please wait...</p>
        </main>
    </>
  )
}

export default Loading