prototype-on-project-stub
=========================

Протопипирование с помощью bemhtml и bemjson на основе <a href="https://github.com/bem/project-stub">project-stub</a>

После скачивания репозитория, установите необходимые библиотеки командой ```npm i```:

```bash
prototype-on-project-stub$ npm i
```

И потом  запустите bem-server:

```bash
./node_modules/bem/bin/bem server
```

Первый запуск склонирует в папку ```libs```
библиотеки [bem-core](https://github.com/bem/bem-core) и [bem-components](https://github.com/bem/bem-components)

index-страница будет доступна по адресу
<a href="http://localhost:8080/desktop.bundles/index/index.html">http://localhost:8080/desktop.bundles/index/index.html</a>

Контентные картинки хранятся в ```/desktop.bundles/merged/img```.

Чтобы не копивать их в каждую папку бандла, можно делать симлинки из merged.

Пример для страницы ```index```

```bash
ln -s /desktop.bundles/merged/img  desktop.bundles/index/img
```
