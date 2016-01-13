module ApplicationHelper
  def full_title(page_title)
    base_title = 'John Olukunle'
    if page_title.empty?
      base_title
    else
      "#{page_title} | #{base_title}"
    end
  end

  def friendly_date(d)
    d.strftime("%B %e, %Y")
  end
end