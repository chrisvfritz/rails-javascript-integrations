class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.string :text

      t.timestamps null: false
    end
  end
end
