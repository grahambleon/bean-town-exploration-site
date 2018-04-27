class AddColumnsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :username, :string, null: false
    add_column :users, :is_admin, :boolean, :default => true
    add_index :users, :username, unique: true
  end
end
