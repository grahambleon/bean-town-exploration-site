Rails.application.routes.draw do
  root 'static_pages#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
<<<<<<< HEAD
      resources :places
    end
  end
=======
      resources :places do
        resources :reviews
      end 
    end
  end

>>>>>>> c22b595e8485378a2da2b37d08b73228fb6601f9
end
