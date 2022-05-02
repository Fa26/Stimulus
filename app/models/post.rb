class Post < ApplicationRecord
    #images
    has_one_attached :photo
    has_rich_text :body
end
