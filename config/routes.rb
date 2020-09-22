Rails.application.routes.draw do
  resources :flavors, only: :index
  resources :foods
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users, only: :create
  get '/foods/:food_id/flavors/:id', to: 'flavors#add_flavor_to_food'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
