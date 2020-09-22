class FlavorsController < ApplicationController
  # GET /flavors
  def index
    @flavors = Flavor.all

    render json: @flavors
  end

  def add_flavor_to_food
    @food = Food.find(params[:food_id])
    @flavor = Flavor.find(params[:id])

    @food.flavors << @flavor

    render json: @food, include: :flavors
  end
end
