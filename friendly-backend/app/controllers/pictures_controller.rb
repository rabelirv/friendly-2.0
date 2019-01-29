class PicturesController < ApplicationController
  def index
    @pictures = Picture.all
    render json: @pictures
  end

  def create
    picture = Picture.create!(picture_params)
    render json: { picture: {selfie: picture.selfie}}
  end

  private

  def picture_params
    params.require(:picture).permit(:selfie)
  end

end
