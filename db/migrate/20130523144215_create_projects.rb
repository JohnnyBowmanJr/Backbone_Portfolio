class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
    	t.string :title
    	t.string :url
    	t.text :body
    	t.string :user_id
      t.timestamps
    end
  end
end
