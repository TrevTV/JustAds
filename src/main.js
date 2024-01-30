window.onload = function () {
  let buttons = document.querySelectorAll(".button");
  buttons.forEach((button) => {
    buttonLoad(button);
  });
   
  togglePanel(0);
};

/* player */

const ads = [
  /* allfoods_01 */
  [
    { type: "video/webm", src: "./ads/allfoods_01/-AD_TYPE-/vp9.webm" },
    { type: "video/mp4", src: "./ads/allfoods_01/-AD_TYPE-/h264.mp4" },
  ],
  /* allfoods_02 */
  [
    { type: "video/webm", src: "./ads/allfoods_02/-AD_TYPE-/vp9.webm" },
    { type: "video/mp4", src: "./ads/allfoods_02/-AD_TYPE-/h264.mp4" },
  ],
  /* all_world_insurance */
  [
    { type: "video/webm", src: "./ads/all_world_insurance/-AD_TYPE-/vp9.webm" },
    { type: "video/mp4", src: "./ads/all_world_insurance/-AD_TYPE-/h264.mp4" },
  ],
  /* biotechnica */
  [
    { type: "video/webm", src: "./ads/biotechnica/-AD_TYPE-/vp9.webm" },
    { type: "video/mp4", src: "./ads/biotechnica/-AD_TYPE-/h264.mp4" },
  ],
  /* body_implants */
  [
    { type: "video/webm", src: "./ads/body_implants/-AD_TYPE-/vp9.webm" },
    { type: "video/mp4", src: "./ads/body_implants/-AD_TYPE-/h264.mp4" },
  ],
  /* budget_arms_family */
  [
    { type: "video/webm", src: "./ads/budget_arms_family/-AD_TYPE-/vp9.webm" },
    { type: "video/mp4", src: "./ads/budget_arms_family/-AD_TYPE-/h264.mp4" },
  ],
  /* burrito_xxl */
  [
    { type: "video/webm", src: "./ads/burrito_xxl/-AD_TYPE-/vp9.webm" },
    { type: "video/mp4", src: "./ads/burrito_xxl/-AD_TYPE-/h264.mp4" },
  ],
  /* caliente */
  [
    { type: "video/webm", src: "./ads/caliente/-AD_TYPE-/vp9.webm" },
    { type: "video/mp4", src: "./ads/caliente/-AD_TYPE-/h264.mp4" },
  ],
  /* chromanticore */
  [
    { type: "video/webm", src: "./ads/chromanticore/-AD_TYPE-/vp9.webm" },
    { type: "video/mp4", src: "./ads/chromanticore/-AD_TYPE-/h264.mp4" },
  ],
  /* dtr */
  [
    { type: "video/webm", src: "./ads/dtr/-AD_TYPE-/vp9.webm" },
    { type: "video/mp4", src: "./ads/dtr/-AD_TYPE-/h264.mp4" },
  ],
  /* eji */
  [
    { type: "video/webm", src: "./ads/eji/-AD_TYPE-/vp9.webm" },
    { type: "video/mp4", src: "./ads/eji/-AD_TYPE-/h264.mp4" },
  ],
  /* foreign_body */
  [
    { type: "video/webm", src: "./ads/foreign_body/-AD_TYPE-/vp9.webm" },
    { type: "video/mp4", src: "./ads/foreign_body/-AD_TYPE-/h264.mp4" },
  ],
  /* kt_henry */
  [
    { type: "video/webm", src: "./ads/kt_henry/-AD_TYPE-/vp9.webm" },
    { type: "video/mp4", src: "./ads/kt_henry/-AD_TYPE-/h264.mp4" },
  ],
  /* milfgaard */
  [
    { type: "video/webm", src: "./ads/milfgaard/-AD_TYPE-/vp9.webm" },
    { type: "video/mp4", src: "./ads/milfgaard/-AD_TYPE-/h264.mp4" },
  ],
  /* moonchies */
  [
    { type: "video/webm", src: "./ads/moonchies/-AD_TYPE-/vp9.webm" },
    { type: "video/mp4", src: "./ads/moonchies/-AD_TYPE-/h264.mp4" },
  ],
  /* mrstud */
  [
    { type: "video/webm", src: "./ads/mrstud/-AD_TYPE-/vp9.webm" },
    { type: "video/mp4", src: "./ads/mrstud/-AD_TYPE-/h264.mp4" },
  ],
  /* mrwhitey */
  [
    { type: "video/webm", src: "./ads/mrwhitey/-AD_TYPE-/vp9.webm" },
    { type: "video/mp4", src: "./ads/mrwhitey/-AD_TYPE-/h264.mp4" },
  ],
  /* naranjita */
  [
    { type: "video/webm", src: "./ads/naranjita/-AD_TYPE-/vp9.webm" },
    { type: "video/mp4", src: "./ads/naranjita/-AD_TYPE-/h264.mp4" },
  ],
  /* nicola */
  [
    { type: "video/webm", src: "./ads/nicola/-AD_TYPE-/vp9.webm" },
    { type: "video/mp4", src: "./ads/nicola/-AD_TYPE-/h264.mp4" },
  ],
  /* orgiatic */
  [
    { type: "video/webm", src: "./ads/orgiatic/-AD_TYPE-/vp9.webm" },
    { type: "video/mp4", src: "./ads/orgiatic/-AD_TYPE-/h264.mp4" },
  ],
  /* peralez */
  [
    { type: "video/webm", src: "./ads/peralez/-AD_TYPE-/vp9.webm" },
    { type: "video/mp4", src: "./ads/peralez/-AD_TYPE-/h264.mp4" },
  ],
  /* rcs */
  [
    { type: "video/webm", src: "./ads/rcs/-AD_TYPE-/vp9.webm" },
    { type: "video/mp4", src: "./ads/rcs/-AD_TYPE-/h264.mp4" },
  ],
  /* real_water */
  [
    { type: "video/webm", src: "./ads/real_water/-AD_TYPE-/vp9.webm" },
    { type: "video/mp4", src: "./ads/real_water/-AD_TYPE-/h264.mp4" },
  ],
  /* slaughterhouse */
  [
    { type: "video/webm", src: "./ads/slaughterhouse/-AD_TYPE-/vp9.webm" },
    { type: "video/mp4", src: "./ads/slaughterhouse/-AD_TYPE-/h264.mp4" },
  ],
  /* sojasil */
  [
    { type: "video/webm", src: "./ads/sojasil/-AD_TYPE-/vp9.webm" },
    { type: "video/mp4", src: "./ads/sojasil/-AD_TYPE-/h264.mp4" },
  ],
  /* speed_loans */
  [
    { type: "video/webm", src: "./ads/speed_loans/-AD_TYPE-/vp9.webm" },
    { type: "video/mp4", src: "./ads/speed_loans/-AD_TYPE-/h264.mp4" },
  ],
  /* techtronika */
  [
    { type: "video/webm", src: "./ads/techtronika/-AD_TYPE-/vp9.webm" },
    { type: "video/mp4", src: "./ads/techtronika/-AD_TYPE-/h264.mp4" },
  ],
  /* thrud */
  [
    { type: "video/webm", src: "./ads/thrud/-AD_TYPE-/vp9.webm" },
    { type: "video/mp4", src: "./ads/thrud/-AD_TYPE-/h264.mp4" },
  ],
  /* tiancha */
  [
    { type: "video/webm", src: "./ads/tiancha/-AD_TYPE-/vp9.webm" },
    { type: "video/mp4", src: "./ads/tiancha/-AD_TYPE-/h264.mp4" },
  ],
  /* uscracks */
  [
    { type: "video/webm", src: "./ads/uscracks/-AD_TYPE-/vp9.webm" },
    { type: "video/mp4", src: "./ads/uscracks/-AD_TYPE-/h264.mp4" },
  ],
  /* vargas */
  [
    { type: "video/webm", src: "./ads/vargas/-AD_TYPE-/vp9.webm" },
    { type: "video/mp4", src: "./ads/vargas/-AD_TYPE-/h264.mp4" },
  ],
  /* watson_whore */
  [
    { type: "video/webm", src: "./ads/watson_whore/-AD_TYPE-/vp9.webm" },
    { type: "video/mp4", src: "./ads/watson_whore/-AD_TYPE-/h264.mp4" },
  ],
  /* wet_dream */
  [
    { type: "video/webm", src: "./ads/wet_dream/-AD_TYPE-/vp9.webm" },
    { type: "video/mp4", src: "./ads/wet_dream/-AD_TYPE-/h264.mp4" },
  ],
];

