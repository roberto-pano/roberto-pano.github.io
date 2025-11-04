source 'https://rubygems.org'

ruby '~> 3.1.4' # Match Netlify's Ruby version exactly

# Force older versions of gems for compatibility
gem 'ffi', '1.15.5'  # Last version that works with RubyGems 3.1.4
gem 'bundler', '1.17.2'  # Match Netlify's bundler version

# Core dependencies
gem 'cocoapods', '~> 1.13.0'  # More conservative version
gem 'activesupport', '~> 6.1.7', '< 7.0.0'
gem 'xcodeproj', '~> 1.22.0'
gem 'concurrent-ruby', '~> 1.2.0'

# Ruby 3.4.0 has removed some libraries from the standard library.
gem 'bigdecimal'
gem 'logger'
gem 'benchmark'
gem 'mutex_m'
