class Skills < ActiveRecord::Migration
  def change
		remove_column :skills, :project_id
  	add_column :skills, :project_id, :integer
  end
end
