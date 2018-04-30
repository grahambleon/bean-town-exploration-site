require "rails_helper"

RSpec.describe Api::V1::PlacesController, type: :controller do
  let!(:first_place) { Place.create(name: "Boston Library") }
  let!(:second_place) { Place.create(name: "Boston Commons") }

  describe "GET#index" do
    it "should return a list of all the places" do

      get :index
      returned_json = JSON.parse(response.body)

    end
  end
end
