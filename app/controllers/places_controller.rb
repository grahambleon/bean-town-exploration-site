class PlacesController < ApplicationController
  before_action :configure_permitted_parameters, if: :devise_controller?

  def new
    @place = Place.new
  end

  def create
    @place = Place.new(place_params)
    @place.user = current_user
      if @place.save
        flash[:notice] = "Place added successfully"
        redirect_to "/"

      else
        flash[:notice] = @place.errors.full_messages.join(", ")
        render :new
      end
  end

  def show
    @place = Place.find(params[:id])
  end

  private

  def place_params
    params.require(:place).permit(:name, :street_address, :city, :zip, :description, :category, {avatar: []})
  end
end
