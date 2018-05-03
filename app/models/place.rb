class Place < ApplicationRecord

  mount_uploader :avatar, PlacePhotoUploader

  validates :name, presence: true
  validates :street_address, presence: true
  validates :city, presence: true
  validates :zip, presence: true
  validates :description, presence: true
  validates :category, presence: true
  validates :approved, inclusion: { in: [ true, false ]}
  validates :avatar, presence: true

  belongs_to :user
  has_many :reviews





end
