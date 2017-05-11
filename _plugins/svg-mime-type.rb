require 'webrick'
include WEBrick
WEBrick::HTTPUtils::DefaultMimeTypes.store 'svg', 'image/svg+xml'

# http://stackoverflow.com/questions/13687030/how-do-i-configure-jekyll-to-serve-svg?rq=1
