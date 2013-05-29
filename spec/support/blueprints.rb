require 'machinist/active_record'

User.blueprint do
  first_name { Faker::Name.first_name }
  last_name { Faker::Name.last_name }
  email { Faker::Internet.email } 
  password { "password" }
end

Follow.blueprint do
  user_id { User.first.id }
  follower_id { User.last.id }
end

# Follow.blueprint do
#   User.make!
# end



