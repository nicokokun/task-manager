class TasksController < ApplicationController
  before_action :set_task, only: %i[show edit update destroy]

  def index
    @tasks = Task.all
  end

  def show
  end

  def new
    @task = Task.new
  end

  def create
    @task = Task.new(task_params)
    if @task.save
      render turbo_stream: turbo_stream.append("tasks_list", partial: "tasks/task", locals: { task: @task })
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
  end

  def update
    if @task.update(task_params)
      render turbo_stream: turbo_stream.replace("task_#{@task.id}", partial: "tasks/task", locals: { task: @task })
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @task.destroy
    render turbo_stream: turbo_stream.remove("task_#{@task.id}")
  end

  private

  def set_task
    @task = Task.find(params[:id])
  end

  def task_params
    params.require(:task).permit(:title, :description, :completed)
  end
end
