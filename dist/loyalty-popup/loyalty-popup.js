(function() {
  "use strict";
  var __vite_style__ = document.createElement("style");
  __vite_style__.textContent = "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');\r\n\n/* :root {\r\n	font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;\r\n	line-height: 1.5;\r\n	font-weight: 400;\r\n	\r\n	color: #222;\r\n	background-color: #ffffff;\r\n	\r\n	font-synthesis: none;\r\n	text-rendering: optimizeLegibility;\r\n	-webkit-font-smoothing: antialiased;\r\n	-moz-osx-font-smoothing: grayscale;\r\n	-webkit-text-size-adjust: 100%;\r\n}\r\n*/\nbody {\r\n	margin: 0;\r\n	padding: 0;\r\n	font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;\r\n}\n.fc-loyalty-popup-19212-root * {\r\n	padding: 0;\r\n	margin: 0;\r\n	box-sizing: border-box;\r\n}\n.fc-loyalty-popup-19212-root a {\r\n	text-decoration: none;\r\n	color: inherit;\r\n}\n.fc-loyalty-popup-19212-root {\r\n	width: 100%;\r\n}\n/* Loyality popup styles */\n.floatingPopup {\r\n    background-color: black;\r\n	padding: 1rem;\r\n	display: flex;\r\n	position: fixed;\r\n	width: 60px;\r\n	height: 60px;\r\n	bottom: 3%;\r\n    right: 3%;\r\n	justify-content: center;\r\n	align-items: center;\r\n	border-radius: 100%;\r\n	z-index: 9999;\r\n	cursor: pointer;\r\n	\r\n}\n.mainPopup {\r\n	background-color: white;\r\n	scrollbar-width: none;\r\n	z-index: 999;\r\n	position: fixed;\r\n	gap: 16px;\r\n	bottom: 13%;\r\n	right: 7%;\r\n	max-width: 360px;\r\n	max-height: 580px;\r\n	width: 85vw;\r\n    height: 80vh;\r\n	border-radius: 15px;\r\n	overflow-x: hidden;\r\n	overflow-y: scroll;\r\n	padding-bottom: 16px;\r\n	box-shadow: 0 0.0625em 0.0625em rgba(0,0,0,.55), 0 0.125em 0.5em rgba(0,0,0,.55), inset 0 0 0 1px hsla(0,0%,100%,.1);\r\n}\n.mainContent {\r\n	display: flex;\r\n	flex-direction: column;\r\n	justify-content: start;\r\n	align-items: start;\r\n	padding-bottom: 16px;\r\n}\n.header {\r\n	display: flex;\r\n	justify-content: space-between;\r\n  	align-items: flex-start;\r\n	height: 10vh;\r\n	padding: 14px;\r\n	margin-bottom: 10px;\r\n}\n.header p {\r\n	color: #0c0c0c;\r\n    font-size: 12px;\r\n}\n.header h6 {\r\n	color: #0c0c0c;\r\n    font-size: 20px;\r\n	margin: 0;\r\n}\n.closePopup {\r\n	cursor: pointer;\r\n	width: 30px;\r\n	height: 30px;\r\n}\n.walletCard {\r\n	background-color: black;\r\n    padding: 12px 13px;\r\n    border-radius: 16px;\r\n    box-shadow: none;\r\n    margin: 0 14px;\r\n    width: calc(100% - 32px);\r\n	display: flex;\r\n	justify-content: space-between;\r\n	cursor: pointer;\r\n}\n.coinCard img {\r\n	width: 20px;\r\n	height: 20px;\r\n}\n.coinCard {\r\n	background-color: #fff;\r\n    border-radius: 4px;\r\n    margin: 0 6px;\r\n    padding: 5px 10px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n	gap: 8px;\r\n}\n.coinCard h1 {\r\n    font-size: 18px;\r\n	font-weight: 600;\r\n	color: black;\r\n}\n.badgeCard img {\r\n	height: 12px;\r\n	width: 12px;\r\n}\n.badgeCard p {\r\n	font-size: 11px;\r\n}\n.badgeCard {\r\n	display: flex;\r\n	justify-content: left;\r\n	align-items: center;\r\n	color: white;\r\n	gap: 4px;\r\n}\n.walletCardText {\r\n	color: white;\r\n	font-size: 14px;\r\n	font-weight: bold;\r\n}\n.inviteCard {\r\n	background: linear-gradient(100.56deg,#495fd9 0,#5285e8 57.67%,#5aa6f4 104.69%);\r\n    margin: 0 20px;\r\n    border-radius: 8px;\r\n    padding: 12px;\r\n}\n.inviteTextSection {\r\n	color: white;\r\n	display: flex;\r\n	align-items: center;\r\n	margin-bottom: 18px;\r\n	gap: 8px;\r\n}\n.inviteTextContainer h2 {\r\n	font-weight: 700;\r\n	font-size: 20px;\r\n	margin-bottom: 6px;\r\n	line-height: 16px;\r\n}\n.inviteTextContainer p {\r\n	font-weight: 400;\r\n    font-size: 12px;\r\n	line-height: 14px;\r\n}\n.invitebtn {\r\n	width: 100%;\r\n    background: #fff;\r\n    border-radius: 4px;\r\n    border: none;\r\n    padding: 8px;\r\n    color: #3e56d2;\r\n    font-weight: 700;\r\n    font-size: 12px;\r\n    text-align: center;\r\n    cursor: pointer;\r\n	line-height: normal;\r\n	font-family: Inter, sans-serif;\r\n}\n.couponCard {\r\n	border-radius: 12px;\r\n	color: #000;\r\n	font-size: 14px;\r\n	line-height: 20px;\r\n	cursor: pointer;\r\n	width: 120px;\r\n}\n.couponCardDesc {\r\n	padding: 8px;\r\n	background: #f4f4f4;\r\n	border-radius: 8px;\r\n	box-shadow: 0 -4px 10px rgba(0,0,0,.1);\r\n	position: relative;\r\n	top: -12px;\r\n	min-width: 120px;\r\n	font-size: 13px;\r\n	font-weight: normal;\r\n	display: flex;\r\n	flex-direction: column;\r\n	gap: 4px;\r\n}\n.couponImg {\r\n	border-radius: 8px 8px 0 0;\r\n	width: 120px;\r\n}\n.couponCardPrice {\r\n	display: flex;\r\n	align-items: center;\r\n	justify-content: start;\r\n	gap: 4px;\r\n	font-size: 14px;\r\n	font-weight: 400;\r\n	margin-top: 8px;\r\n}\n.couponFloatingLabel {\r\n	position: absolute;\r\n	top: -10px;\r\n  	right: 10px;\r\n    background: var(--loyalty_popup_theme_background,#000);\r\n    color: #fff;\r\n    width: 40px;\r\n    height: 24px;\r\n    text-align: center;\r\n    line-height: 24px;\r\n    font-weight: 600;\r\n    font-size: 12px;\r\n    border-radius: 4px;\r\n}\n.couponText {\r\n	padding-top: 8px;\r\n	font-family: Inter, sans-serif;\r\n	font-weight: 500;\r\n}\n.couponCardPrice img {\r\n	width: 14px;\r\n	height: 14px;\r\n}\n.viewAllCouponsContainer {\r\n	display: flex;\r\n	justify-content: space-between;\r\n	align-items: center;\r\n	padding: 8px 16px;\r\n	width: 100%;\r\n}\n.viewAllCouponsContainer h1 {\r\n	font-size: 20px;\r\n    font-weight: 700;\r\n}\n.viewAllCouponsContainer a {\r\n	cursor: pointer;\r\n    font-weight: 500;\r\n    font-size: 12px;\r\n}\n.gamesArenaContainer {\r\n	padding: 8px 16px;\r\n	margin-top: 16px;\r\n}\n.gamesArenaContainer h1 {\r\n	font-size: 20px;\r\n    font-weight: 700;\r\n}\n.gamesArenaContainer p {\r\n	font-size: 12px;\r\n    font-weight: 500;\r\n	line-height: 14px;\r\n}\n.gamesCard {\r\n	width: fit-content;\r\n	background-color: #efefef;\r\n	display: flex;\r\n	flex-direction: column;\r\n	justify-content: center;\r\n	align-items: center;\r\n	padding: 8px;\r\n	padding-top: 8px;\r\n	padding-top: 30px;\r\n	border-radius: 8px;\r\n	position: relative;\r\n	bottom: 20px;\r\n	min-width: 120px;\r\n	}\n.gamesCardImg {\r\n	display: flex;\r\n	justify-content: center;\r\n	align-items: center;\r\n	z-index: 2;\r\n	position: relative;\r\n}\n.coinBox {\r\n	background: #fff;\r\n	border-radius: 4px;\r\n	display: flex;\r\n	justify-content: center;\r\n	padding: 4px 14px;\r\n	align-items: center;\r\n	margin-bottom: 8px;\r\n	color: black;\r\n	font-size: 14px;\r\n	gap: 4px;\r\n}\n.gamesCardBtn {\r\n	background: black;\r\n    border-radius: 4px;\r\n    font-weight: 700;\r\n    font-size: 12px;\r\n    text-align: center;\r\n    color: #fff;\r\n    width: 100%;\r\n    padding: 8px;\r\n    cursor: pointer;\r\n	border: none;\r\n}\n.gamesCardTitle {\r\n	font-weight: 700;\r\n    font-size: 12px;\r\n	text-align: center;\r\n}\n.gamesCardDesc {\r\n	font-weight: 500;\r\n    font-size: 10px;\r\n    margin-bottom: 8px;\r\n}\n.gamesHorizontalList {\r\n	height: fit-content;\r\n	padding: 8px 16px;\r\n	display: flex;\r\n	gap: 16px;\r\n	width: 100%;\r\n}\n/* Invite and Earn */\n.inviteWhatsappBtn {\r\n	height: 40px;\r\n    width: 96%;\r\n    background-color: #faa;\r\n    border-radius: 4px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n	border: none;\r\n}\n.inviteRoundedBtn {\r\n	width: 40px;\r\n    height: 40px;\r\n    background-color: #faa;\r\n    border-radius: 50%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n	border: none;\r\n}\n.inviteAndEarnContainer {\r\n	width: 100%;\r\n	padding: 22px;\r\n	border-radius: 16px;\r\n}\n.dashedDivider {\r\n	border: none;\r\n    height: 1px;\r\n    background: repeating-linear-gradient(90deg,#000,#000 6px,transparent 6px,transparent 12px);\r\n    margin: 20px 0 16px 0;\r\n}\n.inviteEarnTextContainer {\r\n	display: flex;\r\n	justify-content: center;\r\n	align-items: center;\r\n	font-weight: 400;\r\n    font-size: 14px;\r\n    color: #acacac;\r\n    margin: 8px 0px;\r\n    text-align: center;\r\n}\n.inviteAndEarn {\r\n	display: flex;\r\n	justify-content: flex-start;\r\n	align-items: center;\r\n	gap: 16px;\r\n}\n.inviteAndEarn h2 {\r\n	font-weight: 700;\r\n    font-size: 30px;\r\n}\n.inviteAndEarnMessage h4 {\r\n	text-align: center;\r\n    font-weight: 500;\r\n    font-size: 16px;\r\n    line-height: 30px;\r\n    margin: 20px 0!important;\r\n}\n.inviteLinkContainer {\r\n	padding: 12px;\r\n    background: #faa;\r\n    border-radius: 4px;\r\n    border: 1px dashed #000;\r\n    font-size: 16px;\r\n    font-weight: 700;\r\n    display: flex;\r\n	justify-content: space-between;\r\n    align-items: center;\r\n}\n.inviteLinkContainer p {\r\n	font-size: 14px;\r\n}\n.inviteLinkContainer img {\r\n	max-width: 16px;\r\n	cursor: pointer;\r\n}\n.sendInvitesBtnContainer, .inviteWhatsappBtn {\r\n	display: flex;\r\n	justify-content: center;\r\n	align-items: center;\r\n	gap: 8px;\r\n}\n.closeInviteContainer {\r\n	display: flex;\r\n	justify-content: end;\r\n	align-items: center;\r\n}\n.couponUnlockBtn {\r\n	background-color: black;\r\n    color: #fff;\r\n    padding: 11px 0;\r\n    border-radius: 8px;\r\n    font-family: Inter,sans-serif;\r\n    font-weight: 700;\r\n    cursor: pointer;\r\n    width: 100%;\r\n    font-size: 14px;\r\n	border: none;\r\n}\n.unlockCouponContainer {\r\n	width: 100%;\r\n	position: absolute;\r\n	top: 0;\r\n	background-color: #ccccccc4;\r\n	z-index: 999;\r\n	height: 100%;\r\n	display: flex;\r\n	flex-direction: column;\r\n	justify-content: end;\r\n}\n.couponOverlayContainer {\r\n	display: flex;\r\n	justify-content: start;\r\n	align-items: center;\r\n	gap: 8px;\r\n}\n.couponContainer {\r\n	background-color: white;\r\n	width: 100%;\r\n	padding: 16px;\r\n	border-radius: 16px;\r\n}\n.showAllCouponsList {\r\n	display: flex;\r\n	justify-content: start;\r\n	align-items: start;\r\n	gap: 16px;\r\n	scrollbar-width: none;\r\n	overflow-x: scroll;\r\n	overflow-y: hidden;\r\n	padding: 0 16px;\r\n}\n.pointsActivityClass {\r\n    height: 100%;\r\n	width: 100%;\r\n	background-color: white;\r\n	position: absolute;\r\n	top: 0px;\r\n	z-index: 999;\r\n	overflow-x: hidden;\r\n	overflow-y: scroll;\r\n	scrollbar-width: none;\r\n}\n.pointsActivityClass h4 {\r\n	margin-left: 22px;\r\n    font-size: 20px;\r\n}\n.transaction-log-container {\r\n	margin: 24px 20px;\r\n    padding: 6px;\r\n    background: #fff;\r\n    border-radius: 8px;\r\n    border: 1px solid rgb(231, 231, 231);\r\n    border-radius: 6px;\r\n    box-shadow: 1px 2px 2px rgb(231, 231, 231);\r\n}\n.transaction-log-container .log-body {\r\n    padding: 8px 18px;\r\n}\n.transaction-log-container .log-body .amount {\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n}\n.transaction-log-container .log-header {\r\n	display: flex;\r\n	justify-content: space-between;\r\n	align-items: center;\r\n	border-bottom: 1px solid rgb(231, 231, 231);\r\n	padding: 8px 18px;\r\n	font-size: 14px;\r\n}\n.transaction-log-container .log-header .log-type {\r\n	border-radius: 4px;\r\n	padding: 4px 8px;\r\n	font-weight: 600;\r\n}\n.transaction-log-container .log-header .log-type.credited {\r\n	background-color: rgb(209, 255, 217);\r\n	color: rgb(30, 175, 109);\r\n	font-size: 12px;\r\n}\n.transaction-log-container .log-header .log-type.debited {\r\n	background-color: rgba(181, 0, 0, 0.1);\r\n	color: rgb(181, 0, 0);\r\n	font-size: 12px;\r\n}\n.inviteAndEarnContainer {\r\n	background-color: white;\r\n	position: absolute;\r\n	max-width: 360px;\r\n	max-height: 580px;\r\n	width: 85vw;\r\n	height: fit-content;\r\n	bottom: 2px;\r\n	z-index: 999;\r\n	background-color: white;\r\n	top: 85%;\r\n	box-shadow: 3px 3px 90px 6px #ccc;\r\n}\n.shareTextContainer {\r\n	display: flex;\r\n	justify-content: center;\r\n	align-items: center;\r\n	font-weight: 400;\r\n	font-size: 14px;\r\n	color: #acacac;\r\n	text-align: center;\r\n	margin-bottom: 12px;\r\n}\n.pointsActivityHeader {\r\n	display: flex;\r\n	justify-content: space-between;\r\n	align-items: center;\r\n	padding-right: 12px;\r\n  	padding-top: 12px;\r\n}\n.pointsActivityHeader img {\r\n	width: 30px;\r\n	height: 30px;\r\n	cursor: pointer;\r\n}\n.showGamesOverlay {\r\n	background-color: white;\r\n	width: 100%;\r\n	height: 100%;\r\n	position: absolute;\r\n	display: flex;\r\n	flex-direction: column;\r\n	top: 0;\r\n}\n.unlockTextContainer {\r\n	font-weight: 700;\r\n    font-size: 16px;\r\n    margin: 22px;\r\n	text-align: center;\r\n}\n.unlockText h5 {\r\n	font-weight: 700;\r\n    font-size: 16px;\r\n    margin: 16px 0;\r\n}\n.crossImg {\r\n	display: flex;\r\n	justify-content: end;\r\n	align-items: center;\r\n}\n.crossImg img {\r\n	width: 24px;\r\n	height: 24px;\r\n	cursor: pointer;\r\n}\n.unlockDesc p {\r\n	font-weight: 400;\r\n    font-size: 14px\r\n}\n.showGamesHeader {\r\n	display: flex;\r\n	justify-content: space-between;\r\n	align-items: center;\r\n	padding: 8px 16px;\r\n}\n.showGamesHeader img {\r\n	width: 30px;\r\n	height: 30px;\r\n	cursor: pointer;\r\n}\n.showGamesHeader h2 {\r\n	font-size: 20px;\r\n}\n.showGamesTab {\r\n	display: flex;\r\n	justify-content: space-between;\r\n	align-items: center;\r\n	padding: 0px 16px;\r\n}\n.showGamesTab h2 {\r\n	font-size: 18px;\r\n}\n.gamesTab {\r\n	display: flex;\r\n	justify-content: center;\r\n	align-items: center;\r\n	gap: 8px;\r\n}\n.walletCoinsBox {\r\n	display: flex;\r\n	justify-content: center;\r\n	align-items: center;\r\n	background-color: black;\r\n	padding: 2px 8px;\r\n	border-radius: 50px;\r\n	gap: 4px;\r\n}\n.walletCoinsBox p {\r\n	color: white;\r\n	font-size: 20px;\r\n}\n.walletCoinsBox img {\r\n	width: 16px;\r\n	height: 16px;\r\n}\n.showGamesCards {\r\n	background-color: white;\r\n	display: flex;\r\n	justify-content: start;\r\n	align-items: center;\r\n	padding: 0px 16px;\r\n	gap: 16px;\r\n}\n.viewAllCoupons {\r\n	position: absolute;\r\n	background-color: white;\r\n	width: 100%;\r\n	height: 100%;\r\n	top: 0;\r\n}\n.viewAllCouponsHeader {\r\n	display: flex;\r\n	justify-content: space-between;\r\n	align-items: center;\r\n	padding: 8px 16px;\r\n}\n.viewAllCouponsHeader h4 {\r\n	font-size: 20px;\r\n	font-weight: 700;\r\n}\n.viewAllCouponsHeader img {\r\n	width: 30px;\r\n	height: 30px;\r\n	cursor: pointer;\r\n}\n.viewAllCouponTabText {\r\n	display: flex;\r\n	justify-content: center;\r\n	align-items: center;\r\n}\n.viewAllCouponTabText h4 {\r\n	cursor: pointer;\r\n	color: #959595;\r\n}\n.viewAllCouponsTab {\r\n	display: flex;\r\n	justify-content: space-between;\r\n	align-items: center;\r\n	padding: 8px 16px;\r\n}\n.viewAllFeaturedComponent h3 {\r\n	margin-left: 16px;\r\n}\n.reedemfcCoins {\r\n	padding: 16px;\r\n}\n.reedemfcCoins h5, .exploreCoupons h5{\r\n	font-weight: 700;\r\n    font-size: 16px;\r\n}\n.reedemfcCoins p{\r\n	/* margin-top: 8px; */\r\n    font-weight: 400;\r\n    font-size: 12px;\r\n	line-height: 14px;\r\n}\n.reedemfcCoinsCard {\r\n	background-color: #f4f4f4;\r\n	display: flex;\r\n	justify-content: center;\r\n	align-items: center;\r\n	gap: 8px;\r\n	padding: 8px;\r\n	border-radius: 8px;\r\n}\n.exploreCouponCard {\r\n	background-color: #f4f4f4;\r\n	display: flex;\r\n	justify-content: start;\r\n	align-items: center;\r\n	padding: 16px;\r\n	border-radius: 8px;\r\n	cursor: pointer;\r\n}\n.exploreCoupons {\r\n	padding: 16px;\r\n}\n.shipImgBox {\r\n	border-right: 1px dashed #959595;\r\n	padding-right: 8px;\r\n    margin-right: 8px\r\n}\n.exploreCouponCardText {\r\n	font-weight: 700;\r\n    font-size: 14px;\r\n}\n.exploreCouponCardText img {\r\n	width: 12px;\r\n	height: 12px;\r\n}\n.yourCouponsCardMainContainer {\r\n	padding: 16px;\r\n}\n.yourCouponsCardContainer {\r\n	background-color: #f4f4f4;\r\n	border-radius: 8px;\r\n	display: flex;\r\n	margin-top: 16px;\r\n}\n.youCouponCardLeft, .youCouponCardRight {\r\n	padding: 16px;\r\n	display: flex;\r\n	flex-direction: column;\r\n	justify-content: center;\r\n}\n.youCouponCardLeft {\r\n	border-right: 1px dashed #959595;\r\n	align-items: center;\r\n}\n.youCouponCardRight {\r\n	align-items: start;\r\n}\n.youCouponCardLeft h5 {\r\n	font-size: 24px;\r\n}\n.youCouponCardLeft p {\r\n	font-size: 14px;\r\n}\n.youCouponCardRight h4, .yourCouponCode {\r\n	font-weight: bold;\r\n	font-size: 13px;\r\n	color: black;\r\n}\n.youCouponCardRight p {\r\n	color: #acacac;\r\n	font-size: 12px;\r\n}\n.yourCouponsActiveTab {\r\n	display: flex;\r\n	justify-content: start;\r\n	align-items: center;\r\n	gap: 30px;\r\n}\n.yourCouponsActiveTab div {\r\n	background: #d9d9d9;\r\n    border-radius: 8px;\r\n    padding: 8px;\r\n    font-weight: 700;\r\n    font-size: 14px;\r\n    cursor: pointer;\r\n}\n.couponNotFound {\r\n	display: flex;\r\n	flex-direction: column;\r\n	justify-content: center;\r\n	align-items: center;\r\n	margin-top: 16px;\r\n}\n.couponNotFound p{\r\n	font-weight: 400;\r\n    font-size: 12px;\r\n}\n.couponNotFound h4 {\r\n	font-weight: 700;\r\n    font-size: 20px;\r\n}\n.redeemCoinBox {\r\n	display: flex;\r\n	flex-direction: column;\r\n	justify-content: center;\r\n	align-items: center;\r\n	gap: 8px;\r\n}\n.redeemHeading h3 {\r\n	font-weight: 700;\r\n    font-size: 14px;\r\n}\n.redeemText p {\r\n	font-weight: 400;\r\n    font-size: 14px;\r\n}\n.redeemCoinMainContainer {\r\n	width: 100%;\r\n	height: 100%;\r\n    background-color: #ffffff8c;\r\n	width: 100%;\r\n	height: 100%;\r\n	position: absolute;\r\n	bottom: -12px;\r\n}\n.redeemCoinContainer {\r\n	background-color: white;\r\n	position: absolute;\r\n	padding: 16px;\r\n	width: 100%;\r\n	height: fit-content;\r\n	bottom: 0px;\r\n	border-radius: 8px;\r\n	box-shadow: 0px -44px 60px -11px rgba(194,194,194,1);\r\n}\n.redeemCloseContainer {\r\n	display: flex;\r\n	justify-content: end;\r\n	align-items: center;\r\n}\n.redeemVoucherMain {\r\n	display: flex;\r\n	justify-content: start;\r\n	align-items: center;\r\n	gap: 16px;\r\n}\n.redeemVoucherMain h2 {\r\n	font-weight: 700;\r\n    font-size: 30px;\r\n}";
  document.head.appendChild(__vite_style__);
  var n, l$1, u$1, i$1, o$2, r$1, f$1, c$1 = {}, s$1 = [], a$1 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, v$1 = Array.isArray;
  function h$1(n2, l2) {
    for (var u2 in l2)
      n2[u2] = l2[u2];
    return n2;
  }
  function p(n2) {
    var l2 = n2.parentNode;
    l2 && l2.removeChild(n2);
  }
  function y(l2, u2, t2) {
    var i2, o2, r2, f2 = {};
    for (r2 in u2)
      "key" == r2 ? i2 = u2[r2] : "ref" == r2 ? o2 = u2[r2] : f2[r2] = u2[r2];
    if (arguments.length > 2 && (f2.children = arguments.length > 3 ? n.call(arguments, 2) : t2), "function" == typeof l2 && null != l2.defaultProps)
      for (r2 in l2.defaultProps)
        void 0 === f2[r2] && (f2[r2] = l2.defaultProps[r2]);
    return d$1(l2, f2, i2, o2, null);
  }
  function d$1(n2, t2, i2, o2, r2) {
    var f2 = { type: n2, props: t2, key: i2, ref: o2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r2 ? ++u$1 : r2 };
    return null == r2 && null != l$1.vnode && l$1.vnode(f2), f2;
  }
  function k$1(n2) {
    return n2.children;
  }
  function b$1(n2, l2) {
    this.props = n2, this.context = l2;
  }
  function g$1(n2, l2) {
    if (null == l2)
      return n2.__ ? g$1(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
    for (var u2; l2 < n2.__k.length; l2++)
      if (null != (u2 = n2.__k[l2]) && null != u2.__e)
        return u2.__d || u2.__e;
    return "function" == typeof n2.type ? g$1(n2) : null;
  }
  function m$1(n2) {
    var l2, u2;
    if (null != (n2 = n2.__) && null != n2.__c) {
      for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++)
        if (null != (u2 = n2.__k[l2]) && null != u2.__e) {
          n2.__e = n2.__c.base = u2.__e;
          break;
        }
      return m$1(n2);
    }
  }
  function w$1(n2) {
    (!n2.__d && (n2.__d = true) && i$1.push(n2) && !x.__r++ || o$2 !== l$1.debounceRendering) && ((o$2 = l$1.debounceRendering) || r$1)(x);
  }
  function x() {
    var n2, l2, u2, t2, o2, r2, e2, c2, s2;
    for (i$1.sort(f$1); n2 = i$1.shift(); )
      n2.__d && (l2 = i$1.length, t2 = void 0, o2 = void 0, r2 = void 0, c2 = (e2 = (u2 = n2).__v).__e, (s2 = u2.__P) && (t2 = [], o2 = [], (r2 = h$1({}, e2)).__v = e2.__v + 1, z(s2, e2, r2, u2.__n, void 0 !== s2.ownerSVGElement, null != e2.__h ? [c2] : null, t2, null == c2 ? g$1(e2) : c2, e2.__h, o2), L(t2, e2, o2), e2.__e != c2 && m$1(e2)), i$1.length > l2 && i$1.sort(f$1));
    x.__r = 0;
  }
  function P(n2, l2, u2, t2, i2, o2, r2, f2, e2, a2, h2) {
    var p2, y2, _2, b2, m2, w2, x2, P2, C, D2 = 0, H2 = t2 && t2.__k || s$1, I2 = H2.length, T2 = I2, j2 = l2.length;
    for (u2.__k = [], p2 = 0; p2 < j2; p2++)
      null != (b2 = u2.__k[p2] = null == (b2 = l2[p2]) || "boolean" == typeof b2 || "function" == typeof b2 ? null : "string" == typeof b2 || "number" == typeof b2 || "bigint" == typeof b2 ? d$1(null, b2, null, null, b2) : v$1(b2) ? d$1(k$1, { children: b2 }, null, null, null) : b2.__b > 0 ? d$1(b2.type, b2.props, b2.key, b2.ref ? b2.ref : null, b2.__v) : b2) ? (b2.__ = u2, b2.__b = u2.__b + 1, -1 === (P2 = A(b2, H2, x2 = p2 + D2, T2)) ? _2 = c$1 : (_2 = H2[P2] || c$1, H2[P2] = void 0, T2--), z(n2, b2, _2, i2, o2, r2, f2, e2, a2, h2), m2 = b2.__e, (y2 = b2.ref) && _2.ref != y2 && (_2.ref && N(_2.ref, null, b2), h2.push(y2, b2.__c || m2, b2)), null != m2 && (null == w2 && (w2 = m2), (C = _2 === c$1 || null === _2.__v) ? -1 == P2 && D2-- : P2 !== x2 && (P2 === x2 + 1 ? D2++ : P2 > x2 ? T2 > j2 - x2 ? D2 += P2 - x2 : D2-- : D2 = P2 < x2 && P2 == x2 - 1 ? P2 - x2 : 0), x2 = p2 + D2, "function" != typeof b2.type || P2 === x2 && _2.__k !== b2.__k ? "function" == typeof b2.type || P2 === x2 && !C ? void 0 !== b2.__d ? (e2 = b2.__d, b2.__d = void 0) : e2 = m2.nextSibling : e2 = S(n2, m2, e2) : e2 = $(b2, e2, n2), "function" == typeof u2.type && (u2.__d = e2))) : (_2 = H2[p2]) && null == _2.key && _2.__e && (_2.__e == e2 && (_2.__ = t2, e2 = g$1(_2)), O(_2, _2, false), H2[p2] = null);
    for (u2.__e = w2, p2 = I2; p2--; )
      null != H2[p2] && ("function" == typeof u2.type && null != H2[p2].__e && H2[p2].__e == u2.__d && (u2.__d = H2[p2].__e.nextSibling), O(H2[p2], H2[p2]));
  }
  function $(n2, l2, u2) {
    for (var t2, i2 = n2.__k, o2 = 0; i2 && o2 < i2.length; o2++)
      (t2 = i2[o2]) && (t2.__ = n2, l2 = "function" == typeof t2.type ? $(t2, l2, u2) : S(u2, t2.__e, l2));
    return l2;
  }
  function S(n2, l2, u2) {
    return null == u2 || u2.parentNode !== n2 ? n2.insertBefore(l2, null) : l2 == u2 && null != l2.parentNode || n2.insertBefore(l2, u2), l2.nextSibling;
  }
  function A(n2, l2, u2, t2) {
    var i2 = n2.key, o2 = n2.type, r2 = u2 - 1, f2 = u2 + 1, e2 = l2[u2];
    if (null === e2 || e2 && i2 == e2.key && o2 === e2.type)
      return u2;
    if (t2 > (null != e2 ? 1 : 0))
      for (; r2 >= 0 || f2 < l2.length; ) {
        if (r2 >= 0) {
          if ((e2 = l2[r2]) && i2 == e2.key && o2 === e2.type)
            return r2;
          r2--;
        }
        if (f2 < l2.length) {
          if ((e2 = l2[f2]) && i2 == e2.key && o2 === e2.type)
            return f2;
          f2++;
        }
      }
    return -1;
  }
  function D(n2, l2, u2, t2, i2) {
    var o2;
    for (o2 in u2)
      "children" === o2 || "key" === o2 || o2 in l2 || I(n2, o2, null, u2[o2], t2);
    for (o2 in l2)
      i2 && "function" != typeof l2[o2] || "children" === o2 || "key" === o2 || "value" === o2 || "checked" === o2 || u2[o2] === l2[o2] || I(n2, o2, l2[o2], u2[o2], t2);
  }
  function H(n2, l2, u2) {
    "-" === l2[0] ? n2.setProperty(l2, null == u2 ? "" : u2) : n2[l2] = null == u2 ? "" : "number" != typeof u2 || a$1.test(l2) ? u2 : u2 + "px";
  }
  function I(n2, l2, u2, t2, i2) {
    var o2;
    n:
      if ("style" === l2)
        if ("string" == typeof u2)
          n2.style.cssText = u2;
        else {
          if ("string" == typeof t2 && (n2.style.cssText = t2 = ""), t2)
            for (l2 in t2)
              u2 && l2 in u2 || H(n2.style, l2, "");
          if (u2)
            for (l2 in u2)
              t2 && u2[l2] === t2[l2] || H(n2.style, l2, u2[l2]);
        }
      else if ("o" === l2[0] && "n" === l2[1])
        o2 = l2 !== (l2 = l2.replace(/(PointerCapture)$|Capture$/, "$1")), l2 = l2.toLowerCase() in n2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + o2] = u2, u2 ? t2 ? u2.u = t2.u : (u2.u = Date.now(), n2.addEventListener(l2, o2 ? j$1 : T, o2)) : n2.removeEventListener(l2, o2 ? j$1 : T, o2);
      else if ("dangerouslySetInnerHTML" !== l2) {
        if (i2)
          l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" !== l2 && "height" !== l2 && "href" !== l2 && "list" !== l2 && "form" !== l2 && "tabIndex" !== l2 && "download" !== l2 && "rowSpan" !== l2 && "colSpan" !== l2 && "role" !== l2 && l2 in n2)
          try {
            n2[l2] = null == u2 ? "" : u2;
            break n;
          } catch (n3) {
          }
        "function" == typeof u2 || (null == u2 || false === u2 && "-" !== l2[4] ? n2.removeAttribute(l2) : n2.setAttribute(l2, u2));
      }
  }
  function T(n2) {
    var u2 = this.l[n2.type + false];
    if (n2.t) {
      if (n2.t <= u2.u)
        return;
    } else
      n2.t = Date.now();
    return u2(l$1.event ? l$1.event(n2) : n2);
  }
  function j$1(n2) {
    return this.l[n2.type + true](l$1.event ? l$1.event(n2) : n2);
  }
  function z(n2, u2, t2, i2, o2, r2, f2, e2, c2, s2) {
    var a2, p2, y2, d2, _2, g2, m2, w2, x2, $2, C, S2, A2, D2, H2, I2 = u2.type;
    if (void 0 !== u2.constructor)
      return null;
    null != t2.__h && (c2 = t2.__h, e2 = u2.__e = t2.__e, u2.__h = null, r2 = [e2]), (a2 = l$1.__b) && a2(u2);
    n:
      if ("function" == typeof I2)
        try {
          if (w2 = u2.props, x2 = (a2 = I2.contextType) && i2[a2.__c], $2 = a2 ? x2 ? x2.props.value : a2.__ : i2, t2.__c ? m2 = (p2 = u2.__c = t2.__c).__ = p2.__E : ("prototype" in I2 && I2.prototype.render ? u2.__c = p2 = new I2(w2, $2) : (u2.__c = p2 = new b$1(w2, $2), p2.constructor = I2, p2.render = q), x2 && x2.sub(p2), p2.props = w2, p2.state || (p2.state = {}), p2.context = $2, p2.__n = i2, y2 = p2.__d = true, p2.__h = [], p2._sb = []), null == p2.__s && (p2.__s = p2.state), null != I2.getDerivedStateFromProps && (p2.__s == p2.state && (p2.__s = h$1({}, p2.__s)), h$1(p2.__s, I2.getDerivedStateFromProps(w2, p2.__s))), d2 = p2.props, _2 = p2.state, p2.__v = u2, y2)
            null == I2.getDerivedStateFromProps && null != p2.componentWillMount && p2.componentWillMount(), null != p2.componentDidMount && p2.__h.push(p2.componentDidMount);
          else {
            if (null == I2.getDerivedStateFromProps && w2 !== d2 && null != p2.componentWillReceiveProps && p2.componentWillReceiveProps(w2, $2), !p2.__e && (null != p2.shouldComponentUpdate && false === p2.shouldComponentUpdate(w2, p2.__s, $2) || u2.__v === t2.__v)) {
              for (u2.__v !== t2.__v && (p2.props = w2, p2.state = p2.__s, p2.__d = false), u2.__e = t2.__e, u2.__k = t2.__k, u2.__k.forEach(function(n3) {
                n3 && (n3.__ = u2);
              }), C = 0; C < p2._sb.length; C++)
                p2.__h.push(p2._sb[C]);
              p2._sb = [], p2.__h.length && f2.push(p2);
              break n;
            }
            null != p2.componentWillUpdate && p2.componentWillUpdate(w2, p2.__s, $2), null != p2.componentDidUpdate && p2.__h.push(function() {
              p2.componentDidUpdate(d2, _2, g2);
            });
          }
          if (p2.context = $2, p2.props = w2, p2.__P = n2, p2.__e = false, S2 = l$1.__r, A2 = 0, "prototype" in I2 && I2.prototype.render) {
            for (p2.state = p2.__s, p2.__d = false, S2 && S2(u2), a2 = p2.render(p2.props, p2.state, p2.context), D2 = 0; D2 < p2._sb.length; D2++)
              p2.__h.push(p2._sb[D2]);
            p2._sb = [];
          } else
            do {
              p2.__d = false, S2 && S2(u2), a2 = p2.render(p2.props, p2.state, p2.context), p2.state = p2.__s;
            } while (p2.__d && ++A2 < 25);
          p2.state = p2.__s, null != p2.getChildContext && (i2 = h$1(h$1({}, i2), p2.getChildContext())), y2 || null == p2.getSnapshotBeforeUpdate || (g2 = p2.getSnapshotBeforeUpdate(d2, _2)), P(n2, v$1(H2 = null != a2 && a2.type === k$1 && null == a2.key ? a2.props.children : a2) ? H2 : [H2], u2, t2, i2, o2, r2, f2, e2, c2, s2), p2.base = u2.__e, u2.__h = null, p2.__h.length && f2.push(p2), m2 && (p2.__E = p2.__ = null);
        } catch (n3) {
          u2.__v = null, (c2 || null != r2) && (u2.__e = e2, u2.__h = !!c2, r2[r2.indexOf(e2)] = null), l$1.__e(n3, u2, t2);
        }
      else
        null == r2 && u2.__v === t2.__v ? (u2.__k = t2.__k, u2.__e = t2.__e) : u2.__e = M(t2.__e, u2, t2, i2, o2, r2, f2, c2, s2);
    (a2 = l$1.diffed) && a2(u2);
  }
  function L(n2, u2, t2) {
    for (var i2 = 0; i2 < t2.length; i2++)
      N(t2[i2], t2[++i2], t2[++i2]);
    l$1.__c && l$1.__c(u2, n2), n2.some(function(u3) {
      try {
        n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
          n3.call(u3);
        });
      } catch (n3) {
        l$1.__e(n3, u3.__v);
      }
    });
  }
  function M(l2, u2, t2, i2, o2, r2, f2, e2, s2) {
    var a2, h2, y2, d2 = t2.props, _2 = u2.props, k2 = u2.type, b2 = 0;
    if ("svg" === k2 && (o2 = true), null != r2) {
      for (; b2 < r2.length; b2++)
        if ((a2 = r2[b2]) && "setAttribute" in a2 == !!k2 && (k2 ? a2.localName === k2 : 3 === a2.nodeType)) {
          l2 = a2, r2[b2] = null;
          break;
        }
    }
    if (null == l2) {
      if (null === k2)
        return document.createTextNode(_2);
      l2 = o2 ? document.createElementNS("http://www.w3.org/2000/svg", k2) : document.createElement(k2, _2.is && _2), r2 = null, e2 = false;
    }
    if (null === k2)
      d2 === _2 || e2 && l2.data === _2 || (l2.data = _2);
    else {
      if (r2 = r2 && n.call(l2.childNodes), h2 = (d2 = t2.props || c$1).dangerouslySetInnerHTML, y2 = _2.dangerouslySetInnerHTML, !e2) {
        if (null != r2)
          for (d2 = {}, b2 = 0; b2 < l2.attributes.length; b2++)
            d2[l2.attributes[b2].name] = l2.attributes[b2].value;
        (y2 || h2) && (y2 && (h2 && y2.__html == h2.__html || y2.__html === l2.innerHTML) || (l2.innerHTML = y2 && y2.__html || ""));
      }
      if (D(l2, _2, d2, o2, e2), y2)
        u2.__k = [];
      else if (P(l2, v$1(b2 = u2.props.children) ? b2 : [b2], u2, t2, i2, o2 && "foreignObject" !== k2, r2, f2, r2 ? r2[0] : t2.__k && g$1(t2, 0), e2, s2), null != r2)
        for (b2 = r2.length; b2--; )
          null != r2[b2] && p(r2[b2]);
      e2 || ("value" in _2 && void 0 !== (b2 = _2.value) && (b2 !== l2.value || "progress" === k2 && !b2 || "option" === k2 && b2 !== d2.value) && I(l2, "value", b2, d2.value, false), "checked" in _2 && void 0 !== (b2 = _2.checked) && b2 !== l2.checked && I(l2, "checked", b2, d2.checked, false));
    }
    return l2;
  }
  function N(n2, u2, t2) {
    try {
      "function" == typeof n2 ? n2(u2) : n2.current = u2;
    } catch (n3) {
      l$1.__e(n3, t2);
    }
  }
  function O(n2, u2, t2) {
    var i2, o2;
    if (l$1.unmount && l$1.unmount(n2), (i2 = n2.ref) && (i2.current && i2.current !== n2.__e || N(i2, null, u2)), null != (i2 = n2.__c)) {
      if (i2.componentWillUnmount)
        try {
          i2.componentWillUnmount();
        } catch (n3) {
          l$1.__e(n3, u2);
        }
      i2.base = i2.__P = null, n2.__c = void 0;
    }
    if (i2 = n2.__k)
      for (o2 = 0; o2 < i2.length; o2++)
        i2[o2] && O(i2[o2], u2, t2 || "function" != typeof n2.type);
    t2 || null == n2.__e || p(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
  }
  function q(n2, l2, u2) {
    return this.constructor(n2, u2);
  }
  function B$1(u2, t2, i2) {
    var o2, r2, f2, e2;
    l$1.__ && l$1.__(u2, t2), r2 = (o2 = "function" == typeof i2) ? null : i2 && i2.__k || t2.__k, f2 = [], e2 = [], z(t2, u2 = (!o2 && i2 || t2).__k = y(k$1, null, [u2]), r2 || c$1, c$1, void 0 !== t2.ownerSVGElement, !o2 && i2 ? [i2] : r2 ? null : t2.firstChild ? n.call(t2.childNodes) : null, f2, !o2 && i2 ? i2 : r2 ? r2.__e : t2.firstChild, o2, e2), L(f2, u2, e2);
  }
  n = s$1.slice, l$1 = { __e: function(n2, l2, u2, t2) {
    for (var i2, o2, r2; l2 = l2.__; )
      if ((i2 = l2.__c) && !i2.__)
        try {
          if ((o2 = i2.constructor) && null != o2.getDerivedStateFromError && (i2.setState(o2.getDerivedStateFromError(n2)), r2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, t2 || {}), r2 = i2.__d), r2)
            return i2.__E = i2;
        } catch (l3) {
          n2 = l3;
        }
    throw n2;
  } }, u$1 = 0, b$1.prototype.setState = function(n2, l2) {
    var u2;
    u2 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = h$1({}, this.state), "function" == typeof n2 && (n2 = n2(h$1({}, u2), this.props)), n2 && h$1(u2, n2), null != n2 && this.__v && (l2 && this._sb.push(l2), w$1(this));
  }, b$1.prototype.forceUpdate = function(n2) {
    this.__v && (this.__e = true, n2 && this.__h.push(n2), w$1(this));
  }, b$1.prototype.render = k$1, i$1 = [], r$1 = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f$1 = function(n2, l2) {
    return n2.__v.__b - l2.__v.__b;
  }, x.__r = 0;
  const style = "\r\n@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');\n/* :root {\r\n	font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;\r\n	line-height: 1.5;\r\n	font-weight: 400;\r\n	\r\n	color: #222;\r\n	background-color: #ffffff;\r\n	\r\n	font-synthesis: none;\r\n	text-rendering: optimizeLegibility;\r\n	-webkit-font-smoothing: antialiased;\r\n	-moz-osx-font-smoothing: grayscale;\r\n	-webkit-text-size-adjust: 100%;\r\n}\r\n*/\nbody {\r\n	margin: 0;\r\n	padding: 0;\r\n	font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;\r\n}\n.fc-loyalty-popup-19212-root * {\r\n	padding: 0;\r\n	margin: 0;\r\n	box-sizing: border-box;\r\n}\n.fc-loyalty-popup-19212-root a {\r\n	text-decoration: none;\r\n	color: inherit;\r\n}\n.fc-loyalty-popup-19212-root {\r\n	width: 100%;\r\n}\n/* Loyality popup styles */\n.floatingPopup {\r\n    background-color: black;\r\n	padding: 1rem;\r\n	display: flex;\r\n	position: fixed;\r\n	width: 60px;\r\n	height: 60px;\r\n	bottom: 3%;\r\n    right: 3%;\r\n	justify-content: center;\r\n	align-items: center;\r\n	border-radius: 100%;\r\n	z-index: 9999;\r\n	cursor: pointer;\r\n	\r\n}\n.mainPopup {\r\n	background-color: white;\r\n	scrollbar-width: none;\r\n	z-index: 999;\r\n	position: fixed;\r\n	gap: 16px;\r\n	bottom: 13%;\r\n	right: 7%;\r\n	max-width: 360px;\r\n	max-height: 580px;\r\n	width: 85vw;\r\n    height: 80vh;\r\n	border-radius: 15px;\r\n	overflow-x: hidden;\r\n	overflow-y: scroll;\r\n	padding-bottom: 16px;\r\n	box-shadow: 0 0.0625em 0.0625em rgba(0,0,0,.55), 0 0.125em 0.5em rgba(0,0,0,.55), inset 0 0 0 1px hsla(0,0%,100%,.1);\r\n}\n.mainContent {\r\n	display: flex;\r\n	flex-direction: column;\r\n	justify-content: start;\r\n	align-items: start;\r\n	padding-bottom: 16px;\r\n}\n.header {\r\n	display: flex;\r\n	justify-content: space-between;\r\n  	align-items: flex-start;\r\n	height: 10vh;\r\n	padding: 14px;\r\n	margin-bottom: 10px;\r\n}\n.header p {\r\n	color: #0c0c0c;\r\n    font-size: 12px;\r\n}\n.header h6 {\r\n	color: #0c0c0c;\r\n    font-size: 20px;\r\n	margin: 0;\r\n}\n.closePopup {\r\n	cursor: pointer;\r\n	width: 30px;\r\n	height: 30px;\r\n}\n.walletCard {\r\n	background-color: black;\r\n    padding: 12px 13px;\r\n    border-radius: 16px;\r\n    box-shadow: none;\r\n    margin: 0 14px;\r\n    width: calc(100% - 32px);\r\n	display: flex;\r\n	justify-content: space-between;\r\n	cursor: pointer;\r\n}\n.coinCard img {\r\n	width: 20px;\r\n	height: 20px;\r\n}\n.coinCard {\r\n	background-color: #fff;\r\n    border-radius: 4px;\r\n    margin: 0 6px;\r\n    padding: 5px 10px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n	gap: 8px;\r\n}\n.coinCard h1 {\r\n    font-size: 18px;\r\n	font-weight: 600;\r\n	color: black;\r\n}\n.badgeCard img {\r\n	height: 12px;\r\n	width: 12px;\r\n}\n.badgeCard p {\r\n	font-size: 11px;\r\n}\n.badgeCard {\r\n	display: flex;\r\n	justify-content: left;\r\n	align-items: center;\r\n	color: white;\r\n	gap: 4px;\r\n}\n.walletCardText {\r\n	color: white;\r\n	font-size: 14px;\r\n	font-weight: bold;\r\n}\n.inviteCard {\r\n	background: linear-gradient(100.56deg,#495fd9 0,#5285e8 57.67%,#5aa6f4 104.69%);\r\n    margin: 0 20px;\r\n    border-radius: 8px;\r\n    padding: 12px;\r\n}\n.inviteTextSection {\r\n	color: white;\r\n	display: flex;\r\n	align-items: center;\r\n	margin-bottom: 18px;\r\n	gap: 8px;\r\n}\n.inviteTextContainer h2 {\r\n	font-weight: 700;\r\n	font-size: 20px;\r\n	margin-bottom: 6px;\r\n	line-height: 16px;\r\n}\n.inviteTextContainer p {\r\n	font-weight: 400;\r\n    font-size: 12px;\r\n	line-height: 14px;\r\n}\n.invitebtn {\r\n	width: 100%;\r\n    background: #fff;\r\n    border-radius: 4px;\r\n    border: none;\r\n    padding: 8px;\r\n    color: #3e56d2;\r\n    font-weight: 700;\r\n    font-size: 12px;\r\n    text-align: center;\r\n    cursor: pointer;\r\n	line-height: normal;\r\n	font-family: Inter, sans-serif;\r\n}\n.couponCard {\r\n	border-radius: 12px;\r\n	color: #000;\r\n	font-size: 14px;\r\n	line-height: 20px;\r\n	cursor: pointer;\r\n	width: 120px;\r\n}\n.couponCardDesc {\r\n	padding: 8px;\r\n	background: #f4f4f4;\r\n	border-radius: 8px;\r\n	box-shadow: 0 -4px 10px rgba(0,0,0,.1);\r\n	position: relative;\r\n	top: -12px;\r\n	min-width: 120px;\r\n	font-size: 13px;\r\n	font-weight: normal;\r\n	display: flex;\r\n	flex-direction: column;\r\n	gap: 4px;\r\n}\n.couponImg {\r\n	border-radius: 8px 8px 0 0;\r\n	width: 120px;\r\n}\n.couponCardPrice {\r\n	display: flex;\r\n	align-items: center;\r\n	justify-content: start;\r\n	gap: 4px;\r\n	font-size: 14px;\r\n	font-weight: 400;\r\n	margin-top: 8px;\r\n}\n.couponFloatingLabel {\r\n	position: absolute;\r\n	top: -10px;\r\n  	right: 10px;\r\n    background: var(--loyalty_popup_theme_background,#000);\r\n    color: #fff;\r\n    width: 40px;\r\n    height: 24px;\r\n    text-align: center;\r\n    line-height: 24px;\r\n    font-weight: 600;\r\n    font-size: 12px;\r\n    border-radius: 4px;\r\n}\n.couponText {\r\n	padding-top: 8px;\r\n	font-family: Inter, sans-serif;\r\n	font-weight: 500;\r\n}\n.couponCardPrice img {\r\n	width: 14px;\r\n	height: 14px;\r\n}\n.viewAllCouponsContainer {\r\n	display: flex;\r\n	justify-content: space-between;\r\n	align-items: center;\r\n	padding: 8px 16px;\r\n	width: 100%;\r\n}\n.viewAllCouponsContainer h1 {\r\n	font-size: 20px;\r\n    font-weight: 700;\r\n}\n.viewAllCouponsContainer a {\r\n	cursor: pointer;\r\n    font-weight: 500;\r\n    font-size: 12px;\r\n}\n.gamesArenaContainer {\r\n	padding: 8px 16px;\r\n	margin-top: 16px;\r\n}\n.gamesArenaContainer h1 {\r\n	font-size: 20px;\r\n    font-weight: 700;\r\n}\n.gamesArenaContainer p {\r\n	font-size: 12px;\r\n    font-weight: 500;\r\n	line-height: 14px;\r\n}\n.gamesCard {\r\n	width: fit-content;\r\n	background-color: #efefef;\r\n	display: flex;\r\n	flex-direction: column;\r\n	justify-content: center;\r\n	align-items: center;\r\n	padding: 8px;\r\n	padding-top: 8px;\r\n	padding-top: 30px;\r\n	border-radius: 8px;\r\n	position: relative;\r\n	bottom: 20px;\r\n	min-width: 120px;\r\n	}\n.gamesCardImg {\r\n	display: flex;\r\n	justify-content: center;\r\n	align-items: center;\r\n	z-index: 2;\r\n	position: relative;\r\n}\n.coinBox {\r\n	background: #fff;\r\n	border-radius: 4px;\r\n	display: flex;\r\n	justify-content: center;\r\n	padding: 4px 14px;\r\n	align-items: center;\r\n	margin-bottom: 8px;\r\n	color: black;\r\n	font-size: 14px;\r\n	gap: 4px;\r\n}\n.gamesCardBtn {\r\n	background: black;\r\n    border-radius: 4px;\r\n    font-weight: 700;\r\n    font-size: 12px;\r\n    text-align: center;\r\n    color: #fff;\r\n    width: 100%;\r\n    padding: 8px;\r\n    cursor: pointer;\r\n	border: none;\r\n}\n.gamesCardTitle {\r\n	font-weight: 700;\r\n    font-size: 12px;\r\n	text-align: center;\r\n}\n.gamesCardDesc {\r\n	font-weight: 500;\r\n    font-size: 10px;\r\n    margin-bottom: 8px;\r\n}\n.gamesHorizontalList {\r\n	height: fit-content;\r\n	padding: 8px 16px;\r\n	display: flex;\r\n	gap: 16px;\r\n	width: 100%;\r\n}\n/* Invite and Earn */\n.inviteWhatsappBtn {\r\n	height: 40px;\r\n    width: 96%;\r\n    background-color: #faa;\r\n    border-radius: 4px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n	border: none;\r\n}\n.inviteRoundedBtn {\r\n	width: 40px;\r\n    height: 40px;\r\n    background-color: #faa;\r\n    border-radius: 50%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n	border: none;\r\n}\n.inviteAndEarnContainer {\r\n	width: 100%;\r\n	padding: 22px;\r\n	border-radius: 16px;\r\n}\n.dashedDivider {\r\n	border: none;\r\n    height: 1px;\r\n    background: repeating-linear-gradient(90deg,#000,#000 6px,transparent 6px,transparent 12px);\r\n    margin: 20px 0 16px 0;\r\n}\n.inviteEarnTextContainer {\r\n	display: flex;\r\n	justify-content: center;\r\n	align-items: center;\r\n	font-weight: 400;\r\n    font-size: 14px;\r\n    color: #acacac;\r\n    margin: 8px 0px;\r\n    text-align: center;\r\n}\n.inviteAndEarn {\r\n	display: flex;\r\n	justify-content: flex-start;\r\n	align-items: center;\r\n	gap: 16px;\r\n}\n.inviteAndEarn h2 {\r\n	font-weight: 700;\r\n    font-size: 30px;\r\n}\n.inviteAndEarnMessage h4 {\r\n	text-align: center;\r\n    font-weight: 500;\r\n    font-size: 16px;\r\n    line-height: 30px;\r\n    margin: 20px 0!important;\r\n}\n.inviteLinkContainer {\r\n	padding: 12px;\r\n    background: #faa;\r\n    border-radius: 4px;\r\n    border: 1px dashed #000;\r\n    font-size: 16px;\r\n    font-weight: 700;\r\n    display: flex;\r\n	justify-content: space-between;\r\n    align-items: center;\r\n}\n.inviteLinkContainer p {\r\n	font-size: 14px;\r\n}\n.inviteLinkContainer img {\r\n	max-width: 16px;\r\n	cursor: pointer;\r\n}\n.sendInvitesBtnContainer, .inviteWhatsappBtn {\r\n	display: flex;\r\n	justify-content: center;\r\n	align-items: center;\r\n	gap: 8px;\r\n}\n.closeInviteContainer {\r\n	display: flex;\r\n	justify-content: end;\r\n	align-items: center;\r\n}\n.couponUnlockBtn {\r\n	background-color: black;\r\n    color: #fff;\r\n    padding: 11px 0;\r\n    border-radius: 8px;\r\n    font-family: Inter,sans-serif;\r\n    font-weight: 700;\r\n    cursor: pointer;\r\n    width: 100%;\r\n    font-size: 14px;\r\n	border: none;\r\n}\n.unlockCouponContainer {\r\n	width: 100%;\r\n	position: absolute;\r\n	top: 0;\r\n	background-color: #ccccccc4;\r\n	z-index: 999;\r\n	height: 100%;\r\n	display: flex;\r\n	flex-direction: column;\r\n	justify-content: end;\r\n}\n.couponOverlayContainer {\r\n	display: flex;\r\n	justify-content: start;\r\n	align-items: center;\r\n	gap: 8px;\r\n}\n.couponContainer {\r\n	background-color: white;\r\n	width: 100%;\r\n	padding: 16px;\r\n	border-radius: 16px;\r\n}\n.showAllCouponsList {\r\n	display: flex;\r\n	justify-content: start;\r\n	align-items: start;\r\n	gap: 16px;\r\n	scrollbar-width: none;\r\n	overflow-x: scroll;\r\n	overflow-y: hidden;\r\n	padding: 0 16px;\r\n}\n.pointsActivityClass {\r\n    height: 100%;\r\n	width: 100%;\r\n	background-color: white;\r\n	position: absolute;\r\n	top: 0px;\r\n	z-index: 999;\r\n	overflow-x: hidden;\r\n	overflow-y: scroll;\r\n	scrollbar-width: none;\r\n}\n.pointsActivityClass h4 {\r\n	margin-left: 22px;\r\n    font-size: 20px;\r\n}\n.transaction-log-container {\r\n	margin: 24px 20px;\r\n    padding: 6px;\r\n    background: #fff;\r\n    border-radius: 8px;\r\n    border: 1px solid rgb(231, 231, 231);\r\n    border-radius: 6px;\r\n    box-shadow: 1px 2px 2px rgb(231, 231, 231);\r\n}\n.transaction-log-container .log-body {\r\n    padding: 8px 18px;\r\n}\n.transaction-log-container .log-body .amount {\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n}\n.transaction-log-container .log-header {\r\n	display: flex;\r\n	justify-content: space-between;\r\n	align-items: center;\r\n	border-bottom: 1px solid rgb(231, 231, 231);\r\n	padding: 8px 18px;\r\n	font-size: 14px;\r\n}\n.transaction-log-container .log-header .log-type {\r\n	border-radius: 4px;\r\n	padding: 4px 8px;\r\n	font-weight: 600;\r\n}\n.transaction-log-container .log-header .log-type.credited {\r\n	background-color: rgb(209, 255, 217);\r\n	color: rgb(30, 175, 109);\r\n	font-size: 12px;\r\n}\n.transaction-log-container .log-header .log-type.debited {\r\n	background-color: rgba(181, 0, 0, 0.1);\r\n	color: rgb(181, 0, 0);\r\n	font-size: 12px;\r\n}\n.inviteAndEarnContainer {\r\n	background-color: white;\r\n	position: absolute;\r\n	max-width: 360px;\r\n	max-height: 580px;\r\n	width: 85vw;\r\n	height: fit-content;\r\n	bottom: 2px;\r\n	z-index: 999;\r\n	background-color: white;\r\n	top: 85%;\r\n	box-shadow: 3px 3px 90px 6px #ccc;\r\n}\n.shareTextContainer {\r\n	display: flex;\r\n	justify-content: center;\r\n	align-items: center;\r\n	font-weight: 400;\r\n	font-size: 14px;\r\n	color: #acacac;\r\n	text-align: center;\r\n	margin-bottom: 12px;\r\n}\n.pointsActivityHeader {\r\n	display: flex;\r\n	justify-content: space-between;\r\n	align-items: center;\r\n	padding-right: 12px;\r\n  	padding-top: 12px;\r\n}\n.pointsActivityHeader img {\r\n	width: 30px;\r\n	height: 30px;\r\n	cursor: pointer;\r\n}\n.showGamesOverlay {\r\n	background-color: white;\r\n	width: 100%;\r\n	height: 100%;\r\n	position: absolute;\r\n	display: flex;\r\n	flex-direction: column;\r\n	top: 0;\r\n}\n.unlockTextContainer {\r\n	font-weight: 700;\r\n    font-size: 16px;\r\n    margin: 22px;\r\n	text-align: center;\r\n}\n.unlockText h5 {\r\n	font-weight: 700;\r\n    font-size: 16px;\r\n    margin: 16px 0;\r\n}\n.crossImg {\r\n	display: flex;\r\n	justify-content: end;\r\n	align-items: center;\r\n}\n.crossImg img {\r\n	width: 24px;\r\n	height: 24px;\r\n	cursor: pointer;\r\n}\n.unlockDesc p {\r\n	font-weight: 400;\r\n    font-size: 14px\r\n}\n.showGamesHeader {\r\n	display: flex;\r\n	justify-content: space-between;\r\n	align-items: center;\r\n	padding: 8px 16px;\r\n}\n.showGamesHeader img {\r\n	width: 30px;\r\n	height: 30px;\r\n	cursor: pointer;\r\n}\n.showGamesHeader h2 {\r\n	font-size: 20px;\r\n}\n.showGamesTab {\r\n	display: flex;\r\n	justify-content: space-between;\r\n	align-items: center;\r\n	padding: 0px 16px;\r\n}\n.showGamesTab h2 {\r\n	font-size: 18px;\r\n}\n.gamesTab {\r\n	display: flex;\r\n	justify-content: center;\r\n	align-items: center;\r\n	gap: 8px;\r\n}\n.walletCoinsBox {\r\n	display: flex;\r\n	justify-content: center;\r\n	align-items: center;\r\n	background-color: black;\r\n	padding: 2px 8px;\r\n	border-radius: 50px;\r\n	gap: 4px;\r\n}\n.walletCoinsBox p {\r\n	color: white;\r\n	font-size: 20px;\r\n}\n.walletCoinsBox img {\r\n	width: 16px;\r\n	height: 16px;\r\n}\n.showGamesCards {\r\n	background-color: white;\r\n	display: flex;\r\n	justify-content: start;\r\n	align-items: center;\r\n	padding: 0px 16px;\r\n	gap: 16px;\r\n}\n.viewAllCoupons {\r\n	position: absolute;\r\n	background-color: white;\r\n	width: 100%;\r\n	height: 100%;\r\n	top: 0;\r\n}\n.viewAllCouponsHeader {\r\n	display: flex;\r\n	justify-content: space-between;\r\n	align-items: center;\r\n	padding: 8px 16px;\r\n}\n.viewAllCouponsHeader h4 {\r\n	font-size: 20px;\r\n	font-weight: 700;\r\n}\n.viewAllCouponsHeader img {\r\n	width: 30px;\r\n	height: 30px;\r\n	cursor: pointer;\r\n}\n.viewAllCouponTabText {\r\n	display: flex;\r\n	justify-content: center;\r\n	align-items: center;\r\n}\n.viewAllCouponTabText h4 {\r\n	cursor: pointer;\r\n	color: #959595;\r\n}\n.viewAllCouponsTab {\r\n	display: flex;\r\n	justify-content: space-between;\r\n	align-items: center;\r\n	padding: 8px 16px;\r\n}\n.viewAllFeaturedComponent h3 {\r\n	margin-left: 16px;\r\n}\n.reedemfcCoins {\r\n	padding: 16px;\r\n}\n.reedemfcCoins h5, .exploreCoupons h5{\r\n	font-weight: 700;\r\n    font-size: 16px;\r\n}\n.reedemfcCoins p{\r\n	/* margin-top: 8px; */\r\n    font-weight: 400;\r\n    font-size: 12px;\r\n	line-height: 14px;\r\n}\n.reedemfcCoinsCard {\r\n	background-color: #f4f4f4;\r\n	display: flex;\r\n	justify-content: center;\r\n	align-items: center;\r\n	gap: 8px;\r\n	padding: 8px;\r\n	border-radius: 8px;\r\n}\n.exploreCouponCard {\r\n	background-color: #f4f4f4;\r\n	display: flex;\r\n	justify-content: start;\r\n	align-items: center;\r\n	padding: 16px;\r\n	border-radius: 8px;\r\n	cursor: pointer;\r\n}\n.exploreCoupons {\r\n	padding: 16px;\r\n}\n.shipImgBox {\r\n	border-right: 1px dashed #959595;\r\n	padding-right: 8px;\r\n    margin-right: 8px\r\n}\n.exploreCouponCardText {\r\n	font-weight: 700;\r\n    font-size: 14px;\r\n}\n.exploreCouponCardText img {\r\n	width: 12px;\r\n	height: 12px;\r\n}\n.yourCouponsCardMainContainer {\r\n	padding: 16px;\r\n}\n.yourCouponsCardContainer {\r\n	background-color: #f4f4f4;\r\n	border-radius: 8px;\r\n	display: flex;\r\n	margin-top: 16px;\r\n}\n.youCouponCardLeft, .youCouponCardRight {\r\n	padding: 16px;\r\n	display: flex;\r\n	flex-direction: column;\r\n	justify-content: center;\r\n}\n.youCouponCardLeft {\r\n	border-right: 1px dashed #959595;\r\n	align-items: center;\r\n}\n.youCouponCardRight {\r\n	align-items: start;\r\n}\n.youCouponCardLeft h5 {\r\n	font-size: 24px;\r\n}\n.youCouponCardLeft p {\r\n	font-size: 14px;\r\n}\n.youCouponCardRight h4, .yourCouponCode {\r\n	font-weight: bold;\r\n	font-size: 13px;\r\n	color: black;\r\n}\n.youCouponCardRight p {\r\n	color: #acacac;\r\n	font-size: 12px;\r\n}\n.yourCouponsActiveTab {\r\n	display: flex;\r\n	justify-content: start;\r\n	align-items: center;\r\n	gap: 30px;\r\n}\n.yourCouponsActiveTab div {\r\n	background: #d9d9d9;\r\n    border-radius: 8px;\r\n    padding: 8px;\r\n    font-weight: 700;\r\n    font-size: 14px;\r\n    cursor: pointer;\r\n}\n.couponNotFound {\r\n	display: flex;\r\n	flex-direction: column;\r\n	justify-content: center;\r\n	align-items: center;\r\n	margin-top: 16px;\r\n}\n.couponNotFound p{\r\n	font-weight: 400;\r\n    font-size: 12px;\r\n}\n.couponNotFound h4 {\r\n	font-weight: 700;\r\n    font-size: 20px;\r\n}\n.redeemCoinBox {\r\n	display: flex;\r\n	flex-direction: column;\r\n	justify-content: center;\r\n	align-items: center;\r\n	gap: 8px;\r\n}\n.redeemHeading h3 {\r\n	font-weight: 700;\r\n    font-size: 14px;\r\n}\n.redeemText p {\r\n	font-weight: 400;\r\n    font-size: 14px;\r\n}\n.redeemCoinMainContainer {\r\n	width: 100%;\r\n	height: 100%;\r\n    background-color: #ffffff8c;\r\n	width: 100%;\r\n	height: 100%;\r\n	position: absolute;\r\n	bottom: -12px;\r\n}\n.redeemCoinContainer {\r\n	background-color: white;\r\n	position: absolute;\r\n	padding: 16px;\r\n	width: 100%;\r\n	height: fit-content;\r\n	bottom: 0px;\r\n	border-radius: 8px;\r\n	box-shadow: 0px -44px 60px -11px rgba(194,194,194,1);\r\n}\n.redeemCloseContainer {\r\n	display: flex;\r\n	justify-content: end;\r\n	align-items: center;\r\n}\n.redeemVoucherMain {\r\n	display: flex;\r\n	justify-content: start;\r\n	align-items: center;\r\n	gap: 16px;\r\n}\n.redeemVoucherMain h2 {\r\n	font-weight: 700;\r\n    font-size: 30px;\r\n}";
  var t, r, u, i, o$1 = 0, f = [], c = [], e = l$1.__b, a = l$1.__r, v = l$1.diffed, l = l$1.__c, m = l$1.unmount;
  function d(t2, u2) {
    l$1.__h && l$1.__h(r, t2, o$1 || u2), o$1 = 0;
    var i2 = r.__H || (r.__H = { __: [], __h: [] });
    return t2 >= i2.__.length && i2.__.push({ __V: c }), i2.__[t2];
  }
  function h(n2) {
    return o$1 = 1, s(B, n2);
  }
  function s(n2, u2, i2) {
    var o2 = d(t++, 2);
    if (o2.t = n2, !o2.__c && (o2.__ = [i2 ? i2(u2) : B(void 0, u2), function(n3) {
      var t2 = o2.__N ? o2.__N[0] : o2.__[0], r2 = o2.t(t2, n3);
      t2 !== r2 && (o2.__N = [r2, o2.__[1]], o2.__c.setState({}));
    }], o2.__c = r, !r.u)) {
      var f2 = function(n3, t2, r2) {
        if (!o2.__c.__H)
          return true;
        var u3 = o2.__c.__H.__.filter(function(n4) {
          return n4.__c;
        });
        if (u3.every(function(n4) {
          return !n4.__N;
        }))
          return !c2 || c2.call(this, n3, t2, r2);
        var i3 = false;
        return u3.forEach(function(n4) {
          if (n4.__N) {
            var t3 = n4.__[0];
            n4.__ = n4.__N, n4.__N = void 0, t3 !== n4.__[0] && (i3 = true);
          }
        }), !(!i3 && o2.__c.props === n3) && (!c2 || c2.call(this, n3, t2, r2));
      };
      r.u = true;
      var c2 = r.shouldComponentUpdate, e2 = r.componentWillUpdate;
      r.componentWillUpdate = function(n3, t2, r2) {
        if (this.__e) {
          var u3 = c2;
          c2 = void 0, f2(n3, t2, r2), c2 = u3;
        }
        e2 && e2.call(this, n3, t2, r2);
      }, r.shouldComponentUpdate = f2;
    }
    return o2.__N || o2.__;
  }
  function b() {
    for (var t2; t2 = f.shift(); )
      if (t2.__P && t2.__H)
        try {
          t2.__H.__h.forEach(k), t2.__H.__h.forEach(w), t2.__H.__h = [];
        } catch (r2) {
          t2.__H.__h = [], l$1.__e(r2, t2.__v);
        }
  }
  l$1.__b = function(n2) {
    r = null, e && e(n2);
  }, l$1.__r = function(n2) {
    a && a(n2), t = 0;
    var i2 = (r = n2.__c).__H;
    i2 && (u === r ? (i2.__h = [], r.__h = [], i2.__.forEach(function(n3) {
      n3.__N && (n3.__ = n3.__N), n3.__V = c, n3.__N = n3.i = void 0;
    })) : (i2.__h.forEach(k), i2.__h.forEach(w), i2.__h = [], t = 0)), u = r;
  }, l$1.diffed = function(t2) {
    v && v(t2);
    var o2 = t2.__c;
    o2 && o2.__H && (o2.__H.__h.length && (1 !== f.push(o2) && i === l$1.requestAnimationFrame || ((i = l$1.requestAnimationFrame) || j)(b)), o2.__H.__.forEach(function(n2) {
      n2.i && (n2.__H = n2.i), n2.__V !== c && (n2.__ = n2.__V), n2.i = void 0, n2.__V = c;
    })), u = r = null;
  }, l$1.__c = function(t2, r2) {
    r2.some(function(t3) {
      try {
        t3.__h.forEach(k), t3.__h = t3.__h.filter(function(n2) {
          return !n2.__ || w(n2);
        });
      } catch (u2) {
        r2.some(function(n2) {
          n2.__h && (n2.__h = []);
        }), r2 = [], l$1.__e(u2, t3.__v);
      }
    }), l && l(t2, r2);
  }, l$1.unmount = function(t2) {
    m && m(t2);
    var r2, u2 = t2.__c;
    u2 && u2.__H && (u2.__H.__.forEach(function(n2) {
      try {
        k(n2);
      } catch (n3) {
        r2 = n3;
      }
    }), u2.__H = void 0, r2 && l$1.__e(r2, u2.__v));
  };
  var g = "function" == typeof requestAnimationFrame;
  function j(n2) {
    var t2, r2 = function() {
      clearTimeout(u2), g && cancelAnimationFrame(t2), setTimeout(n2);
    }, u2 = setTimeout(r2, 100);
    g && (t2 = requestAnimationFrame(r2));
  }
  function k(n2) {
    var t2 = r, u2 = n2.__c;
    "function" == typeof u2 && (n2.__c = void 0, u2()), r = t2;
  }
  function w(n2) {
    var t2 = r;
    n2.__c = n2.__(), r = t2;
  }
  function B(n2, t2) {
    return "function" == typeof t2 ? t2(n2) : t2;
  }
  var _ = 0;
  function o(o2, e2, n2, t2, f2, l2) {
    var s2, u2, a2 = {};
    for (u2 in e2)
      "ref" == u2 ? s2 = e2[u2] : a2[u2] = e2[u2];
    var i2 = { type: o2, props: a2, key: n2, ref: s2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --_, __source: f2, __self: l2 };
    if ("function" == typeof o2 && (s2 = o2.defaultProps))
      for (u2 in s2)
        void 0 === a2[u2] && (a2[u2] = s2[u2]);
    return l$1.vnode && l$1.vnode(i2), i2;
  }
  const WalletPointsActivity = ({
    id,
    reason,
    created,
    amount,
    type
  }) => {
    return o(k$1, {
      children: o("div", {
        class: "transaction-log-container",
        children: [o("div", {
          class: "log-header",
          children: [o("div", {
            class: "log-date",
            children: created == null ? void 0 : created.split("T")[0]
          }), o("div", {
            class: `log-type ${type === "ADD" ? "credited" : "debited"}`,
            children: type === "ADD" ? "Credited" : "Debited"
          })]
        }), o("div", {
          class: "log-body",
          children: [o("p", {
            class: "amount",
            children: o("span", {
              children: [type === "ADD" ? "+" : "-", " ", ` ${Number(amount).toLocaleString("en-IN", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2
              })}`]
            })
          }), o("p", {
            class: "reason",
            children: reason
          })]
        })]
      })
    });
  };
  const WalletCard = ({
    onClick
  }) => {
    return o(k$1, {
      children: o("div", {
        onClick,
        class: "walletCard",
        children: [o("div", {
          children: [o("p", {
            class: "walletCardText",
            children: "My FC Coins"
          }), o("div", {
            class: "badgeCard",
            children: [o("img", {
              src: "https://media.farziengineer.co/farziwallet/silver-tier-icon.png",
              alt: ""
            }), o("p", {
              children: "Silver"
            })]
          })]
        }), o("div", {
          class: "coinCard",
          children: [o("img", {
            src: "https://media.farziengineer.co/farziwallet/coin-icon.png",
            alt: ""
          }), o("h1", {
            children: "575"
          })]
        })]
      })
    });
  };
  const InviteCard = ({
    onClick
  }) => {
    return o(k$1, {
      children: o("div", {
        class: "inviteCard",
        children: [o("div", {
          class: "inviteTextSection",
          children: [o("div", {
            children: o("img", {
              src: "https://media.farziengineer.co/farziwallet/rupee-icon.png",
              alt: ""
            })
          }), o("div", {
            class: "inviteTextContainer",
            children: [o("h2", {
              children: "Invite & Earn"
            }), o("p", {
              children: "Get 200 FC coins every time you invite a friend to try loyalty"
            })]
          })]
        }), o("button", {
          onClick,
          class: "invitebtn",
          children: "Share Invite"
        })]
      })
    });
  };
  const CouponCard = ({
    couponImgLink,
    couponPrice,
    couponDesc,
    coinImgLink,
    onClick
  }) => {
    return o(k$1, {
      children: o("div", {
        onClick,
        class: "couponCard",
        children: [o("img", {
          class: "couponImg",
          src: couponImgLink,
          alt: ""
        }), o("div", {
          class: "couponCardDesc",
          children: [o("div", {
            class: "couponFloatingLabel",
            children: ["₹ ", couponPrice]
          }), o("p", {
            class: "couponText",
            children: couponDesc
          }), o("div", {
            className: "couponCardPrice",
            children: [o("img", {
              src: coinImgLink
            }), o("p", {
              children: couponPrice
            })]
          })]
        })]
      })
    });
  };
  const CouponOverlay = ({
    onClick
  }) => {
    return o(k$1, {
      children: o("div", {
        class: "unlockCouponContainer",
        children: o("div", {
          class: "couponContainer",
          children: [o("div", {
            class: "crossImg",
            children: o("img", {
              onClick,
              src: "https://media.farziengineer.co/farziwallet/cross.png",
              alt: ""
            })
          }), o("div", {
            class: "couponOverlayContainer",
            children: [o("img", {
              src: "https://media.farziengineer.co/farziwallet/voucher-icon.png",
              alt: ""
            }), o("h2", {
              children: "$30 Voucher"
            })]
          }), o("div", {
            class: "unlockText",
            children: o("h5", {
              children: "Rs. 30 off on Striped Silk Blouse"
            })
          }), o("div", {
            class: "unlockDesc",
            children: o("p", {
              children: "The management reserves the right to modify the coupon as they see fit and to adjust the customer's wallet if they determine the event."
            })
          }), o("div", {
            children: o("hr", {
              class: "dashedDivider"
            })
          }), o("div", {
            class: "unlockTextContainer",
            children: o("h4", {
              children: "Unlock for 30 FC Coins"
            })
          }), o("div", {
            children: o("button", {
              class: "couponUnlockBtn",
              children: "Tap to Unlock"
            })
          })]
        })
      })
    });
  };
  const RedeemCoin = ({
    closePopup
  }) => {
    const [rangeValue, setRangeValue] = h(10);
    const handleChangeRange = (e2) => {
      const {
        value
      } = e2.target;
      setRangeValue(value);
    };
    return o(k$1, {
      children: o("div", {
        className: "redeemCoinMainContainer",
        children: o("div", {
          class: "redeemCoinContainer",
          children: [o("div", {
            class: "redeemCloseContainer",
            children: o("img", {
              onClick: closePopup,
              class: "closePopup",
              src: "https://media.farziengineer.co/farziwallet/cross.png",
              alt: ""
            })
          }), o("div", {
            class: "redeemCoinBox",
            children: [o("div", {
              class: "redeemVoucherMain",
              children: [o("img", {
                src: "https://media.farziengineer.co/farziwallet/voucher-icon.png",
                alt: ""
              }), o("h2", {
                children: "Redeem Coins"
              })]
            }), o("div", {
              class: "redeemHeading",
              children: o("h3", {
                children: "Use FC Coins to create a Discount Coupon"
              })
            }), o("div", {
              class: "redeemText",
              children: o("p", {
                children: [rangeValue, " FC Coins for ₹", rangeValue, " off"]
              })
            }), o("div", {
              children: o("input", {
                type: "range",
                onChange: handleChangeRange,
                min: 0,
                max: 100,
                name: "coinRange"
              })
            }), o("button", {
              class: "couponUnlockBtn",
              children: "Redeem Coins"
            })]
          })]
        })
      })
    });
  };
  const ViewAllCoupons = ({
    closePopup
  }) => {
    const [availableTab, setAvailableTab] = h(true);
    const [yourCouponTab, setYourCouponTab] = h(false);
    const [unlockedTab, setUnlockedTab] = h(true);
    const [redeemedTab, setRedeemedTab] = h(false);
    const [overlayVisibilty, setOverlayVisibilty] = h(false);
    const [redeemCoinOverlay, setRedeemCoinOverlay] = h(false);
    const couponCardResp = [{
      couponPrice: 30,
      couponDesc: "Enjoy a 20% off on your next order!",
      couponImgLink: "https://media.farziengineer.co/farziwallet/coupon-image-top.png",
      coinImgLink: "https://media.farziengineer.co/farziwallet/coin-icon.png"
    }, {
      couponPrice: 15,
      couponDesc: "Get a special gift with your next order!",
      couponImgLink: "https://media.farziengineer.co/farziwallet/coupon-image-top.png",
      coinImgLink: "https://media.farziengineer.co/farziwallet/coin-icon.png"
    }, {
      couponPrice: 50,
      couponDesc: "Free shipping on orders over $50!",
      couponImgLink: "https://media.farziengineer.co/farziwallet/coupon-image-top.png",
      coinImgLink: "https://media.farziengineer.co/farziwallet/coin-icon.png"
    }];
    const btnClick = () => {
      console.log("clicked");
    };
    const handleMainTab = (mainTab) => {
      if (mainTab === "available") {
        setAvailableTab(true);
        setYourCouponTab(false);
      }
      if (mainTab === "yourcoupons") {
        setAvailableTab(false);
        setYourCouponTab(true);
      }
    };
    const handleYourCouponsTab = (tab) => {
      if (tab === "unlock") {
        setUnlockedTab(true);
        setRedeemedTab(false);
      }
      if (tab === "redeem") {
        setUnlockedTab(false);
        setRedeemedTab(true);
      }
    };
    const handleOverlayVisibility = () => {
      setOverlayVisibilty(!overlayVisibilty);
    };
    const handleRedeemFCCoin = () => {
      setRedeemCoinOverlay(!redeemCoinOverlay);
    };
    const activeTabStyles = {
      color: "#373737",
      borderBottom: "2px solid #373737"
    };
    const couponCardTabStyles = {
      borderRadius: "8px",
      padding: "8px",
      fontWeight: "700",
      fontSize: "14px",
      cursor: "pointer",
      backgroundColor: "#ff8f8f"
    };
    const hideElement = {
      display: "none"
    };
    return o(k$1, {
      children: o("div", {
        class: "viewAllCoupons",
        children: [o("div", {
          class: "viewAllCouponsHeader",
          children: [o("h4", {
            children: "Coupons"
          }), o("img", {
            onClick: closePopup,
            src: "https://media.farziengineer.co/farziwallet/cross.png",
            alt: ""
          })]
        }), o("div", {
          class: "viewAllCouponsTab",
          children: [o("div", {
            class: "viewAllCouponTabText",
            children: [o("h4", {
              style: availableTab && activeTabStyles,
              onClick: () => handleMainTab("available"),
              children: "Available"
            }), o("h4", {
              style: yourCouponTab && activeTabStyles,
              onClick: () => handleMainTab("yourcoupons"),
              children: "Your Coupons"
            })]
          }), o("div", {
            class: "walletCoinsBox",
            children: [o("img", {
              src: "https://media.farziengineer.co/farziwallet/coin-icon.png",
              alt: ""
            }), o("p", {
              children: "100"
            })]
          })]
        }), availableTab && o("div", {
          children: [o("div", {
            class: "viewAllFeaturedComponent",
            children: [o("h3", {
              children: "Featured Components"
            }), o("div", {
              class: "showAllCouponsList",
              children: couponCardResp.map((card, index) => o(CouponCard, {
                onClick: btnClick,
                couponPrice: card.couponPrice,
                couponDesc: card.couponDesc,
                couponImgLink: card.couponImgLink,
                coinImgLink: card.coinImgLink
              }, index))
            })]
          }), o("div", {
            onClick: handleRedeemFCCoin,
            class: "reedemfcCoins",
            children: [o("h3", {
              children: "Redeem FC Coins"
            }), o("div", {
              class: "reedemfcCoinsCard",
              children: [o("div", {
                children: o("img", {
                  src: "https://media.farziengineer.co/farziwallet/voucher-icon.png",
                  alt: ""
                })
              }), o("div", {
                children: [o("h5", {
                  children: "100 FC Coins = ₹100"
                }), o("p", {
                  children: "Use FC Coins to create a custom discount coupon"
                })]
              }), o("div", {
                children: o("img", {
                  src: "https://media.farziengineer.co/farziwallet/arrow.png",
                  alt: ""
                })
              })]
            })]
          }), redeemCoinOverlay && o(RedeemCoin, {
            closePopup: handleRedeemFCCoin
          }), o("div", {
            style: (overlayVisibilty || redeemCoinOverlay) && hideElement,
            class: "exploreCoupons",
            children: [o("h5", {
              children: "Coupons to Explore"
            }), o("div", {
              onClick: handleOverlayVisibility,
              class: "exploreCouponCard",
              children: [o("div", {
                class: "shipImgBox",
                children: o("img", {
                  src: "https://media.farziengineer.co/farziwallet/free-shipping.png",
                  alt: ""
                })
              }), o("div", {
                class: "exploreCouponCardText",
                children: [o("p", {
                  children: "Free Delivery"
                }), o("p", {
                  children: ["Unlock for ", o("span", {
                    children: o("img", {
                      src: "https://media.farziengineer.co/farziwallet/coin-icon.png",
                      alt: ""
                    })
                  }), " 35"]
                })]
              })]
            })]
          }), overlayVisibilty && o(CouponOverlay, {
            onClick: handleOverlayVisibility
          })]
        }), yourCouponTab && o("div", {
          class: "yourCouponsCardMainContainer",
          children: [o("div", {
            class: "yourCouponsActiveTab",
            children: [o("div", {
              style: unlockedTab && couponCardTabStyles,
              onClick: () => handleYourCouponsTab("unlock"),
              class: "unlockedTab",
              children: "Unlocked"
            }), o("div", {
              style: redeemedTab && couponCardTabStyles,
              onClick: () => handleYourCouponsTab("redeem"),
              class: "redeemedTab",
              children: "Redeemed"
            })]
          }), unlockedTab && o("div", {
            class: "yourCouponsCardContainer",
            children: [o("div", {
              class: "youCouponCardLeft",
              children: [o("h5", {
                children: "₹30"
              }), o("p", {
                children: "Voucher"
              })]
            }), o("div", {
              class: "youCouponCardRight",
              children: [o("h4", {
                children: "Rs. 30 off on Striped Silk Blouse"
              }), o("p", {
                children: ["code: ", o("span", {
                  class: "yourCouponCode",
                  children: "MQFETAJ9XBSK"
                })]
              }), o("p", {
                children: "created on 18th Jan,2024"
              })]
            })]
          }), redeemedTab && o("div", {
            class: "couponNotFound",
            children: [o("img", {
              src: "https://earthrhythm-media.farziengineer.co/hosted/image_24-c96b6aaf23b2.png",
              alt: ""
            }), o("h4", {
              children: "Uh-Oh!"
            }), o("p", {
              children: "Looks like you don't have any redeemed coupons"
            })]
          })]
        })]
      })
    });
  };
  const ShowCoupons = ({
    btnClick,
    viewAll,
    isVisible
  }) => {
    const couponCardResp = [{
      couponPrice: 30,
      couponDesc: "Enjoy a 20% off on your next order!",
      couponImgLink: "https://media.farziengineer.co/farziwallet/coupon-image-top.png",
      coinImgLink: "https://media.farziengineer.co/farziwallet/coin-icon.png"
    }, {
      couponPrice: 15,
      couponDesc: "Get a special gift with your next order!",
      couponImgLink: "https://media.farziengineer.co/farziwallet/coupon-image-top.png",
      coinImgLink: "https://media.farziengineer.co/farziwallet/coin-icon.png"
    }, {
      couponPrice: 50,
      couponDesc: "Free shipping on orders over $50!",
      couponImgLink: "https://media.farziengineer.co/farziwallet/coupon-image-top.png",
      coinImgLink: "https://media.farziengineer.co/farziwallet/coin-icon.png"
    }];
    return o(k$1, {
      children: [o("div", {
        class: "viewAllCouponsContainer",
        children: [o("h1", {
          children: "Coupons"
        }), o("a", {
          onClick: viewAll,
          children: "View All"
        })]
      }), o("div", {
        class: "showAllCouponsList",
        children: couponCardResp.map((card, index) => o(CouponCard, {
          onClick: btnClick,
          couponPrice: card.couponPrice,
          couponDesc: card.couponDesc,
          couponImgLink: card.couponImgLink,
          coinImgLink: card.coinImgLink
        }, index))
      }), isVisible && o(ViewAllCoupons, {
        closePopup: viewAll
      })]
    });
  };
  const GamesCard = ({
    btnClick,
    cardImage,
    coinImage,
    gameTitle,
    btnText,
    gamePrice
  }) => {
    return o(k$1, {
      children: o("div", {
        class: "gamesMainContainer",
        children: [o("div", {
          class: "gamesCardImg",
          children: o("img", {
            src: cardImage,
            alt: ""
          })
        }), o("div", {
          class: "gamesCard",
          children: [o("p", {
            class: "gamesCardTitle",
            children: gameTitle
          }), o("p", {
            class: "gamesCardDesc",
            children: "Start at"
          }), o("div", {
            class: "coinBox",
            children: [o("img", {
              src: coinImage,
              alt: ""
            }), o("p", {
              children: gamePrice
            })]
          }), o("button", {
            onClick: btnClick,
            class: "gamesCardBtn",
            children: btnText
          })]
        })]
      })
    });
  };
  const InviteAndEarnOverlay = ({
    closeOverlay
  }) => {
    const referralLink = "https://0b92a5.myshopify.com/account/register?fc_refer_hash=83a24c";
    return o(k$1, {
      children: o("div", {
        class: "inviteAndEarnContainer",
        children: [o("div", {
          onClick: closeOverlay,
          class: "closeInviteContainer",
          children: o("img", {
            width: 30,
            src: "https://media.farziengineer.co/farziwallet/cross.png",
            alt: ""
          })
        }), o("div", {
          class: "inviteAndEarn",
          children: [o("img", {
            src: "https://media.farziengineer.co/farziwallet/invite-earn.png",
            alt: ""
          }), o("h2", {
            children: "Invite & Earn"
          })]
        }), o("div", {
          class: "inviteAndEarnMessage",
          children: o("h4", {
            children: "Every time you successfully refer friend. You get 200 FC Coins & they get 100 FC Coins"
          })
        }), o("div", {
          class: "inviteEarnTextContainer",
          children: o("p", {
            children: "copy referral link"
          })
        }), o("div", {
          class: "inviteLinkContainer",
          children: [o("p", {
            children: [referralLink.substring(0, 29), "..."]
          }), o("img", {
            src: "https://media.farziengineer.co/farziwallet/copy-icon.png",
            alt: ""
          })]
        }), o("div", {
          children: o("hr", {
            class: "dashedDivider"
          })
        }), o("div", {
          class: "shareTextContainer",
          children: o("p", {
            children: "or share with"
          })
        }), o("div", {
          class: "sendInvitesBtnContainer",
          children: [o("button", {
            class: "inviteWhatsappBtn",
            children: [o("img", {
              src: "https://media.farziengineer.co/farziwallet/whatsapp-icon.png",
              alt: ""
            }), o("p", {
              children: "Send on whatsapp"
            })]
          }), o("button", {
            class: "inviteRoundedBtn",
            children: o("img", {
              src: "https://media.farziengineer.co/farziwallet/share-icon.png",
              alt: ""
            })
          })]
        })]
      })
    });
  };
  const WheelOfFortune = () => {
    return o(k$1, {
      children: o("div", {
        class: "spinwheelclass"
      })
    });
  };
  const SpinWheel = () => {
    return o("div", {
      class: "spinWheel",
      children: [o("div", {
        class: "walletCoinsBox",
        children: [o("img", {
          src: "https://media.farziengineer.co/farziwallet/coin-icon.png",
          alt: ""
        }), o("p", {
          children: "85"
        })]
      }), o("div", {
        children: o("h4", {
          children: "Spin and Win"
        })
      }), o("div", {
        id: "spinwheelcomp",
        children: o(WheelOfFortune, {})
      }), o("div", {})]
    });
  };
  const ShowGames = ({
    handleOverlay
  }) => {
    const [spinWheelOverlay, setSpinWheelOverlay] = h(false);
    const gamesData = [{
      gameTitle: "Spin and Win",
      cardImage: "https://media.farziengineer.co/farziwallet/spin-wheel.png",
      gamePrice: "10",
      coinImage: "https://media.farziengineer.co/farziwallet/coin-icon.png",
      btnText: "Explore"
    }, {
      gameTitle: "Spin and Win",
      cardImage: "https://media.farziengineer.co/farziwallet/spin-wheel.png",
      gamePrice: "30",
      coinImage: "https://media.farziengineer.co/farziwallet/coin-icon.png",
      btnText: "Explore"
    }];
    const showWheelOfFortune = () => {
      setSpinWheelOverlay(!spinWheelOverlay);
    };
    return o(k$1, {
      children: o("div", {
        class: "showGamesOverlay",
        children: [o("div", {
          className: "showGamesHeader",
          children: [o("h2", {
            children: "Wheel of Fortune"
          }), o("img", {
            onClick: handleOverlay,
            src: "https://media.farziengineer.co/farziwallet/cross.png",
            alt: ""
          })]
        }), o("div", {
          class: "showGamesTab",
          children: [o("div", {
            className: "gamesTab",
            children: [o("h2", {
              children: "Available"
            }), o("h2", {
              children: "Your Coupons"
            })]
          }), o("div", {
            class: "walletCoinsBox",
            children: [o("img", {
              src: "https://media.farziengineer.co/farziwallet/coin-icon.png",
              alt: ""
            }), o("p", {
              children: "85"
            })]
          })]
        }), o("div", {
          class: "showGamesCards",
          children: gamesData.map((game, idx) => o(GamesCard, {
            btnClick: showWheelOfFortune,
            gameTitle: game.gameTitle,
            cardImage: game.cardImage,
            coinImage: game.coinImage,
            btnText: game.btnText,
            gamePrice: game.gamePrice
          }, idx))
        }), spinWheelOverlay && o(SpinWheel, {})]
      })
    });
  };
  function Main({
    themeDetailsData
  }) {
    const [visibilty, setVisibility] = h(true);
    const [overlayVisibility, setOverlayVisibility] = h(false);
    const [transactionLogs, setTransactionLogs] = h(false);
    const [couponVisibility, setCouponVisibility] = h(false);
    const [gamesVisibility, setGamesVisibility] = h(false);
    const [allCouponVisibility, setAllCouponVisibility] = h(true);
    const handleAllCouponVisibility = () => {
      setAllCouponVisibility(!allCouponVisibility);
    };
    const gamesData = [{
      gameTitle: "Wheel of Fortune",
      cardImage: "https://media.farziengineer.co/farziwallet/spin-wheel.png",
      gamePrice: "10",
      coinImage: "https://media.farziengineer.co/farziwallet/coin-icon.png",
      btnText: "Explore"
    }, {
      gameTitle: "Scratch Card",
      cardImage: "https://media.farziengineer.co/farziwallet/scratch-card.png",
      gamePrice: "20",
      coinImage: "https://media.farziengineer.co/farziwallet/coin-icon.png",
      btnText: "Explore"
    }];
    const handleViewPopup = () => {
      setVisibility(!visibilty);
    };
    const handleOverlayVisibility = () => {
      setOverlayVisibility(!overlayVisibility);
    };
    const closeOverlay = () => {
      setOverlayVisibility(!overlayVisibility);
    };
    const handleTransactionLogs = () => {
      setTransactionLogs(!transactionLogs);
    };
    const handleCouponVisibility = () => {
      setCouponVisibility(!couponVisibility);
    };
    const handleGamesVisibility = () => {
      setGamesVisibility(!gamesVisibility);
    };
    const handleShowGames = () => {
      setGamesVisibility(!gamesVisibility);
    };
    const hideElement = {
      display: "none"
    };
    const stopScroll = {
      overflowY: "hidden"
    };
    const PointsActivityArray = [{
      "id": 1,
      "reason": "Test credit",
      "created": "2024-01-19",
      "amount": 100,
      "type": "ADD"
    }, {
      "id": 2,
      "reason": "Test credit 200",
      "created": "2024-01-20",
      "amount": 150,
      "type": "ADD"
    }, {
      "id": 3,
      "reason": "Test debite SUB",
      "created": "2024-01-20",
      "amount": 50,
      "type": "SUB"
    }, {
      "id": 4,
      "reason": "Test debite 100",
      "created": "2024-01-21",
      "amount": 100,
      "type": "SUB"
    }];
    return o(k$1, {
      children: [o("img", {
        onClick: handleViewPopup,
        class: "floatingPopup",
        src: "https://media.farziengineer.co/farziwallet/gift-icon.png",
        width: 30,
        height: 30,
        alt: "gift icon"
      }), visibilty && o(k$1, {
        children: o("div", {
          style: overlayVisibility && stopScroll,
          class: "mainPopup",
          children: [o("div", {
            class: "header",
            children: [o("div", {
              class: "leftHeader",
              children: [o("p", {
                children: "Welcome to"
              }), o("h6", {
                children: "Loyality"
              })]
            }), o("div", {
              class: "rightHeader",
              children: o("img", {
                class: "closePopup",
                onClick: handleViewPopup,
                src: "https://media.farziengineer.co/farziwallet/cross.png",
                alt: ""
              })
            })]
          }), o(WalletCard, {
            onClick: handleTransactionLogs
          }), o(ShowCoupons, {
            btnClick: handleCouponVisibility,
            viewAll: handleAllCouponVisibility,
            isVisible: allCouponVisibility
          }), couponVisibility && o(CouponOverlay, {
            onClick: handleCouponVisibility
          }), o("div", {
            style: transactionLogs || couponVisibility || gamesVisibility || allCouponVisibility ? hideElement : "",
            children: [o("div", {
              class: "gamesArenaContainer",
              children: [o("h1", {
                children: "Games Arena"
              }), o("p", {
                children: "Play games to win FC coins, coupons & rewards"
              })]
            }), o("div", {
              class: "gamesHorizontalList",
              children: gamesData.map((card, idx) => o(GamesCard, {
                btnClick: handleGamesVisibility,
                gameTitle: card.gameTitle,
                cardImage: card.cardImage,
                gamePrice: card.gamePrice,
                coinImage: card.coinImage,
                btnText: card.btnText
              }, idx))
            }), o(InviteCard, {
              onClick: handleOverlayVisibility
            })]
          }), gamesVisibility && o(ShowGames, {
            handleOverlay: handleShowGames
          }), overlayVisibility && o(InviteAndEarnOverlay, {
            closeOverlay
          }), transactionLogs && o("div", {
            class: "pointsActivityClass",
            children: [o("div", {
              class: "pointsActivityHeader",
              children: [o("h4", {
                children: "Points activity"
              }), o("img", {
                onClick: handleTransactionLogs,
                src: "https://media.farziengineer.co/farziwallet/cross.png",
                alt: ""
              })]
            }), PointsActivityArray.map((points, pointIndex) => o(WalletPointsActivity, {
              id: points.id,
              reason: points.reason,
              created: points.created,
              amount: points.amount,
              type: points.type
            }))]
          })]
        })
      })]
    });
  }
  function App({
    themeDetailsData
  }) {
    return o(k$1, {
      children: [o("div", {
        class: "widget-container",
        children: o(Main, {
          themeDetailsData
        })
      }), o("div", {
        class: "widget-styles"
      }), o("div", {
        class: "widget-custom-styles"
      })]
    });
  }
  function AppCSS() {
    return o("style", {
      children: style
    });
  }
  function AppCustomCSS({
    customStyles
  }) {
    return o("style", {
      children: customStyles
    });
  }
  const WALLET_API_URI = "https://fastloyaltyapi.farziengineer.co";
  async function renderLoyaltyPopup() {
    var _a, _b;
    try {
      const targetDiv = document.body;
      let shadowTarget = document.createElement("div");
      shadowTarget.className = "fc-loyalty-popup-19212-target";
      shadowTarget.style.display = "block";
      targetDiv.appendChild(shadowTarget);
      let shadow = shadowTarget.attachShadow({
        mode: "open"
      });
      let shadowRoot = document.createElement("div");
      shadowRoot.className = "fc-loyalty-popup-19212-root";
      shadow.appendChild(shadowRoot);
      let themeDetailsData;
      if ((_a = window == null ? void 0 : window.fc_loyalty_vars) == null ? void 0 : _a.theme_details) {
        themeDetailsData = window.fc_loyalty_vars.theme_details;
      } else {
        const mainScript = document.querySelector("#fc-loyalty-popup-script-19212");
        const client_id = mainScript == null ? void 0 : mainScript.getAttribute("data-client-id");
        if (client_id) {
          const themeDetailsRes = await fetch(`${WALLET_API_URI}/get-theme-details`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              client_id
            })
          });
          themeDetailsData = await themeDetailsRes.json();
          window.fc_loyalty_vars = {
            theme_details: themeDetailsData
          };
        }
      }
      const clientCustomStyleData = ((_b = themeDetailsData == null ? void 0 : themeDetailsData.data) == null ? void 0 : _b.apply_wallet_snippet_css) || "";
      B$1(o(App, {
        themeDetailsData
      }), shadowRoot);
      B$1(o(AppCSS, {}), shadowRoot == null ? void 0 : shadowRoot.querySelector(".widget-styles"));
      B$1(o(AppCustomCSS, {
        customStyles: clientCustomStyleData
      }), shadowRoot == null ? void 0 : shadowRoot.querySelector(".widget-custom-styles"));
    } catch (err) {
      console.log("error", err);
    }
  }
  window.fc_loyalty_render_wallet_box = renderLoyaltyPopup;
  renderLoyaltyPopup();
})();
