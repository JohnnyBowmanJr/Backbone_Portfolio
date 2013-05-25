require 'spec_helper'

describe ProjectsController do 
	before do
		@json = {
			"title" => "Bucketlist",
			"body" => "some body text",
			"user_id" => "1",
			"skills_attributes" => [
				{"name" => "Ruby"},
				{"name" => "AJAX"},
				{"name" => "Backbone"}
			]
		}
		@johnny =User.create(:first_name=> "Johnny")
		@project = Project.create(@json)
	end

	it "should create with json project hash" do
		post :create, {:user_id => @johnny.id, :project => @json}
		response.should be_success
		#expect.to change(Project, :count).by(1)
 	end


end