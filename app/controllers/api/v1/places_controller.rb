class Api::V1::PlacesController < ApplicationController
  def index
    render json: Place.all
  end
end
