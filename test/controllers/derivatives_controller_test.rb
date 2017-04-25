require 'test_helper'

class DerivativesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get derivatives_index_url
    assert_response :success
  end

end
