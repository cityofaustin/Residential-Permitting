require 'fastimage'

class Jekyll::Dimensions < Liquid::Tag
  def initialize(tag_name, markup, tokens)
    if /(?<source>[^\s]+)/i =~ markup
      @source = source
    end
    super
  end

  def render(context)
      source = @source
      source_path = "./#{source}"
      raise "#{source} is not readable" unless File.readable?(source_path)

      size = FastImage.size(source_path)
      width = size[0]
      height = size[1]


      dims = "#{width}x#{height}"
      return dims

  end
end



Liquid::Template.register_tag('dimensions',   Jekyll::Dimensions)
