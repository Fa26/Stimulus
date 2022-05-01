Rails.application.routes.draw do
  resources :posts
  root 'home#index'
  get 'home/index'
  get 'home/multiplo'
  get 'home/queBoton'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
