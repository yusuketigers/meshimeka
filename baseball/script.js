console.log("aiu")




let menu = [
    "近本",
    "中野",
    "ノイジー",
    "大山",
    "佐藤輝",
    "森下",
    "梅野",
    "木浪",
    "村上"
]

let button = document.getElementById("button");
let menuShowing = document.getElementById("menu-showing")
let currentIndex = 0; // Keep track of the current index
button.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % menu.length; // Update the current index to the next item
    menuShowing.innerHTML = menu[currentIndex]; // Display the next item
});

let out = [
    "0アウト",
    "1アウト",
    "2アウト",
]

let outShowing = document.getElementById("out-showing")
let outcurrentIndex = 0; // Keep track of the current index
let outbutton = document.getElementById("out-button");
outbutton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % menu.length; // Update the current index to the next item
    menuShowing.innerHTML = menu[currentIndex]; // Display the next item
    outcurrentIndex = (outcurrentIndex + 1) % out.length; // Update the current index to the next item
    outShowing.innerHTML = out[outcurrentIndex]; // Display the next item
    strikecurrentIndex = 0 // Update the current index to the next item
    strikeShowing.innerHTML = strike[strikecurrentIndex]; // Display the next item
    ballcurrentIndex = 0 // Update the current index to the next item
    ballShowing.innerHTML = ball[ballcurrentIndex]; // Display the next item
});

let strike = [
    "0ストライク",
    "1ストライク",
    "2ストライク",
]

let strikeShowing = document.getElementById("strike-showing")
let strikecurrentIndex = 0; // Keep track of the current index
let strikebutton = document.getElementById("strike-button");
strikebutton.addEventListener("click", () => {
    strikecurrentIndex = (strikecurrentIndex + 1) % strike.length; // Update the current index to the next item
    strikeShowing.innerHTML = strike[strikecurrentIndex]; // Display the next item
});

let ball = [
    "0ボール",
    "1ボール",
    "2ボール",
]

let ballShowing = document.getElementById("ball-showing")
let ballcurrentIndex = 0; // Keep track of the current index
let ballbutton = document.getElementById("ball-button");
ballbutton.addEventListener("click", () => {
    ballcurrentIndex = (ballcurrentIndex + 1) % ball.length; // Update the current index to the next item
    ballShowing.innerHTML = ball[ballcurrentIndex]; // Display the next item
});


localStorage.removeItem("menuText")
if (localStorage.getItem("menuText") == null) {
    localStorage.setItem("menuText", menu.toString())
}

showLocalStorage()

let removeAllButton = document.getElementById("remove-all-button")
removeAllButton.addEventListener("click", () => {
    localStorage.removeItem("menuText")
    let localStorageValue = localStorage.getItem("menuText")
    console.log(localStorageValue)
    showLocalStorage()
})

function showLocalStorage(){
    let ls = document.getElementById("local-storage")
    ls.innerHTML = localStorage.getItem("menuText")
}
