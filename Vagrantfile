#!/usr/bin/env ruby
# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.require_plugin "vagrant-librarian-chef"

vmboxes = {}

overrides = "#{__FILE__}.local"
if File.exist?(overrides)
  eval File.read(overrides)
end

Vagrant.configure("2") do |config|

  config.vm.box = "opscode_ubuntu-12.04_provisionerless"
  config.vm.box_url = "https://opscode-vm-bento.s3.amazonaws.com/vagrant/opscode_ubuntu-12.04_provisionerless.box"

  config.vm.provider :virtualbox do |vb|
    vb.customize ["modifyvm", :id,
      "--memory", "256",
      "--cpus",   "1"
    ]
  end

  vmboxes.each_pair do |name, options|

    config.vm.define name do |vmbox|
      vmbox.vm.hostname = options[:hostname]
      vmbox.vm.network "private_network", ip: options[:ipaddress]
    end
  end

  config.vm.synced_folder "./project-stub", "/var/www/project-stub", :create => true

  config.omnibus.chef_version = :latest
  config.vm.provision :chef_solo do |chef|
    chef.log_level = :info

    chef.environments_path  = "recipes/environments"
    chef.environment        = "development"

    chef.data_bags_path     = "recipes/data_bags"
    chef.roles_path         = "recipes/roles"

    chef.cookbooks_path     = ["recipes/site-cookbooks","recipes/cookbooks"]
    chef.provisioning_path  = "/tmp/vagrant-chef"

    chef.json.merge!(JSON.parse(IO.read("recipes/nodes/vagrant.json")))
  end


end
