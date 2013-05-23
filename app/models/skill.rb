class Skill < ActiveRecord::Base
  belongs_to :project
  has_many :skills
end
