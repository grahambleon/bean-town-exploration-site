class Review< ApplicationRecord

  validates :title, presence: true
  validates :body, presence: true
  validates :rating, presence: true


  belongs_to :place
  belongs_to :user

end
