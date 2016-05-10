Rake::Task['assets:precompile'].clear

namespace :assets do
  task :precompile do
    system('cd frontend && npm install && npm run build')
  end
end
