class Api::V1::PropertyController < ApplicationController
  def index
    render json: Property
      .limit(20)
      .offset((params['page'].to_i || 0) * 20)
      .to_json(include: :photos)
  end
end
