class AddDescriptionToAppointments < ActiveRecord::Migration[5.0]
  def change
    add_column :appointments, :description, :text
  end
end
