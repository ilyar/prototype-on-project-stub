#
# Cookbook Name:: project-stub
# Recipe:: default
#
package "mc"
package "git"
package "make"

include_recipe "nodejs"

npm_package "bem-cli@1.0.1"