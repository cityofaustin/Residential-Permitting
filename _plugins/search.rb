class AlgoliaSearchJekyllPush < Jekyll::Command
  class << self
    # Hook to exclude some files from indexing
    def custom_hook_excluded_file?(file)
      return true if file.path =~ %r{^_content/admin/}
      false
    end
  end
end
