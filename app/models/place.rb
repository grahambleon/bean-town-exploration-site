class Place < ApplicationRecord

  validates :name, presence: true
  validates :street_address, presence: true
  validates :city, presence: true
  validates :zip, presence: true
  validates :description, presence: true
  validates :category, presence: true
  validates :approved, inclusion: { in: [ true, false ]}

  belongs_to :user

end
