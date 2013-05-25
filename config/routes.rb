Backbone::Application.routes.draw do

  root :to => 'home#index'

  resources :users, :only => [:show, :index] do
  	resources :projects do
  		resources :skills
		end
	end
end
