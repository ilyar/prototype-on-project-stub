Статья по мотивам доклада на 2-м BEMup в октябре, Москва.
Видео http://video.yandex.ru/users/ya-events/view/1964/,
презентация http://www.slideshare.net/Alex_Baum/alex-baumgertner-beminsmallprojects.

Что останавливает меня от использования бем-тулз http://clubs.ya.ru/bem/replies.xml?item_no=3905

План

* Введение о независимых блоках немного истории
* Project-stub
* bemjson + bemhtml i-bem на примере prototype-on-project-stub
* Сборка статичной версии сайта bem-static-build

Как и многие верстальщики после первых статей о концепции независимых блоков я начал применять нейминг ксс классов.
Тире, подчерскивания, -- все писалось ручками, потом помогал zen-coding, .block>.block__elememt `Tab`.

Но революция в сознании произосшла позже.
БЫли выступления о bemjson, и i-bem, но декларация зависимостей, сборка деклараций,
билд страниц -- все запуытвало и размазывало фокус от верстки. Но очень хотелось порядка и разложенного на полочки-папки кода.

Project-stub
============

Статья http://habrahabr.ru/post/162385/
В декабре 2012 года начал разираться с project-stub http://alexbaumgertner.ya.ru/replies.xml?item_no=2268.
С помощью этой заготовки стало работать намного проще, не нужно заниматься конфигурированием сборки,
 запускать вручную генерацию вспомогательных технологий и целиком сосредоточится изучении на bemjson, bemhtml b i-bem.


Сначала было не очень понятно, зачем вместо верстки писать какой-то bemjson да и еще потом для него придумывать шаблоны bemhtml.
 Но уже после создания первой странцы в project-stub мощь и удобство этой связки стали раскрываться на полную.

Обычно при верстке надо сначало решить, в каких тегах будет реализовываться тот или иной элемент дизайна страницы.
Например, меню, это таблица `table`, список `ul>li` или просто `div`'ы, следующими один за другим?
Вроде список, но если надо сделать 100% по шиирине горизонтальное меню, чтобы пункты не "упали" на строку ниже,
то надежнее будет таблица. Довольно часто требования к верстке либо четко не определены сначала, либо меняются.
И тогда приходится открывать каждую hmtl-страницу и искать сверстанный кусок кода и переделывать.


Переход от верстки, "написания чистого семантического валидного html" (из примеров резюме) к проектированию интерфеса.