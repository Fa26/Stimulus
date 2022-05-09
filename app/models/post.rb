class Post < ApplicationRecord
    #images
    has_one_attached :photo
    has_rich_text :body

    #validates
    validates :title, presence: true 
    validates :body, presence: true
    validates :tipo, presence: true
    validates :body, presence: true
    #validates image 
    validates :photo,attached:true,content_type:['image/jpeg','image/png'] ,dimension:{width:{max:300},height:{max:300}}
    
    VALID_STATUSES = ['public','private']
    validates :tipo , inclusion: {in: VALID_STATUSES}

end
