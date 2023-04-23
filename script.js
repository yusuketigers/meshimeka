console.log("aiu")




let menu = [
    "寿司",
    "焼肉",
    "鶏の唐揚げ",
    "カレーライス",
    "ハンバーグ",
    "餃子",
    "ピザ",
    "ステーキ",
    "たこ焼き",
    "うどん",
    "オムライス",
    "お好み焼き",
    "ラーメン",
    "とんかつ",
    "焼き鳥",
    "天ぷら",
    "グラタン",
    "カツ丼",
    "すき焼き",
    "ハヤシライス",
    "海鮮丼",
    "焼きそば",
    "牛丼",
    "生姜焼き",
    "スパゲッティ",
    "うなぎ",
    "ぶり大根",
    "コロッケ",
    "しゃぶしゃぶ",
    "エビフライ",
    "麻婆豆腐",
    "そうめん",
    "そば",
    "焼売",
    "ドリア",
    "串カツ",
    "親子丼",
    "エビチリ",
    "天丼",
    "メンチカツ",
    "シチュー",
    "オムレツ",
    "豚丼",
    "肉じゃが",
    "アジフライ",
    "青椒肉絲",
    "中華丼",
    "酢豚",
    "麻婆茄子",
    "魚",
    "春巻き"
]

let past = ["-"]

let button = document.getElementById("button")
let menuShowing = document.getElementById("menu-showing")
button.addEventListener("click", () => {
    let r = Math.floor(Math.random() * menu.length)
    menuShowing.innerHTML = menu[r]
})

localStorage.removeItem("menuText")
if (localStorage.getItem("menuText") == null) {
    localStorage.setItem("menuText", menu.toString())
}

showLocalStorage()

let addButton = document.getElementById("add-button")
addButton.addEventListener("click", () => {
    let menuText = localStorage.getItem("menuText")
    let newMenu = document.getElementById("new-menu")
    menuText += "," + newMenu.value
    console.log(menuText)
    localStorage.setItem("menuText", menuText)
    showLocalStorage()
})

let undoButton = document.getElementById("undo-button")
undoButton.addEventListener("click", () => {
    let menuText = localStorage.getItem("menuText")
    let newMenuText = menuText.split(",").slice(0,-1).toString()
    let newMenu = document.getElementById("new-menu")
    console.log(newMenuText)
    localStorage.setItem("menuText", newMenuText)
    showLocalStorage()
})

let removeAllButton = document.getElementById("remove-all-button")
removeAllButton.addEventListener("click", () => {
    localStorage.removeItem("menuText")
    let localStorageValue = localStorage.getItem("menuText")
    console.log(localStorageValue)
    showLocalStorage()
})

pastLocalStorage = localStorage
pastLocalStorage.removeItem("pastText")
if (pastLocalStorage.getItem("pastText") == null) {
    pastLocalStorage.setItem("pastText", past.toString())
}

let pastButton = document.getElementById("past-button")
pastButton.addEventListener("click", () => {
    let pastText = localStorage.getItem("pastText")
    let pastMenu = document.getElementById("past-menu")
    pastText += "," + pastMenu.value
    console.log(pastText)
    localStorage.setItem("pastText", pastText)
    showPastLocalStorage()
})

showPastLocalStorage()

let backButton = document.getElementById("back-button")
backButton.addEventListener("click", () => {
    let pastText = localStorage.getItem("pastText")
    let pastMenuText = pastText.split(",").slice(0,-1).toString()
    let pastMenu = document.getElementById("past-menu")
    console.log(pastMenuText)
    localStorage.setItem("pastText", pastMenuText)
    showPastLocalStorage()
})

function showLocalStorage(){
    let ls = document.getElementById("local-storage")
    ls.innerHTML = localStorage.getItem("menuText")
}

function showPastLocalStorage(){
    let ls = document.getElementById("past-local-storage")
    ls.innerHTML = pastLocalStorage.getItem("pastText")
}