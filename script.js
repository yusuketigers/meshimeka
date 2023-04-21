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
    "うな丼",
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

]

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

function showLocalStorage(){
    let ls = document.getElementById("local-storage")
    ls.innerHTML = localStorage.getItem("menuText")
}