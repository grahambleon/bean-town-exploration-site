class Api::V1::PlacesController < ApplicationController
  def index
    render json: Place.all
  end

  def show
    render json: { place: Place.find(params[:id]), user_id: current_user.id, reviews: Review.where(place_id: params[:id]) }
  end
end
