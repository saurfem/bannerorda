// settings

let tickphoto = 0
let ticktext = 0
let ticknews = 10

// code

let datas = [
    "САКЕН СЕЙФУЛЛИН",
    "АБАЙ ҚҰНАНБАЙ",
    "АБАЙ ҚҰНАНБАЙ",
    "АБАЙ ҚҰНАНБАЙ",
    "АБАЙ ҚҰНАНБАЙ",
    "ҚАЮМ НАСЫРИ",
    "НӘСІР ХОСРАУ",
]

let Names = [
    "АДАМ — КЕРУЕН, ӨМІР — ЖОЛ ",
    "AДАМНЫҢ АДАМШЫЛЫҒЫ ІСТІ БАСТАҒАННАН БІЛІНЕДІ",
    "ҮШ-АҚ НӘРСЕ АДАМНЫҢ ҚАСИЕТІ, ЫСТЫҚ ҚАЙРАТ, НҰРЛЫ АҚЫЛ, ЖЫЛЫ ЖҮРЕК ",
    "АТЫМДЫ АДАМ ҚОЙҒАН СОҢ, ҚАЙТЫП НАДАН БОЛАЙЫН",
    "АДАМ БАЛАСЫ АДАМ БАЛАСЫНАН АҚЫЛ, ҒЫЛЫМ, АР,МІНЕЗ ДЕГЕН НӘРСЕЛЕРМЕН ОЗАДЫ ",
    "АДАМ ӨЗІН-ӨЗІ ТЕРЕҢ ТҮСІТГЕНДЕ ҒАНА, ОНЫҢ АҚЫЛ-ПАРАСАТЫ КЕМЕЛДЕНЕ ТҮСЕТІН БОЛАДЫ",
    "АРАМДЫҚҚА ҚҰЛ БОЛМА,<br> АДАМ БОЛСАҢ,<br> ӘЛСІЗДЕРДІ ҚИНАМА <br> АДАМ БОЛСАҢ",
]

let Photos = [

    [
        "./writers/saken.jpg",
    ],

    [
        "./writers/абай.png",
    ],
    [
        "./writers/абай.png",

    ],
    [
        "./writers/абай.png",

    ],
    [

        "./writers/абай.png",

    ],
    [
        "./writers/насыри.png",

    ],
    [
        "./writers/хосрау.png",

    ],

]

let texts = [

    [
        "    ",
    ],

    [
        "    ",
    ],

    [
        "    ",
    ],
    [
        "    ",
    ],
    [
        "    ",
    ],
    [
        "    ",
    ],
    [
        "    ",
    ],

]


let data = document.getElementById("data")
let img = document.getElementById("news_photo")
let naame = document.getElementById("news_name")
let text = document.getElementById("change")

let news_now = 0

let news_img_num = -1
let news_text_num = -1

data.innerHTML = datas[news_now]
naame.innerHTML = Names[news_now]

function chabgenews() {
    if (news_now >= (Names.length - 1)) {
        news_now = 0
    } else {
        news_now++
    }
    chagImg()
    changText()
    data.innerHTML = datas[news_now]
    naame.innerHTML = Names[news_now]
    news_img_num = -1
    news_text_num = -1
}

setInterval(chabgenews, (ticknews * 1000))


function chagImg() {
    if (news_img_num >= (Photos[news_now].length - 1)) {
        news_img_num = 0
    } else {
        news_img_num++
    }
    img.src = Photos[news_now][news_img_num]
}

function changText() {
    if (news_text_num >= (texts[news_now].length - 1)) {
        news_text_num = 0
    } else {
        news_text_num++
    }
    text.innerHTML = texts[news_now][news_text_num]
}

changText()
chagImg()
setInterval(chagImg, (tickphoto * 1000))
setInterval(changText, (ticktext * 1000))
