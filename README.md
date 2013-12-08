prototype-on-project-stub
=========================

Протопипирование с помощью bemhtml и bemjson на основе <a href="https://github.com/bem/project-stub">project-stub</a>

Используется Vagrant для создания среды разработки, такой же, как и на рабочем сервере.

![bem on vagrant](http://img-fotki.yandex.ru/get/9514/28004787.13/0_870f0_6d99dbfb_XL.png)

Установка Vagrant
-----------------

###Установить Vagrant

Скачайте и установите Vagrant для вашей операционной системы http://downloads.vagrantup.com/ (версия не ниже 1.2.2).

Для работы с Vagrant и виртуальной машиной необходимо:

* Установить Vagrant плагин для `librarian-chef` (занимает около 2-5 минут)

```bash
vagrant plugin install vagrant-librarian-chef
```

* Установить Vagrant плагин для `omibus`

```bash
vagrant plugin install vagrant-omnibus
```

* Установить `VirtualBox`  для вашей операционной системы:
https://www.virtualbox.org/wiki/Downloads (версия не ниже 4.2)

* Скопировать файл `Vagrantfile.local.example` в `Vagrantfile.local`
 и прозвести дополнительную настройку параметров виртуальных машин, если это необходимо.

Пример настройки виртуальной машины:

```ruby
vmboxes = {
  # название виртуальной машины
  :'dev' => {
    :hostname => 'project-stub.vrt',
    :ipaddress => '192.168.1.111',
  }
}
```

* Прописать в настройки hosts своей операционной системы домены, которые буду использоваться для приложения.
IP-адреса взять из настроек виртуальных машин.

```bash
192.168.1.111     	project-stub.vrt
```

* Установить и запустить виртуальную машину `dev`

```
vagrant init
vagrant up dev
```

* ssh-доступ к машине производится командой

```
vagrant ssh dev
```

Домашняя папка на сервере разрабтки будет `/home/vagrant`.


Запуск проекта.
---------------

Необходимо перейти в папку проекта:

```bash
cd /var/www/project-stub/
```

Затем установите необходимые библиотеки командой `npm i`:

```bash
npm i
```


И потом  запустите bem-server:

```bash
bem server
```

index-страница будет доступна по адресу
http://project-stub.vrt:8080/desktop.bundles/index/index.html

Первое обращение к странице установит в папку `libs`
библиотеки [bem-core](https://github.com/bem/bem-core) и [bem-components](https://github.com/bem/bem-components)

Контентные картинки хранятся в `/desktop.bundles/merged/img`.

Чтобы не копивать их в каждую папку бандла, можно делать симлинки из merged.

Пример для страницы `index`

```bash
ln -s /desktop.bundles/merged/img  desktop.bundles/index/img
```

