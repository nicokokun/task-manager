// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "bootstrap"
import "popper"

import "controllers"


import { Application } from "@hotwired/stimulus"
import { definitionsFromContext } from "@hotwired/stimulus-webpack-helpers"

// Initialize Stimulus Application
const application = Application.start()

// Load all Stimulus controllers
const context = require.context("./controllers", true, /\.js$/)
application.load(definitionsFromContext(context))