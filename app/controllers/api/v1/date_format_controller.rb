require 'chronic'

class Api::V1::DateFormatController < ApplicationController
  skip_before_action :verify_authenticity_token
  def format_many
    puts Time.now
    formated = params['dates'].map { |date| Time.parse(date) }
    render json: formated
  end
end
