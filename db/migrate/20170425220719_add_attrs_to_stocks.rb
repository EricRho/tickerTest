class AddAttrsToStocks < ActiveRecord::Migration[5.0]
  def change
    add_column :stocks, :name, :string
    add_column :stocks, :ask, :decimal
    add_column :stocks, :bid, :decimal
    add_column :stocks, :change, :decimal
    add_column :stocks, :change_in_percent, :decimal
  end
end
