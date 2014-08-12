# prototype-on-project-stub

Прототипирование с помощью bemhtml и bemjson на основе <a href="https://github.com/bem/project-stub">project-stub</a>

Клонировать и зайти в новый каталог вашего проекта:

    git clone https://github.com/alexbaumgertner/project-stub.git my_project
    cd my_project

## Рабочие окружени и зависимости

Этот шаг можно промустить если будем использовать Vagrant.
Для работы нам потребуется установленный [Node.js](http://nodejs.org/download/).

Зайти в новый каталог вашего проекта и установить необходимые зависимости:

    cd my_project
    npm install

Установить глобально [bem-cli](http://ru.bem.info/news/bem-cli/):

    npm install -g bem-cli

## Рабочие окружение Vagrant

Если рабочие окружение настроено и зависимости установлены этот шаг можно пропустить.
Настройка рабочего окружения с помощью  [Vagrant](http://downloads.vagrantup.com/) на виртуальной машине [VirtualBox](http://www.virtualbox.org) для работы их необходимо установить для вашей операционной системы.

Зайти в новый каталог вашего проекта и запустить виртуальную машину:

    cd my_project
    vagrant up

Для использования bem-tools заходим в консоль виртуальной машины:

    vagrant ssh

Первый запуск может потребовать длительного время времени, дополнительные команды для управления виртуальной машиной: `vagrant halt` - приостановить,  `vagrant destroy` - удалить.

## Кодим по БЕМу и смотрим результат

Запустить bem-server:

    bem server

Первый запуск склонирует в папку `libs` библиотеки [bem-core](https://github.com/bem/bem-core) и [bem-components](https://github.com/bem/bem-components)

index-страница будет доступна по адресу <a href="http://localhost:8080/desktop.bundles/index/index.html">http://localhost:8080/desktop.bundles/index/index.html</a>

Контентные картинки хранятся в `/desktop.bundles/assets/img`.