const bumper = [
  { type: "video/webm", src: "./ads/bumper/-AD_TYPE-/vp9.webm" },
  { type: "video/mp4", src: "./ads/bumper/-AD_TYPE-/h264.mp4" },
];

/* doesn't include bumper */
const adCount = 33;

var adsSinceBumper = 0;

var shuffledIndices = [];
var currentAdIndex = adCount;

var adPlayer;
var bugElement;

videojs.hook("setup", function (player) {
  adPlayer = player;
  setup(player);
});

function setup(player) {
  player.watermark({
    file: "./img/logo/cid.png",
    xpos: 0,
    ypos: 0,
    xrepeat: 0,
    opacity: 1,
    clickable: false,
  });

  bugElement = document.getElementsByClassName("vjs-watermark")[0];

  pickVideo(player);
  player.on("ended", () => {
    pickVideo(player);
  });
}

function pickVideo(player) {
  if (adsSinceBumper >= 5) {
    player.src(getAdOfPrefType(bumper));
    toggleNetworkBug(false);
    adsSinceBumper = 0;
    return;
  }

  toggleNetworkBug(true);

  adsSinceBumper++;

  if (currentAdIndex >= adCount) {
    shuffledIndices = shuffleArray([...Array(adCount).keys()]);
    currentAdIndex = 0;
  }

  let random = shuffledIndices[currentAdIndex];
  player.src(getAdOfPrefType(ads[random]));

  currentAdIndex++;
}

