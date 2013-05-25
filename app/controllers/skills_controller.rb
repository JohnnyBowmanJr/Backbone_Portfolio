class SkillsController < ApplicationController

	def index
		@skills = @project.skills
		render :json => @skills
	end
	
	def show
		@skill = Skill.find(params[:id])
		render :json => @skill

	end

	def create
		@skill= Skill.new(params[:project])
    @skill.save!

    render :json => @project
	end

	def destroy
	end	
end
