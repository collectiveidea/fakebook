require 'rake'

Version = '0.1.0'

begin
  require 'rubygems'
  gem 'echoe', '>=2.7'
  ENV['RUBY_FLAGS'] = ""
  require 'echoe'

  Echoe.new('fakebook') do |p|
    p.project        = 'fakebook'
    p.rubyforge_name = 'fakebook'
    p.version        = Version
    p.summary        = "Lightly simulates the Facebook platform, allowing you to develop and test Facebook canvas apps offline."
    #p.description  = ""
    p.url            = "http://github.com/sco/fakebook/"
    p.author         = 'Scott Raymond'
    p.email          = "sco@scottraymond.net"
    p.dependencies   << 'rack >=0.3.0'
    #p.test_pattern = 'test/*_test.rb'
  end
rescue LoadError => boom
  puts "You are missing a dependency required for meta-operations on this gem."
  puts "#{boom.to_s.capitalize}."
end

desc 'Install as a gem'
task :install_gem do
  puts `rake manifest package && gem install pkg/fakebook-#{Version}.gem`
end