function toggleNetworkBug(enable) {
  if (getCookie("showNetworkBug") !== "true") {
    bugElement.style.display = "none";
    return;
  }

  if (enable) {
    bugElement.style.display = "flex";
  } else {
    bugElement.style.display = "none";
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function getAdOfPrefType(sourceArr) {
  let ai = getCookie("useAiUpscale") === "true";

  let adType = "raw";
  if (ai) {
    adType = "ai";
  }

  for (let i = 0; i < sourceArr.length; i++) {
    sourceArr[i].src = sourceArr[i].src.replace("-AD_TYPE-", adType);
  }

  return sourceArr;
}

/* navbar */

const panels = ["live-panel", "preferences-panel"];

function togglePanel(panel) {
  for (let i = 0; i < panels.length; i++) {
    if (i == panel) {
      document.getElementById(panels[i]).style.display = "flex";
    } else {
      document.getElementById(panels[i]).style.display = "none";
    }
  }

  if (adPlayer === undefined) { return; }

  if (panel != 0) {
    adPlayer.pause();
  } else {
    adPlayer.play();
  }
}

/* buttons and cookies */

function buttonLoad(button) {
  let cookie = button.getAttribute("data-cookie");
  let cookieVal = getCookie(cookie);

  if (cookieVal === "") {
    setCookie(cookie, true);
    cookieVal = getCookie(cookie);
  }

  let active = cookieVal === "true";

  buttonToggle(button, active);
}

function buttonClick(button) {
  let cookie = button.getAttribute("data-cookie");
  let active = getCookie(cookie) === "true";
  active = !active;
  setCookie(cookie, active);

  buttonToggle(button, active);
}

function buttonToggle(button, active) {
  let enableToggle = button.querySelector(".button-toggle-item.enabled");
  let disableToggle = button.querySelector(".button-toggle-item.disabled");
  let textElement = button.querySelector(".button-text");
  let text = active
    ? button.getAttribute("data-enabledtext")
    : button.getAttribute("data-disabledtext");

  textElement.innerHTML = text;
  if (active === true) {
    disableToggle.style.display = "none";
    enableToggle.style.display = "block";
  } else {
    disableToggle.style.display = "block";
    enableToggle.style.display = "none";
  }
}

function setCookie(cname, cvalue) {
  let date = new Date(Date.now() + 1.57788e10);
  date = date.toUTCString();
  document.cookie =
    cname + "=" + cvalue + ";SameSite=None;Secure;Expires=" + date;
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
