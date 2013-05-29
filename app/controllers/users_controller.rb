class UsersController < ApplicationController
  
  #before_filter :authenticate_user!

  def index
		# binding.pry
		@users = User.all
		render :json => @users
	end

	def show
		@user = User.find(params[:id])
		render :json => @user.to_json(:include => :followers)
  end

  def followers
    @user = User.find(params[:id])
    render :json => @user
  end

  def update
    @user = User.find(params[:id])
    @user.update_attributes(params[:user])
    render :json => @user
  end

  def me
    #give back json of devise's current_user
    render :json => current_user
  end
end