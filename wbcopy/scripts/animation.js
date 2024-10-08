// settings

let tickphoto = 1
let ticktext = 3
let ticknews = 10

// code

let datas = [
    "02.10.2024",
    "05.09.2024",
    "10.09.2024",
]

let Names = [
    "Лудомания – қоғам дерті",
    "Тілі бірдің - тілегі бір",
    "ТЕХНИКАЛЫҚ МАМАНДЫҚТАР",
]

let Photos = [

    [
        "./news/02.10.2024-1.jpg",
        "./news/sep-02-09.jpg",
        "./news/sep-03-09.jpg",
    ],

    [
        "./news/2-01.jpg",
        "./news/2-02.jpg",
        "./news/2-03.jpg",
    ],
    [

        "./news/10-1.jpg",
        "./news/10-2.jpg",
        "./news/10-3.jpg",

    ],

]

let texts = [

    [
        "Т-9-32г оқу тобында “Лудомания – қоғам дерті” тақырыбында тәрбие сағаты өткізілді. Іс-шараның мақсаты – студенттерге құмар ойындарға тәуелділіктің қауіптілігі мен оның қоғамға тигізетін кері әсерін түсіндіру. ",

        " Тәрбие сағаты барысында студенттерге лудоманияның белгілері, себептері және оның жеке тұлға мен қоғамға әкелетін салдары туралы ақпарат берілді. Оқытушылар құмар ойындарға тәуелділіктің психологиялық және әлеуметтік зияндары туралы айтып, бұл дерттің алдын алу жолдарын талқылады.",

        "Сондай-ақ, студенттер өз ойларымен бөлісіп, өмірден алынған нақты мысалдар арқылы лудоманияның зиянды жақтарын түсінуге тырысты. Бұл шара студенттерге құмар ойындарға тәуелділікке қарсы тұру және салауатты өмір салтын насихаттау қажеттігін ұғынуға көмектесті. <br> <br>Топ жетекшісі - Ж.Тоқатова",
    ],

    [
        "⚜️ 5 ҚЫРКҮЙЕК - ҚАЗАҚСТАН ХАЛҚЫНЫҢ ТІЛДЕРІ КҮНІ мерекесіне орай “Педагогикалық және гуманитарлық бөлімнің” ұйымдастыруымен “Тілі бірдің - тілегі бір” тақырыбында салтанатты жиын өтті.",

        "Жиында атаулы датаның ұлт ұстазы А.Байтұрсынұлының туған күні құрметіне орай ауыстырылғаны, ұлттық тіліміздің мемлекеттік мәртебесі аталып көрсетілді. Елімізде тұрып жатқан ұлттар мен ұлыстардың тілдеріне ортақ құрмет көрсетілетіні аталды.",

        "Студенттер ана тіліміз туралы жазылған жырларды мәнерлеп оқыды. Сонымен қатар, өзге ұлт өкілдерінен құралған жастар барша қазақстандықты қазақ тілінде сөйлеуге, оны құрметтеуге шақырған үндеу тастады. ",
    ],

    [

        "Жаңа оқу жылындағы ата-аналар жиналысы “Техникалық мамандықтар” бөлімінен бастау алды. Жиналысқа 1-курс студенттерінің ата-аналары қатысты. ",

        "Директордың тәрбие ісі жөніндегі орынбасары А.Сейтжанов ата-аналарға колледждің ішкі тәртібін таныстырып, жасөспірімдер арасындағы құқық бұзушылықтардың алдын алу шараларына тоқталды. ",
        "Бөлім меңгерушісі З.Сыздықбаева топ тәлімгерлерін таныстырды және олардың міндеттемелеріне тоқталды. Әр топ бойынша ата-аналар комитетінің жетекшісін сайланды. ",

        "Колледж психологы Д.Асанова жасөспірімдер психологиясының ерекшелігін атап өтіп, олармен жүргізілетін жұмыс түрлерімен ата-аналарды хабардар етті. Жиналыс соңы ата-аналар сұрақтарына жауап берумен қорытындыланды.",

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
