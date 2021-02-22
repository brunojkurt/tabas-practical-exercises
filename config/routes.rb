Rails.application.routes.draw do
  root 'home#index'

  namespace :api do
    namespace :v1 do
      get '/property', to: 'property#index'
      post '/date/format_many', to: 'date_format#format_many'
    end
  end

  get "*path" => redirect("/")
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
