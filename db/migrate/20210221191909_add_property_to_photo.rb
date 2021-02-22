class AddPropertyToPhoto < ActiveRecord::Migration[6.1]
  def change
    add_reference :photos, :property
  end
end
