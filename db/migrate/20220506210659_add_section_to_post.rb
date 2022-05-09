class AddSectionToPost < ActiveRecord::Migration[6.1]
  def change
    add_column :posts, :tipo, :string
    add_column :posts, :personas, :text
  end
end
