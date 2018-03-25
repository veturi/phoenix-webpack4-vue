defmodule PhxvueWeb.LayoutView do
  use PhxvueWeb, :view

  def js_script_tag do
    "<script src=\"/js/bundle.js\"></script>"

    # if Mix.env == :prod do
    #   "<script src=\"/js/bundle.js\"></script>"
    # else
    #   "<script src=\"http://localhost:8080/js/bundle.js\"></script>"
    # end
  end
end
