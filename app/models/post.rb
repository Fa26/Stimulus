class Post < ApplicationRecord
    #images
    has_one_attached :photo
    has_rich_text :body

    #validates
    validates :title, presence: true 
    validates :body, presence: true
    validates :photo ,attached: true,content_type:[:jpeg,:png]
    #,dimension: { width:{ min:100, max:300 },
    #height:{ min:100, max:300 }}
    VALID_STATUSES = ['Public','Private']
    validates :tipo , inclusion: {in: VALID_STATUSES}
    validates :personas, presence: true  ,if: :is_private?

    def is_private?
        tipo == 'Private'
    end
end
 
   
