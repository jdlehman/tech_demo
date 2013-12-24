ROTTEN_TOMATOES = YAML.load_file("#{::Rails.root}/config/rottentomatoes.yml")[::Rails.env]
