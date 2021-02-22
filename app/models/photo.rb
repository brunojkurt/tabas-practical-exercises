class Photo < ApplicationRecord
  validates :path, presence: true
  validates :property_id, presence: true
  belongs_to :property
end
