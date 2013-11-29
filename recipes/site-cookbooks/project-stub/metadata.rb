name             'project-stub'
maintainer       'Dmitry Kushnikov'
maintainer_email 'dkushnikov@gmail.com'
license          'All rights reserved'
description      'Installs/Configures project-stub'
long_description IO.read(File.join(File.dirname(__FILE__), 'README.md'))
version          '0.1.0'

depends "build-essential"
depends "apt"

depends "nginx"
depends "nodejs"

depends "magic_shell"
