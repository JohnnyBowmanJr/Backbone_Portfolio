require 'spec_helper'

describe User do
  
  before do
    2.times {
      User.make!
    }

    @user = User.first 
    @follower = Follow.make!
  end
  
  it "should exist" do
    @user.should_not be_nil
    @user.class.should eq(User)
  end

  it "should have followers" do
    binding.pry
    @user.followers.first.id.should eq(@follower.follower_id)
  end
end
