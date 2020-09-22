# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Food.destroy_all
Flavor.destroy_all
User.destroy_all

admin = User.create!(username: 'admin', email: 'admin@email.com', password: '123456')

puts "#{User.count} users created"

sweet = Flavor.create!(name: 'sweet')
salty = Flavor.create!(name: 'salty')
sour = Flavor.create!(name: 'sour')
umami = Flavor.create!(name: 'umami')
bitter = Flavor.create!(name: 'bitter')

puts "#{Flavor.count} flavors created"

pizza = Food.create!(name: 'pizza', user: admin)

puts "#{Food.count} foods created"

pizza.flavors << sweet
pizza.flavors.push(salty, umami)
