const citiesJson = [
  {
    "index": 385200,
    "region": "Адыгея Респ",
    "name": "Адыгейск",
    "latitude": 44.8783715,
    "longtitude": 39.190172,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 385000,
    "region": "Адыгея Респ",
    "name": "Майкоп",
    "latitude": 44.6098268,
    "longtitude": 40.1006527,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 649000,
    "region": "Алтай Респ",
    "name": "Горно-Алтайск",
    "latitude": 51.9582681,
    "longtitude": 85.9602957,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 658125,
    "region": "Алтайский край",
    "name": "Алейск",
    "latitude": 52.4920914,
    "longtitude": 82.7794145,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 656000,
    "region": "Алтайский край",
    "name": "Барнаул",
    "latitude": 53.3481145,
    "longtitude": 83.7798362,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 659900,
    "region": "Алтайский край",
    "name": "Белокуриха",
    "latitude": 51.9960534,
    "longtitude": 84.9840343,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 659300,
    "region": "Алтайский край",
    "name": "Бийск",
    "latitude": 52.5393683,
    "longtitude": 85.2138852,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 658420,
    "region": "Алтайский край",
    "name": "Горняк",
    "latitude": 50.9979032,
    "longtitude": 81.4643059,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 659100,
    "region": "Алтайский край",
    "name": "Заринск",
    "latitude": 53.7063495,
    "longtitude": 84.9314703,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 658480,
    "region": "Алтайский край",
    "name": "Змеиногорск",
    "latitude": 51.1580235,
    "longtitude": 82.1872476,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 658700,
    "region": "Алтайский край",
    "name": "Камень-на-Оби",
    "latitude": 53.7915454,
    "longtitude": 81.3545173,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 658041,
    "region": "Алтайский край",
    "name": "Новоалтайск",
    "latitude": 53.4120811,
    "longtitude": 83.9311249,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 658200,
    "region": "Алтайский край",
    "name": "Рубцовск",
    "latitude": 51.5013075,
    "longtitude": 81.2077729,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 658820,
    "region": "Алтайский край",
    "name": "Славгород",
    "latitude": 52.9993053,
    "longtitude": 78.6459674,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 658837,
    "region": "Алтайский край",
    "name": "Яровое",
    "latitude": 52.9251728,
    "longtitude": 78.5729898,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 676805,
    "region": "Амурская обл",
    "name": "Белогорск",
    "latitude": 50.9212235,
    "longtitude": 128.4738742,
    "timezone": "UTC+9",
    "district": "Дальневосточный"
  },
  {
    "index": 675000,
    "region": "Амурская обл",
    "name": "Благовещенск",
    "latitude": 50.2905935,
    "longtitude": 127.5272186,
    "timezone": "UTC+9",
    "district": "Дальневосточный"
  },
  {
    "index": 676870,
    "region": "Амурская обл",
    "name": "Завитинск",
    "latitude": 50.1064678,
    "longtitude": 129.4392897,
    "timezone": "UTC+9",
    "district": "Дальневосточный"
  },
  {
    "index": 676151,
    "region": "Амурская обл",
    "name": "Зея",
    "latitude": 53.7339151,
    "longtitude": 127.2658079,
    "timezone": "UTC+9",
    "district": "Дальневосточный"
  },
  {
    "index": 676770,
    "region": "Амурская обл",
    "name": "Райчихинск",
    "latitude": 49.7941882,
    "longtitude": 129.4112149,
    "timezone": "UTC+9",
    "district": "Дальневосточный"
  },
  {
    "index": 676450,
    "region": "Амурская обл",
    "name": "Свободный",
    "latitude": 51.361264,
    "longtitude": 128.1218995,
    "timezone": "UTC+9",
    "district": "Дальневосточный"
  },
  {
    "index": 676011,
    "region": "Амурская обл",
    "name": "Сковородино",
    "latitude": 53.9871004,
    "longtitude": 123.943729,
    "timezone": "UTC+9",
    "district": "Дальневосточный"
  },
  {
    "index": 676280,
    "region": "Амурская обл",
    "name": "Тында",
    "latitude": 55.1546401,
    "longtitude": 124.7468634,
    "timezone": "UTC+9",
    "district": "Дальневосточный"
  },
  {
    "index": 676470,
    "region": "Амурская обл",
    "name": "Циолковский",
    "latitude": 51.7624346,
    "longtitude": 128.121972,
    "timezone": "UTC+9",
    "district": "Дальневосточный"
  },
  {
    "index": 676301,
    "region": "Амурская обл",
    "name": "Шимановск",
    "latitude": 52.0052856,
    "longtitude": 127.7006559,
    "timezone": "UTC+9",
    "district": "Дальневосточный"
  },
  {
    "index": 163000,
    "region": "Архангельская обл",
    "name": "Архангельск",
    "latitude": 64.5392985,
    "longtitude": 40.5170083,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 165150,
    "region": "Архангельская обл",
    "name": "Вельск",
    "latitude": 61.0660057,
    "longtitude": 42.1032858,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 164110,
    "region": "Архангельская обл",
    "name": "Каргополь",
    "latitude": 61.5008762,
    "longtitude": 38.9636415,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 165650,
    "region": "Архангельская обл",
    "name": "Коряжма",
    "latitude": 61.2885993,
    "longtitude": 47.1002315,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 165300,
    "region": "Архангельская обл",
    "name": "Котлас",
    "latitude": 61.2529842,
    "longtitude": 46.6331915,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 164750,
    "region": "Архангельская обл",
    "name": "Мезень",
    "latitude": 65.8398386,
    "longtitude": 44.2531865,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 164170,
    "region": "Архангельская обл",
    "name": "Мирный",
    "latitude": 62.7644267,
    "longtitude": 40.3359976,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 164900,
    "region": "Архангельская обл",
    "name": "Новодвинск",
    "latitude": 64.4136023,
    "longtitude": 40.8208003,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 164200,
    "region": "Архангельская обл",
    "name": "Няндома",
    "latitude": 61.6653735,
    "longtitude": 40.2061699,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 164840,
    "region": "Архангельская обл",
    "name": "Онега",
    "latitude": 63.9163966,
    "longtitude": 38.0805749,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 164500,
    "region": "Архангельская обл",
    "name": "Северодвинск",
    "latitude": 64.56253,
    "longtitude": 39.8182715,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 165330,
    "region": "Архангельская обл",
    "name": "Сольвычегодск",
    "latitude": 61.3318091,
    "longtitude": 46.920351,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 165160,
    "region": "Архангельская обл",
    "name": "Шенкурск",
    "latitude": 62.1057423,
    "longtitude": 42.89959,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 414000,
    "region": "Астраханская обл",
    "name": "Астрахань",
    "latitude": 46.3655808,
    "longtitude": 48.0559979,
    "timezone": "UTC+4",
    "district": "Южный"
  },
  {
    "index": 416500,
    "region": "Астраханская обл",
    "name": "Ахтубинск",
    "latitude": 48.2753078,
    "longtitude": 46.1906741,
    "timezone": "UTC+4",
    "district": "Южный"
  },
  {
    "index": 416540,
    "region": "Астраханская обл",
    "name": "Знаменск",
    "latitude": 48.5865618,
    "longtitude": 45.7367908,
    "timezone": "UTC+4",
    "district": "Южный"
  },
  {
    "index": 416340,
    "region": "Астраханская обл",
    "name": "Камызяк",
    "latitude": 46.1105429,
    "longtitude": 48.0732724,
    "timezone": "UTC+4",
    "district": "Южный"
  },
  {
    "index": 416111,
    "region": "Астраханская обл",
    "name": "Нариманов",
    "latitude": 46.6916597,
    "longtitude": 47.8501624,
    "timezone": "UTC+4",
    "district": "Южный"
  },
  {
    "index": 416010,
    "region": "Астраханская обл",
    "name": "Харабали",
    "latitude": 47.4089187,
    "longtitude": 47.2524467,
    "timezone": "UTC+4",
    "district": "Южный"
  },
  {
    "index": 452920,
    "region": "Башкортостан Респ",
    "name": "Агидель",
    "latitude": 55.89976,
    "longtitude": 53.9221149,
    "timezone": "UTC+5",
    "district": "Приволжский"
  },
  {
    "index": 453630,
    "region": "Башкортостан Респ",
    "name": "Баймак",
    "latitude": 52.5912632,
    "longtitude": 58.3111995,
    "timezone": "UTC+5",
    "district": "Приволжский"
  },
  {
    "index": 452000,
    "region": "Башкортостан Респ",
    "name": "Белебей",
    "latitude": 54.1033832,
    "longtitude": 54.1111878,
    "timezone": "UTC+5",
    "district": "Приволжский"
  },
  {
    "index": 453500,
    "region": "Башкортостан Респ",
    "name": "Белорецк",
    "latitude": 53.9675927,
    "longtitude": 58.4099562,
    "timezone": "UTC+5",
    "district": "Приволжский"
  },
  {
    "index": 452450,
    "region": "Башкортостан Респ",
    "name": "Бирск",
    "latitude": 55.4157107,
    "longtitude": 55.5582335,
    "timezone": "UTC+5",
    "district": "Приволжский"
  },
  {
    "index": 453430,
    "region": "Башкортостан Респ",
    "name": "Благовещенск",
    "latitude": 55.0499592,
    "longtitude": 55.955309,
    "timezone": "UTC+5",
    "district": "Приволжский"
  },
  {
    "index": 453400,
    "region": "Башкортостан Респ",
    "name": "Давлеканово",
    "latitude": 54.2227617,
    "longtitude": 55.0313419,
    "timezone": "UTC+5",
    "district": "Приволжский"
  },
  {
    "index": 452320,
    "region": "Башкортостан Респ",
    "name": "Дюртюли",
    "latitude": 55.4848047,
    "longtitude": 54.8524875,
    "timezone": "UTC+5",
    "district": "Приволжский"
  },
  {
    "index": 453200,
    "region": "Башкортостан Респ",
    "name": "Ишимбай",
    "latitude": 53.4546314,
    "longtitude": 56.043874,
    "timezone": "UTC+5",
    "district": "Приволжский"
  },
  {
    "index": 453300,
    "region": "Башкортостан Респ",
    "name": "Кумертау",
    "latitude": 52.7565537,
    "longtitude": 55.7969915,
    "timezone": "UTC+5",
    "district": "Приволжский"
  },
  {
    "index": 453570,
    "region": "Башкортостан Респ",
    "name": "Межгорье",
    "latitude": 54.239683,
    "longtitude": 57.96146,
    "timezone": "UTC+5",
    "district": "Приволжский"
  },
  {
    "index": 453853,
    "region": "Башкортостан Респ",
    "name": "Мелеуз",
    "latitude": 52.9590637,
    "longtitude": 55.9283483,
    "timezone": "UTC+5",
    "district": "Приволжский"
  },
  {
    "index": 452680,
    "region": "Башкортостан Респ",
    "name": "Нефтекамск",
    "latitude": 56.0883075,
    "longtitude": 54.2483391,
    "timezone": "UTC+5",
    "district": "Приволжский"
  },
  {
    "index": 452601,
    "region": "Башкортостан Респ",
    "name": "Октябрьский",
    "latitude": 54.4815344,
    "longtitude": 53.4656611,
    "timezone": "UTC+5",
    "district": "Приволжский"
  },
  {
    "index": 453250,
    "region": "Башкортостан Респ",
    "name": "Салават",
    "latitude": 53.3616311,
    "longtitude": 55.9245559,
    "timezone": "UTC+5",
    "district": "Приволжский"
  },
  {
    "index": 453830,
    "region": "Башкортостан Респ",
    "name": "Сибай",
    "latitude": 52.7205811,
    "longtitude": 58.6663303,
    "timezone": "UTC+5",
    "district": "Приволжский"
  },
  {
    "index": 453100,
    "region": "Башкортостан Респ",
    "name": "Стерлитамак",
    "latitude": 53.6302498,
    "longtitude": 55.9315707,
    "timezone": "UTC+5",
    "district": "Приволжский"
  },
  {
    "index": 452750,
    "region": "Башкортостан Респ",
    "name": "Туймазы",
    "latitude": 54.5999889,
    "longtitude": 53.6949081,
    "timezone": "UTC+5",
    "district": "Приволжский"
  },
  {
    "index": 450000,
    "region": "Башкортостан Респ",
    "name": "Уфа",
    "latitude": 54.734853,
    "longtitude": 55.9578647,
    "timezone": "UTC+5",
    "district": "Приволжский"
  },
  {
    "index": 453700,
    "region": "Башкортостан Респ",
    "name": "Учалы",
    "latitude": 54.3066965,
    "longtitude": 59.4126559,
    "timezone": "UTC+5",
    "district": "Приволжский"
  },
  {
    "index": 452800,
    "region": "Башкортостан Респ",
    "name": "Янаул",
    "latitude": 56.2650336,
    "longtitude": 54.9298314,
    "timezone": "UTC+5",
    "district": "Приволжский"
  },
  {
    "index": 309850,
    "region": "Белгородская обл",
    "name": "Алексеевка",
    "latitude": 50.6299932,
    "longtitude": 38.6881776,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 308000,
    "region": "Белгородская обл",
    "name": "Белгород",
    "latitude": 50.5977351,
    "longtitude": 36.5858236,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 309910,
    "region": "Белгородская обл",
    "name": "Бирюч",
    "latitude": 50.6483899,
    "longtitude": 38.4006203,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 309990,
    "region": "Белгородская обл",
    "name": "Валуйки",
    "latitude": 50.2112799,
    "longtitude": 38.0998765,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 309370,
    "region": "Белгородская обл",
    "name": "Грайворон",
    "latitude": 50.4862699,
    "longtitude": 35.6662957,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 309180,
    "region": "Белгородская обл",
    "name": "Губкин",
    "latitude": 51.2836362,
    "longtitude": 37.5347608,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 309210,
    "region": "Белгородская обл",
    "name": "Короча",
    "latitude": 50.8130123,
    "longtitude": 37.1896543,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 309640,
    "region": "Белгородская обл",
    "name": "Новый Оскол",
    "latitude": 50.7635162,
    "longtitude": 37.8774026,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 309500,
    "region": "Белгородская обл",
    "name": "Старый Оскол",
    "latitude": 51.2965991,
    "longtitude": 37.8349849,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 309070,
    "region": "Белгородская обл",
    "name": "Строитель",
    "latitude": 50.7845571,
    "longtitude": 36.4886619,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 309290,
    "region": "Белгородская обл",
    "name": "Шебекино",
    "latitude": 50.4005506,
    "longtitude": 36.8877988,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 241000,
    "region": "Брянская обл",
    "name": "Брянск",
    "latitude": 53.2420071,
    "longtitude": 34.3652716,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 242600,
    "region": "Брянская обл",
    "name": "Дятьково",
    "latitude": 53.5958283,
    "longtitude": 34.355092,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 242700,
    "region": "Брянская обл",
    "name": "Жуковка",
    "latitude": 53.5341219,
    "longtitude": 33.7302166,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 243600,
    "region": "Брянская обл",
    "name": "Злынка",
    "latitude": 52.4265906,
    "longtitude": 31.7360386,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 242500,
    "region": "Брянская обл",
    "name": "Карачев",
    "latitude": 53.1297194,
    "longtitude": 34.9887859,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 243140,
    "region": "Брянская обл",
    "name": "Клинцы",
    "latitude": 52.7529052,
    "longtitude": 32.2339161,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 243220,
    "region": "Брянская обл",
    "name": "Мглин",
    "latitude": 53.0600644,
    "longtitude": 32.8467217,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 243020,
    "region": "Брянская обл",
    "name": "Новозыбков",
    "latitude": 52.5371426,
    "longtitude": 31.9356826,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 243400,
    "region": "Брянская обл",
    "name": "Почеп",
    "latitude": 52.9154724,
    "longtitude": 33.4744608,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 242440,
    "region": "Брянская обл",
    "name": "Севск",
    "latitude": 52.1484215,
    "longtitude": 34.4918198,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 241550,
    "region": "Брянская обл",
    "name": "Сельцо",
    "latitude": 53.3738801,
    "longtitude": 34.1059226,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 243240,
    "region": "Брянская обл",
    "name": "Стародуб",
    "latitude": 52.5851881,
    "longtitude": 32.7603628,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 243500,
    "region": "Брянская обл",
    "name": "Сураж",
    "latitude": 53.0171239,
    "longtitude": 32.3938351,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 242220,
    "region": "Брянская обл",
    "name": "Трубчевск",
    "latitude": 52.5791314,
    "longtitude": 33.7660013,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 243300,
    "region": "Брянская обл",
    "name": "Унеча",
    "latitude": 52.8460665,
    "longtitude": 32.6757071,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 242610,
    "region": "Брянская обл",
    "name": "Фокино",
    "latitude": 53.4554552,
    "longtitude": 34.4158537,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 671230,
    "region": "Бурятия Респ",
    "name": "Бабушкин",
    "latitude": 51.7113066,
    "longtitude": 105.8673633,
    "timezone": "UTC+8",
    "district": "Сибирский"
  },
  {
    "index": 671160,
    "region": "Бурятия Респ",
    "name": "Гусиноозерск",
    "latitude": 51.2865751,
    "longtitude": 106.5230732,
    "timezone": "UTC+8",
    "district": "Сибирский"
  },
  {
    "index": 671950,
    "region": "Бурятия Респ",
    "name": "Закаменск",
    "latitude": 50.3726774,
    "longtitude": 103.2867452,
    "timezone": "UTC+8",
    "district": "Сибирский"
  },
  {
    "index": 671840,
    "region": "Бурятия Респ",
    "name": "Кяхта",
    "latitude": 50.3466291,
    "longtitude": 106.4534938,
    "timezone": "UTC+8",
    "district": "Сибирский"
  },
  {
    "index": 671700,
    "region": "Бурятия Респ",
    "name": "Северобайкальск",
    "latitude": 55.6357165,
    "longtitude": 109.3362606,
    "timezone": "UTC+8",
    "district": "Сибирский"
  },
  {
    "index": 670000,
    "region": "Бурятия Респ",
    "name": "Улан-Удэ",
    "latitude": 51.8334378,
    "longtitude": 107.5841511,
    "timezone": "UTC+8",
    "district": "Сибирский"
  },
  {
    "index": 601650,
    "region": "Владимирская обл",
    "name": "Александров",
    "latitude": 56.3919652,
    "longtitude": 38.711035,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 600000,
    "region": "Владимирская обл",
    "name": "Владимир",
    "latitude": 56.1281561,
    "longtitude": 40.4082995,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 601440,
    "region": "Владимирская обл",
    "name": "Вязники",
    "latitude": 56.2976528,
    "longtitude": 42.2687311,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 601480,
    "region": "Владимирская обл",
    "name": "Гороховец",
    "latitude": 56.2021059,
    "longtitude": 42.692517,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 601500,
    "region": "Владимирская обл",
    "name": "Гусь-Хрустальный",
    "latitude": 55.6198065,
    "longtitude": 40.6578769,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 601300,
    "region": "Владимирская обл",
    "name": "Камешково",
    "latitude": 56.3488712,
    "longtitude": 40.9955682,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 601640,
    "region": "Владимирская обл",
    "name": "Карабаново",
    "latitude": 56.3133447,
    "longtitude": 38.7034267,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 601010,
    "region": "Владимирская обл",
    "name": "Киржач",
    "latitude": 56.1485263,
    "longtitude": 38.8635035,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 601900,
    "region": "Владимирская обл",
    "name": "Ковров",
    "latitude": 56.3553895,
    "longtitude": 41.3169568,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 601780,
    "region": "Владимирская обл",
    "name": "Кольчугино",
    "latitude": 56.3327616,
    "longtitude": 39.391201,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 601110,
    "region": "Владимирская обл",
    "name": "Костерево",
    "latitude": 55.9336424,
    "longtitude": 39.624822,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 601570,
    "region": "Владимирская обл",
    "name": "Курлово",
    "latitude": 55.4525994,
    "longtitude": 40.6124362,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 601240,
    "region": "Владимирская обл",
    "name": "Лакинск",
    "latitude": 56.0180614,
    "longtitude": 39.9564706,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 602101,
    "region": "Владимирская обл",
    "name": "Меленки",
    "latitude": 55.3387017,
    "longtitude": 41.634124,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 602205,
    "region": "Владимирская обл",
    "name": "Муром",
    "latitude": 55.5632276,
    "longtitude": 42.023006,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 601140,
    "region": "Владимирская обл",
    "name": "Петушки",
    "latitude": 55.9297657,
    "longtitude": 39.4507913,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 601120,
    "region": "Владимирская обл",
    "name": "Покров",
    "latitude": 55.9167118,
    "longtitude": 39.1733641,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 600910,
    "region": "Владимирская обл",
    "name": "Радужный",
    "latitude": 55.9961034,
    "longtitude": 40.3323247,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 601201,
    "region": "Владимирская обл",
    "name": "Собинка",
    "latitude": 55.993798,
    "longtitude": 40.0180034,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 601670,
    "region": "Владимирская обл",
    "name": "Струнино",
    "latitude": 56.3750001,
    "longtitude": 38.583938,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 601351,
    "region": "Владимирская обл",
    "name": "Судогда",
    "latitude": 55.949897,
    "longtitude": 40.8563392,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 601291,
    "region": "Владимирская обл",
    "name": "Суздаль",
    "latitude": 56.4273814,
    "longtitude": 40.4525581,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 601800,
    "region": "Владимирская обл",
    "name": "Юрьев-Польский",
    "latitude": 56.4938067,
    "longtitude": 39.6679311,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 400000,
    "region": "Волгоградская обл",
    "name": "Волгоград",
    "latitude": 48.7072005,
    "longtitude": 44.5170207,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 404100,
    "region": "Волгоградская обл",
    "name": "Волжский",
    "latitude": 48.7978483,
    "longtitude": 44.7462417,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 404002,
    "region": "Волгоградская обл",
    "name": "Дубовка",
    "latitude": 49.0555342,
    "longtitude": 44.8270813,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 403790,
    "region": "Волгоградская обл",
    "name": "Жирновск",
    "latitude": 50.9767561,
    "longtitude": 44.7857694,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 404500,
    "region": "Волгоградская обл",
    "name": "Калач-на-Дону",
    "latitude": 48.6887569,
    "longtitude": 43.5306866,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 403870,
    "region": "Волгоградская обл",
    "name": "Камышин",
    "latitude": 50.0651261,
    "longtitude": 45.3843816,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 404350,
    "region": "Волгоградская обл",
    "name": "Котельниково",
    "latitude": 47.6310808,
    "longtitude": 43.1331198,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 403801,
    "region": "Волгоградская обл",
    "name": "Котово",
    "latitude": 50.3205433,
    "longtitude": 44.8031864,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 404160,
    "region": "Волгоградская обл",
    "name": "Краснослободск",
    "latitude": 48.7068777,
    "longtitude": 44.5631799,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 404620,
    "region": "Волгоградская обл",
    "name": "Ленинск",
    "latitude": 48.6936234,
    "longtitude": 45.1992835,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 403340,
    "region": "Волгоградская обл",
    "name": "Михайловка",
    "latitude": 50.0708749,
    "longtitude": 43.2400847,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 404030,
    "region": "Волгоградская обл",
    "name": "Николаевск",
    "latitude": 50.0166952,
    "longtitude": 45.4733204,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 403950,
    "region": "Волгоградская обл",
    "name": "Новоаннинский",
    "latitude": 50.5296873,
    "longtitude": 42.6666038,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 404260,
    "region": "Волгоградская обл",
    "name": "Палласовка",
    "latitude": 50.0501422,
    "longtitude": 46.8803355,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 403840,
    "region": "Волгоградская обл",
    "name": "Петров Вал",
    "latitude": 50.1380355,
    "longtitude": 45.2091455,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 403441,
    "region": "Волгоградская обл",
    "name": "Серафимович",
    "latitude": 49.566286,
    "longtitude": 42.7360013,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 404410,
    "region": "Волгоградская обл",
    "name": "Суровикино",
    "latitude": 48.6189756,
    "longtitude": 42.8541308,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 403110,
    "region": "Волгоградская обл",
    "name": "Урюпинск",
    "latitude": 50.7904767,
    "longtitude": 42.0288589,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 403530,
    "region": "Волгоградская обл",
    "name": "Фролово",
    "latitude": 49.7647809,
    "longtitude": 43.6648936,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 162480,
    "region": "Вологодская обл",
    "name": "Бабаево",
    "latitude": 59.389309,
    "longtitude": 35.9378318,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 161200,
    "region": "Вологодская обл",
    "name": "Белозерск",
    "latitude": 60.0307914,
    "longtitude": 37.7891123,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 162390,
    "region": "Вологодская обл",
    "name": "Великий Устюг",
    "latitude": 60.7603243,
    "longtitude": 46.3053893,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 160000,
    "region": "Вологодская обл",
    "name": "Вологда",
    "latitude": 59.2484186,
    "longtitude": 39.8356461,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 162900,
    "region": "Вологодская обл",
    "name": "Вытегра",
    "latitude": 61.0064157,
    "longtitude": 36.4495835,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 162000,
    "region": "Вологодская обл",
    "name": "Грязовец",
    "latitude": 58.8757657,
    "longtitude": 40.248477,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 162107,
    "region": "Вологодская обл",
    "name": "Кадников",
    "latitude": 59.5037947,
    "longtitude": 40.3440473,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 161100,
    "region": "Вологодская обл",
    "name": "Кириллов",
    "latitude": 59.8590353,
    "longtitude": 38.3749854,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 162341,
    "region": "Вологодская обл",
    "name": "Красавино",
    "latitude": 60.9613991,
    "longtitude": 46.481465,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 161440,
    "region": "Вологодская обл",
    "name": "Никольск",
    "latitude": 59.5350162,
    "longtitude": 45.4575468,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 162129,
    "region": "Вологодская обл",
    "name": "Сокол",
    "latitude": 59.4759156,
    "longtitude": 40.1114414,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 161300,
    "region": "Вологодская обл",
    "name": "Тотьма",
    "latitude": 59.9735051,
    "longtitude": 42.7589701,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 162840,
    "region": "Вологодская обл",
    "name": "Устюжна",
    "latitude": 58.8383671,
    "longtitude": 36.4425046,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 162250,
    "region": "Вологодская обл",
    "name": "Харовск",
    "latitude": 59.9477728,
    "longtitude": 40.2000794,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 162600,
    "region": "Вологодская обл",
    "name": "Череповец",
    "latitude": 59.1269214,
    "longtitude": 37.9092243,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 397700,
    "region": "Воронежская обл",
    "name": "Бобров",
    "latitude": 51.0902048,
    "longtitude": 40.0320014,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 396790,
    "region": "Воронежская обл",
    "name": "Богучар",
    "latitude": 49.9352997,
    "longtitude": 40.5592467,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 397160,
    "region": "Воронежская обл",
    "name": "Борисоглебск",
    "latitude": 51.3654619,
    "longtitude": 42.100947,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 397500,
    "region": "Воронежская обл",
    "name": "Бутурлиновка",
    "latitude": 50.8313227,
    "longtitude": 40.5977541,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 394000,
    "region": "Воронежская обл",
    "name": "Воронеж",
    "latitude": 51.6592378,
    "longtitude": 39.1968284,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 397600,
    "region": "Воронежская обл",
    "name": "Калач",
    "latitude": 50.4241213,
    "longtitude": 41.0162858,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 397900,
    "region": "Воронежская обл",
    "name": "Лиски",
    "latitude": 50.9944734,
    "longtitude": 39.518302,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 396070,
    "region": "Воронежская обл",
    "name": "Нововоронеж",
    "latitude": 51.3092463,
    "longtitude": 39.2162865,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 397400,
    "region": "Воронежская обл",
    "name": "Новохоперск",
    "latitude": 51.0953461,
    "longtitude": 41.6173714,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 397837,
    "region": "Воронежская обл",
    "name": "Острогожск",
    "latitude": 50.8678083,
    "longtitude": 39.0406398,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 396420,
    "region": "Воронежская обл",
    "name": "Павловск",
    "latitude": 50.4533684,
    "longtitude": 40.1369087,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 397350,
    "region": "Воронежская обл",
    "name": "Поворино",
    "latitude": 51.1953446,
    "longtitude": 42.2472432,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 396650,
    "region": "Воронежская обл",
    "name": "Россошь",
    "latitude": 50.170089,
    "longtitude": 39.6225534,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 396900,
    "region": "Воронежская обл",
    "name": "Семилуки",
    "latitude": 51.6951846,
    "longtitude": 39.0189797,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 397030,
    "region": "Воронежская обл",
    "name": "Эртиль",
    "latitude": 51.831024,
    "longtitude": 40.8074054,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 368220,
    "region": "Дагестан Респ",
    "name": "Буйнакск",
    "latitude": 42.8213799,
    "longtitude": 47.1164452,
    "timezone": "UTC+3",
    "district": "Северо-Кавказский"
  },
  {
    "index": 368670,
    "region": "Дагестан Респ",
    "name": "Дагестанские Огни",
    "latitude": 42.1151021,
    "longtitude": 48.1939983,
    "timezone": "UTC+3",
    "district": "Северо-Кавказский"
  },
  {
    "index": 368000,
    "region": "Дагестан Респ",
    "name": "Дербент",
    "latitude": 42.058935,
    "longtitude": 48.2908653,
    "timezone": "UTC+3",
    "district": "Северо-Кавказский"
  },
  {
    "index": 368500,
    "region": "Дагестан Респ",
    "name": "Избербаш",
    "latitude": 42.565098,
    "longtitude": 47.871002,
    "timezone": "UTC+3",
    "district": "Северо-Кавказский"
  },
  {
    "index": 368300,
    "region": "Дагестан Респ",
    "name": "Каспийск",
    "latitude": 42.8916599,
    "longtitude": 47.6366674,
    "timezone": "UTC+3",
    "district": "Северо-Кавказский"
  },
  {
    "index": 368120,
    "region": "Дагестан Респ",
    "name": "Кизилюрт",
    "latitude": 43.2039094,
    "longtitude": 46.8729311,
    "timezone": "UTC+3",
    "district": "Северо-Кавказский"
  },
  {
    "index": 368830,
    "region": "Дагестан Респ",
    "name": "Кизляр",
    "latitude": 43.8483915,
    "longtitude": 46.7232828,
    "timezone": "UTC+3",
    "district": "Северо-Кавказский"
  },
  {
    "index": 367000,
    "region": "Дагестан Респ",
    "name": "Махачкала",
    "latitude": 42.9848572,
    "longtitude": 47.5046303,
    "timezone": "UTC+3",
    "district": "Северо-Кавказский"
  },
  {
    "index": 368000,
    "region": "Дагестан Респ",
    "name": "Хасавюрт",
    "latitude": 43.2505191,
    "longtitude": 46.5852276,
    "timezone": "UTC+3",
    "district": "Северо-Кавказский"
  },
  {
    "index": 368890,
    "region": "Дагестан Респ",
    "name": "Южно-Сухокумск",
    "latitude": 44.6600972,
    "longtitude": 45.6499304,
    "timezone": "UTC+3",
    "district": "Северо-Кавказский"
  },
  {
    "index": 679002,
    "region": "Еврейская Аобл",
    "name": "Биробиджан",
    "latitude": 48.7945975,
    "longtitude": 132.9217594,
    "timezone": "UTC+10",
    "district": "Дальневосточный"
  },
  {
    "index": 679100,
    "region": "Еврейская Аобл",
    "name": "Облучье",
    "latitude": 49.0188344,
    "longtitude": 131.0539984,
    "timezone": "UTC+10",
    "district": "Дальневосточный"
  },
  {
    "index": 673450,
    "region": "Забайкальский край",
    "name": "Балей",
    "latitude": 51.5822063,
    "longtitude": 116.6380088,
    "timezone": "UTC+9",
    "district": "Сибирский"
  },
  {
    "index": 674600,
    "region": "Забайкальский край",
    "name": "Борзя",
    "latitude": 50.3875437,
    "longtitude": 116.5235682,
    "timezone": "UTC+9",
    "district": "Сибирский"
  },
  {
    "index": 674670,
    "region": "Забайкальский край",
    "name": "Краснокаменск",
    "latitude": 50.092858,
    "longtitude": 118.0323407,
    "timezone": "UTC+9",
    "district": "Сибирский"
  },
  {
    "index": 673730,
    "region": "Забайкальский край",
    "name": "Могоча",
    "latitude": 53.7362465,
    "longtitude": 119.7661232,
    "timezone": "UTC+9",
    "district": "Сибирский"
  },
  {
    "index": 673400,
    "region": "Забайкальский край",
    "name": "Нерчинск",
    "latitude": 51.9595512,
    "longtitude": 116.5854018,
    "timezone": "UTC+9",
    "district": "Сибирский"
  },
  {
    "index": 673002,
    "region": "Забайкальский край",
    "name": "Петровск-Забайкальский",
    "latitude": 51.2748381,
    "longtitude": 108.8467139,
    "timezone": "UTC+9",
    "district": "Сибирский"
  },
  {
    "index": 673500,
    "region": "Забайкальский край",
    "name": "Сретенск",
    "latitude": 52.2462356,
    "longtitude": 117.7116971,
    "timezone": "UTC+9",
    "district": "Сибирский"
  },
  {
    "index": 673200,
    "region": "Забайкальский край",
    "name": "Хилок",
    "latitude": 51.3635236,
    "longtitude": 110.458989,
    "timezone": "UTC+9",
    "district": "Сибирский"
  },
  {
    "index": 672000,
    "region": "Забайкальский край",
    "name": "Чита",
    "latitude": 52.0340128,
    "longtitude": 113.4994884,
    "timezone": "UTC+9",
    "district": "Сибирский"
  },
  {
    "index": 673303,
    "region": "Забайкальский край",
    "name": "Шилка",
    "latitude": 51.8495302,
    "longtitude": 116.033575,
    "timezone": "UTC+9",
    "district": "Сибирский"
  },
  {
    "index": 155330,
    "region": "Ивановская обл",
    "name": "Вичуга",
    "latitude": 57.2044545,
    "longtitude": 41.9131192,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 155000,
    "region": "Ивановская обл",
    "name": "Гаврилов Посад",
    "latitude": 56.5585967,
    "longtitude": 40.1228288,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 155410,
    "region": "Ивановская обл",
    "name": "Заволжск",
    "latitude": 57.4916546,
    "longtitude": 42.1374455,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 153000,
    "region": "Ивановская обл",
    "name": "Иваново",
    "latitude": 56.9994677,
    "longtitude": 40.9728231,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 155800,
    "region": "Ивановская обл",
    "name": "Кинешма",
    "latitude": 57.4425441,
    "longtitude": 42.1690039,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 155150,
    "region": "Ивановская обл",
    "name": "Комсомольск",
    "latitude": 57.0273907,
    "longtitude": 40.3775952,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 153510,
    "region": "Ивановская обл",
    "name": "Кохма",
    "latitude": 56.9325151,
    "longtitude": 41.0933071,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 155830,
    "region": "Ивановская обл",
    "name": "Наволоки",
    "latitude": 57.4678426,
    "longtitude": 41.9607371,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 155555,
    "region": "Ивановская обл",
    "name": "Плес",
    "latitude": 57.4605304,
    "longtitude": 41.512301,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 155550,
    "region": "Ивановская обл",
    "name": "Приволжск",
    "latitude": 57.3807249,
    "longtitude": 41.2809239,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 155360,
    "region": "Ивановская обл",
    "name": "Пучеж",
    "latitude": 56.982075,
    "longtitude": 43.1683878,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 155250,
    "region": "Ивановская обл",
    "name": "Родники",
    "latitude": 57.1024137,
    "longtitude": 41.7298908,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 155040,
    "region": "Ивановская обл",
    "name": "Тейково",
    "latitude": 56.8542712,
    "longtitude": 40.5355289,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 155520,
    "region": "Ивановская обл",
    "name": "Фурманов",
    "latitude": 57.2538043,
    "longtitude": 41.1053808,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 155900,
    "region": "Ивановская обл",
    "name": "Шуя",
    "latitude": 56.8560743,
    "longtitude": 41.3802455,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 155630,
    "region": "Ивановская обл",
    "name": "Южа",
    "latitude": 56.5926458,
    "longtitude": 42.0457159,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 155450,
    "region": "Ивановская обл",
    "name": "Юрьевец",
    "latitude": 57.3178701,
    "longtitude": 43.1110553,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 386230,
    "region": "Ингушетия Респ",
    "name": "Карабулак",
    "latitude": 43.3054762,
    "longtitude": 44.9094521,
    "timezone": "UTC+3",
    "district": "Северо-Кавказский"
  },
  {
    "index": 386001,
    "region": "Ингушетия Респ",
    "name": "Магас",
    "latitude": 43.1686967,
    "longtitude": 44.8130849,
    "timezone": "UTC+3",
    "district": "Северо-Кавказский"
  },
  {
    "index": 386300,
    "region": "Ингушетия Респ",
    "name": "Малгобек",
    "latitude": 43.5097009,
    "longtitude": 44.5901517,
    "timezone": "UTC+3",
    "district": "Северо-Кавказский"
  },
  {
    "index": 386100,
    "region": "Ингушетия Респ",
    "name": "Назрань",
    "latitude": 43.2257977,
    "longtitude": 44.764685,
    "timezone": "UTC+3",
    "district": "Северо-Кавказский"
  },
  {
    "index": 665160,
    "region": "Иркутская обл",
    "name": "Алзамай",
    "latitude": 55.5550493,
    "longtitude": 98.6644106,
    "timezone": "UTC+8",
    "district": "Сибирский"
  },
  {
    "index": 665800,
    "region": "Иркутская обл",
    "name": "Ангарск",
    "latitude": 52.5448102,
    "longtitude": 103.8885385,
    "timezone": "UTC+8",
    "district": "Сибирский"
  },
  {
    "index": 665930,
    "region": "Иркутская обл",
    "name": "Байкальск",
    "latitude": 51.5231282,
    "longtitude": 104.1485752,
    "timezone": "UTC+8",
    "district": "Сибирский"
  },
  {
    "index": 665050,
    "region": "Иркутская обл",
    "name": "Бирюсинск",
    "latitude": 55.9608611,
    "longtitude": 97.8203624,
    "timezone": "UTC+8",
    "district": "Сибирский"
  },
  {
    "index": 666901,
    "region": "Иркутская обл",
    "name": "Бодайбо",
    "latitude": 57.8468822,
    "longtitude": 114.1867148,
    "timezone": "UTC+8",
    "district": "Сибирский"
  },
  {
    "index": 665700,
    "region": "Иркутская обл",
    "name": "Братск",
    "latitude": 56.1513951,
    "longtitude": 101.6339892,
    "timezone": "UTC+8",
    "district": "Сибирский"
  },
  {
    "index": 665770,
    "region": "Иркутская обл",
    "name": "Вихоревка",
    "latitude": 56.1207708,
    "longtitude": 101.170332,
    "timezone": "UTC+8",
    "district": "Сибирский"
  },
  {
    "index": 665650,
    "region": "Иркутская обл",
    "name": "Железногорск-Илимский",
    "latitude": 56.5847382,
    "longtitude": 104.1141747,
    "timezone": "UTC+8",
    "district": "Сибирский"
  },
  {
    "index": 665382,
    "region": "Иркутская обл",
    "name": "Зима",
    "latitude": 53.9206865,
    "longtitude": 102.0492066,
    "timezone": "UTC+8",
    "district": "Сибирский"
  },
  {
    "index": 664000,
    "region": "Иркутская обл",
    "name": "Иркутск",
    "latitude": 52.2863513,
    "longtitude": 104.280655,
    "timezone": "UTC+8",
    "district": "Сибирский"
  },
  {
    "index": 666700,
    "region": "Иркутская обл",
    "name": "Киренск",
    "latitude": 57.7757126,
    "longtitude": 108.1107766,
    "timezone": "UTC+8",
    "district": "Сибирский"
  },
  {
    "index": 665100,
    "region": "Иркутская обл",
    "name": "Нижнеудинск",
    "latitude": 54.8969105,
    "longtitude": 99.0313481,
    "timezone": "UTC+8",
    "district": "Сибирский"
  },
  {
    "index": 666300,
    "region": "Иркутская обл",
    "name": "Саянск",
    "latitude": 54.1107787,
    "longtitude": 102.1802563,
    "timezone": "UTC+8",
    "district": "Сибирский"
  },
  {
    "index": 665420,
    "region": "Иркутская обл",
    "name": "Свирск",
    "latitude": 53.0842576,
    "longtitude": 103.3364192,
    "timezone": "UTC+8",
    "district": "Сибирский"
  },
  {
    "index": 665902,
    "region": "Иркутская обл",
    "name": "Слюдянка",
    "latitude": 51.6562679,
    "longtitude": 103.7186877,
    "timezone": "UTC+8",
    "district": "Сибирский"
  },
  {
    "index": 665000,
    "region": "Иркутская обл",
    "name": "Тайшет",
    "latitude": 55.9405397,
    "longtitude": 98.0030649,
    "timezone": "UTC+8",
    "district": "Сибирский"
  },
  {
    "index": 665250,
    "region": "Иркутская обл",
    "name": "Тулун",
    "latitude": 54.5571409,
    "longtitude": 100.5779402,
    "timezone": "UTC+8",
    "district": "Сибирский"
  },
  {
    "index": 665450,
    "region": "Иркутская обл",
    "name": "Усолье-Сибирское",
    "latitude": 52.7567192,
    "longtitude": 103.6387694,
    "timezone": "UTC+8",
    "district": "Сибирский"
  },
  {
    "index": 666671,
    "region": "Иркутская обл",
    "name": "Усть-Илимск",
    "latitude": 57.9431325,
    "longtitude": 102.7414683,
    "timezone": "UTC+8",
    "district": "Сибирский"
  },
  {
    "index": 666780,
    "region": "Иркутская обл",
    "name": "Усть-Кут",
    "latitude": 56.7928049,
    "longtitude": 105.7756883,
    "timezone": "UTC+8",
    "district": "Сибирский"
  },
  {
    "index": 665400,
    "region": "Иркутская обл",
    "name": "Черемхово",
    "latitude": 53.1369385,
    "longtitude": 103.090119,
    "timezone": "UTC+8",
    "district": "Сибирский"
  },
  {
    "index": 666031,
    "region": "Иркутская обл",
    "name": "Шелехов",
    "latitude": 52.2102462,
    "longtitude": 104.0973531,
    "timezone": "UTC+8",
    "district": "Сибирский"
  },
  {
    "index": 361500,
    "region": "Кабардино-Балкарская Респ",
    "name": "Баксан",
    "latitude": 43.6820621,
    "longtitude": 43.5345627,
    "timezone": "UTC+3",
    "district": "Северо-Кавказский"
  },
  {
    "index": 361110,
    "region": "Кабардино-Балкарская Респ",
    "name": "Майский",
    "latitude": 43.6281779,
    "longtitude": 44.0516663,
    "timezone": "UTC+3",
    "district": "Северо-Кавказский"
  },
  {
    "index": 360000,
    "region": "Кабардино-Балкарская Респ",
    "name": "Нальчик",
    "latitude": 43.4846312,
    "longtitude": 43.6070316,
    "timezone": "UTC+3",
    "district": "Северо-Кавказский"
  },
  {
    "index": 361330,
    "region": "Кабардино-Балкарская Респ",
    "name": "Нарткала",
    "latitude": 43.5577208,
    "longtitude": 43.8576411,
    "timezone": "UTC+3",
    "district": "Северо-Кавказский"
  },
  {
    "index": 361040,
    "region": "Кабардино-Балкарская Респ",
    "name": "Прохладный",
    "latitude": 43.7589521,
    "longtitude": 44.0101936,
    "timezone": "UTC+3",
    "district": "Северо-Кавказский"
  },
  {
    "index": 361200,
    "region": "Кабардино-Балкарская Респ",
    "name": "Терек",
    "latitude": 43.4838439,
    "longtitude": 44.1402524,
    "timezone": "UTC+3",
    "district": "Северо-Кавказский"
  },
  {
    "index": 361621,
    "region": "Кабардино-Балкарская Респ",
    "name": "Тырныауз",
    "latitude": 43.3981939,
    "longtitude": 42.9215127,
    "timezone": "UTC+3",
    "district": "Северо-Кавказский"
  },
  {
    "index": 361400,
    "region": "Кабардино-Балкарская Респ",
    "name": "Чегем",
    "latitude": 43.5672039,
    "longtitude": 43.5865338,
    "timezone": "UTC+3",
    "district": "Северо-Кавказский"
  },
  {
    "index": 238420,
    "region": "Калининградская обл",
    "name": "Багратионовск",
    "latitude": 54.3866976,
    "longtitude": 20.6418545,
    "timezone": "UTC+2",
    "district": "Северо-Западный"
  },
  {
    "index": 238520,
    "region": "Калининградская обл",
    "name": "Балтийск",
    "latitude": 54.6514128,
    "longtitude": 19.9141911,
    "timezone": "UTC+2",
    "district": "Северо-Западный"
  },
  {
    "index": 238210,
    "region": "Калининградская обл",
    "name": "Гвардейск",
    "latitude": 54.6588981,
    "longtitude": 21.0500584,
    "timezone": "UTC+2",
    "district": "Северо-Западный"
  },
  {
    "index": 238300,
    "region": "Калининградская обл",
    "name": "Гурьевск",
    "latitude": 54.7705368,
    "longtitude": 20.6039109,
    "timezone": "UTC+2",
    "district": "Северо-Западный"
  },
  {
    "index": 238050,
    "region": "Калининградская обл",
    "name": "Гусев",
    "latitude": 54.5915477,
    "longtitude": 22.1944114,
    "timezone": "UTC+2",
    "district": "Северо-Западный"
  },
  {
    "index": 238326,
    "region": "Калининградская обл",
    "name": "Зеленоградск",
    "latitude": 54.9600226,
    "longtitude": 20.4753274,
    "timezone": "UTC+2",
    "district": "Северо-Западный"
  },
  {
    "index": 236001,
    "region": "Калининградская обл",
    "name": "Калининград",
    "latitude": 54.7073218,
    "longtitude": 20.5072458,
    "timezone": "UTC+2",
    "district": "Северо-Западный"
  },
  {
    "index": 238730,
    "region": "Калининградская обл",
    "name": "Краснознаменск",
    "latitude": 54.9452612,
    "longtitude": 22.4928511,
    "timezone": "UTC+2",
    "district": "Северо-Западный"
  },
  {
    "index": 238460,
    "region": "Калининградская обл",
    "name": "Ладушкин",
    "latitude": 54.5693538,
    "longtitude": 20.1691909,
    "timezone": "UTC+2",
    "district": "Северо-Западный"
  },
  {
    "index": 238450,
    "region": "Калининградская обл",
    "name": "Мамоново",
    "latitude": 54.4645591,
    "longtitude": 19.9454114,
    "timezone": "UTC+2",
    "district": "Северо-Западный"
  },
  {
    "index": 238710,
    "region": "Калининградская обл",
    "name": "Неман",
    "latitude": 55.0315543,
    "longtitude": 22.0323961,
    "timezone": "UTC+2",
    "district": "Северо-Западный"
  },
  {
    "index": 238010,
    "region": "Калининградская обл",
    "name": "Нестеров",
    "latitude": 54.6314454,
    "longtitude": 22.5713658,
    "timezone": "UTC+2",
    "district": "Северо-Западный"
  },
  {
    "index": 238120,
    "region": "Калининградская обл",
    "name": "Озерск",
    "latitude": 54.4084804,
    "longtitude": 22.013508,
    "timezone": "UTC+2",
    "district": "Северо-Западный"
  },
  {
    "index": 238590,
    "region": "Калининградская обл",
    "name": "Пионерский",
    "latitude": 54.9516927,
    "longtitude": 20.227697,
    "timezone": "UTC+2",
    "district": "Северо-Западный"
  },
  {
    "index": 238630,
    "region": "Калининградская обл",
    "name": "Полесск",
    "latitude": 54.8626321,
    "longtitude": 21.0998148,
    "timezone": "UTC+2",
    "district": "Северо-Западный"
  },
  {
    "index": 238400,
    "region": "Калининградская обл",
    "name": "Правдинск",
    "latitude": 54.4430604,
    "longtitude": 21.0083638,
    "timezone": "UTC+2",
    "district": "Северо-Западный"
  },
  {
    "index": 238510,
    "region": "Калининградская обл",
    "name": "Приморск",
    "latitude": 54.7311185,
    "longtitude": 19.9983108,
    "timezone": "UTC+2",
    "district": "Северо-Западный"
  },
  {
    "index": 238560,
    "region": "Калининградская обл",
    "name": "Светлогорск",
    "latitude": 54.9439566,
    "longtitude": 20.1514789,
    "timezone": "UTC+2",
    "district": "Северо-Западный"
  },
  {
    "index": 238340,
    "region": "Калининградская обл",
    "name": "Светлый",
    "latitude": 54.6774051,
    "longtitude": 20.1356625,
    "timezone": "UTC+2",
    "district": "Северо-Западный"
  },
  {
    "index": 238600,
    "region": "Калининградская обл",
    "name": "Славск",
    "latitude": 55.0451054,
    "longtitude": 21.6742294,
    "timezone": "UTC+2",
    "district": "Северо-Западный"
  },
  {
    "index": 238750,
    "region": "Калининградская обл",
    "name": "Советск",
    "latitude": 55.0810474,
    "longtitude": 21.8886272,
    "timezone": "UTC+2",
    "district": "Северо-Западный"
  },
  {
    "index": 238150,
    "region": "Калининградская обл",
    "name": "Черняховск",
    "latitude": 54.6243928,
    "longtitude": 21.7969179,
    "timezone": "UTC+2",
    "district": "Северо-Западный"
  },
  {
    "index": 359050,
    "region": "Калмыкия Респ",
    "name": "Городовиковск",
    "latitude": 46.0875351,
    "longtitude": 41.9354039,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 359220,
    "region": "Калмыкия Респ",
    "name": "Лагань",
    "latitude": 45.3929617,
    "longtitude": 47.3432943,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 358000,
    "region": "Калмыкия Респ",
    "name": "Элиста",
    "latitude": 46.3082947,
    "longtitude": 44.2701417,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 249000,
    "region": "Калужская обл",
    "name": "Балабаново",
    "latitude": 55.1773652,
    "longtitude": 36.6567255,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 249160,
    "region": "Калужская обл",
    "name": "Белоусово",
    "latitude": 55.0957679,
    "longtitude": 36.6777239,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 249010,
    "region": "Калужская обл",
    "name": "Боровск",
    "latitude": 55.2130965,
    "longtitude": 36.4927446,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 249026,
    "region": "Калужская обл",
    "name": "Ермолино",
    "latitude": 55.1972714,
    "longtitude": 36.5951966,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 249340,
    "region": "Калужская обл",
    "name": "Жиздра",
    "latitude": 53.7522384,
    "longtitude": 34.7386719,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 249190,
    "region": "Калужская обл",
    "name": "Жуков",
    "latitude": 55.0301386,
    "longtitude": 36.7393279,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 248000,
    "region": "Калужская обл",
    "name": "Калуга",
    "latitude": 54.5060439,
    "longtitude": 36.2515933,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 249440,
    "region": "Калужская обл",
    "name": "Киров",
    "latitude": 54.0790823,
    "longtitude": 34.3077508,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 249720,
    "region": "Калужская обл",
    "name": "Козельск",
    "latitude": 54.0348417,
    "longtitude": 35.7807136,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 249830,
    "region": "Калужская обл",
    "name": "Кондрово",
    "latitude": 54.796051,
    "longtitude": 35.9276099,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 249185,
    "region": "Калужская обл",
    "name": "Кременки",
    "latitude": 54.8863306,
    "longtitude": 37.116878,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 249400,
    "region": "Калужская обл",
    "name": "Людиново",
    "latitude": 53.8701406,
    "longtitude": 34.4385498,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 249091,
    "region": "Калужская обл",
    "name": "Малоярославец",
    "latitude": 55.0176756,
    "longtitude": 36.4632122,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 249950,
    "region": "Калужская обл",
    "name": "Медынь",
    "latitude": 54.9690755,
    "longtitude": 35.887313,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 249240,
    "region": "Калужская обл",
    "name": "Мещовск",
    "latitude": 54.3191127,
    "longtitude": 35.2816065,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 249930,
    "region": "Калужская обл",
    "name": "Мосальск",
    "latitude": 54.4825589,
    "longtitude": 34.987206,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 249030,
    "region": "Калужская обл",
    "name": "Обнинск",
    "latitude": 55.0943892,
    "longtitude": 36.6121785,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 249710,
    "region": "Калужская обл",
    "name": "Сосенский",
    "latitude": 54.056525,
    "longtitude": 35.9621458,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 249610,
    "region": "Калужская обл",
    "name": "Спас-Деменск",
    "latitude": 54.4099201,
    "longtitude": 34.0190263,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 249270,
    "region": "Калужская обл",
    "name": "Сухиничи",
    "latitude": 54.0973787,
    "longtitude": 35.3443077,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 249100,
    "region": "Калужская обл",
    "name": "Таруса",
    "latitude": 54.7236791,
    "longtitude": 37.1670866,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 249910,
    "region": "Калужская обл",
    "name": "Юхнов",
    "latitude": 54.7445873,
    "longtitude": 35.2424857,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 684090,
    "region": "Камчатский край",
    "name": "Вилючинск",
    "latitude": 52.930428,
    "longtitude": 158.4057276,
    "timezone": "UTC+12",
    "district": "Дальневосточный"
  },
  {
    "index": 684000,
    "region": "Камчатский край",
    "name": "Елизово",
    "latitude": 53.1829573,
    "longtitude": 158.3882833,
    "timezone": "UTC+12",
    "district": "Дальневосточный"
  },
  {
    "index": 683000,
    "region": "Камчатский край",
    "name": "Петропавловск-Камчатский",
    "latitude": 53.0370213,
    "longtitude": 158.6559142,
    "timezone": "UTC+12",
    "district": "Дальневосточный"
  },
  {
    "index": 369200,
    "region": "Карачаево-Черкесская Респ",
    "name": "Карачаевск",
    "latitude": 43.773197,
    "longtitude": 41.9143726,
    "timezone": "UTC+3",
    "district": "Северо-Кавказский"
  },
  {
    "index": 369210,
    "region": "Карачаево-Черкесская Респ",
    "name": "Теберда",
    "latitude": 43.4438408,
    "longtitude": 41.7414924,
    "timezone": "UTC+3",
    "district": "Северо-Кавказский"
  },
  {
    "index": 369300,
    "region": "Карачаево-Черкесская Респ",
    "name": "Усть-Джегута",
    "latitude": 44.083852,
    "longtitude": 41.971128,
    "timezone": "UTC+3",
    "district": "Северо-Кавказский"
  },
  {
    "index": 369000,
    "region": "Карачаево-Черкесская Респ",
    "name": "Черкесск",
    "latitude": 44.2268637,
    "longtitude": 42.0467829,
    "timezone": "UTC+3",
    "district": "Северо-Кавказский"
  },
  {
    "index": 186500,
    "region": "Карелия Респ",
    "name": "Беломорск",
    "latitude": 64.5378468,
    "longtitude": 34.7799717,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 186610,
    "region": "Карелия Респ",
    "name": "Кемь",
    "latitude": 64.9543657,
    "longtitude": 34.5948547,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 186220,
    "region": "Карелия Респ",
    "name": "Кондопога",
    "latitude": 62.2059866,
    "longtitude": 34.2681778,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 186930,
    "region": "Карелия Респ",
    "name": "Костомукша",
    "latitude": 64.5889946,
    "longtitude": 30.6015567,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 186730,
    "region": "Карелия Респ",
    "name": "Лахденпохья",
    "latitude": 61.5189466,
    "longtitude": 30.199592,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 186350,
    "region": "Карелия Респ",
    "name": "Медвежьегорск",
    "latitude": 62.9127678,
    "longtitude": 34.4567614,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 186000,
    "region": "Карелия Респ",
    "name": "Олонец",
    "latitude": 60.9793604,
    "longtitude": 32.9726031,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 185000,
    "region": "Карелия Респ",
    "name": "Петрозаводск",
    "latitude": 61.78909,
    "longtitude": 34.3596263,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 186810,
    "region": "Карелия Респ",
    "name": "Питкяранта",
    "latitude": 61.5756886,
    "longtitude": 31.4641309,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 186150,
    "region": "Карелия Респ",
    "name": "Пудож",
    "latitude": 61.8059147,
    "longtitude": 36.5330088,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 186420,
    "region": "Карелия Респ",
    "name": "Сегежа",
    "latitude": 63.7437211,
    "longtitude": 34.3126755,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 186790,
    "region": "Карелия Респ",
    "name": "Сортавала",
    "latitude": 61.7032216,
    "longtitude": 30.6917021,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 186870,
    "region": "Карелия Респ",
    "name": "Суоярви",
    "latitude": 62.0787769,
    "longtitude": 32.3499029,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 652470,
    "region": "Кемеровская обл",
    "name": "Анжеро-Судженск",
    "latitude": 56.0787179,
    "longtitude": 86.0202207,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 652600,
    "region": "Кемеровская обл",
    "name": "Белово",
    "latitude": 54.4221442,
    "longtitude": 86.3036438,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 652420,
    "region": "Кемеровская обл",
    "name": "Березовский",
    "latitude": 55.6692853,
    "longtitude": 86.2744636,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 652780,
    "region": "Кемеровская обл",
    "name": "Гурьевск",
    "latitude": 54.2860005,
    "longtitude": 85.947723,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 652740,
    "region": "Кемеровская обл",
    "name": "Калтан",
    "latitude": 53.5210461,
    "longtitude": 87.2772143,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 650000,
    "region": "Кемеровская обл",
    "name": "Кемерово",
    "latitude": 55.3909721,
    "longtitude": 86.0467864,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 652700,
    "region": "Кемеровская обл",
    "name": "Киселевск",
    "latitude": 54.0060382,
    "longtitude": 86.6367387,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 652500,
    "region": "Кемеровская обл",
    "name": "Ленинск-Кузнецкий",
    "latitude": 54.6674092,
    "longtitude": 86.1796724,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 652150,
    "region": "Кемеровская обл",
    "name": "Мариинск",
    "latitude": 56.2127836,
    "longtitude": 87.7454392,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 652870,
    "region": "Кемеровская обл",
    "name": "Междуреченск",
    "latitude": 53.6865695,
    "longtitude": 88.0703888,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 652840,
    "region": "Кемеровская обл",
    "name": "Мыски",
    "latitude": 53.7125516,
    "longtitude": 87.8056657,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 654000,
    "region": "Кемеровская обл",
    "name": "Новокузнецк",
    "latitude": 53.7942757,
    "longtitude": 87.2144046,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 652800,
    "region": "Кемеровская обл",
    "name": "Осинники",
    "latitude": 53.5987397,
    "longtitude": 87.3369948,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 652560,
    "region": "Кемеровская обл",
    "name": "Полысаево",
    "latitude": 54.6053968,
    "longtitude": 86.2808803,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 652701,
    "region": "Кемеровская обл",
    "name": "Прокопьевск",
    "latitude": 53.8604562,
    "longtitude": 86.7183428,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 652770,
    "region": "Кемеровская обл",
    "name": "Салаир",
    "latitude": 54.2351588,
    "longtitude": 85.8029215,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 652400,
    "region": "Кемеровская обл",
    "name": "Тайга",
    "latitude": 56.0622767,
    "longtitude": 85.6207907,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 652990,
    "region": "Кемеровская обл",
    "name": "Таштагол",
    "latitude": 52.7594505,
    "longtitude": 87.8477272,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 652300,
    "region": "Кемеровская обл",
    "name": "Топки",
    "latitude": 55.2766036,
    "longtitude": 85.6153223,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 652050,
    "region": "Кемеровская обл",
    "name": "Юрга",
    "latitude": 55.7202689,
    "longtitude": 84.8885516,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 613200,
    "region": "Кировская обл",
    "name": "Белая Холуница",
    "latitude": 58.8415212,
    "longtitude": 50.8461002,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 612960,
    "region": "Кировская обл",
    "name": "Вятские Поляны",
    "latitude": 56.2286058,
    "longtitude": 51.0614666,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 612410,
    "region": "Кировская обл",
    "name": "Зуевка",
    "latitude": 58.4031674,
    "longtitude": 51.1330787,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 610000,
    "region": "Кировская обл",
    "name": "Киров",
    "latitude": 58.6035313,
    "longtitude": 49.6679219,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 613040,
    "region": "Кировская обл",
    "name": "Кирово-Чепецк",
    "latitude": 58.5559921,
    "longtitude": 50.0317608,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 612820,
    "region": "Кировская обл",
    "name": "Кирс",
    "latitude": 59.3400586,
    "longtitude": 52.2415895,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 612600,
    "region": "Кировская обл",
    "name": "Котельнич",
    "latitude": 58.3035238,
    "longtitude": 48.3474288,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 613980,
    "region": "Кировская обл",
    "name": "Луза",
    "latitude": 60.6290781,
    "longtitude": 47.2612069,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 612920,
    "region": "Кировская обл",
    "name": "Малмыж",
    "latitude": 56.5243722,
    "longtitude": 50.6782757,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 613710,
    "region": "Кировская обл",
    "name": "Мураши",
    "latitude": 59.3956347,
    "longtitude": 48.9637651,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 613440,
    "region": "Кировская обл",
    "name": "Нолинск",
    "latitude": 57.5596946,
    "longtitude": 49.9357867,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 612740,
    "region": "Кировская обл",
    "name": "Омутнинск",
    "latitude": 58.6697684,
    "longtitude": 52.1893554,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 612270,
    "region": "Кировская обл",
    "name": "Орлов",
    "latitude": 58.5389402,
    "longtitude": 48.8929268,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 613150,
    "region": "Кировская обл",
    "name": "Слободской",
    "latitude": 58.7311934,
    "longtitude": 50.1670091,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 613341,
    "region": "Кировская обл",
    "name": "Советск",
    "latitude": 57.5841434,
    "longtitude": 48.9589228,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 612990,
    "region": "Кировская обл",
    "name": "Сосновка",
    "latitude": 56.2533149,
    "longtitude": 51.2833412,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 613530,
    "region": "Кировская обл",
    "name": "Уржум",
    "latitude": 57.1097612,
    "longtitude": 50.0056278,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 612260,
    "region": "Кировская обл",
    "name": "Яранск",
    "latitude": 57.304195,
    "longtitude": 47.8479185,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 169900,
    "region": "Коми Респ",
    "name": "Воркута",
    "latitude": 67.4973484,
    "longtitude": 64.0611045,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 169570,
    "region": "Коми Респ",
    "name": "Вуктыл",
    "latitude": 63.8615209,
    "longtitude": 57.3165207,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 169200,
    "region": "Коми Респ",
    "name": "Емва",
    "latitude": 62.5965314,
    "longtitude": 50.8731889,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 169840,
    "region": "Коми Респ",
    "name": "Инта",
    "latitude": 66.0368196,
    "longtitude": 60.1154612,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 169060,
    "region": "Коми Респ",
    "name": "Микунь",
    "latitude": 62.3580188,
    "longtitude": 50.0719738,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 169600,
    "region": "Коми Респ",
    "name": "Печора",
    "latitude": 65.1485717,
    "longtitude": 57.22388,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 169500,
    "region": "Коми Респ",
    "name": "Сосногорск",
    "latitude": 63.5990137,
    "longtitude": 53.8762792,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 167000,
    "region": "Коми Респ",
    "name": "Сыктывкар",
    "latitude": 61.668789,
    "longtitude": 50.8356491,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 169710,
    "region": "Коми Респ",
    "name": "Усинск",
    "latitude": 65.9941116,
    "longtitude": 57.5570054,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 169300,
    "region": "Коми Респ",
    "name": "Ухта",
    "latitude": 63.5564779,
    "longtitude": 53.7014202,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 157000,
    "region": "Костромская обл",
    "name": "Буй",
    "latitude": 58.473445,
    "longtitude": 41.5306746,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 156901,
    "region": "Костромская обл",
    "name": "Волгореченск",
    "latitude": 57.4423712,
    "longtitude": 41.1593076,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 157200,
    "region": "Костромская обл",
    "name": "Галич",
    "latitude": 58.3826861,
    "longtitude": 42.3654563,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 157440,
    "region": "Костромская обл",
    "name": "Кологрив",
    "latitude": 58.826988,
    "longtitude": 44.3185323,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 156000,
    "region": "Костромская обл",
    "name": "Кострома",
    "latitude": 57.8029445,
    "longtitude": 40.9907282,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 157460,
    "region": "Костромская обл",
    "name": "Макарьев",
    "latitude": 57.8808916,
    "longtitude": 43.8014428,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 157300,
    "region": "Костромская обл",
    "name": "Мантурово",
    "latitude": 58.3264667,
    "longtitude": 44.7575036,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 157800,
    "region": "Костромская обл",
    "name": "Нерехта",
    "latitude": 57.4543706,
    "longtitude": 40.5725438,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 157331,
    "region": "Костромская обл",
    "name": "Нея",
    "latitude": 58.2944499,
    "longtitude": 43.8780965,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 157170,
    "region": "Костромская обл",
    "name": "Солигалич",
    "latitude": 59.0786729,
    "longtitude": 42.2877245,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 157130,
    "region": "Костромская обл",
    "name": "Чухлома",
    "latitude": 58.7534246,
    "longtitude": 42.6883783,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 157500,
    "region": "Костромская обл",
    "name": "Шарья",
    "latitude": 58.3761832,
    "longtitude": 45.4060762,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 353320,
    "region": "Краснодарский край",
    "name": "Абинск",
    "latitude": 44.8679931,
    "longtitude": 38.1618437,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 353440,
    "region": "Краснодарский край",
    "name": "Анапа",
    "latitude": 44.8950777,
    "longtitude": 37.3163142,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 352690,
    "region": "Краснодарский край",
    "name": "Апшеронск",
    "latitude": 44.4585239,
    "longtitude": 39.7300092,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 352900,
    "region": "Краснодарский край",
    "name": "Армавир",
    "latitude": 45.0010338,
    "longtitude": 41.132392,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 352630,
    "region": "Краснодарский край",
    "name": "Белореченск",
    "latitude": 44.7652733,
    "longtitude": 39.8780457,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 353460,
    "region": "Краснодарский край",
    "name": "Геленджик",
    "latitude": 44.5631053,
    "longtitude": 38.0790184,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 353280,
    "region": "Краснодарский край",
    "name": "Горячий Ключ",
    "latitude": 44.6343251,
    "longtitude": 39.1356421,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 352190,
    "region": "Краснодарский край",
    "name": "Гулькевичи",
    "latitude": 45.3605769,
    "longtitude": 40.6918484,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 353680,
    "region": "Краснодарский край",
    "name": "Ейск",
    "latitude": 46.7114611,
    "longtitude": 38.2764915,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 353180,
    "region": "Краснодарский край",
    "name": "Кореновск",
    "latitude": 45.4640868,
    "longtitude": 39.4590178,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 350000,
    "region": "Краснодарский край",
    "name": "Краснодар",
    "latitude": 45.040235,
    "longtitude": 38.9760801,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 352380,
    "region": "Краснодарский край",
    "name": "Кропоткин",
    "latitude": 45.4332464,
    "longtitude": 40.5727852,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 353380,
    "region": "Краснодарский край",
    "name": "Крымск",
    "latitude": 44.9344108,
    "longtitude": 37.9855314,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 352430,
    "region": "Краснодарский край",
    "name": "Курганинск",
    "latitude": 44.8876442,
    "longtitude": 40.5913858,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 352500,
    "region": "Краснодарский край",
    "name": "Лабинск",
    "latitude": 44.6353153,
    "longtitude": 40.724385,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 352240,
    "region": "Краснодарский край",
    "name": "Новокубанск",
    "latitude": 45.1038782,
    "longtitude": 41.0473679,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 353900,
    "region": "Краснодарский край",
    "name": "Новороссийск",
    "latitude": 44.7234264,
    "longtitude": 37.7687218,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 353860,
    "region": "Краснодарский край",
    "name": "Приморско-Ахтарск",
    "latitude": 46.0515,
    "longtitude": 38.1704654,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 353560,
    "region": "Краснодарский край",
    "name": "Славянск-на-Кубани",
    "latitude": 45.2605079,
    "longtitude": 38.1260725,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 354000,
    "region": "Краснодарский край",
    "name": "Сочи",
    "latitude": 43.5855829,
    "longtitude": 39.7231419,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 353500,
    "region": "Краснодарский край",
    "name": "Темрюк",
    "latitude": 45.2611082,
    "longtitude": 37.445519,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 352700,
    "region": "Краснодарский край",
    "name": "Тимашевск",
    "latitude": 45.6159358,
    "longtitude": 38.9350513,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 352120,
    "region": "Краснодарский край",
    "name": "Тихорецк",
    "latitude": 45.8546953,
    "longtitude": 40.1258702,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 352800,
    "region": "Краснодарский край",
    "name": "Туапсе",
    "latitude": 44.1103707,
    "longtitude": 39.082645,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 352330,
    "region": "Краснодарский край",
    "name": "Усть-Лабинск",
    "latitude": 45.222676,
    "longtitude": 39.6930239,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 352680,
    "region": "Краснодарский край",
    "name": "Хадыженск",
    "latitude": 44.412303,
    "longtitude": 39.5319151,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 662951,
    "region": "Красноярский край",
    "name": "Артемовск",
    "latitude": 54.3472901,
    "longtitude": 93.4356543,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 662150,
    "region": "Красноярский край",
    "name": "Ачинск",
    "latitude": 56.2538662,
    "longtitude": 90.47949,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 662060,
    "region": "Красноярский край",
    "name": "Боготол",
    "latitude": 56.209881,
    "longtitude": 89.5300182,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 663980,
    "region": "Красноярский край",
    "name": "Бородино",
    "latitude": 55.9054308,
    "longtitude": 94.9021138,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 663081,
    "region": "Красноярский край",
    "name": "Дивногорск",
    "latitude": 55.9577868,
    "longtitude": 92.380085,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 647000,
    "region": "Красноярский край",
    "name": "Дудинка",
    "latitude": 69.4031339,
    "longtitude": 86.1908135,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 663150,
    "region": "Красноярский край",
    "name": "Енисейск",
    "latitude": 58.4485234,
    "longtitude": 92.165237,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 662970,
    "region": "Красноярский край",
    "name": "Железногорск",
    "latitude": 56.2529346,
    "longtitude": 93.532167,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 663960,
    "region": "Красноярский край",
    "name": "Заозерный",
    "latitude": 55.9617268,
    "longtitude": 94.7091037,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 663690,
    "region": "Красноярский край",
    "name": "Зеленогорск",
    "latitude": 56.1133001,
    "longtitude": 94.5888736,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 663200,
    "region": "Красноярский край",
    "name": "Игарка",
    "latitude": 67.4667947,
    "longtitude": 86.5814287,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 663800,
    "region": "Красноярский край",
    "name": "Иланский",
    "latitude": 56.2374163,
    "longtitude": 96.0672656,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 663600,
    "region": "Красноярский край",
    "name": "Канск",
    "latitude": 56.2049776,
    "longtitude": 95.7051246,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 663491,
    "region": "Красноярский край",
    "name": "Кодинск",
    "latitude": 58.6033961,
    "longtitude": 99.1797563,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 660000,
    "region": "Красноярский край",
    "name": "Красноярск",
    "latitude": 56.009466,
    "longtitude": 92.8524162,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 662541,
    "region": "Красноярский край",
    "name": "Лесосибирск",
    "latitude": 58.2218201,
    "longtitude": 92.5036986,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 662600,
    "region": "Красноярский край",
    "name": "Минусинск",
    "latitude": 53.7105509,
    "longtitude": 91.6871866,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 662200,
    "region": "Красноярский край",
    "name": "Назарово",
    "latitude": 56.0113176,
    "longtitude": 90.4167947,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 663300,
    "region": "Красноярский край",
    "name": "Норильск",
    "latitude": 69.3490828,
    "longtitude": 88.2009965,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 662500,
    "region": "Красноярский край",
    "name": "Сосновоборск",
    "latitude": 56.1202088,
    "longtitude": 93.3353411,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 662251,
    "region": "Красноярский край",
    "name": "Ужур",
    "latitude": 55.3141977,
    "longtitude": 89.8333827,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 663920,
    "region": "Красноярский край",
    "name": "Уяр",
    "latitude": 55.8131698,
    "longtitude": 94.3282148,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 662310,
    "region": "Красноярский край",
    "name": "Шарыпово",
    "latitude": 55.5389684,
    "longtitude": 89.1801557,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 298676,
    "region": "Крым Респ",
    "name": "Ялта",
    "latitude": 44.416366,
    "longtitude": 34.04455,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 298500,
    "region": "Крым Респ",
    "name": "Алушта",
    "latitude": 44.6764419,
    "longtitude": 34.4100387,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 296012,
    "region": "Крым Респ",
    "name": "Армянск",
    "latitude": 46.1059247,
    "longtitude": 33.6910325,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 298400,
    "region": "Крым Респ",
    "name": "Бахчисарай",
    "latitude": 44.751388,
    "longtitude": 33.8750341,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 297600,
    "region": "Крым Респ",
    "name": "Белогорск",
    "latitude": 45.0571581,
    "longtitude": 34.5998775,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 296100,
    "region": "Крым Респ",
    "name": "Джанкой",
    "latitude": 45.7092436,
    "longtitude": 34.388332,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 297402,
    "region": "Крым Респ",
    "name": "Евпатория",
    "latitude": 45.1904322,
    "longtitude": 33.3667685,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 298300,
    "region": "Крым Респ",
    "name": "Керчь",
    "latitude": 45.3561128,
    "longtitude": 36.4674285,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 296000,
    "region": "Крым Респ",
    "name": "Красноперекопск",
    "latitude": 45.9537956,
    "longtitude": 33.7921523,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 296500,
    "region": "Крым Респ",
    "name": "Саки",
    "latitude": 45.1342889,
    "longtitude": 33.6032508,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 295000,
    "region": "Крым Респ",
    "name": "Симферополь",
    "latitude": 44.9482645,
    "longtitude": 34.100117,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 297345,
    "region": "Крым Респ",
    "name": "Старый Крым",
    "latitude": 45.0290659,
    "longtitude": 35.0900885,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 298000,
    "region": "Крым Респ",
    "name": "Судак",
    "latitude": 44.8505913,
    "longtitude": 34.9761591,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 298100,
    "region": "Крым Респ",
    "name": "Феодосия",
    "latitude": 45.031878,
    "longtitude": 35.3824772,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 298213,
    "region": "Крым Респ",
    "name": "Щелкино",
    "latitude": 45.4289847,
    "longtitude": 35.8251329,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 298600,
    "region": "Крым Респ",
    "name": "Ялта",
    "latitude": 44.4951948,
    "longtitude": 34.166386,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 641730,
    "region": "Курганская обл",
    "name": "Далматово",
    "latitude": 56.2621393,
    "longtitude": 62.9387378,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 641700,
    "region": "Курганская обл",
    "name": "Катайск",
    "latitude": 56.2908118,
    "longtitude": 62.5800669,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 640002,
    "region": "Курганская обл",
    "name": "Курган",
    "latitude": 55.4443448,
    "longtitude": 65.3161339,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 641430,
    "region": "Курганская обл",
    "name": "Куртамыш",
    "latitude": 54.9368491,
    "longtitude": 64.4203009,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 641600,
    "region": "Курганская обл",
    "name": "Макушино",
    "latitude": 55.2154025,
    "longtitude": 67.2452558,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 641640,
    "region": "Курганская обл",
    "name": "Петухово",
    "latitude": 55.0649932,
    "longtitude": 67.8874369,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 641870,
    "region": "Курганская обл",
    "name": "Шадринск",
    "latitude": 56.0870152,
    "longtitude": 63.6298234,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 641100,
    "region": "Курганская обл",
    "name": "Шумиха",
    "latitude": 55.2281833,
    "longtitude": 63.2902391,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 641010,
    "region": "Курганская обл",
    "name": "Щучье",
    "latitude": 55.20883,
    "longtitude": 62.7478475,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 307500,
    "region": "Курская обл",
    "name": "Дмитриев",
    "latitude": 52.1269291,
    "longtitude": 35.0739504,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 307170,
    "region": "Курская обл",
    "name": "Железногорск",
    "latitude": 52.3378753,
    "longtitude": 35.3516834,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 305000,
    "region": "Курская обл",
    "name": "Курск",
    "latitude": 51.7303391,
    "longtitude": 36.1926448,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 307250,
    "region": "Курская обл",
    "name": "Курчатов",
    "latitude": 51.6605475,
    "longtitude": 35.6571711,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 307750,
    "region": "Курская обл",
    "name": "Льгов",
    "latitude": 51.6596935,
    "longtitude": 35.2611592,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 306230,
    "region": "Курская обл",
    "name": "Обоянь",
    "latitude": 51.212012,
    "longtitude": 36.275425,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 307370,
    "region": "Курская обл",
    "name": "Рыльск",
    "latitude": 51.568165,
    "longtitude": 34.6802178,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 307800,
    "region": "Курская обл",
    "name": "Суджа",
    "latitude": 51.1919711,
    "longtitude": 35.2719619,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 307100,
    "region": "Курская обл",
    "name": "Фатеж",
    "latitude": 52.0918591,
    "longtitude": 35.8538912,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 306509,
    "region": "Курская обл",
    "name": "Щигры",
    "latitude": 51.8787808,
    "longtitude": 36.8910674,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 187650,
    "region": "Ленинградская обл",
    "name": "Бокситогорск",
    "latitude": 59.4735032,
    "longtitude": 33.8456521,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 188410,
    "region": "Ленинградская обл",
    "name": "Волосово",
    "latitude": 59.4445107,
    "longtitude": 29.492277,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 187401,
    "region": "Ленинградская обл",
    "name": "Волхов",
    "latitude": 59.9006057,
    "longtitude": 32.35212,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 188640,
    "region": "Ленинградская обл",
    "name": "Всеволожск",
    "latitude": 60.0190094,
    "longtitude": 30.6455834,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 188800,
    "region": "Ленинградская обл",
    "name": "Выборг",
    "latitude": 60.7130748,
    "longtitude": 28.7328813,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 188909,
    "region": "Ленинградская обл",
    "name": "Высоцк",
    "latitude": 60.6296511,
    "longtitude": 28.5709914,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 188300,
    "region": "Ленинградская обл",
    "name": "Гатчина",
    "latitude": 59.5650861,
    "longtitude": 30.1281859,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 188490,
    "region": "Ленинградская обл",
    "name": "Ивангород",
    "latitude": 59.3765845,
    "longtitude": 28.2230504,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 188950,
    "region": "Ленинградская обл",
    "name": "Каменногорск",
    "latitude": 60.9508768,
    "longtitude": 29.1308061,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 188456,
    "region": "Ленинградская обл",
    "name": "Кингисепп",
    "latitude": 59.3739407,
    "longtitude": 28.6112981,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 187110,
    "region": "Ленинградская обл",
    "name": "Кириши",
    "latitude": 59.4742626,
    "longtitude": 32.0625536,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 187340,
    "region": "Ленинградская обл",
    "name": "Кировск",
    "latitude": 59.875371,
    "longtitude": 30.9815205,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 188320,
    "region": "Ленинградская обл",
    "name": "Коммунар",
    "latitude": 59.6215929,
    "longtitude": 30.393466,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 187700,
    "region": "Ленинградская обл",
    "name": "Лодейное Поле",
    "latitude": 60.7320564,
    "longtitude": 33.5522225,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 188230,
    "region": "Ленинградская обл",
    "name": "Луга",
    "latitude": 58.7373818,
    "longtitude": 29.8466657,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 187050,
    "region": "Ленинградская обл",
    "name": "Любань",
    "latitude": 59.3492573,
    "longtitude": 31.2485276,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 187026,
    "region": "Ленинградская обл",
    "name": "Никольское",
    "latitude": 59.7042633,
    "longtitude": 30.7874879,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 187450,
    "region": "Ленинградская обл",
    "name": "Новая Ладога",
    "latitude": 60.1100013,
    "longtitude": 32.3141446,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 187330,
    "region": "Ленинградская обл",
    "name": "Отрадное",
    "latitude": 59.772596,
    "longtitude": 30.7988403,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 187600,
    "region": "Ленинградская обл",
    "name": "Пикалево",
    "latitude": 59.5130655,
    "longtitude": 34.1773982,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 187780,
    "region": "Ленинградская обл",
    "name": "Подпорожье",
    "latitude": 60.9127463,
    "longtitude": 34.1567832,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 188910,
    "region": "Ленинградская обл",
    "name": "Приморск",
    "latitude": 60.3660787,
    "longtitude": 28.6135962,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 188760,
    "region": "Ленинградская обл",
    "name": "Приозерск",
    "latitude": 61.03313,
    "longtitude": 30.15876,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 188990,
    "region": "Ленинградская обл",
    "name": "Светогорск",
    "latitude": 61.1112679,
    "longtitude": 28.8726666,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 188650,
    "region": "Ленинградская обл",
    "name": "Сертолово",
    "latitude": 60.14458,
    "longtitude": 30.2094595,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 188560,
    "region": "Ленинградская обл",
    "name": "Сланцы",
    "latitude": 59.1178693,
    "longtitude": 28.088106,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 188540,
    "region": "Ленинградская обл",
    "name": "Сосновый Бор",
    "latitude": 59.8772921,
    "longtitude": 29.1290866,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 187420,
    "region": "Ленинградская обл",
    "name": "Сясьстрой",
    "latitude": 60.1402454,
    "longtitude": 32.5602015,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 187550,
    "region": "Ленинградская обл",
    "name": "Тихвин",
    "latitude": 59.6273809,
    "longtitude": 33.5072307,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 187000,
    "region": "Ленинградская обл",
    "name": "Тосно",
    "latitude": 59.5406697,
    "longtitude": 30.8777872,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 187320,
    "region": "Ленинградская обл",
    "name": "Шлиссельбург",
    "latitude": 59.9443923,
    "longtitude": 31.0334136,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 399050,
    "region": "Липецкая обл",
    "name": "Грязи",
    "latitude": 52.4873931,
    "longtitude": 39.9331785,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 399850,
    "region": "Липецкая обл",
    "name": "Данков",
    "latitude": 53.25769,
    "longtitude": 39.1457625,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 399770,
    "region": "Липецкая обл",
    "name": "Елец",
    "latitude": 52.6151738,
    "longtitude": 38.5289121,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 399200,
    "region": "Липецкая обл",
    "name": "Задонск",
    "latitude": 52.4004611,
    "longtitude": 38.9205772,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 399610,
    "region": "Липецкая обл",
    "name": "Лебедянь",
    "latitude": 53.0156678,
    "longtitude": 39.143498,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 398000,
    "region": "Липецкая обл",
    "name": "Липецк",
    "latitude": 52.6103027,
    "longtitude": 39.5946266,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 399341,
    "region": "Липецкая обл",
    "name": "Усмань",
    "latitude": 52.0444165,
    "longtitude": 39.7264516,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 399900,
    "region": "Липецкая обл",
    "name": "Чаплыгин",
    "latitude": 53.2404794,
    "longtitude": 39.9671563,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 685000,
    "region": "Магаданская обл",
    "name": "Магадан",
    "latitude": 59.5681763,
    "longtitude": 150.8085289,
    "timezone": "UTC+11",
    "district": "Дальневосточный"
  },
  {
    "index": 686314,
    "region": "Магаданская обл",
    "name": "Сусуман",
    "latitude": 62.7804628,
    "longtitude": 148.154033,
    "timezone": "UTC+11",
    "district": "Дальневосточный"
  },
  {
    "index": 425000,
    "region": "Марий Эл Респ",
    "name": "Волжск",
    "latitude": 55.8622987,
    "longtitude": 48.371553,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 425060,
    "region": "Марий Эл Респ",
    "name": "Звенигово",
    "latitude": 55.9739374,
    "longtitude": 48.0170276,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 424000,
    "region": "Марий Эл Респ",
    "name": "Йошкар-Ола",
    "latitude": 56.6343763,
    "longtitude": 47.8998445,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 425350,
    "region": "Марий Эл Респ",
    "name": "Козьмодемьянск",
    "latitude": 56.333346,
    "longtitude": 46.5466282,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 431860,
    "region": "Мордовия Респ",
    "name": "Ардатов",
    "latitude": 54.8465693,
    "longtitude": 46.2412736,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 431430,
    "region": "Мордовия Респ",
    "name": "Инсар",
    "latitude": 53.8770384,
    "longtitude": 44.3696866,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 431350,
    "region": "Мордовия Респ",
    "name": "Ковылкино",
    "latitude": 54.0391464,
    "longtitude": 43.9191229,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 431260,
    "region": "Мордовия Респ",
    "name": "Краснослободск",
    "latitude": 54.4248634,
    "longtitude": 43.7845096,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 431440,
    "region": "Мордовия Респ",
    "name": "Рузаевка",
    "latitude": 54.0583238,
    "longtitude": 44.949116,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 430000,
    "region": "Мордовия Респ",
    "name": "Саранск",
    "latitude": 54.1807601,
    "longtitude": 45.1862263,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 431220,
    "region": "Мордовия Респ",
    "name": "Темников",
    "latitude": 54.6309086,
    "longtitude": 43.2161785,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 101000,
    "region": "г.Москва",
    "name": "",
    "latitude": 55.7538789,
    "longtitude": 37.6203735,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 143360,
    "region": "Московская обл",
    "name": "Апрелевка",
    "latitude": 55.5276336,
    "longtitude": 37.0651105,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 143900,
    "region": "Московская обл",
    "name": "Балашиха",
    "latitude": 55.7963352,
    "longtitude": 37.9381413,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 140170,
    "region": "Московская обл",
    "name": "Бронницы",
    "latitude": 55.4255534,
    "longtitude": 38.2640794,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 143330,
    "region": "Московская обл",
    "name": "Верея",
    "latitude": 55.3674668,
    "longtitude": 36.1563083,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 142700,
    "region": "Московская обл",
    "name": "Видное",
    "latitude": 55.5518323,
    "longtitude": 37.7062062,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 143600,
    "region": "Московская обл",
    "name": "Волоколамск",
    "latitude": 56.0358121,
    "longtitude": 35.9585027,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 140200,
    "region": "Московская обл",
    "name": "Воскресенск",
    "latitude": 55.3071305,
    "longtitude": 38.7026949,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 141650,
    "region": "Московская обл",
    "name": "Высоковск",
    "latitude": 56.336141,
    "longtitude": 36.5251316,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 143040,
    "region": "Московская обл",
    "name": "Голицыно",
    "latitude": 55.6189762,
    "longtitude": 36.9855559,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 143530,
    "region": "Московская обл",
    "name": "Дедовск",
    "latitude": 55.8704718,
    "longtitude": 37.1244724,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 140090,
    "region": "Московская обл",
    "name": "Дзержинский",
    "latitude": 55.6241079,
    "longtitude": 37.8440691,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 141800,
    "region": "Московская обл",
    "name": "Дмитров",
    "latitude": 56.3477176,
    "longtitude": 37.5267184,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 141700,
    "region": "Московская обл",
    "name": "Долгопрудный",
    "latitude": 55.9384901,
    "longtitude": 37.5100527,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 102321,
    "region": "Московская обл",
    "name": "Домодедово",
    "latitude": 55.4363901,
    "longtitude": 37.7666263,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 142660,
    "region": "Московская обл",
    "name": "Дрезна",
    "latitude": 55.7442991,
    "longtitude": 38.8499228,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 141980,
    "region": "Московская обл",
    "name": "Дубна",
    "latitude": 56.7417949,
    "longtitude": 37.1757163,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 140300,
    "region": "Московская обл",
    "name": "Егорьевск",
    "latitude": 55.3831326,
    "longtitude": 39.0358236,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 140180,
    "region": "Московская обл",
    "name": "Жуковский",
    "latitude": 55.5998408,
    "longtitude": 38.1224185,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 140600,
    "region": "Московская обл",
    "name": "Зарайск",
    "latitude": 54.7625993,
    "longtitude": 38.8851485,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 143180,
    "region": "Московская обл",
    "name": "Звенигород",
    "latitude": 55.7296168,
    "longtitude": 36.8552843,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 141280,
    "region": "Московская обл",
    "name": "Ивантеевка",
    "latitude": 55.9742303,
    "longtitude": 37.9208755,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 143500,
    "region": "Московская обл",
    "name": "Истра",
    "latitude": 55.9061087,
    "longtitude": 36.8600854,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 142900,
    "region": "Московская обл",
    "name": "Кашира",
    "latitude": 54.8534263,
    "longtitude": 38.1903818,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 141601,
    "region": "Московская обл",
    "name": "Клин",
    "latitude": 56.3424886,
    "longtitude": 36.7240912,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 140400,
    "region": "Московская обл",
    "name": "Коломна",
    "latitude": 55.1027797,
    "longtitude": 38.7531734,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 141070,
    "region": "Московская обл",
    "name": "Королев",
    "latitude": 55.9162558,
    "longtitude": 37.8545224,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": "",
    "region": "Московская обл",
    "name": "Котельники",
    "latitude": 55.659898,
    "longtitude": 37.8632865,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 141290,
    "region": "Московская обл",
    "name": "Красноармейск",
    "latitude": 51.0268595,
    "longtitude": 45.7011086,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 143401,
    "region": "Московская обл",
    "name": "Красногорск",
    "latitude": 55.8318475,
    "longtitude": 37.32942,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 141321,
    "region": "Московская обл",
    "name": "Краснозаводск",
    "latitude": 56.4408723,
    "longtitude": 38.2320671,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 143090,
    "region": "Московская обл",
    "name": "Краснознаменск",
    "latitude": 55.5978962,
    "longtitude": 37.0395137,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 143070,
    "region": "Московская обл",
    "name": "Кубинка",
    "latitude": 55.5755679,
    "longtitude": 36.6952487,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 142620,
    "region": "Московская обл",
    "name": "Куровское",
    "latitude": 55.5791491,
    "longtitude": 38.9208543,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 142670,
    "region": "Московская обл",
    "name": "Ликино-Дулево",
    "latitude": 55.7078531,
    "longtitude": 38.9577103,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 141055,
    "region": "Московская обл",
    "name": "Лобня",
    "latitude": 56.0328745,
    "longtitude": 37.4614671,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 141150,
    "region": "Московская обл",
    "name": "Лосино-Петровский",
    "latitude": 55.8714441,
    "longtitude": 38.2005377,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 140500,
    "region": "Московская обл",
    "name": "Луховицы",
    "latitude": 54.9651617,
    "longtitude": 39.0261346,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 140080,
    "region": "Московская обл",
    "name": "Лыткарино",
    "latitude": 55.5778065,
    "longtitude": 37.9034952,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 140000,
    "region": "Московская обл",
    "name": "Люберцы",
    "latitude": 55.700416,
    "longtitude": 37.9606496,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 143200,
    "region": "Московская обл",
    "name": "Можайск",
    "latitude": 55.5069819,
    "longtitude": 36.0240724,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 141000,
    "region": "Московская обл",
    "name": "Мытищи",
    "latitude": 55.9104647,
    "longtitude": 37.7363702,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 143300,
    "region": "Московская обл",
    "name": "Наро-Фоминск",
    "latitude": 55.3802749,
    "longtitude": 36.7608038,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 142400,
    "region": "Московская обл",
    "name": "Ногинск",
    "latitude": 55.8686239,
    "longtitude": 38.4621635,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 143000,
    "region": "Московская обл",
    "name": "Одинцово",
    "latitude": 55.6789292,
    "longtitude": 37.2636389,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 140560,
    "region": "Московская обл",
    "name": "Озеры",
    "latitude": 54.8539944,
    "longtitude": 38.55987,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 142600,
    "region": "Московская обл",
    "name": "Орехово-Зуево",
    "latitude": 55.8151729,
    "longtitude": 38.9870711,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 142500,
    "region": "Московская обл",
    "name": "Павловский Посад",
    "latitude": 55.7806718,
    "longtitude": 38.6596047,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 141320,
    "region": "Московская обл",
    "name": "Пересвет",
    "latitude": 56.4158828,
    "longtitude": 38.1733567,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 142100,
    "region": "Московская обл",
    "name": "Подольск",
    "latitude": 55.4389588,
    "longtitude": 37.57027,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 142280,
    "region": "Московская обл",
    "name": "Протвино",
    "latitude": 54.8706614,
    "longtitude": 37.2183307,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 141200,
    "region": "Московская обл",
    "name": "Пушкино",
    "latitude": 56.0104548,
    "longtitude": 37.8471438,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 142290,
    "region": "Московская обл",
    "name": "Пущино",
    "latitude": 54.832521,
    "longtitude": 37.6210428,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 140100,
    "region": "Московская обл",
    "name": "Раменское",
    "latitude": 55.549529,
    "longtitude": 38.273015,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 143960,
    "region": "Московская обл",
    "name": "Реутов",
    "latitude": 55.758236,
    "longtitude": 37.8619443,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 140730,
    "region": "Московская обл",
    "name": "Рошаль",
    "latitude": 55.6632504,
    "longtitude": 39.8655434,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 143100,
    "region": "Московская обл",
    "name": "Руза",
    "latitude": 55.7015302,
    "longtitude": 36.1960043,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 141300,
    "region": "Московская обл",
    "name": "Сергиев Посад",
    "latitude": 56.3063411,
    "longtitude": 38.1502568,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 142200,
    "region": "Московская обл",
    "name": "Серпухов",
    "latitude": 54.9225396,
    "longtitude": 37.4032682,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 141501,
    "region": "Московская обл",
    "name": "Солнечногорск",
    "latitude": 56.2148655,
    "longtitude": 37.0967653,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 142450,
    "region": "Московская обл",
    "name": "Старая Купавна",
    "latitude": 55.8038411,
    "longtitude": 38.1426144,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 142800,
    "region": "Московская обл",
    "name": "Ступино",
    "latitude": 54.9238403,
    "longtitude": 38.1186976,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 141900,
    "region": "Московская обл",
    "name": "Талдом",
    "latitude": 56.7308993,
    "longtitude": 37.5276414,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 141190,
    "region": "Московская обл",
    "name": "Фрязино",
    "latitude": 55.9590154,
    "longtitude": 38.0409171,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 141400,
    "region": "Московская обл",
    "name": "Химки",
    "latitude": 55.8886705,
    "longtitude": 37.4304154,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 141370,
    "region": "Московская обл",
    "name": "Хотьково",
    "latitude": 56.2515725,
    "longtitude": 37.9395225,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 142432,
    "region": "Московская обл",
    "name": "Черноголовка",
    "latitude": 56.0100909,
    "longtitude": 38.3792328,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 142300,
    "region": "Московская обл",
    "name": "Чехов",
    "latitude": 55.1507175,
    "longtitude": 37.4532591,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 140700,
    "region": "Московская обл",
    "name": "Шатура",
    "latitude": 55.5777942,
    "longtitude": 39.5443781,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 141100,
    "region": "Московская обл",
    "name": "Щелково",
    "latitude": 55.9234303,
    "longtitude": 37.9784419,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 142530,
    "region": "Московская обл",
    "name": "Электрогорск",
    "latitude": 55.8778573,
    "longtitude": 38.7805239,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 144000,
    "region": "Московская обл",
    "name": "Электросталь",
    "latitude": 55.7847718,
    "longtitude": 38.4446531,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 142455,
    "region": "Московская обл",
    "name": "Электроугли",
    "latitude": 55.7170329,
    "longtitude": 38.2194049,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 141840,
    "region": "Московская обл",
    "name": "Яхрома",
    "latitude": 56.2889858,
    "longtitude": 37.4831016,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 184200,
    "region": "Мурманская обл",
    "name": "Апатиты",
    "latitude": 67.5678295,
    "longtitude": 33.4067218,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 184670,
    "region": "Мурманская обл",
    "name": "Гаджиево",
    "latitude": 69.2490009,
    "longtitude": 33.3152445,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 184310,
    "region": "Мурманская обл",
    "name": "Заозерск",
    "latitude": 69.4003895,
    "longtitude": 32.4502225,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 184430,
    "region": "Мурманская обл",
    "name": "Заполярный",
    "latitude": 69.413232,
    "longtitude": 30.7985332,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 184042,
    "region": "Мурманская обл",
    "name": "Кандалакша",
    "latitude": 67.1567298,
    "longtitude": 32.4142303,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 184250,
    "region": "Мурманская обл",
    "name": "Кировск",
    "latitude": 67.6150979,
    "longtitude": 33.6637196,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 184144,
    "region": "Мурманская обл",
    "name": "Ковдор",
    "latitude": 67.5661466,
    "longtitude": 30.4742082,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 184380,
    "region": "Мурманская обл",
    "name": "Кола",
    "latitude": 68.8785079,
    "longtitude": 33.0262014,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 184505,
    "region": "Мурманская обл",
    "name": "Мончегорск",
    "latitude": 67.9385206,
    "longtitude": 32.9358886,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 183000,
    "region": "Мурманская обл",
    "name": "Мурманск",
    "latitude": 69.0076958,
    "longtitude": 33.0686019,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 184530,
    "region": "Мурманская обл",
    "name": "Оленегорск",
    "latitude": 68.1422068,
    "longtitude": 33.2670094,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 184640,
    "region": "Мурманская обл",
    "name": "Островной",
    "latitude": 68.0509133,
    "longtitude": 39.5076034,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 184230,
    "region": "Мурманская обл",
    "name": "Полярные Зори",
    "latitude": 67.3730192,
    "longtitude": 32.497541,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 184650,
    "region": "Мурманская обл",
    "name": "Полярный",
    "latitude": 69.1988373,
    "longtitude": 33.4509985,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 184601,
    "region": "Мурманская обл",
    "name": "Североморск",
    "latitude": 69.0765029,
    "longtitude": 33.4178354,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 184682,
    "region": "Мурманская обл",
    "name": "Снежногорск",
    "latitude": 69.1921469,
    "longtitude": 33.2382821,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 166000,
    "region": "Ненецкий АО",
    "name": "Нарьян-Мар",
    "latitude": 67.6381525,
    "longtitude": 53.0069336,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 607220,
    "region": "Нижегородская обл",
    "name": "Арзамас",
    "latitude": 55.3947544,
    "longtitude": 43.8407855,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 606407,
    "region": "Нижегородская обл",
    "name": "Балахна",
    "latitude": 56.4949932,
    "longtitude": 43.5758953,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 607600,
    "region": "Нижегородская обл",
    "name": "Богородск",
    "latitude": 56.1019905,
    "longtitude": 43.513678,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 606440,
    "region": "Нижегородская обл",
    "name": "Бор",
    "latitude": 56.3565179,
    "longtitude": 44.0644851,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 606860,
    "region": "Нижегородская обл",
    "name": "Ветлуга",
    "latitude": 57.8558395,
    "longtitude": 45.7762692,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 606072,
    "region": "Нижегородская обл",
    "name": "Володарск",
    "latitude": 56.2168974,
    "longtitude": 43.1597623,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 606120,
    "region": "Нижегородская обл",
    "name": "Ворсма",
    "latitude": 55.9900425,
    "longtitude": 43.2719879,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 607060,
    "region": "Нижегородская обл",
    "name": "Выкса",
    "latitude": 55.3207103,
    "longtitude": 42.1679169,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 606125,
    "region": "Нижегородская обл",
    "name": "Горбатов",
    "latitude": 56.1307901,
    "longtitude": 43.0626829,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 606500,
    "region": "Нижегородская обл",
    "name": "Городец",
    "latitude": 56.6447459,
    "longtitude": 43.4722975,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 606000,
    "region": "Нижегородская обл",
    "name": "Дзержинск",
    "latitude": 56.2376438,
    "longtitude": 43.4599363,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 606520,
    "region": "Нижегородская обл",
    "name": "Заволжье",
    "latitude": 56.6404237,
    "longtitude": 43.3871565,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 606340,
    "region": "Нижегородская обл",
    "name": "Княгинино",
    "latitude": 55.8205157,
    "longtitude": 45.0322947,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 607650,
    "region": "Нижегородская обл",
    "name": "Кстово",
    "latitude": 56.1433353,
    "longtitude": 44.1665081,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 607010,
    "region": "Нижегородская обл",
    "name": "Кулебаки",
    "latitude": 55.429716,
    "longtitude": 42.512483,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 607800,
    "region": "Нижегородская обл",
    "name": "Лукоянов",
    "latitude": 55.0327349,
    "longtitude": 44.4933829,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 606210,
    "region": "Нижегородская обл",
    "name": "Лысково",
    "latitude": 56.0262298,
    "longtitude": 45.0356702,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 607100,
    "region": "Нижегородская обл",
    "name": "Навашино",
    "latitude": 55.5439105,
    "longtitude": 42.1887734,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 603000,
    "region": "Нижегородская обл",
    "name": "Нижний Новгород",
    "latitude": 56.3242093,
    "longtitude": 44.0053948,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 606100,
    "region": "Нижегородская обл",
    "name": "Павлово",
    "latitude": 55.9797995,
    "longtitude": 43.0996232,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 607751,
    "region": "Нижегородская обл",
    "name": "Первомайск",
    "latitude": 54.8676182,
    "longtitude": 43.8012829,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 607400,
    "region": "Нижегородская обл",
    "name": "Перевоз",
    "latitude": 55.596904,
    "longtitude": 44.5450268,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 607180,
    "region": "Нижегородская обл",
    "name": "Саров",
    "latitude": 54.9227002,
    "longtitude": 43.3447792,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 606605,
    "region": "Нижегородская обл",
    "name": "Семенов",
    "latitude": 56.788935,
    "longtitude": 44.4903571,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 607510,
    "region": "Нижегородская обл",
    "name": "Сергач",
    "latitude": 55.5200364,
    "longtitude": 45.4813193,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 606803,
    "region": "Нижегородская обл",
    "name": "Урень",
    "latitude": 57.4612547,
    "longtitude": 45.783394,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 606540,
    "region": "Нижегородская обл",
    "name": "Чкаловск",
    "latitude": 56.7651549,
    "longtitude": 43.2420193,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 606910,
    "region": "Нижегородская обл",
    "name": "Шахунья",
    "latitude": 57.6764773,
    "longtitude": 46.6129673,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 174400,
    "region": "Новгородская обл",
    "name": "Боровичи",
    "latitude": 58.3839866,
    "longtitude": 33.9176761,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 175400,
    "region": "Новгородская обл",
    "name": "Валдай",
    "latitude": 57.9822906,
    "longtitude": 33.2369492,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 173000,
    "region": "Новгородская обл",
    "name": "Великий Новгород",
    "latitude": 58.5214003,
    "longtitude": 31.2755051,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 174260,
    "region": "Новгородская обл",
    "name": "Малая Вишера",
    "latitude": 58.8458076,
    "longtitude": 32.2247984,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 174350,
    "region": "Новгородская обл",
    "name": "Окуловка",
    "latitude": 58.3908717,
    "longtitude": 33.2902474,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 174510,
    "region": "Новгородская обл",
    "name": "Пестово",
    "latitude": 58.5973944,
    "longtitude": 35.8144523,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 175040,
    "region": "Новгородская обл",
    "name": "Сольцы",
    "latitude": 58.1201693,
    "longtitude": 30.309285,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 175200,
    "region": "Новгородская обл",
    "name": "Старая Русса",
    "latitude": 57.9906873,
    "longtitude": 31.3555076,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 175270,
    "region": "Новгородская обл",
    "name": "Холм",
    "latitude": 57.1451036,
    "longtitude": 31.1787812,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 174210,
    "region": "Новгородская обл",
    "name": "Чудово",
    "latitude": 59.1247477,
    "longtitude": 31.6865406,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 632330,
    "region": "Новосибирская обл",
    "name": "Барабинск",
    "latitude": 55.3515917,
    "longtitude": 78.3465012,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 633000,
    "region": "Новосибирская обл",
    "name": "Бердск",
    "latitude": 54.7582375,
    "longtitude": 83.1072212,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 633340,
    "region": "Новосибирская обл",
    "name": "Болотное",
    "latitude": 55.6693773,
    "longtitude": 84.3906599,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": "",
    "region": "Новосибирская обл",
    "name": "Искитим",
    "latitude": 54.6266869,
    "longtitude": 83.2951444,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 632860,
    "region": "Новосибирская обл",
    "name": "Карасук",
    "latitude": 53.7343772,
    "longtitude": 78.042457,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 632400,
    "region": "Новосибирская обл",
    "name": "Каргат",
    "latitude": 55.1943829,
    "longtitude": 80.2831324,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 632380,
    "region": "Новосибирская обл",
    "name": "Куйбышев",
    "latitude": 55.4684104,
    "longtitude": 78.3241042,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 632730,
    "region": "Новосибирская обл",
    "name": "Купино",
    "latitude": 54.3660317,
    "longtitude": 77.2972969,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 630000,
    "region": "Новосибирская обл",
    "name": "Новосибирск",
    "latitude": 55.0281016,
    "longtitude": 82.9210575,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": "",
    "region": "Новосибирская обл",
    "name": "Обь",
    "latitude": 54.9945882,
    "longtitude": 82.6937925,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 632120,
    "region": "Новосибирская обл",
    "name": "Татарск",
    "latitude": 55.2145894,
    "longtitude": 75.9740805,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 633450,
    "region": "Новосибирская обл",
    "name": "Тогучин",
    "latitude": 55.2250038,
    "longtitude": 84.4103867,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 633520,
    "region": "Новосибирская обл",
    "name": "Черепаново",
    "latitude": 54.2206974,
    "longtitude": 83.3724392,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 632550,
    "region": "Новосибирская обл",
    "name": "Чулым",
    "latitude": 55.0906205,
    "longtitude": 80.9592152,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 646020,
    "region": "Омская обл",
    "name": "Исилькуль",
    "latitude": 54.9096156,
    "longtitude": 71.2816107,
    "timezone": "UTC+6",
    "district": "Сибирский"
  },
  {
    "index": 646900,
    "region": "Омская обл",
    "name": "Калачинск",
    "latitude": 55.0598547,
    "longtitude": 74.5655075,
    "timezone": "UTC+6",
    "district": "Сибирский"
  },
  {
    "index": 646100,
    "region": "Омская обл",
    "name": "Называевск",
    "latitude": 55.5688811,
    "longtitude": 71.3502572,
    "timezone": "UTC+6",
    "district": "Сибирский"
  },
  {
    "index": 644000,
    "region": "Омская обл",
    "name": "Омск",
    "latitude": 54.9848136,
    "longtitude": 73.3674638,
    "timezone": "UTC+6",
    "district": "Сибирский"
  },
  {
    "index": 646530,
    "region": "Омская обл",
    "name": "Тара",
    "latitude": 56.9159171,
    "longtitude": 74.3649643,
    "timezone": "UTC+6",
    "district": "Сибирский"
  },
  {
    "index": 646330,
    "region": "Омская обл",
    "name": "Тюкалинск",
    "latitude": 55.8705121,
    "longtitude": 72.1956156,
    "timezone": "UTC+6",
    "district": "Сибирский"
  },
  {
    "index": 461743,
    "region": "Оренбургская обл",
    "name": "Абдулино",
    "latitude": 53.6778096,
    "longtitude": 53.6473115,
    "timezone": "UTC+5",
    "district": "Приволжский"
  },
  {
    "index": 461630,
    "region": "Оренбургская обл",
    "name": "Бугуруслан",
    "latitude": 53.6522636,
    "longtitude": 52.4326166,
    "timezone": "UTC+5",
    "district": "Приволжский"
  },
  {
    "index": 461040,
    "region": "Оренбургская обл",
    "name": "Бузулук",
    "latitude": 52.7881434,
    "longtitude": 52.2623757,
    "timezone": "UTC+5",
    "district": "Приволжский"
  },
  {
    "index": 462631,
    "region": "Оренбургская обл",
    "name": "Гай",
    "latitude": 51.4649138,
    "longtitude": 58.4436189,
    "timezone": "UTC+5",
    "district": "Приволжский"
  },
  {
    "index": 462240,
    "region": "Оренбургская обл",
    "name": "Кувандык",
    "latitude": 51.4784845,
    "longtitude": 57.3612029,
    "timezone": "UTC+5",
    "district": "Приволжский"
  },
  {
    "index": 462271,
    "region": "Оренбургская обл",
    "name": "Медногорск",
    "latitude": 51.4039421,
    "longtitude": 57.5832185,
    "timezone": "UTC+5",
    "district": "Приволжский"
  },
  {
    "index": 462351,
    "region": "Оренбургская обл",
    "name": "Новотроицк",
    "latitude": 51.1965071,
    "longtitude": 58.3017455,
    "timezone": "UTC+5",
    "district": "Приволжский"
  },
  {
    "index": 460000,
    "region": "Оренбургская обл",
    "name": "Оренбург",
    "latitude": 51.7875191,
    "longtitude": 55.1017379,
    "timezone": "UTC+5",
    "district": "Приволжский"
  },
  {
    "index": 462400,
    "region": "Оренбургская обл",
    "name": "Орск",
    "latitude": 51.2293069,
    "longtitude": 58.4751889,
    "timezone": "UTC+5",
    "district": "Приволжский"
  },
  {
    "index": 461504,
    "region": "Оренбургская обл",
    "name": "Соль-Илецк",
    "latitude": 51.1634976,
    "longtitude": 54.9895391,
    "timezone": "UTC+5",
    "district": "Приволжский"
  },
  {
    "index": 461900,
    "region": "Оренбургская обл",
    "name": "Сорочинск",
    "latitude": 52.4265081,
    "longtitude": 53.1542123,
    "timezone": "UTC+5",
    "district": "Приволжский"
  },
  {
    "index": 462780,
    "region": "Оренбургская обл",
    "name": "Ясный",
    "latitude": 51.0369499,
    "longtitude": 59.8743256,
    "timezone": "UTC+5",
    "district": "Приволжский"
  },
  {
    "index": 303140,
    "region": "Орловская обл",
    "name": "Болхов",
    "latitude": 53.4440204,
    "longtitude": 36.0076969,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 303240,
    "region": "Орловская обл",
    "name": "Дмитровск",
    "latitude": 52.5053481,
    "longtitude": 35.141535,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 303850,
    "region": "Орловская обл",
    "name": "Ливны",
    "latitude": 52.4285122,
    "longtitude": 37.603944,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 303370,
    "region": "Орловская обл",
    "name": "Малоархангельск",
    "latitude": 52.4001151,
    "longtitude": 36.5037931,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 303030,
    "region": "Орловская обл",
    "name": "Мценск",
    "latitude": 53.2790021,
    "longtitude": 36.574992,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 303500,
    "region": "Орловская обл",
    "name": "Новосиль",
    "latitude": 52.9747225,
    "longtitude": 37.0438402,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 302000,
    "region": "Орловская обл",
    "name": "Орёл",
    "latitude": 52.9672573,
    "longtitude": 36.0696479,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 442250,
    "region": "Пензенская обл",
    "name": "Белинский",
    "latitude": 52.9641169,
    "longtitude": 43.4185003,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 442310,
    "region": "Пензенская обл",
    "name": "Городище",
    "latitude": 53.2727888,
    "longtitude": 45.702731,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 442960,
    "region": "Пензенская обл",
    "name": "Заречный",
    "latitude": 53.1961009,
    "longtitude": 45.1691502,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 442240,
    "region": "Пензенская обл",
    "name": "Каменка",
    "latitude": 53.1855474,
    "longtitude": 44.0468501,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 442530,
    "region": "Пензенская обл",
    "name": "Кузнецк",
    "latitude": 53.1131686,
    "longtitude": 46.6052497,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 442150,
    "region": "Пензенская обл",
    "name": "Нижний Ломов",
    "latitude": 53.5301274,
    "longtitude": 43.6729216,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 442317,
    "region": "Пензенская обл",
    "name": "Никольск",
    "latitude": 53.7138397,
    "longtitude": 46.079962,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 440000,
    "region": "Пензенская обл",
    "name": "Пенза",
    "latitude": 53.1753884,
    "longtitude": 45.0347408,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 442890,
    "region": "Пензенская обл",
    "name": "Сердобск",
    "latitude": 52.4697532,
    "longtitude": 44.2122688,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 442600,
    "region": "Пензенская обл",
    "name": "Спасск",
    "latitude": 53.927163,
    "longtitude": 43.1860475,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 442300,
    "region": "Пензенская обл",
    "name": "Сурск",
    "latitude": 53.0760597,
    "longtitude": 45.6911897,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 618320,
    "region": "Пермский край",
    "name": "Александровск",
    "latitude": 59.1613773,
    "longtitude": 57.5764851,
    "timezone": "UTC+5",
    "district": "Приволжский"
  },
  {
    "index": 618400,
    "region": "Пермский край",
    "name": "Березники",
    "latitude": 59.4079898,
    "longtitude": 56.8040725,
    "timezone": "UTC+5",
    "district": "Приволжский"
  },
  {
    "index": 617119,
    "region": "Пермский край",
    "name": "Верещагино",
    "latitude": 58.0797908,
    "longtitude": 54.6580948,
    "timezone": "UTC+5",
    "district": "Приволжский"
  },
  {
    "index": 618820,
    "region": "Пермский край",
    "name": "Горнозаводск",
    "latitude": 58.3743406,
    "longtitude": 58.3230329,
    "timezone": "UTC+5",
    "district": "Приволжский"
  },
  {
    "index": 618270,
    "region": "Пермский край",
    "name": "Гремячинск",
    "latitude": 58.5625603,
    "longtitude": 57.8520073,
    "timezone": "UTC+5",
    "district": "Приволжский"
  },
  {
    "index": 618250,
    "region": "Пермский край",
    "name": "Губаха",
    "latitude": 58.837024,
    "longtitude": 57.5544441,
    "timezone": "UTC+5",
    "district": "Приволжский"
  },
  {
    "index": 618730,
    "region": "Пермский край",
    "name": "Добрянка",
    "latitude": 58.4696353,
    "longtitude": 56.4131294,
    "timezone": "UTC+5",
    "district": "Приволжский"
  },
  {
    "index": 618350,
    "region": "Пермский край",
    "name": "Кизел",
    "latitude": 59.0511764,
    "longtitude": 57.6471214,
    "timezone": "UTC+5",
    "district": "Приволжский"
  },
  {
    "index": 618590,
    "region": "Пермский край",
    "name": "Красновишерск",
    "latitude": 60.3902242,
    "longtitude": 57.0537244,
    "timezone": "UTC+5",
    "district": "Приволжский"
  },
  {
    "index": 617060,
    "region": "Пермский край",
    "name": "Краснокамск",
    "latitude": 58.0820946,
    "longtitude": 55.7479797,
    "timezone": "UTC+5",
    "district": "Приволжский"
  },
  {
    "index": 619000,
    "region": "Пермский край",
    "name": "Кудымкар",
    "latitude": 59.0168605,
    "longtitude": 54.6573459,
    "timezone": "UTC+5",
    "district": "Приволжский"
  },
  {
    "index": 617470,
    "region": "Пермский край",
    "name": "Кунгур",
    "latitude": 57.4283217,
    "longtitude": 56.9437787,
    "timezone": "UTC+5",
    "district": "Приволжский"
  },
  {
    "index": 618900,
    "region": "Пермский край",
    "name": "Лысьва",
    "latitude": 58.0995987,
    "longtitude": 57.8085728,
    "timezone": "UTC+5",
    "district": "Приволжский"
  },
  {
    "index": 617000,
    "region": "Пермский край",
    "name": "Нытва",
    "latitude": 57.9337429,
    "longtitude": 55.3357261,
    "timezone": "UTC+5",
    "district": "Приволжский"
  },
  {
    "index": 618120,
    "region": "Пермский край",
    "name": "Оса",
    "latitude": 57.2889992,
    "longtitude": 55.4688982,
    "timezone": "UTC+5",
    "district": "Приволжский"
  },
  {
    "index": 618100,
    "region": "Пермский край",
    "name": "Оханск",
    "latitude": 57.7178946,
    "longtitude": 55.387153,
    "timezone": "UTC+5",
    "district": "Приволжский"
  },
  {
    "index": 617140,
    "region": "Пермский край",
    "name": "Очер",
    "latitude": 57.8851991,
    "longtitude": 54.7161756,
    "timezone": "UTC+5",
    "district": "Приволжский"
  },
  {
    "index": 614000,
    "region": "Пермский край",
    "name": "Пермь",
    "latitude": 58.0103211,
    "longtitude": 56.2341778,
    "timezone": "UTC+5",
    "district": "Приволжский"
  },
  {
    "index": 618541,
    "region": "Пермский край",
    "name": "Соликамск",
    "latitude": 59.6483518,
    "longtitude": 56.7710358,
    "timezone": "UTC+5",
    "district": "Приволжский"
  },
  {
    "index": 618460,
    "region": "Пермский край",
    "name": "Усолье",
    "latitude": 59.4279356,
    "longtitude": 56.6837783,
    "timezone": "UTC+5",
    "district": "Приволжский"
  },
  {
    "index": 617760,
    "region": "Пермский край",
    "name": "Чайковский",
    "latitude": 56.7780203,
    "longtitude": 54.1478482,
    "timezone": "UTC+5",
    "district": "Приволжский"
  },
  {
    "index": 618601,
    "region": "Пермский край",
    "name": "Чердынь",
    "latitude": 60.4011184,
    "longtitude": 56.4801391,
    "timezone": "UTC+5",
    "district": "Приволжский"
  },
  {
    "index": 617040,
    "region": "Пермский край",
    "name": "Чермоз",
    "latitude": 58.7842527,
    "longtitude": 56.1507562,
    "timezone": "UTC+5",
    "district": "Приволжский"
  },
  {
    "index": 617830,
    "region": "Пермский край",
    "name": "Чернушка",
    "latitude": 56.5161079,
    "longtitude": 56.0763919,
    "timezone": "UTC+5",
    "district": "Приволжский"
  },
  {
    "index": 618200,
    "region": "Пермский край",
    "name": "Чусовой",
    "latitude": 58.2974725,
    "longtitude": 57.8193122,
    "timezone": "UTC+5",
    "district": "Приволжский"
  },
  {
    "index": 692330,
    "region": "Приморский край",
    "name": "Арсеньев",
    "latitude": 44.16208,
    "longtitude": 133.269622,
    "timezone": "UTC+10",
    "district": "Дальневосточный"
  },
  {
    "index": 692486,
    "region": "Приморский край",
    "name": "Артем",
    "latitude": 43.350053,
    "longtitude": 132.1596594,
    "timezone": "UTC+10",
    "district": "Дальневосточный"
  },
  {
    "index": 692801,
    "region": "Приморский край",
    "name": "Большой Камень",
    "latitude": 43.1112737,
    "longtitude": 132.3480354,
    "timezone": "UTC+10",
    "district": "Дальневосточный"
  },
  {
    "index": 690000,
    "region": "Приморский край",
    "name": "Владивосток",
    "latitude": 43.1163807,
    "longtitude": 131.882348,
    "timezone": "UTC+10",
    "district": "Дальневосточный"
  },
  {
    "index": 692437,
    "region": "Приморский край",
    "name": "Дальнегорск",
    "latitude": 44.5539909,
    "longtitude": 135.5662536,
    "timezone": "UTC+10",
    "district": "Дальневосточный"
  },
  {
    "index": 692130,
    "region": "Приморский край",
    "name": "Дальнереченск",
    "latitude": 45.9307882,
    "longtitude": 133.7316542,
    "timezone": "UTC+10",
    "district": "Дальневосточный"
  },
  {
    "index": 692031,
    "region": "Приморский край",
    "name": "Лесозаводск",
    "latitude": 45.4780192,
    "longtitude": 133.4185501,
    "timezone": "UTC+10",
    "district": "Дальневосточный"
  },
  {
    "index": 692900,
    "region": "Приморский край",
    "name": "Находка",
    "latitude": 42.8240404,
    "longtitude": 132.8927812,
    "timezone": "UTC+10",
    "district": "Дальневосточный"
  },
  {
    "index": 692851,
    "region": "Приморский край",
    "name": "Партизанск",
    "latitude": 43.1279833,
    "longtitude": 133.1264754,
    "timezone": "UTC+10",
    "district": "Дальневосточный"
  },
  {
    "index": 692230,
    "region": "Приморский край",
    "name": "Спасск-Дальний",
    "latitude": 44.5900929,
    "longtitude": 132.8157564,
    "timezone": "UTC+10",
    "district": "Дальневосточный"
  },
  {
    "index": 692500,
    "region": "Приморский край",
    "name": "Уссурийск",
    "latitude": 43.79726,
    "longtitude": 131.9517262,
    "timezone": "UTC+10",
    "district": "Дальневосточный"
  },
  {
    "index": 692880,
    "region": "Приморский край",
    "name": "Фокино",
    "latitude": 42.9707163,
    "longtitude": 132.4110209,
    "timezone": "UTC+10",
    "district": "Дальневосточный"
  },
  {
    "index": 182100,
    "region": "Псковская обл",
    "name": "Великие Луки",
    "latitude": 56.3321847,
    "longtitude": 30.550757,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 181600,
    "region": "Псковская обл",
    "name": "Гдов",
    "latitude": 58.7432585,
    "longtitude": 27.8263328,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 182670,
    "region": "Псковская обл",
    "name": "Дно",
    "latitude": 57.8269802,
    "longtitude": 29.9629569,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 182500,
    "region": "Псковская обл",
    "name": "Невель",
    "latitude": 56.0201544,
    "longtitude": 29.9240505,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 182440,
    "region": "Псковская обл",
    "name": "Новоржев",
    "latitude": 57.0298332,
    "longtitude": 29.343333,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 182200,
    "region": "Псковская обл",
    "name": "Новосокольники",
    "latitude": 56.3407627,
    "longtitude": 30.1527712,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 182333,
    "region": "Псковская обл",
    "name": "Опочка",
    "latitude": 56.7107956,
    "longtitude": 28.6717455,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 181353,
    "region": "Псковская обл",
    "name": "Остров",
    "latitude": 57.3452408,
    "longtitude": 28.3437107,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 181502,
    "region": "Псковская обл",
    "name": "Печоры",
    "latitude": 57.8146689,
    "longtitude": 27.6222823,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 182620,
    "region": "Псковская обл",
    "name": "Порхов",
    "latitude": 57.7764223,
    "longtitude": 29.5436424,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 180000,
    "region": "Псковская обл",
    "name": "Псков",
    "latitude": 57.819284,
    "longtitude": 28.3318188,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 182300,
    "region": "Псковская обл",
    "name": "Пустошка",
    "latitude": 56.3375131,
    "longtitude": 29.3668243,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 181410,
    "region": "Псковская обл",
    "name": "Пыталово",
    "latitude": 57.0637109,
    "longtitude": 27.9234759,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 182250,
    "region": "Псковская обл",
    "name": "Себеж",
    "latitude": 56.2907663,
    "longtitude": 28.4725735,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 346780,
    "region": "Ростовская обл",
    "name": "Азов",
    "latitude": 47.1120631,
    "longtitude": 39.4232597,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 346720,
    "region": "Ростовская обл",
    "name": "Аксай",
    "latitude": 47.2676075,
    "longtitude": 39.8755485,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 346880,
    "region": "Ростовская обл",
    "name": "Батайск",
    "latitude": 47.138321,
    "longtitude": 39.7508382,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 347040,
    "region": "Ростовская обл",
    "name": "Белая Калитва",
    "latitude": 48.176948,
    "longtitude": 40.8033169,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 347360,
    "region": "Ростовская обл",
    "name": "Волгодонск",
    "latitude": 47.5165181,
    "longtitude": 42.1984531,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 347870,
    "region": "Ростовская обл",
    "name": "Гуково",
    "latitude": 48.0449422,
    "longtitude": 39.9484635,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 346330,
    "region": "Ростовская обл",
    "name": "Донецк",
    "latitude": 48.3350928,
    "longtitude": 39.9460654,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 346310,
    "region": "Ростовская обл",
    "name": "Зверево",
    "latitude": 48.043451,
    "longtitude": 40.1264948,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 347740,
    "region": "Ростовская обл",
    "name": "Зерноград",
    "latitude": 46.8494991,
    "longtitude": 40.312765,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 347800,
    "region": "Ростовская обл",
    "name": "Каменск-Шахтинский",
    "latitude": 48.3204412,
    "longtitude": 40.268874,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 347250,
    "region": "Ростовская обл",
    "name": "Константиновск",
    "latitude": 47.5773456,
    "longtitude": 41.0967362,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 346350,
    "region": "Ростовская обл",
    "name": "Красный Сулин",
    "latitude": 47.8830826,
    "longtitude": 40.0781385,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 346130,
    "region": "Ростовская обл",
    "name": "Миллерово",
    "latitude": 48.925821,
    "longtitude": 40.3983302,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 347210,
    "region": "Ростовская обл",
    "name": "Морозовск",
    "latitude": 48.3511724,
    "longtitude": 41.8308006,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 346400,
    "region": "Ростовская обл",
    "name": "Новочеркасск",
    "latitude": 47.4119248,
    "longtitude": 40.1042066,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 346900,
    "region": "Ростовская обл",
    "name": "Новошахтинск",
    "latitude": 47.7576522,
    "longtitude": 39.9364709,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 347540,
    "region": "Ростовская обл",
    "name": "Пролетарск",
    "latitude": 46.7038968,
    "longtitude": 41.7274533,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 344000,
    "region": "Ростовская обл",
    "name": "Ростов-на-Дону",
    "latitude": 47.2224364,
    "longtitude": 39.7187866,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 347630,
    "region": "Ростовская обл",
    "name": "Сальск",
    "latitude": 46.4751689,
    "longtitude": 41.5412229,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 346630,
    "region": "Ростовская обл",
    "name": "Семикаракорск",
    "latitude": 47.5177981,
    "longtitude": 40.811585,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 347900,
    "region": "Ростовская обл",
    "name": "Таганрог",
    "latitude": 47.2094907,
    "longtitude": 38.935154,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 347320,
    "region": "Ростовская обл",
    "name": "Цимлянск",
    "latitude": 47.6477668,
    "longtitude": 42.093022,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 346500,
    "region": "Ростовская обл",
    "name": "Шахты",
    "latitude": 47.7084247,
    "longtitude": 40.2159154,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 391300,
    "region": "Рязанская обл",
    "name": "Касимов",
    "latitude": 54.9373788,
    "longtitude": 41.3912912,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 391200,
    "region": "Рязанская обл",
    "name": "Кораблино",
    "latitude": 53.9245422,
    "longtitude": 40.0227867,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 391710,
    "region": "Рязанская обл",
    "name": "Михайлов",
    "latitude": 54.2296493,
    "longtitude": 39.0090857,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 391160,
    "region": "Рязанская обл",
    "name": "Новомичуринск",
    "latitude": 54.0377979,
    "longtitude": 39.7467023,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 391110,
    "region": "Рязанская обл",
    "name": "Рыбное",
    "latitude": 54.7255937,
    "longtitude": 39.513438,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 391960,
    "region": "Рязанская обл",
    "name": "Ряжск",
    "latitude": 53.7067718,
    "longtitude": 40.0521358,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 390000,
    "region": "Рязанская обл",
    "name": "Рязань",
    "latitude": 54.625457,
    "longtitude": 39.7359992,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 391430,
    "region": "Рязанская обл",
    "name": "Сасово",
    "latitude": 54.350807,
    "longtitude": 41.9117458,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 391800,
    "region": "Рязанская обл",
    "name": "Скопин",
    "latitude": 53.8236028,
    "longtitude": 39.5493286,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 391030,
    "region": "Рязанская обл",
    "name": "Спас-Клепики",
    "latitude": 55.1291472,
    "longtitude": 40.1745036,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 391050,
    "region": "Рязанская обл",
    "name": "Спасск-Рязанский",
    "latitude": 54.4071497,
    "longtitude": 40.3764367,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 391550,
    "region": "Рязанская обл",
    "name": "Шацк",
    "latitude": 54.0288845,
    "longtitude": 41.7182108,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 445350,
    "region": "Самарская обл",
    "name": "Жигулевск",
    "latitude": 53.4011545,
    "longtitude": 49.494529,
    "timezone": "UTC+4",
    "district": "Приволжский"
  },
  {
    "index": 446430,
    "region": "Самарская обл",
    "name": "Кинель",
    "latitude": 53.2209985,
    "longtitude": 50.6343039,
    "timezone": "UTC+4",
    "district": "Приволжский"
  },
  {
    "index": 446600,
    "region": "Самарская обл",
    "name": "Нефтегорск",
    "latitude": 52.797259,
    "longtitude": 51.1637126,
    "timezone": "UTC+4",
    "district": "Приволжский"
  },
  {
    "index": 446200,
    "region": "Самарская обл",
    "name": "Новокуйбышевск",
    "latitude": 53.0995303,
    "longtitude": 49.9477662,
    "timezone": "UTC+4",
    "district": "Приволжский"
  },
  {
    "index": 445240,
    "region": "Самарская обл",
    "name": "Октябрьск",
    "latitude": 53.1640886,
    "longtitude": 48.6707463,
    "timezone": "UTC+4",
    "district": "Приволжский"
  },
  {
    "index": 446300,
    "region": "Самарская обл",
    "name": "Отрадный",
    "latitude": 53.3800609,
    "longtitude": 51.3438695,
    "timezone": "UTC+4",
    "district": "Приволжский"
  },
  {
    "index": 446450,
    "region": "Самарская обл",
    "name": "Похвистнево",
    "latitude": 53.6498197,
    "longtitude": 52.1235517,
    "timezone": "UTC+4",
    "district": "Приволжский"
  },
  {
    "index": 443000,
    "region": "Самарская обл",
    "name": "Самара",
    "latitude": 53.1951657,
    "longtitude": 50.1067691,
    "timezone": "UTC+4",
    "district": "Приволжский"
  },
  {
    "index": 446000,
    "region": "Самарская обл",
    "name": "Сызрань",
    "latitude": 53.1557213,
    "longtitude": 48.4745419,
    "timezone": "UTC+4",
    "district": "Приволжский"
  },
  {
    "index": 445000,
    "region": "Самарская обл",
    "name": "Тольятти",
    "latitude": 53.5206438,
    "longtitude": 49.389461,
    "timezone": "UTC+4",
    "district": "Приволжский"
  },
  {
    "index": 446100,
    "region": "Самарская обл",
    "name": "Чапаевск",
    "latitude": 52.9289662,
    "longtitude": 49.8674222,
    "timezone": "UTC+4",
    "district": "Приволжский"
  },
  {
    "index": 190000,
    "region": "г.Санкт-Петербург",
    "name": "",
    "latitude": 59.939125,
    "longtitude": 30.3158225,
    "timezone": "UTC+3",
    "district": "Северо-Западный"
  },
  {
    "index": 412210,
    "region": "Саратовская обл",
    "name": "Аркадак",
    "latitude": 51.9387813,
    "longtitude": 43.4997558,
    "timezone": "UTC+4",
    "district": "Приволжский"
  },
  {
    "index": 412420,
    "region": "Саратовская обл",
    "name": "Аткарск",
    "latitude": 51.8736331,
    "longtitude": 45.0003199,
    "timezone": "UTC+4",
    "district": "Приволжский"
  },
  {
    "index": 413840,
    "region": "Саратовская обл",
    "name": "Балаково",
    "latitude": 52.0222694,
    "longtitude": 47.7828146,
    "timezone": "UTC+4",
    "district": "Приволжский"
  },
  {
    "index": 412300,
    "region": "Саратовская обл",
    "name": "Балашов",
    "latitude": 51.5389502,
    "longtitude": 43.1839828,
    "timezone": "UTC+4",
    "district": "Приволжский"
  },
  {
    "index": 412900,
    "region": "Саратовская обл",
    "name": "Вольск",
    "latitude": 52.0459932,
    "longtitude": 47.3873504,
    "timezone": "UTC+4",
    "district": "Приволжский"
  },
  {
    "index": 413500,
    "region": "Саратовская обл",
    "name": "Ершов",
    "latitude": 51.3508407,
    "longtitude": 48.2763313,
    "timezone": "UTC+4",
    "district": "Приволжский"
  },
  {
    "index": 412480,
    "region": "Саратовская обл",
    "name": "Калининск",
    "latitude": 51.4992917,
    "longtitude": 44.4710177,
    "timezone": "UTC+4",
    "district": "Приволжский"
  },
  {
    "index": 412800,
    "region": "Саратовская обл",
    "name": "Красноармейск",
    "latitude": 51.0236026,
    "longtitude": 45.695141,
    "timezone": "UTC+4",
    "district": "Приволжский"
  },
  {
    "index": 413230,
    "region": "Саратовская обл",
    "name": "Красный Кут",
    "latitude": 50.9596867,
    "longtitude": 46.9712472,
    "timezone": "UTC+4",
    "district": "Приволжский"
  },
  {
    "index": 413075,
    "region": "Саратовская обл",
    "name": "Маркс",
    "latitude": 51.7133973,
    "longtitude": 46.7400684,
    "timezone": "UTC+4",
    "district": "Приволжский"
  },
  {
    "index": 413360,
    "region": "Саратовская обл",
    "name": "Новоузенск",
    "latitude": 50.4551744,
    "longtitude": 48.1412622,
    "timezone": "UTC+4",
    "district": "Приволжский"
  },
  {
    "index": 412540,
    "region": "Саратовская обл",
    "name": "Петровск",
    "latitude": 52.3093782,
    "longtitude": 45.3851649,
    "timezone": "UTC+4",
    "district": "Приволжский"
  },
  {
    "index": 413720,
    "region": "Саратовская обл",
    "name": "Пугачев",
    "latitude": 52.0158464,
    "longtitude": 48.7972652,
    "timezone": "UTC+4",
    "district": "Приволжский"
  },
  {
    "index": 412030,
    "region": "Саратовская обл",
    "name": "Ртищево",
    "latitude": 52.2616298,
    "longtitude": 43.7842399,
    "timezone": "UTC+4",
    "district": "Приволжский"
  },
  {
    "index": 410000,
    "region": "Саратовская обл",
    "name": "Саратов",
    "latitude": 51.530376,
    "longtitude": 45.9530257,
    "timezone": "UTC+4",
    "district": "Приволжский"
  },
  {
    "index": 412780,
    "region": "Саратовская обл",
    "name": "Хвалынск",
    "latitude": 52.4950057,
    "longtitude": 48.1045147,
    "timezone": "UTC+4",
    "district": "Приволжский"
  },
  {
    "index": 412950,
    "region": "Саратовская обл",
    "name": "Шиханы",
    "latitude": 52.1148241,
    "longtitude": 47.2022928,
    "timezone": "UTC+4",
    "district": "Приволжский"
  },
  {
    "index": 413100,
    "region": "Саратовская обл",
    "name": "Энгельс",
    "latitude": 51.4854893,
    "longtitude": 46.1267479,
    "timezone": "UTC+4",
    "district": "Приволжский"
  },
  {
    "index": 694420,
    "region": "Сахалинская обл",
    "name": "Александровск-Сахалинский",
    "latitude": 50.8973664,
    "longtitude": 142.1579322,
    "timezone": "UTC+11",
    "district": "Дальневосточный"
  },
  {
    "index": 694030,
    "region": "Сахалинская обл",
    "name": "Анива",
    "latitude": 46.7132526,
    "longtitude": 142.5265052,
    "timezone": "UTC+11",
    "district": "Дальневосточный"
  },
  {
    "index": 694051,
    "region": "Сахалинская обл",
    "name": "Долинск",
    "latitude": 47.3255903,
    "longtitude": 142.7945985,
    "timezone": "UTC+11",
    "district": "Дальневосточный"
  },
  {
    "index": 694020,
    "region": "Сахалинская обл",
    "name": "Корсаков",
    "latitude": 46.6323995,
    "longtitude": 142.7994094,
    "timezone": "UTC+11",
    "district": "Дальневосточный"
  },
  {
    "index": 694530,
    "region": "Сахалинская обл",
    "name": "Курильск",
    "latitude": 45.2271915,
    "longtitude": 147.8796713,
    "timezone": "UTC+11",
    "district": "Дальневосточный"
  },
  {
    "index": 694140,
    "region": "Сахалинская обл",
    "name": "Макаров",
    "latitude": 48.6236287,
    "longtitude": 142.7803508,
    "timezone": "UTC+11",
    "district": "Дальневосточный"
  },
  {
    "index": 694740,
    "region": "Сахалинская обл",
    "name": "Невельск",
    "latitude": 46.6527314,
    "longtitude": 141.8631741,
    "timezone": "UTC+11",
    "district": "Дальневосточный"
  },
  {
    "index": 694490,
    "region": "Сахалинская обл",
    "name": "Оха",
    "latitude": 53.5868238,
    "longtitude": 142.941221,
    "timezone": "UTC+11",
    "district": "Дальневосточный"
  },
  {
    "index": 694240,
    "region": "Сахалинская обл",
    "name": "Поронайск",
    "latitude": 49.2387983,
    "longtitude": 143.1007104,
    "timezone": "UTC+11",
    "district": "Дальневосточный"
  },
  {
    "index": 694550,
    "region": "Сахалинская обл",
    "name": "Северо-Курильск",
    "latitude": 50.6731056,
    "longtitude": 156.1280722,
    "timezone": "UTC+11",
    "district": "Дальневосточный"
  },
  {
    "index": 694820,
    "region": "Сахалинская обл",
    "name": "Томари",
    "latitude": 47.7619957,
    "longtitude": 142.061508,
    "timezone": "UTC+11",
    "district": "Дальневосточный"
  },
  {
    "index": 694920,
    "region": "Сахалинская обл",
    "name": "Углегорск",
    "latitude": 49.0816311,
    "longtitude": 142.0693033,
    "timezone": "UTC+11",
    "district": "Дальневосточный"
  },
  {
    "index": 694620,
    "region": "Сахалинская обл",
    "name": "Холмск",
    "latitude": 47.0408637,
    "longtitude": 142.0416619,
    "timezone": "UTC+11",
    "district": "Дальневосточный"
  },
  {
    "index": 693000,
    "region": "Сахалинская обл",
    "name": "Южно-Сахалинск",
    "latitude": 46.959133,
    "longtitude": 142.7381252,
    "timezone": "UTC+11",
    "district": "Дальневосточный"
  },
  {
    "index": 624600,
    "region": "Свердловская обл",
    "name": "Алапаевск",
    "latitude": 57.8475542,
    "longtitude": 61.6693934,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 624000,
    "region": "Свердловская обл",
    "name": "Арамиль",
    "latitude": 56.6945341,
    "longtitude": 60.8343825,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 623780,
    "region": "Свердловская обл",
    "name": "Артемовский",
    "latitude": 57.3384162,
    "longtitude": 61.8946599,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 624260,
    "region": "Свердловская обл",
    "name": "Асбест",
    "latitude": 57.0052428,
    "longtitude": 61.4581071,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 623700,
    "region": "Свердловская обл",
    "name": "Березовский",
    "latitude": 56.9096284,
    "longtitude": 60.8180256,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 623530,
    "region": "Свердловская обл",
    "name": "Богданович",
    "latitude": 56.7764419,
    "longtitude": 62.0463692,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 624160,
    "region": "Свердловская обл",
    "name": "Верхний Тагил",
    "latitude": 57.3762768,
    "longtitude": 59.9516521,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 624090,
    "region": "Свердловская обл",
    "name": "Верхняя Пышма",
    "latitude": 56.9757833,
    "longtitude": 60.564885,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 624760,
    "region": "Свердловская обл",
    "name": "Верхняя Салда",
    "latitude": 58.0466039,
    "longtitude": 60.5560397,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 624320,
    "region": "Свердловская обл",
    "name": "Верхняя Тура",
    "latitude": 58.3643839,
    "longtitude": 59.8266854,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 624380,
    "region": "Свердловская обл",
    "name": "Верхотурье",
    "latitude": 58.8621145,
    "longtitude": 60.8104543,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 624940,
    "region": "Свердловская обл",
    "name": "Волчанск",
    "latitude": 59.9350515,
    "longtitude": 60.0797964,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 623270,
    "region": "Свердловская обл",
    "name": "Дегтярск",
    "latitude": 56.7048199,
    "longtitude": 60.0792227,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 620000,
    "region": "Свердловская обл",
    "name": "Екатеринбург",
    "latitude": 56.8386326,
    "longtitude": 60.6054887,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 624250,
    "region": "Свердловская обл",
    "name": "Заречный",
    "latitude": 56.8103345,
    "longtitude": 61.3380592,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 624590,
    "region": "Свердловская обл",
    "name": "Ивдель",
    "latitude": 60.6944353,
    "longtitude": 60.4244661,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 623850,
    "region": "Свердловская обл",
    "name": "Ирбит",
    "latitude": 57.6838406,
    "longtitude": 63.0576639,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 623400,
    "region": "Свердловская обл",
    "name": "Каменск-Уральский",
    "latitude": 56.4149095,
    "longtitude": 61.9189837,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 624860,
    "region": "Свердловская обл",
    "name": "Камышлов",
    "latitude": 56.8465469,
    "longtitude": 62.7120432,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 624930,
    "region": "Свердловская обл",
    "name": "Карпинск",
    "latitude": 59.7664444,
    "longtitude": 60.0011798,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 624350,
    "region": "Свердловская обл",
    "name": "Качканар",
    "latitude": 58.7051759,
    "longtitude": 59.4840198,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 624140,
    "region": "Свердловская обл",
    "name": "Кировград",
    "latitude": 57.4298451,
    "longtitude": 60.0623588,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 624440,
    "region": "Свердловская обл",
    "name": "Краснотурьинск",
    "latitude": 59.7636934,
    "longtitude": 60.1934451,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 624330,
    "region": "Свердловская обл",
    "name": "Красноуральск",
    "latitude": 58.3486334,
    "longtitude": 60.0409011,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 623300,
    "region": "Свердловская обл",
    "name": "Красноуфимск",
    "latitude": 56.6122864,
    "longtitude": 57.7636958,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 624300,
    "region": "Свердловская обл",
    "name": "Кушва",
    "latitude": 58.2825406,
    "longtitude": 59.7646113,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 624200,
    "region": "Свердловская обл",
    "name": "Лесной",
    "latitude": 58.634981,
    "longtitude": 59.7980528,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 623080,
    "region": "Свердловская обл",
    "name": "Михайловск",
    "latitude": 56.4369736,
    "longtitude": 59.113865,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 624191,
    "region": "Свердловская обл",
    "name": "Невьянск",
    "latitude": 57.491233,
    "longtitude": 60.2181839,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 623090,
    "region": "Свердловская обл",
    "name": "Нижние Серги",
    "latitude": 56.6544606,
    "longtitude": 59.2952291,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 622000,
    "region": "Свердловская обл",
    "name": "Нижний Тагил",
    "latitude": 57.9101038,
    "longtitude": 59.9813242,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 624740,
    "region": "Свердловская обл",
    "name": "Нижняя Салда",
    "latitude": 58.0749243,
    "longtitude": 60.7026555,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 624220,
    "region": "Свердловская обл",
    "name": "Нижняя Тура",
    "latitude": 58.6310942,
    "longtitude": 59.8521265,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 624400,
    "region": "Свердловская обл",
    "name": "Новая Ляля",
    "latitude": 59.053961,
    "longtitude": 60.5945405,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 624130,
    "region": "Свердловская обл",
    "name": "Новоуральск",
    "latitude": 57.2471507,
    "longtitude": 60.095701,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 623100,
    "region": "Свердловская обл",
    "name": "Первоуральск",
    "latitude": 56.9081665,
    "longtitude": 59.9429205,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 623382,
    "region": "Свердловская обл",
    "name": "Полевской",
    "latitude": 56.4958085,
    "longtitude": 60.2366314,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 623280,
    "region": "Свердловская обл",
    "name": "Ревда",
    "latitude": 56.79869,
    "longtitude": 59.9071464,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 623750,
    "region": "Свердловская обл",
    "name": "Реж",
    "latitude": 57.3717914,
    "longtitude": 61.3833223,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 624480,
    "region": "Свердловская обл",
    "name": "Североуральск",
    "latitude": 60.1533333,
    "longtitude": 59.9525274,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 624980,
    "region": "Свердловская обл",
    "name": "Серов",
    "latitude": 59.6048651,
    "longtitude": 60.5752136,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 624070,
    "region": "Свердловская обл",
    "name": "Среднеуральск",
    "latitude": 56.991883,
    "longtitude": 60.4771953,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 624800,
    "region": "Свердловская обл",
    "name": "Сухой Лог",
    "latitude": 56.9075938,
    "longtitude": 62.0358708,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 624021,
    "region": "Свердловская обл",
    "name": "Сысерть",
    "latitude": 56.50052,
    "longtitude": 60.8190708,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 623950,
    "region": "Свердловская обл",
    "name": "Тавда",
    "latitude": 58.0434196,
    "longtitude": 65.2743232,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 623640,
    "region": "Свердловская обл",
    "name": "Талица",
    "latitude": 57.0123359,
    "longtitude": 63.7322467,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 623900,
    "region": "Свердловская обл",
    "name": "Туринск",
    "latitude": 58.0394258,
    "longtitude": 63.698142,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 299703,
    "region": "г.Севастополь",
    "name": "Инкерман",
    "latitude": 44.6135153,
    "longtitude": 33.6100739,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 299001,
    "region": "г.Севастополь",
    "name": "",
    "latitude": 44.6167334,
    "longtitude": 33.5253552,
    "timezone": "UTC+3",
    "district": "Южный"
  },
  {
    "index": 363240,
    "region": "Северная Осетия - Алания Респ",
    "name": "Алагир",
    "latitude": 43.0416151,
    "longtitude": 44.2198622,
    "timezone": "UTC+3",
    "district": "Северо-Кавказский"
  },
  {
    "index": 363330,
    "region": "Северная Осетия - Алания Респ",
    "name": "Ардон",
    "latitude": 43.1756719,
    "longtitude": 44.2955701,
    "timezone": "UTC+3",
    "district": "Северо-Кавказский"
  },
  {
    "index": 363020,
    "region": "Северная Осетия - Алания Респ",
    "name": "Беслан",
    "latitude": 43.1937634,
    "longtitude": 44.5338746,
    "timezone": "UTC+3",
    "district": "Северо-Кавказский"
  },
  {
    "index": 362000,
    "region": "Северная Осетия - Алания Респ",
    "name": "Владикавказ",
    "latitude": 43.0205039,
    "longtitude": 44.6819383,
    "timezone": "UTC+3",
    "district": "Северо-Кавказский"
  },
  {
    "index": 363410,
    "region": "Северная Осетия - Алания Респ",
    "name": "Дигора",
    "latitude": 43.1567386,
    "longtitude": 44.1551132,
    "timezone": "UTC+3",
    "district": "Северо-Кавказский"
  },
  {
    "index": 363750,
    "region": "Северная Осетия - Алания Респ",
    "name": "Моздок",
    "latitude": 43.7471209,
    "longtitude": 44.6571456,
    "timezone": "UTC+3",
    "district": "Северо-Кавказский"
  },
  {
    "index": 216290,
    "region": "Смоленская обл",
    "name": "Велиж",
    "latitude": 55.6058845,
    "longtitude": 31.1857376,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 215110,
    "region": "Смоленская обл",
    "name": "Вязьма",
    "latitude": 55.2115563,
    "longtitude": 34.2951196,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 215010,
    "region": "Смоленская обл",
    "name": "Гагарин",
    "latitude": 55.5526532,
    "longtitude": 34.9949049,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 216240,
    "region": "Смоленская обл",
    "name": "Демидов",
    "latitude": 55.2682611,
    "longtitude": 31.5062078,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 216400,
    "region": "Смоленская обл",
    "name": "Десногорск",
    "latitude": 54.1465117,
    "longtitude": 33.2834063,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 215710,
    "region": "Смоленская обл",
    "name": "Дорогобуж",
    "latitude": 54.9137794,
    "longtitude": 33.3024596,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 216200,
    "region": "Смоленская обл",
    "name": "Духовщина",
    "latitude": 55.1950509,
    "longtitude": 32.4012351,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 216330,
    "region": "Смоленская обл",
    "name": "Ельня",
    "latitude": 54.5836832,
    "longtitude": 33.1749566,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 216450,
    "region": "Смоленская обл",
    "name": "Починок",
    "latitude": 54.4063031,
    "longtitude": 32.4397914,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 216500,
    "region": "Смоленская обл",
    "name": "Рославль",
    "latitude": 53.9449601,
    "longtitude": 32.8479617,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 216790,
    "region": "Смоленская обл",
    "name": "Рудня",
    "latitude": 54.9441357,
    "longtitude": 31.0794758,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 215500,
    "region": "Смоленская обл",
    "name": "Сафоново",
    "latitude": 55.1199868,
    "longtitude": 33.233799,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 214000,
    "region": "Смоленская обл",
    "name": "Смоленск",
    "latitude": 54.7867168,
    "longtitude": 31.8153366,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 215279,
    "region": "Смоленская обл",
    "name": "Сычевка",
    "latitude": 55.8307397,
    "longtitude": 34.277868,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 215800,
    "region": "Смоленская обл",
    "name": "Ярцево",
    "latitude": 55.0564933,
    "longtitude": 32.6902457,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 356420,
    "region": "Ставропольский край",
    "name": "Благодарный",
    "latitude": 45.0990834,
    "longtitude": 43.4307042,
    "timezone": "UTC+3",
    "district": "Северо-Кавказский"
  },
  {
    "index": 356800,
    "region": "Ставропольский край",
    "name": "Буденновск",
    "latitude": 44.7814437,
    "longtitude": 44.1650859,
    "timezone": "UTC+3",
    "district": "Северо-Кавказский"
  },
  {
    "index": 357820,
    "region": "Ставропольский край",
    "name": "Георгиевск",
    "latitude": 44.1486421,
    "longtitude": 43.4739718,
    "timezone": "UTC+3",
    "district": "Северо-Кавказский"
  },
  {
    "index": 357600,
    "region": "Ставропольский край",
    "name": "Ессентуки",
    "latitude": 44.044461,
    "longtitude": 42.8589078,
    "timezone": "UTC+3",
    "district": "Северо-Кавказский"
  },
  {
    "index": 357400,
    "region": "Ставропольский край",
    "name": "Железноводск",
    "latitude": 44.1320689,
    "longtitude": 43.0306475,
    "timezone": "UTC+3",
    "district": "Северо-Кавказский"
  },
  {
    "index": 357910,
    "region": "Ставропольский край",
    "name": "Зеленокумск",
    "latitude": 44.403359,
    "longtitude": 43.8841326,
    "timezone": "UTC+3",
    "district": "Северо-Кавказский"
  },
  {
    "index": 356140,
    "region": "Ставропольский край",
    "name": "Изобильный",
    "latitude": 45.3684342,
    "longtitude": 41.7086448,
    "timezone": "UTC+3",
    "district": "Северо-Кавказский"
  },
  {
    "index": 356630,
    "region": "Ставропольский край",
    "name": "Ипатово",
    "latitude": 45.7181897,
    "longtitude": 42.8969695,
    "timezone": "UTC+3",
    "district": "Северо-Кавказский"
  },
  {
    "index": 357700,
    "region": "Ставропольский край",
    "name": "Кисловодск",
    "latitude": 43.905235,
    "longtitude": 42.7167187,
    "timezone": "UTC+3",
    "district": "Северо-Кавказский"
  },
  {
    "index": 357340,
    "region": "Ставропольский край",
    "name": "Лермонтов",
    "latitude": 44.1052526,
    "longtitude": 42.9731433,
    "timezone": "UTC+3",
    "district": "Северо-Кавказский"
  },
  {
    "index": 357200,
    "region": "Ставропольский край",
    "name": "Минеральные Воды",
    "latitude": 44.2088942,
    "longtitude": 43.1383482,
    "timezone": "UTC+3",
    "district": "Северо-Кавказский"
  },
  {
    "index": 356240,
    "region": "Ставропольский край",
    "name": "Михайловск",
    "latitude": 45.1296297,
    "longtitude": 42.028787,
    "timezone": "UTC+3",
    "district": "Северо-Кавказский"
  },
  {
    "index": 357100,
    "region": "Ставропольский край",
    "name": "Невинномысск",
    "latitude": 44.6227404,
    "longtitude": 41.9476147,
    "timezone": "UTC+3",
    "district": "Северо-Кавказский"
  },
  {
    "index": 356880,
    "region": "Ставропольский край",
    "name": "Нефтекумск",
    "latitude": 44.7544866,
    "longtitude": 44.9865041,
    "timezone": "UTC+3",
    "district": "Северо-Кавказский"
  },
  {
    "index": 356000,
    "region": "Ставропольский край",
    "name": "Новоалександровск",
    "latitude": 45.4933561,
    "longtitude": 41.2154482,
    "timezone": "UTC+3",
    "district": "Северо-Кавказский"
  },
  {
    "index": 357300,
    "region": "Ставропольский край",
    "name": "Новопавловск",
    "latitude": 43.9617565,
    "longtitude": 43.6342855,
    "timezone": "UTC+3",
    "district": "Северо-Кавказский"
  },
  {
    "index": 357500,
    "region": "Ставропольский край",
    "name": "Пятигорск",
    "latitude": 44.0411669,
    "longtitude": 43.0661091,
    "timezone": "UTC+3",
    "district": "Северо-Кавказский"
  },
  {
    "index": 356530,
    "region": "Ставропольский край",
    "name": "Светлоград",
    "latitude": 45.3284769,
    "longtitude": 42.8566923,
    "timezone": "UTC+3",
    "district": "Северо-Кавказский"
  },
  {
    "index": 355000,
    "region": "Ставропольский край",
    "name": "Ставрополь",
    "latitude": 45.0445439,
    "longtitude": 41.9690168,
    "timezone": "UTC+3",
    "district": "Северо-Кавказский"
  },
  {
    "index": 393670,
    "region": "Тамбовская обл",
    "name": "Жердевка",
    "latitude": 51.8421783,
    "longtitude": 41.4617407,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 393360,
    "region": "Тамбовская обл",
    "name": "Кирсанов",
    "latitude": 52.650594,
    "longtitude": 42.7284872,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 393190,
    "region": "Тамбовская обл",
    "name": "Котовск",
    "latitude": 52.592393,
    "longtitude": 41.5102486,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 393760,
    "region": "Тамбовская обл",
    "name": "Мичуринск",
    "latitude": 52.891294,
    "longtitude": 40.510475,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 393950,
    "region": "Тамбовская обл",
    "name": "Моршанск",
    "latitude": 53.4436469,
    "longtitude": 41.8115687,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 392000,
    "region": "Тамбовская обл",
    "name": "Рассказово",
    "latitude": 52.6537517,
    "longtitude": 41.8743779,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 392000,
    "region": "Тамбовская обл",
    "name": "Тамбов",
    "latitude": 52.7213021,
    "longtitude": 41.452258,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 393460,
    "region": "Тамбовская обл",
    "name": "Уварово",
    "latitude": 51.9768835,
    "longtitude": 42.2529568,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 422230,
    "region": "Татарстан Респ",
    "name": "Агрыз",
    "latitude": 56.5232645,
    "longtitude": 52.994257,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 423330,
    "region": "Татарстан Респ",
    "name": "Азнакаево",
    "latitude": 54.8599054,
    "longtitude": 53.0745505,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 423403,
    "region": "Татарстан Респ",
    "name": "Альметьевск",
    "latitude": 54.9013662,
    "longtitude": 52.2970654,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 422000,
    "region": "Татарстан Респ",
    "name": "Арск",
    "latitude": 56.0913636,
    "longtitude": 49.8770441,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 423930,
    "region": "Татарстан Респ",
    "name": "Бавлы",
    "latitude": 54.4063588,
    "longtitude": 53.2457946,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 422840,
    "region": "Татарстан Респ",
    "name": "Болгар",
    "latitude": 54.9748862,
    "longtitude": 49.0302977,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 423230,
    "region": "Татарстан Респ",
    "name": "Бугульма",
    "latitude": 54.5363428,
    "longtitude": 52.7895286,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 422430,
    "region": "Татарстан Респ",
    "name": "Буинск",
    "latitude": 54.9641106,
    "longtitude": 48.2900576,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 423600,
    "region": "Татарстан Респ",
    "name": "Елабуга",
    "latitude": 55.7566727,
    "longtitude": 52.0544438,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 423520,
    "region": "Татарстан Респ",
    "name": "Заинск",
    "latitude": 55.2988854,
    "longtitude": 52.0063634,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 422521,
    "region": "Татарстан Респ",
    "name": "Зеленодольск",
    "latitude": 55.8466751,
    "longtitude": 48.5010882,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 420500,
    "region": "Татарстан Респ",
    "name": "Иннополис",
    "latitude": 55.7521544,
    "longtitude": 48.7446161,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 420000,
    "region": "Татарстан Респ",
    "name": "Казань",
    "latitude": 55.7943877,
    "longtitude": 49.1115312,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 422610,
    "region": "Татарстан Респ",
    "name": "Лаишево",
    "latitude": 55.4042646,
    "longtitude": 49.5498201,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 423250,
    "region": "Татарстан Респ",
    "name": "Лениногорск",
    "latitude": 54.5966917,
    "longtitude": 52.4432118,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 422190,
    "region": "Татарстан Респ",
    "name": "Мамадыш",
    "latitude": 55.7149876,
    "longtitude": 51.4128614,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 423650,
    "region": "Татарстан Респ",
    "name": "Менделеевск",
    "latitude": 55.8950646,
    "longtitude": 52.3144177,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 423700,
    "region": "Татарстан Респ",
    "name": "Мензелинск",
    "latitude": 55.7270908,
    "longtitude": 53.1005321,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 423800,
    "region": "Татарстан Респ",
    "name": "Набережные Челны",
    "latitude": 55.7436475,
    "longtitude": 52.3958739,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 423570,
    "region": "Татарстан Респ",
    "name": "Нижнекамск",
    "latitude": 55.6311963,
    "longtitude": 51.814407,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 423040,
    "region": "Татарстан Респ",
    "name": "Нурлат",
    "latitude": 54.4281578,
    "longtitude": 50.8050431,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 422370,
    "region": "Татарстан Респ",
    "name": "Тетюши",
    "latitude": 54.936575,
    "longtitude": 48.8314915,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 422951,
    "region": "Татарстан Респ",
    "name": "Чистополь",
    "latitude": 55.3699372,
    "longtitude": 50.628495,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 172800,
    "region": "Тверская обл",
    "name": "Андреаполь",
    "latitude": 56.6507072,
    "longtitude": 32.2621196,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 171980,
    "region": "Тверская обл",
    "name": "Бежецк",
    "latitude": 57.7861144,
    "longtitude": 36.6903445,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 172530,
    "region": "Тверская обл",
    "name": "Белый",
    "latitude": 55.8337663,
    "longtitude": 32.9388976,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 171070,
    "region": "Тверская обл",
    "name": "Бологое",
    "latitude": 57.885655,
    "longtitude": 34.0536895,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 171720,
    "region": "Тверская обл",
    "name": "Весьегонск",
    "latitude": 58.6584004,
    "longtitude": 37.2568605,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 171150,
    "region": "Тверская обл",
    "name": "Вышний Волочек",
    "latitude": 57.5683326,
    "longtitude": 34.5402931,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 172610,
    "region": "Тверская обл",
    "name": "Западная Двина",
    "latitude": 56.2568002,
    "longtitude": 32.0805972,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 172332,
    "region": "Тверская обл",
    "name": "Зубцов",
    "latitude": 56.1760709,
    "longtitude": 34.5825504,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 171571,
    "region": "Тверская обл",
    "name": "Калязин",
    "latitude": 57.2579471,
    "longtitude": 37.7821253,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 171640,
    "region": "Тверская обл",
    "name": "Кашин",
    "latitude": 57.3600486,
    "longtitude": 37.6118674,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 171500,
    "region": "Тверская обл",
    "name": "Кимры",
    "latitude": 56.873359,
    "longtitude": 37.3557064,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 171250,
    "region": "Тверская обл",
    "name": "Конаково",
    "latitude": 56.7275533,
    "longtitude": 36.8011699,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 171660,
    "region": "Тверская обл",
    "name": "Красный Холм",
    "latitude": 58.0570193,
    "longtitude": 37.1125975,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 172110,
    "region": "Тверская обл",
    "name": "Кувшиново",
    "latitude": 57.0263733,
    "longtitude": 34.1676435,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 171210,
    "region": "Тверская обл",
    "name": "Лихославль",
    "latitude": 57.122256,
    "longtitude": 35.4667886,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 172520,
    "region": "Тверская обл",
    "name": "Нелидово",
    "latitude": 56.2232417,
    "longtitude": 32.7766656,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 172730,
    "region": "Тверская обл",
    "name": "Осташков",
    "latitude": 57.1457205,
    "longtitude": 33.1116707,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 172380,
    "region": "Тверская обл",
    "name": "Ржев",
    "latitude": 56.2629393,
    "longtitude": 34.3291178,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 171360,
    "region": "Тверская обл",
    "name": "Старица",
    "latitude": 56.514955,
    "longtitude": 34.9335145,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 170000,
    "region": "Тверская обл",
    "name": "Тверь",
    "latitude": 56.8585396,
    "longtitude": 35.9117898,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 172000,
    "region": "Тверская обл",
    "name": "Торжок",
    "latitude": 57.0412804,
    "longtitude": 34.9600691,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 172840,
    "region": "Тверская обл",
    "name": "Торопец",
    "latitude": 56.5011791,
    "longtitude": 31.6354366,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 171841,
    "region": "Тверская обл",
    "name": "Удомля",
    "latitude": 57.8787885,
    "longtitude": 35.016716,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 636840,
    "region": "Томская обл",
    "name": "Асино",
    "latitude": 56.9908444,
    "longtitude": 86.1765724,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 636615,
    "region": "Томская обл",
    "name": "Кедровый",
    "latitude": 57.5618465,
    "longtitude": 79.5678914,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 636460,
    "region": "Томская обл",
    "name": "Колпашево",
    "latitude": 58.3114716,
    "longtitude": 82.9027528,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 636000,
    "region": "Томская обл",
    "name": "Северск",
    "latitude": 56.6031143,
    "longtitude": 84.8809687,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 636780,
    "region": "Томская обл",
    "name": "Стрежевой",
    "latitude": 60.7328199,
    "longtitude": 77.6040323,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 634000,
    "region": "Томская обл",
    "name": "Томск",
    "latitude": 56.4847036,
    "longtitude": 84.9481737,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 301352,
    "region": "Тульская обл",
    "name": "Алексин",
    "latitude": 54.5083788,
    "longtitude": 37.047891,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 301530,
    "region": "Тульская обл",
    "name": "Белев",
    "latitude": 53.8113348,
    "longtitude": 36.1383153,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 301830,
    "region": "Тульская обл",
    "name": "Богородицк",
    "latitude": 53.7700516,
    "longtitude": 38.1225308,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 301280,
    "region": "Тульская обл",
    "name": "Болохово",
    "latitude": 54.0820644,
    "longtitude": 37.826844,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 301320,
    "region": "Тульская обл",
    "name": "Венев",
    "latitude": 54.3542431,
    "longtitude": 38.2642325,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 301760,
    "region": "Тульская обл",
    "name": "Донской",
    "latitude": 53.9679582,
    "longtitude": 38.3372104,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 301840,
    "region": "Тульская обл",
    "name": "Ефремов",
    "latitude": 53.1465725,
    "longtitude": 38.0922412,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 301720,
    "region": "Тульская обл",
    "name": "Кимовск",
    "latitude": 53.9698378,
    "longtitude": 38.5380267,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 301260,
    "region": "Тульская обл",
    "name": "Киреевск",
    "latitude": 53.9321173,
    "longtitude": 37.9220791,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 301264,
    "region": "Тульская обл",
    "name": "Липки",
    "latitude": 53.9418109,
    "longtitude": 37.7019452,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 301650,
    "region": "Тульская обл",
    "name": "Новомосковск",
    "latitude": 54.0109754,
    "longtitude": 38.2915652,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 301470,
    "region": "Тульская обл",
    "name": "Плавск",
    "latitude": 53.7095993,
    "longtitude": 37.2863144,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 301205,
    "region": "Тульская обл",
    "name": "Советск",
    "latitude": 53.9337099,
    "longtitude": 37.6315517,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 301430,
    "region": "Тульская обл",
    "name": "Суворов",
    "latitude": 54.1345367,
    "longtitude": 36.4806933,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 300000,
    "region": "Тульская обл",
    "name": "Тула",
    "latitude": 54.192017,
    "longtitude": 37.6153885,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 301600,
    "region": "Тульская обл",
    "name": "Узловая",
    "latitude": 53.9731407,
    "longtitude": 38.1763104,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 301414,
    "region": "Тульская обл",
    "name": "Чекалин",
    "latitude": 54.0985105,
    "longtitude": 36.2474377,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 301240,
    "region": "Тульская обл",
    "name": "Щекино",
    "latitude": 54.0020749,
    "longtitude": 37.517686,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 301030,
    "region": "Тульская обл",
    "name": "Ясногорск",
    "latitude": 54.4795178,
    "longtitude": 37.689669,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 668050,
    "region": "Тыва Респ",
    "name": "Ак-Довурак",
    "latitude": 51.1785658,
    "longtitude": 90.5984511,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 667000,
    "region": "Тыва Респ",
    "name": "Кызыл",
    "latitude": 51.7191542,
    "longtitude": 94.4377234,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 668510,
    "region": "Тыва Респ",
    "name": "Туран",
    "latitude": 52.144932,
    "longtitude": 93.9172495,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 668110,
    "region": "Тыва Респ",
    "name": "Чадан",
    "latitude": 51.2844482,
    "longtitude": 91.5789135,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 668210,
    "region": "Тыва Респ",
    "name": "Шагонар",
    "latitude": 51.5347357,
    "longtitude": 92.9199618,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 627139,
    "region": "Тюменская обл",
    "name": "Заводоуковск",
    "latitude": 56.5012193,
    "longtitude": 66.5505094,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 627705,
    "region": "Тюменская обл",
    "name": "Ишим",
    "latitude": 56.0952037,
    "longtitude": 69.4643292,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 626109,
    "region": "Тюменская обл",
    "name": "Тобольск",
    "latitude": 58.2016828,
    "longtitude": 68.2538392,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 625000,
    "region": "Тюменская обл",
    "name": "Тюмень",
    "latitude": 57.1530824,
    "longtitude": 65.5343118,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 627010,
    "region": "Тюменская обл",
    "name": "Ялуторовск",
    "latitude": 56.649167,
    "longtitude": 66.297034,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 427430,
    "region": "Удмуртская Респ",
    "name": "Воткинск",
    "latitude": 57.0517641,
    "longtitude": 53.9874635,
    "timezone": "UTC+4",
    "district": "Приволжский"
  },
  {
    "index": 427620,
    "region": "Удмуртская Респ",
    "name": "Глазов",
    "latitude": 58.1359111,
    "longtitude": 52.6634998,
    "timezone": "UTC+4",
    "district": "Приволжский"
  },
  {
    "index": 426000,
    "region": "Удмуртская Респ",
    "name": "Ижевск",
    "latitude": 56.8527444,
    "longtitude": 53.2113961,
    "timezone": "UTC+4",
    "district": "Приволжский"
  },
  {
    "index": 427950,
    "region": "Удмуртская Респ",
    "name": "Камбарка",
    "latitude": 56.2659745,
    "longtitude": 54.1934153,
    "timezone": "UTC+4",
    "district": "Приволжский"
  },
  {
    "index": 427770,
    "region": "Удмуртская Респ",
    "name": "Можга",
    "latitude": 56.4427219,
    "longtitude": 52.2138882,
    "timezone": "UTC+4",
    "district": "Приволжский"
  },
  {
    "index": 427960,
    "region": "Удмуртская Респ",
    "name": "Сарапул",
    "latitude": 56.4616117,
    "longtitude": 53.8036967,
    "timezone": "UTC+4",
    "district": "Приволжский"
  },
  {
    "index": 433750,
    "region": "Ульяновская обл",
    "name": "Барыш",
    "latitude": 53.6534563,
    "longtitude": 47.1180805,
    "timezone": "UTC+4",
    "district": "Приволжский"
  },
  {
    "index": 433500,
    "region": "Ульяновская обл",
    "name": "Димитровград",
    "latitude": 54.2168446,
    "longtitude": 49.6261645,
    "timezone": "UTC+4",
    "district": "Приволжский"
  },
  {
    "index": 433030,
    "region": "Ульяновская обл",
    "name": "Инза",
    "latitude": 53.8550467,
    "longtitude": 46.3532786,
    "timezone": "UTC+4",
    "district": "Приволжский"
  },
  {
    "index": 433300,
    "region": "Ульяновская обл",
    "name": "Новоульяновск",
    "latitude": 54.1447691,
    "longtitude": 48.3911701,
    "timezone": "UTC+4",
    "district": "Приволжский"
  },
  {
    "index": 433380,
    "region": "Ульяновская обл",
    "name": "Сенгилей",
    "latitude": 53.9590553,
    "longtitude": 48.7767869,
    "timezone": "UTC+4",
    "district": "Приволжский"
  },
  {
    "index": 432000,
    "region": "Ульяновская обл",
    "name": "Ульяновск",
    "latitude": 54.3080674,
    "longtitude": 48.3748717,
    "timezone": "UTC+4",
    "district": "Приволжский"
  },
  {
    "index": 682640,
    "region": "Хабаровский край",
    "name": "Амурск",
    "latitude": 50.2345017,
    "longtitude": 136.8791135,
    "timezone": "UTC+10",
    "district": "Дальневосточный"
  },
  {
    "index": 682970,
    "region": "Хабаровский край",
    "name": "Бикин",
    "latitude": 46.8186244,
    "longtitude": 134.2551046,
    "timezone": "UTC+10",
    "district": "Дальневосточный"
  },
  {
    "index": 682950,
    "region": "Хабаровский край",
    "name": "Вяземский",
    "latitude": 47.5354416,
    "longtitude": 134.7553701,
    "timezone": "UTC+10",
    "district": "Дальневосточный"
  },
  {
    "index": 681000,
    "region": "Хабаровский край",
    "name": "Комсомольск-на-Амуре",
    "latitude": 50.550011,
    "longtitude": 137.0079286,
    "timezone": "UTC+10",
    "district": "Дальневосточный"
  },
  {
    "index": 682460,
    "region": "Хабаровский край",
    "name": "Николаевск-на-Амуре",
    "latitude": 53.1461943,
    "longtitude": 140.7109642,
    "timezone": "UTC+10",
    "district": "Дальневосточный"
  },
  {
    "index": 682800,
    "region": "Хабаровский край",
    "name": "Советская Гавань",
    "latitude": 48.9664554,
    "longtitude": 140.2852223,
    "timezone": "UTC+10",
    "district": "Дальневосточный"
  },
  {
    "index": 680000,
    "region": "Хабаровский край",
    "name": "Хабаровск",
    "latitude": 48.4647991,
    "longtitude": 135.0598811,
    "timezone": "UTC+10",
    "district": "Дальневосточный"
  },
  {
    "index": 655750,
    "region": "Хакасия Респ",
    "name": "Абаза",
    "latitude": 52.6517296,
    "longtitude": 90.0885929,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 655000,
    "region": "Хакасия Респ",
    "name": "Абакан",
    "latitude": 53.7223661,
    "longtitude": 91.4437792,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 655602,
    "region": "Хакасия Респ",
    "name": "Саяногорск",
    "latitude": 53.1008226,
    "longtitude": 91.4121643,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 655111,
    "region": "Хакасия Респ",
    "name": "Сорск",
    "latitude": 54.0001451,
    "longtitude": 90.2595674,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 655151,
    "region": "Хакасия Респ",
    "name": "Черногорск",
    "latitude": 53.8258425,
    "longtitude": 91.3259669,
    "timezone": "UTC+7",
    "district": "Сибирский"
  },
  {
    "index": 628160,
    "region": "Ханты-Мансийский Автономный округ - Югра АО",
    "name": "Белоярский",
    "latitude": 63.712181,
    "longtitude": 66.6772357,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 628481,
    "region": "Ханты-Мансийский Автономный округ - Югра АО",
    "name": "Когалым",
    "latitude": 62.2638914,
    "longtitude": 74.4828687,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 628671,
    "region": "Ханты-Мансийский Автономный округ - Югра АО",
    "name": "Лангепас",
    "latitude": 61.2536667,
    "longtitude": 75.1807905,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 628449,
    "region": "Ханты-Мансийский Автономный округ - Югра АО",
    "name": "Лянтор",
    "latitude": 61.6391639,
    "longtitude": 72.1793828,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 628680,
    "region": "Ханты-Мансийский Автономный округ - Югра АО",
    "name": "Мегион",
    "latitude": 61.0318946,
    "longtitude": 76.1024772,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 628303,
    "region": "Ханты-Мансийский Автономный округ - Югра АО",
    "name": "Нефтеюганск",
    "latitude": 61.0882837,
    "longtitude": 72.6164185,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 628600,
    "region": "Ханты-Мансийский Автономный округ - Югра АО",
    "name": "Нижневартовск",
    "latitude": 60.9397379,
    "longtitude": 76.5696206,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 628180,
    "region": "Ханты-Мансийский Автономный округ - Югра АО",
    "name": "Нягань",
    "latitude": 62.1454839,
    "longtitude": 65.3944361,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 628661,
    "region": "Ханты-Мансийский Автономный округ - Югра АО",
    "name": "Покачи",
    "latitude": 61.7421977,
    "longtitude": 75.5942069,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 628383,
    "region": "Ханты-Мансийский Автономный округ - Югра АО",
    "name": "Пыть-Ях",
    "latitude": 60.7585769,
    "longtitude": 72.8366445,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 628461,
    "region": "Ханты-Мансийский Автономный округ - Югра АО",
    "name": "Радужный",
    "latitude": 62.1343067,
    "longtitude": 77.4584346,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 628240,
    "region": "Ханты-Мансийский Автономный округ - Югра АО",
    "name": "Советский",
    "latitude": 61.3706695,
    "longtitude": 63.566863,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 628400,
    "region": "Ханты-Мансийский Автономный округ - Югра АО",
    "name": "Сургут",
    "latitude": 61.2539773,
    "longtitude": 73.3961726,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 628280,
    "region": "Ханты-Мансийский Автономный округ - Югра АО",
    "name": "Урай",
    "latitude": 60.1295842,
    "longtitude": 64.8040117,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 628000,
    "region": "Ханты-Мансийский Автономный округ - Югра АО",
    "name": "Ханты-Мансийск",
    "latitude": 61.0024344,
    "longtitude": 69.0183322,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 628260,
    "region": "Ханты-Мансийский Автономный округ - Югра АО",
    "name": "Югорск",
    "latitude": 61.3124504,
    "longtitude": 63.3364787,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 456015,
    "region": "Челябинская обл",
    "name": "Аша",
    "latitude": 54.9907105,
    "longtitude": 57.2783704,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 456900,
    "region": "Челябинская обл",
    "name": "Бакал",
    "latitude": 54.9406759,
    "longtitude": 58.8051085,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 457670,
    "region": "Челябинская обл",
    "name": "Верхнеуральск",
    "latitude": 53.8760587,
    "longtitude": 59.2169071,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 456800,
    "region": "Челябинская обл",
    "name": "Верхний Уфалей",
    "latitude": 56.0487252,
    "longtitude": 60.231963,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 456580,
    "region": "Челябинская обл",
    "name": "Еманжелинск",
    "latitude": 54.7554084,
    "longtitude": 61.3243985,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 456200,
    "region": "Челябинская обл",
    "name": "Златоуст",
    "latitude": 55.1715695,
    "longtitude": 59.6726264,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 456140,
    "region": "Челябинская обл",
    "name": "Карабаш",
    "latitude": 55.4852076,
    "longtitude": 60.2358959,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 457353,
    "region": "Челябинская обл",
    "name": "Карталы",
    "latitude": 53.0536101,
    "longtitude": 60.647712,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 456833,
    "region": "Челябинская обл",
    "name": "Касли",
    "latitude": 55.8868045,
    "longtitude": 60.7422529,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 456110,
    "region": "Челябинская обл",
    "name": "Катав-Ивановск",
    "latitude": 54.7520187,
    "longtitude": 58.1983706,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 456600,
    "region": "Челябинская обл",
    "name": "Копейск",
    "latitude": 55.1167545,
    "longtitude": 61.6180809,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 456550,
    "region": "Челябинская обл",
    "name": "Коркино",
    "latitude": 54.8903023,
    "longtitude": 61.4034541,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 456940,
    "region": "Челябинская обл",
    "name": "Куса",
    "latitude": 55.3385156,
    "longtitude": 59.4386474,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 456870,
    "region": "Челябинская обл",
    "name": "Кыштым",
    "latitude": 55.7060048,
    "longtitude": 60.5563271,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 455000,
    "region": "Челябинская обл",
    "name": "Магнитогорск",
    "latitude": 53.4071891,
    "longtitude": 58.9791432,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 456300,
    "region": "Челябинская обл",
    "name": "Миасс",
    "latitude": 55.0455774,
    "longtitude": 60.1077757,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 456007,
    "region": "Челябинская обл",
    "name": "Миньяр",
    "latitude": 55.0709601,
    "longtitude": 57.5484435,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 456971,
    "region": "Челябинская обл",
    "name": "Нязепетровск",
    "latitude": 56.0537199,
    "longtitude": 59.6096791,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 456780,
    "region": "Челябинская обл",
    "name": "Озерск",
    "latitude": 55.7631922,
    "longtitude": 60.7076337,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 457020,
    "region": "Челябинская обл",
    "name": "Пласт",
    "latitude": 54.3691832,
    "longtitude": 60.8152305,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 456913,
    "region": "Челябинская обл",
    "name": "Сатка",
    "latitude": 55.0404497,
    "longtitude": 59.0288153,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 456020,
    "region": "Челябинская обл",
    "name": "Сим",
    "latitude": 54.9906584,
    "longtitude": 57.6899045,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 456770,
    "region": "Челябинская обл",
    "name": "Снежинск",
    "latitude": 56.085232,
    "longtitude": 60.7324989,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 456080,
    "region": "Челябинская обл",
    "name": "Трехгорный",
    "latitude": 54.8178174,
    "longtitude": 58.4465039,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 457100,
    "region": "Челябинская обл",
    "name": "Троицк",
    "latitude": 54.0844132,
    "longtitude": 61.5585503,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 456040,
    "region": "Челябинская обл",
    "name": "Усть-Катав",
    "latitude": 54.9261323,
    "longtitude": 58.1528067,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 456439,
    "region": "Челябинская обл",
    "name": "Чебаркуль",
    "latitude": 54.9819329,
    "longtitude": 60.3773305,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 454000,
    "region": "Челябинская обл",
    "name": "Челябинск",
    "latitude": 55.1603659,
    "longtitude": 61.4007858,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 457040,
    "region": "Челябинская обл",
    "name": "Южноуральск",
    "latitude": 54.4490124,
    "longtitude": 61.2581869,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 456120,
    "region": "Челябинская обл",
    "name": "Юрюзань",
    "latitude": 54.8546372,
    "longtitude": 58.4227116,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": "",
    "region": "Чеченская Респ",
    "name": "Аргун",
    "latitude": 43.2918071,
    "longtitude": 45.8724383,
    "timezone": "UTC+3",
    "district": "Северо-Кавказский"
  },
  {
    "index": 364000,
    "region": "Чеченская Респ",
    "name": "Грозный",
    "latitude": 43.3179243,
    "longtitude": 45.6981102,
    "timezone": "UTC+3",
    "district": "Северо-Кавказский"
  },
  {
    "index": 366200,
    "region": "Чеченская Респ",
    "name": "Гудермес",
    "latitude": 43.3519164,
    "longtitude": 46.1036052,
    "timezone": "UTC+3",
    "district": "Северо-Кавказский"
  },
  {
    "index": 366500,
    "region": "Чеченская Респ",
    "name": "",
    "latitude": 43.1276072,
    "longtitude": 45.5406838,
    "timezone": "UTC+3",
    "district": "Северо-Кавказский"
  },
  {
    "index": 366300,
    "region": "Чеченская Респ",
    "name": "Шали",
    "latitude": 43.148776,
    "longtitude": 45.9009577,
    "timezone": "UTC+3",
    "district": "Северо-Кавказский"
  },
  {
    "index": 429820,
    "region": "Чувашская Республика Чувашия",
    "name": "Алатырь",
    "latitude": 54.8398179,
    "longtitude": 46.5721423,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 429330,
    "region": "Чувашская Республика Чувашия",
    "name": "Канаш",
    "latitude": 55.5069543,
    "longtitude": 47.4917734,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 429430,
    "region": "Чувашская Республика Чувашия",
    "name": "Козловка",
    "latitude": 55.8406526,
    "longtitude": 48.2579372,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 429570,
    "region": "Чувашская Республика Чувашия",
    "name": "Мариинский Посад",
    "latitude": 56.111968,
    "longtitude": 47.7142676,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 429950,
    "region": "Чувашская Республика Чувашия",
    "name": "Новочебоксарск",
    "latitude": 56.109486,
    "longtitude": 47.4791429,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 429900,
    "region": "Чувашская Республика Чувашия",
    "name": "Цивильск",
    "latitude": 55.8650132,
    "longtitude": 47.472967,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 428000,
    "region": "Чувашская Республика Чувашия",
    "name": "Чебоксары",
    "latitude": 56.1439378,
    "longtitude": 47.2488718,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 429120,
    "region": "Чувашская Республика Чувашия",
    "name": "Шумерля",
    "latitude": 55.4961795,
    "longtitude": 46.4183534,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 429060,
    "region": "Чувашская Республика Чувашия",
    "name": "Ядрин",
    "latitude": 55.9406826,
    "longtitude": 46.2020765,
    "timezone": "UTC+3",
    "district": "Приволжский"
  },
  {
    "index": 689000,
    "region": "Чукотский АО",
    "name": "Анадырь",
    "latitude": 64.7314347,
    "longtitude": 177.5015752,
    "timezone": "UTC+12",
    "district": "Дальневосточный"
  },
  {
    "index": 689450,
    "region": "Чукотский АО",
    "name": "Билибино",
    "latitude": 68.0585533,
    "longtitude": 166.4388451,
    "timezone": "UTC+12",
    "district": "Дальневосточный"
  },
  {
    "index": 689400,
    "region": "Чукотский АО",
    "name": "Певек",
    "latitude": 69.7018051,
    "longtitude": 170.2999194,
    "timezone": "UTC+12",
    "district": "Дальневосточный"
  },
  {
    "index": 678900,
    "region": "Саха /Якутия/ Респ",
    "name": "Алдан",
    "latitude": 58.6094885,
    "longtitude": 125.3816689,
    "timezone": "UTC+9",
    "district": "Дальневосточный"
  },
  {
    "index": 678530,
    "region": "Саха /Якутия/ Респ",
    "name": "Верхоянск",
    "latitude": 67.5500865,
    "longtitude": 133.3907829,
    "timezone": "UTC+10",
    "district": "Дальневосточный"
  },
  {
    "index": 678200,
    "region": "Саха /Якутия/ Респ",
    "name": "Вилюйск",
    "latitude": 63.7517314,
    "longtitude": 121.6272754,
    "timezone": "UTC+9",
    "district": "Дальневосточный"
  },
  {
    "index": 678141,
    "region": "Саха /Якутия/ Респ",
    "name": "Ленск",
    "latitude": 60.7276036,
    "longtitude": 114.9549103,
    "timezone": "UTC+9",
    "district": "Дальневосточный"
  },
  {
    "index": 678170,
    "region": "Саха /Якутия/ Респ",
    "name": "Мирный",
    "latitude": 62.5362511,
    "longtitude": 113.9668146,
    "timezone": "UTC+9",
    "district": "Дальневосточный"
  },
  {
    "index": 678960,
    "region": "Саха /Якутия/ Респ",
    "name": "Нерюнгри",
    "latitude": 56.6600322,
    "longtitude": 124.72031,
    "timezone": "UTC+9",
    "district": "Дальневосточный"
  },
  {
    "index": 678450,
    "region": "Саха /Якутия/ Респ",
    "name": "Нюрба",
    "latitude": 63.2828775,
    "longtitude": 118.324325,
    "timezone": "UTC+9",
    "district": "Дальневосточный"
  },
  {
    "index": 678100,
    "region": "Саха /Якутия/ Респ",
    "name": "Олекминск",
    "latitude": 60.3758203,
    "longtitude": 120.406013,
    "timezone": "UTC+9",
    "district": "Дальневосточный"
  },
  {
    "index": 678000,
    "region": "Саха /Якутия/ Респ",
    "name": "Покровск",
    "latitude": 61.4843538,
    "longtitude": 129.1482195,
    "timezone": "UTC+9",
    "district": "Дальневосточный"
  },
  {
    "index": 678790,
    "region": "Саха /Якутия/ Респ",
    "name": "Среднеколымск",
    "latitude": 67.4581664,
    "longtitude": 153.7069511,
    "timezone": "UTC+11",
    "district": "Дальневосточный"
  },
  {
    "index": 678953,
    "region": "Саха /Якутия/ Респ",
    "name": "Томмот",
    "latitude": 58.9586939,
    "longtitude": 126.2875375,
    "timezone": "UTC+9",
    "district": "Дальневосточный"
  },
  {
    "index": 678188,
    "region": "Саха /Якутия/ Респ",
    "name": "Удачный",
    "latitude": 66.4072367,
    "longtitude": 112.3061653,
    "timezone": "UTC+9",
    "district": "Дальневосточный"
  },
  {
    "index": 677000,
    "region": "Саха /Якутия/ Респ",
    "name": "Якутск",
    "latitude": 62.0280273,
    "longtitude": 129.7325717,
    "timezone": "UTC+9",
    "district": "Дальневосточный"
  },
  {
    "index": 629830,
    "region": "Ямало-Ненецкий АО",
    "name": "Губкинский",
    "latitude": 64.4456575,
    "longtitude": 76.4714559,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 629400,
    "region": "Ямало-Ненецкий АО",
    "name": "Лабытнанги",
    "latitude": 66.6592376,
    "longtitude": 66.3882628,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 629601,
    "region": "Ямало-Ненецкий АО",
    "name": "Муравленко",
    "latitude": 63.794188,
    "longtitude": 74.494913,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 629733,
    "region": "Ямало-Ненецкий АО",
    "name": "Надым",
    "latitude": 65.5377514,
    "longtitude": 72.5182746,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 629300,
    "region": "Ямало-Ненецкий АО",
    "name": "Новый Уренгой",
    "latitude": 66.0840036,
    "longtitude": 76.6810032,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 629800,
    "region": "Ямало-Ненецкий АО",
    "name": "Ноябрьск",
    "latitude": 63.201846,
    "longtitude": 75.4509665,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 629000,
    "region": "Ямало-Ненецкий АО",
    "name": "Салехард",
    "latitude": 66.5493568,
    "longtitude": 66.6083994,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 629850,
    "region": "Ямало-Ненецкий АО",
    "name": "Тарко-Сале",
    "latitude": 64.9117649,
    "longtitude": 77.7610204,
    "timezone": "UTC+5",
    "district": "Уральский"
  },
  {
    "index": 152240,
    "region": "Ярославская обл",
    "name": "Гаврилов-Ям",
    "latitude": 57.3091552,
    "longtitude": 39.8545157,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 152070,
    "region": "Ярославская обл",
    "name": "Данилов",
    "latitude": 58.1859542,
    "longtitude": 40.1796765,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 152470,
    "region": "Ярославская обл",
    "name": "Любим",
    "latitude": 58.3619868,
    "longtitude": 40.6869581,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 152830,
    "region": "Ярославская обл",
    "name": "Мышкин",
    "latitude": 57.7881664,
    "longtitude": 38.4542816,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 152020,
    "region": "Ярославская обл",
    "name": "Переславль-Залесский",
    "latitude": 56.7360435,
    "longtitude": 38.8543064,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 152850,
    "region": "Ярославская обл",
    "name": "Пошехонье",
    "latitude": 58.506328,
    "longtitude": 39.1210034,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 152150,
    "region": "Ярославская обл",
    "name": "Ростов",
    "latitude": 57.2050177,
    "longtitude": 39.4378357,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 152900,
    "region": "Ярославская обл",
    "name": "Рыбинск",
    "latitude": 58.0483802,
    "longtitude": 38.858338,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 152300,
    "region": "Ярославская обл",
    "name": "Тутаев",
    "latitude": 57.8674237,
    "longtitude": 39.5368234,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 152610,
    "region": "Ярославская обл",
    "name": "Углич",
    "latitude": 57.5223866,
    "longtitude": 38.3019793,
    "timezone": "UTC+3",
    "district": "Центральный"
  },
  {
    "index": 150000,
    "region": "Ярославская обл",
    "name": "Ярославль",
    "latitude": 57.6216145,
    "longtitude": 39.897878,
    "timezone": "UTC+3",
    "district": "Центральный"
  }
]


export interface City {
  index: number;
  region: string;
  name: string;
  latitude: number;
  longtitude: number;
  district: string;
  timezone: string;
}

export const ruCities: City[] = JSON.parse(JSON.stringify(citiesJson));
