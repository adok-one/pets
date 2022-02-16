const areaCurrent = {
    c12:"Барський/Вінницька",
    c13:"Бершадський/Вінницька",
    c14:"Вінницький/Вінницька",
    c15:"Гайсинський/Вінницька",
    c16:"Іллінецький/Вінницька",
    c17:"Калинівський/Вінницька",
    c18:"Крижопільський/Вінницька",
    c20:"Липовецький/Вінницька",
    c21:"Літинський/Вінницька",
    c22:"Мурованокуриловецький/Вінницька",
    c23:"Немирівський/Вінницька",
    c24:"Оратівський/Вінницька",
    c25:"Піщанський/Вінницька",
    c26:"Погребищенський/Вінницька",
    c27:"Теплицький/Вінницька",
    c28:"Тиврівський/Вінницька",
    c29:"Томашпільський/Вінницька",
    c30:"Тростянецький/Вінницька",
    c31:"Тульчинський/Вінницька",
    c32:"Чернівецький/Вінницька",
    c33:"Чечельницький/Вінницька",
    c34:"Шаргородський/Вінницька",
    c35:"Ямпільський/Вінницька",
    c36:"Горохівський/Волинська",
    c37:"Іваничівський/Волинська",
    c38:"Камінь-Каширський/Волинська",
    c39:"Ківерцівський/Волинська",
    c40:"Локачинський/Волинська",
    c41:"Любешівський/Волинська",
    c42:"Любомльський/Волинська",
    c43:"Маневицький/Волинська",
    c44:"Ратнівський/Волинська",
    c45:"Рожищенський/Волинська",
    c46:"Старовижівський/Волинська",
    c47:"Турійський/Волинська",
    c48:"Шацький/Волинська",
    c49:"Апостолівський/Дніпропетровська",
    c50:"Васильківський/Дніпропетровська",
    c51:"Верхньодніпровський/Дніпропетровська",
    c52:"Дніпровський/Дніпропетровська",
    c53:"Криворізький/Дніпропетровська",
    c54:"Криничанський/Дніпропетровська",
    c55:"Магдалинівський/Дніпропетровська",
    c57:"Межівський/Дніпропетровська",
    c61:"П'ятихатський/Дніпропетровська",
    c58:"Петриківський/Дніпропетровська",
    c59:"Петропавлівський/Дніпропетровська",
    c60:"Покровський/Дніпропетровська",
    c62:"Солонянський/Дніпропетровська",
    c63:"Софіївський/Дніпропетровська",
    c414:"Томаківський/Дніпропетровська",
    c64:"Царичанський/Дніпропетровська",
    c65:"Широківський/Дніпропетровська",
    c66:"Юр'ївський/Дніпропетровська",
    c67:"Амвросіївський/Донецька",
    c68:"Великоновосілківський/Донецька",
    c69:"Волноваський/Донецька",
    c70:"Володарський/Донецька",
    c71:"Мар'їнський/Донецька",
    c72:"Новоазовський/Донецька",
    c73:"Олександрівський/Донецька",
    c74:"Першотравневий/Донецька",
    c75:"Старобешівський/Донецька",
    c76:"Тельманівський/Донецька",
    c77:"Андрушівський/Житомирська",
    c78:"Баранівський/Житомирська",
    c79:"Брусилівський/Житомирська",
    c80:"Володарсько-Волинський/Житомирська",
    c81:"Ємільчинський/Житомирська",
    c82:"Житомирський/Житомирська",
    c83:"Коростишівський/Житомирська",
    c84:"Лугинський/Житомирська",
    c85:"Любарський/Житомирська",
    c86:"Малинський/Житомирська",
    c87:"Народицький/Житомирська",
    c88:"Овруцький/Житомирська",
    c89:"Олевський/Житомирська",
    c90:"Попільнянський/Житомирська",
    c91:"Радомишльський/Житомирська",
    c92:"Романівський/Житомирська",
    c93:"Ружинський/Житомирська",
    c94:"Червоноармійський/Житомирська",
    c95:"Черняхівський/Житомирська",
    c96:"Чуднівський/Житомирська",
    c97:"Берегівський/Закарпатська",
    c98:"Великоберезнянський/Закарпатська",
    c99:"Виноградівський/Закарпатська",
    c100:"Воловецький/Закарпатська",
    c101:"Іршавський/Закарпатська",
    c102:"Міжгірський/Закарпатська",
    c103:"Перечинський/Закарпатська",
    c104:"Рахівський/Закарпатська",
    c105:"Свалявський/Закарпатська",
    c106:"Тячівський/Закарпатська",
    c107:"Хустський/Закарпатська",
    c108:"Василівський/Запорізька",
    c109:"Великобілозерський/Запорізька",
    c110:"Веселівський/Запорізька",
    c111:"Вільнянський/Запорізька",
    c112:"Гуляйпільський/Запорізька",
    c113:"Запорізький/Запорізька",
    c114:"Кам'янсько-Дніпровський/Запорізька",
    c115:"Куйбишевський/Запорізька",
    c116:"Михайлівський/Запорізька",
    c117:"Новомиколаївський/Запорізька",
    c118:"Оріхівський/Запорізька",
    c119:"Пологівський/Запорізька",
    c120:"Приазовський/Запорізька",
    c121:"Приморський/Запорізька",
    c122:"Розівський/Запорізька",
    c123:"Токмацький/Запорізька",
    c124:"Чернігівський/Запорізька",
    c125:"Якимівський/Запорізька",
    c126:"Богородчанський/Івано-Франківська",
    c127:"Верховинський/Івано-Франківська",
    c128:"Галицький/Івано-Франківська",
    c129:"Городенківський/Івано-Франківська",
    c130:"Долинський/Івано-Франківська",
    c131:"Косівський/Івано-Франківська",
    c132:"Надвірнянський/Івано-Франківська",
    c133:"Рогатинський/Івано-Франківська",
    c134:"Рожнятівський/Івано-Франківська",
    c135:"Снятинський/Івано-Франківська",
    c136:"Тисменицький/Івано-Франківська",
    c137:"Тлумацький/Івано-Франківська",
    c138:"Баришівський/Київська",
    c139:"Богуславський/Київська",
    c140:"Бородянський/Київська",
    c141:"Вишгородський/Київська",
    c142:"Володарський/Київська",
    c143:"Згурівський/Київська",
    c144:"Іванківський/Київська",
    c145:"Кагарлицький/Київська",
    c146:"Києво-Святошинський/Київська",
    c147:"Макарівський/Київська",
    c148:"Миронівський/Київська",
    c149:"Обухівський/Київська",
    c150:"Рокитнянський/Київська",
    c151:"Сквирський/Київська",
    c152:"Ставищенський/Київська",
    c153:"Таращанський/Київська",
    c154:"Тетіївський/Київська",
    c155:"Яготинський/Київська",
    c156:"Бобринецький/Кіровоградська",
    c157:"Вільшанський/Кіровоградська",
    c158:"Гайворонський/Кіровоградська",
    c159:"Голованівський/Кіровоградська",
    c160:"Добровеличківський/Кіровоградська",
    c161:"Долинський/Кіровоградська",
    c162:"Кіровоградський/Кіровоградська",
    c163:"Компаніївський/Кіровоградська",
    c164:"Маловисківський/Кіровоградська",
    c165:"Новгородківський/Кіровоградська",
    c166:"Новоархангельський/Кіровоградська",
    c167:"Новомиргородський/Кіровоградська",
    c168:"Новоукраїнський/Кіровоградська",
    c169:"Олександрівський/Кіровоградська",
    c170:"Онуфріївський/Кіровоградська",
    c171:"Петрівський/Кіровоградська",
    c172:"Ульяновський/Кіровоградська",
    c173:"Устинівський/Кіровоградська",
    c174:"Біловодський/Луганська",
    c175:"Білокуракинський/Луганська",
    c176:"Кремінський/Луганська",
    c177:"Лутугинський/Луганська",
    c178:"Марківський/Луганська",
    c179:"Міловський/Луганська",
    c180:"Новоайдарський/Луганська",
    c181:"Новопсковський/Луганська",
    c182:"Перевальський/Луганська",
    c183:"Попаснянський/Луганська",
    c184:"Сватівський/Луганська",
    c185:"Слов'яносербський/Луганська",
    c186:"Станично-Луганський/Луганська",
    c187:"Старобільський/Луганська",
    c188:"Троїцький/Луганська",
    c189:"Бродівський/Львівська",
    c190:"Буський/Львівська",
    c191:"Городоцький/Львівська",
    c192:"Жидачівський/Львівська",
    c193:"Жовківський/Львівська",
    c194:"Золочівський/Львівська",
    c195:"Кам'янка-Бузький/Львівська",
    c196:"Миколаївський/Львівська",
    c197:"Мостиський/Львівська",
    c198:"Перемишлянський/Львівська",
    c199:"Пустомитівський/Львівська",
    c200:"Радехівський/Львівська",
    c201:"Сколівський/Львівська",
    c202:"Сокальський/Львівська",
    c203:"Старосамбірський/Львівська",
    c204:"Турківський/Львівська",
    c205:"Яворівський/Львівська",
    c206:"Арбузинський/Миколаївська",
    c207:"Баштанський/Миколаївська",
    c208:"Березанський/Миколаївська",
    c209:"Березнегуватський/Миколаївська",
    c210:"Братський/Миколаївська",
    c211:"Веселинівський/Миколаївська",
    c212:"Врадіївський/Миколаївська",
    c213:"Доманівський/Миколаївська",
    c214:"Єланецький/Миколаївська",
    c215:"Жовтневий/Миколаївська",
    c216:"Казанківський/Миколаївська",
    c217:"Кривоозерський/Миколаївська",
    c218:"Миколаївський/Миколаївська",
    c219:"Новобузький/Миколаївська",
    c220:"Новоодеський/Миколаївська",
    c221:"Снігурівський/Миколаївська",
    c222:"Ананьївський/Одеська",
    c223:"Арцизький/Одеська",
    c224:"Балтський/Одеська",
    c225:"Березівський/Одеська",
    c226:"Біляївський/Одеська",
    c227:"Болградський/Одеська",
    c228:"Великомихайлівський/Одеська",
    c229:"Іванівський/Одеська",
    c230:"Кілійський/Одеська",
    c231:"Кодимський/Одеська",
    c232:"Лиманський/Одеська",
    c233:"Красноокнянський/Одеська",
    c234:"Любашівський/Одеська",
    c235:"Миколаївський/Одеська",
    c236:"Овідіопольський/Одеська",
    c237:"Ренійський/Одеська",
    c238:"Роздільнянський/Одеська",
    c239:"Савранський/Одеська",
    c240:"Саратський/Одеська",
    c241:"Тарутинський/Одеська",
    c242:"Татарбунарський/Одеська",
    c243:"Фрунзівський/Одеська",
    c244:"Ширяївський/Одеська",
    c245:"Великобагачанський/Полтавська",
    c246:"Гадяцький/Полтавська",
    c247:"Глобинський/Полтавська",
    c248:"Гребінківський/Полтавська",
    c249:"Диканський/Полтавська",
    c250:"Зіньківський/Полтавська",
    c251:"Карлівський/Полтавська",
    c252:"Кобеляцький/Полтавська",
    c253:"Козельщинський/Полтавська",
    c254:"Котелевський/Полтавська",
    c255:"Кременчуцький/Полтавська",
    c256:"Лохвицький/Полтавська",
    c257:"Машівський/Полтавська",
    c258:"Новосанжарський/Полтавська",
    c259:"Оржицький/Полтавська",
    c260:"Пирятинський/Полтавська",
    c261:"Полтавський/Полтавська",
    c262:"Решетилівський/Полтавська",
    c263:"Семенівський/Полтавська",
    c264:"Хорольський/Полтавська",
    c265:"Чорнухинський/Полтавська",
    c266:"Чутівський/Полтавська",
    c267:"Шишацький/Полтавська",
    c268:"Березнівський/Рівненська",
    c269:"Володимирецький/Рівненська",
    c270:"Гощанський/Рівненська",
    c271:"Демидівський/Рівненська",
    c272:"Дубровицький/Рівненська",
    c273:"Зарічненський/Рівненська",
    c274:"Здолбунівський/Рівненська",
    c275:"Корецький/Рівненська",
    c276:"Костопільський/Рівненська",
    c277:"Млинівський/Рівненська",
    c278:"Острозький/Рівненська",
    c279:"Радивилівський/Рівненська",
    c280:"Рівненський/Рівненська",
    c281:"Рокитнівський/Рівненська",
    c282:"Сарненський/Рівненська",
    c283:"Білопільський/Сумська",
    c284:"Буринський/Сумська",
    c285:"Великописарівський/Сумська",
    c286:"Краснопільський/Сумська",
    c287:"Кролевецький/Сумська",
    c288:"Лебединський/Сумська",
    c289:"Липоводолинський/Сумська",
    c290:"Недригайлівський/Сумська",
    c291:"Путивльський/Сумська",
    c292:"Середино-Будський/Сумська",
    c293:"Сумський/Сумська",
    c294:"Тростянецький/Сумська",
    c295:"Ямпільський/Сумська",
    c296:"Бережанський/Тернопільська",
    c297:"Борщівський/Тернопільська",
    c298:"Бучацький/Тернопільська",
    c299:"Гусятинський/Тернопільська",
    c300:"Заліщицький/Тернопільська",
    c301:"Збаразький/Тернопільська",
    c302:"Зборівський/Тернопільська",
    c303:"Козівський/Тернопільська",
    c304:"Кременецький/Тернопільська",
    c305:"Лановецький/Тернопільська",
    c306:"Монастириський/Тернопільська",
    c307:"Підволочиський/Тернопільська",
    c308:"Підгаєцький/Тернопільська",
    c309:"Теребовлянський/Тернопільська",
    c310:"Чортківський/Тернопільська",
    c311:"Шумський/Тернопільська",
    c312:"Балаклійський/Харківська",
    c313:"Барвінківський/Харківська",
    c314:"Близнюківський/Харківська",
    c315:"Богодухівський/Харківська",
    c316:"Борівський/Харківська",
    c317:"Валківський/Харківська",
    c318:"Великобурлуцький/Харківська",
    c319:"Вовчанський/Харківська",
    c320:"Дворічанський/Харківська",
    c321:"Дергачівський/Харківська",
    c322:"Зачепилівський/Харківська",
    c323:"Зміївський/Харківська",
    c324:"Золочівський/Харківська",
    c325:"Кегичівський/Харківська",
    c326:"Коломацький/Харківська",
    c327:"Красноградський/Харківська",
    c328:"Краснокутський/Харківська",
    c329:"Нововодолазький/Харківська",
    c330:"Печенізький/Харківська",
    c331:"Сахновщинський/Харківська",
    c332:"Харківський/Харківська",
    c333:"Шевченківський/Харківська",
    c334:"Бериславський/Херсонська",
    c335:"Білозерський/Херсонська",
    c336:"Великолепетиський/Херсонська",
    c337:"Великоолександрівський/Херсонська",
    c338:"Верхньорогачицький/Херсонська",
    c339:"Високопільський/Херсонська",
    c340:"Генічеський/Херсонська",
    c341:"Голопристанський/Херсонська",
    c342:"Горностаївський/Херсонська",
    c343:"Іванівський/Херсонська",
    c344:"Каланчацький/Херсонська",
    c345:"Нижньосірогозький/Херсонська",
    c346:"Нововоронцовський/Херсонська",
    c347:"Новотроїцький/Херсонська",
    c348:"Скадовський/Херсонська",
    c349:"Цюрупинський/Херсонська",
    c350:"Чаплинський/Херсонська",
    c351:"Білогірський/Хмельницька",
    c352:"Віньковецький/Хмельницька",
    c353:"Волочиський/Хмельницька",
    c354:"Городоцький/Хмельницька",
    c355:"Деражнянський/Хмельницька",
    c356:"Дунаєвецький/Хмельницька",
    c357:"Ізяславський/Хмельницька",
    c358:"Красилівський/Хмельницька",
    c359:"Летичівський/Хмельницька",
    c360:"Новоушицький/Хмельницька",
    c361:"Полонський/Хмельницька",
    c362:"Старокостянтинівський/Хмельницька",
    c363:"Старосинявський/Хмельницька",
    c364:"Теофіпольський/Хмельницька",
    c365:"Чемеровецький/Хмельницька",
    c366:"Ярмолинецький/Хмельницька",
    c367:"Городищенський/Черкаська",
    c368:"Драбівський/Черкаська",
    c369:"Жашківський/Черкаська",
    c370:"Звенигородський/Черкаська",
    c371:"Кам'янський/Черкаська",
    c372:"Катеринопільський/Черкаська",
    c373:"Корсунь-Шевченківський/Черкаська",
    c374:"Лисянський/Черкаська",
    c375:"Маньківський/Черкаська",
    c376:"Монастирищенський/Черкаська",
    c377:"Тальнівський/Черкаська",
    c378:"Христинівський/Черкаська",
    c379:"Черкаський/Черкаська",
    c380:"Чигиринський/Черкаська",
    c381:"Чорнобаївський/Черкаська",
    c382:"Шполянський/Черкаська",
    c383:"Вижницький/Чернівецька",
    c384:"Герцаївський/Чернівецька",
    c385:"Глибоцький/Чернівецька",
    c386:"Заставнівський/Чернівецька",
    c387:"Кельменецький/Чернівецька",
    c388:"Кіцманський/Чернівецька",
    c389:"Новоселицький/Чернівецька",
    c390:"Путильський/Чернівецька",
    c391:"Сокирянський/Чернівецька",
    c392:"Сторожинецький/Чернівецька",
    c393:"Хотинський/Чернівецька",
    c394:"Бахмацький/Чернігівська",
    c395:"Бобровицький/Чернігівська",
    c396:"Борзнянський/Чернігівська",
    c397:"Варвинський/Чернігівська",
    c398:"Городнянський/Чернігівська",
    c399:"Ічнянський/Чернігівська",
    c400:"Козелецький/Чернігівська",
    c401:"Коропський/Чернігівська",
    c402:"Корюківський/Чернігівська",
    c403:"Куликівський/Чернігівська",
    c404:"Менський/Чернігівська",
    c405:"Новгород-Сіверський/Чернігівська",
    c406:"Носівський/Чернігівська",
    c407:"Ріпкинський/Чернігівська",
    c408:"Семенівський/Чернігівська",
    c409:"Сосницький/Чернігівська",
    c410:"Срібнянський/Чернігівська",
    c411:"Талалаївський/Чернігівська",
    c412:"Чернігівський/Чернігівська",
    c413:"Щорський/Чернігівська"
};

const regions = Object.values(areaCurrent).map(function(x) { var splitted = x.split('/'); return `${splitted[1]} - ${splitted[0]}` });

export default regions;


