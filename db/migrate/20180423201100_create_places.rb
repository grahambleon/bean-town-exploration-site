class CreatePlaces < ActiveRecord::Migration[5.2]
  def change
    create_table :places do |t|
      t.string :name, null: false
      t.string :street_address, null: false
      t.string :city, null: false
      t.string :zip, null: false
      t.text :description, null: false
      t.string :category, null: false
      t.boolean :approved, :default => true
      t.belongs_to :user

      t.timestamps
    end
  end
end
