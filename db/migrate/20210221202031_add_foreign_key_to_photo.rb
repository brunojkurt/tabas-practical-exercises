class AddForeignKeyToPhoto < ActiveRecord::Migration[6.1]
  def change
    add_foreign_key :photos, :properties
  end
end
