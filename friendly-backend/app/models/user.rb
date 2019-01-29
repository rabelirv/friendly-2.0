class User < ApplicationRecord
  has_many :messages
  has_many :conversations, foreign_key: :sender_id
  validates_uniqueness_of :username
  validates :password, length: { minimum: 6, maximum: 100 }, allow_blank: true
  has_secure_password
  has_secure_token :auth_token

  def invalidate_token
    self.update_columns(auth_token: nil)
  end

  def self.validate_login(username, password)
    user = find_by(username: username)
    if user && user.authenticate(password)
      user
    end
  end
end
