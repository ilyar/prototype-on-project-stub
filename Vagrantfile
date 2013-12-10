$script = <<SCRIPT
  if [ ! -f /home/vagrant/already-installed ]
  then
    sudo npm install -g bem@0.6.16
    cd project && npm install && bem make libs
    echo "\n\ncd /home/vagrant/project" >> /home/vagrant/.bashrc
    date > /home/vagrant/already-installed
  fi
  echo "Done!"
SCRIPT

Vagrant::Config.run do |config|
  config.vm.box = "precise32"
  config.vm.box_url = "http://files.vagrantup.com/precise32.box"
  config.vm.forward_port 8080, 8080
  config.vm.share_folder "project", "/home/vagrant/project", "."

  config.vm.provision :chef_solo do |chef|
    chef.recipe_url = "https://dl.dropboxusercontent.com/u/252475/cookbooks.tar.gz"
    chef.cookbooks_path = [:vm, "cookbooks"]
    chef.add_recipe "nodejs"
    # chef.add_recipe "mongodb-debs"
    # chef.add_recipe "redis-server"
    chef.json = {
      "nodejs" => {
        "version" => "0.10.20"
	    # , "from_source" => true
      }
    }
  end
  config.vm.provision :shell, :inline => $script
end
