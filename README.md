prototype-on-project-stub
=========================

Протопипирование с помощью bemhtml и bemjson на основе <a href="https://github.com/bem/project-stub">project-stub</a>

После git clone запустите npm install

И потом:  ./node_modules/bem/bin/bem server

index-страница будет доступна по адресу
<a href="http://localhost:8080/desktop.bundles/index/index.html">http://localhost:8080/desktop.bundles/index/index.html</a>

Контентный картинки хранятся в папке с бандлом в img.

Чтобы не копивать их в каждую папку бандла, можно делать симлинки из merged:

ln -s /полный/путь/до/вашего/desktop.bundles/merged/img /полный/путь/до/вашего/desktop.bundles/YOUPAGE/img
