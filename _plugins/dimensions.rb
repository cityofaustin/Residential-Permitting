require 'fastimage'

module Jekyll
  module DimensionsFilter
    def dimensions(input)

      site = @context.registers[:site]
      source_path = File.join(site.source, input)
      
      raise "#{input} is not readable" unless File.readable?(source_path)

      size = FastImage.size(source_path)
      width = size[0]
      height = size[1]


      dims = "#{width}x#{height}"
      return dims
    end
  end
end

Liquid::Template.register_filter(Jekyll::DimensionsFilter)
