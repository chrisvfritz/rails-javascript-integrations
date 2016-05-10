task :before_assets_precompile do
  system('npm install && npm run build')
end

# every time 'rake assets:precompile' is executed,
# run 'before_assets_precompile' first
Rake::Task['assets:precompile'].enhance ['before_assets_precompile']
