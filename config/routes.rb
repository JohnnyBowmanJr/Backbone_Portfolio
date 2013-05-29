Backbone::Application.routes.draw do

  devise_for :users

  root :to => 'home#index'

  resources :users, :only => [:show, :index, :update] do
  	resources :projects do
  		resources :skills
		end
    member do
      get :followers
    end
    collection do
      get :me
    end
	end


end
