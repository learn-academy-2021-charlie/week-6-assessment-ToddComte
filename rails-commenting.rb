# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# This is a class and its relationship between the application controller 
class BlogPostsController < ApplicationController
  def index
    # ---2)
    # This is showing the instance variable which is a variable defined by its class.
    @posts = BlogPost.all
  end

  def show
    # ---3)
    # This is now showing you the instance variable with find params using IDs
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  # This is showing a new instance within the class when you use post.new
  def new
    @post = Post.new
  end

  def create
    # ---5)
    # This is showing how we introduced the logic into our ruby on rails in creating a new blog post and whether or not it is valid.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6)
  # In this code block it will allow you to update and edit your blog posts and you find them by the ID
  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
  # ---7)
  # As you can tell they're using the valid method here and if it is valid it will go in one direction 
  # if not they'll go the other direction. It also introduces the destroy so where you can delete the blog posts you don't want anymore
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
  # ---8)
  # This just shows that if it does not meet the if statement. Then the else statement will be executed.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9)
  # As you can see by the keyword private it means that it's a private method. Private methods can only be used within 
  # the class definition.
  private
  def blog_post_params
  # ---10)
  # This is storing three different parameters and as long as you don't call private method they will never be changed
    params.require(:blog_post).permit(:title, :content)
  end
end
