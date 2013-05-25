require 'spec_helper'

describe 'nested attributes' do 
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
		@project = Project.new(@json)
		@project.as_json
	end

	it "should have filled in all the skills" do
		@project.skills.length.should eq(3)
		@project.skills.first.name.should eq("Ruby")
	end

end