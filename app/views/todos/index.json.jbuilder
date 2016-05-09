json.array!(@todos) do |todo|
  json.extract! todo, :id, :text
end
