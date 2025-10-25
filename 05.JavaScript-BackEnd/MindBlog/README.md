## Steps to Use the Skeleton Project
 - [x] Install dependencies `npm i`
 - [x] Remove old resources and add new resources - Move images and css into `/src/public`
 - [x] Add html files to the views folder - `/src/views
 - [x] Rename database name - TODO
 - [x] Replace layout - `src/views/layout
   - [x] Check if main has class or if I should include it inside the layout
   - [x] Dynamic title - inside title tag and add {{setTitle "Home page"}}
   - [x] Fix resource routes - remove /static or .
   - [x] Error notification
   - [x] Body
   - [x] Dynamic Navigation
 - [x] Replace home page
 - [x] Modify navigation links - /users/logout, login, register, home - /
 - [x] Modify User model - check the document for user model requirements
 - [x] Modify login and register controller
 - [x] Modify login and register service
 - [x] Modify token generation
 - [x] Modify login and register error handlers
 - [x] Replace login - add names, value="{{user.email}}, delete action and add method "POST, rename to .hbs, fix register path add dynamic title
 - [x] Replace register page
 - [x] Replace 404 page

## Solve Mind Blog Exam Prep

### Create Blog Page // CREATE
 - [x] Fix create blog navigation link
 - [x] Add blog controller - blogController.js
 - [x] Add controller to routes - routes.use("/blogs", blogController)
 - [x] Add create action with render - /create GET Method, res.render("/blogs/create) (blogController)
 - [x] Add blogs folder in views - views/blogs
 - [x] Add blog model
 - [x] Add create blog view
 - [x] Modify create blog form - fix it when you add method="POST", add names based on the model, dynamic title
 - [x] Create blog post action - /create POST Method, test if it works (blogController)
 - [x] Create blog service with create method - export async function create(blogData, userId)
 - [x] Add it inside services/index.js in order to write blogService.create and import /services/index.js";
 - [x] Add owner on blog creation and finish blogController POST Create
 - [x] Add isAuth to the blogController inside the GET, POST Create actions
 - [x] Add error handling
 - [x] Add value="{{blog.title}}, etc in create.hbs - we can write inside the textarea

### Blogs Catalog Page // CATALOG
 - [x] Fix navigation link - main.hbs
 - [x] Add catalog view
 - [x] Add GET Catalog action with static blogs - GET action, blogController
 - [x] Create getAll (blogs) function - blogsService
 - [x] Show dynamic blogs - blogController we add res.render("blogs/catalog", { blogs });
 - [x] Dynamic template - inside the catalog.hbs we add {{#each blogs}}{{else}}{{/each}} inside a single article and add {{title}} etc based on the blog model. Also add - no blogs yet with else inside the each - Test it

### Home page blogs // HOME
 - [x] Update the homeController when you make it async and add latestBlogs
 - [x] Add function getLatest blogs in blogService
 - [x] Show dynamic lastest blogs on home.hbs - {{#if blogs}}{{#each blogs}}{{/each}}{{else}}{{/if}}

### Blog details // BLOG DETAILS
 - [x] Fix details link in blogs page (Catalog.hbs) - /blogs/{{id}}/details
 - [x] Fix details link in home page
 - [x] Show static details page - add GET action inside the blogController - path is /:blogId/details
 - [x] Add getOne method in blogService
 - [x] Show dynamic details page (without author and followers) - add details.hbs inside view/blogs
 - [x] Show dynamic author - added .populate("owner"); to getOne from blogService
 - [x] Hide buttons if not logged - inside the details.hbs {{#if isAuthenticated}}{{/if}}
 - [x] Show edit and delete button if author - if else inside the details using isOwner
 - [x] Show follow and already following buttons if logged
 - [x] Implement follow functionallity
   - [x] Add followers in blogModel - followers:[{}]
   - [x] Add follow action - blogController
   - [x] Add follow service method - blogService
   - [x] Fix follow link - details.hbs and test when you follow - in DB you can see Array (1)
 - [x] Show dynamic follwers - in blogService add populate to getOne - .populate(["owner", "followers"])
 - [x] Show follow button or already following buttons conditionally - if else

### Delete blog // DELETE
 - [x] Fix navigation link in details - details.hbs /blogs/{{id}}/delete
 - [x] Add delete action - blogController
 - [x] Add delete method in blogService
  
### Edit blog // EDIT 
 - [x] Fix navigation link in details.hbs - /blogs/{{blog.id}}/edit
 - [x] Add GET edit action - render edit - blogController, res.render(`blogs/edit`)
 - [x] Fix edit template - add method, names, {{blog.title}} (dynamic content)
 - [x] Show empty edit page
 - [x] Populate edit form with blog data
 - [x] Add post edit action
 - [x] Add edit method in blog service
 - [x] Add error handling

### Profile // PROFILE
 - [x] Fix navigation link - main.hbs /profile
 - [x] Show static profile page - homeController, /profile path
 - [x] Show dynamic user information - add {{user.email}}
 - [x] Add inside views/helpers/listHelpers.js
 - [x] Add listHelpers to index.js - ...listHelpers in order for hbs to read it
 - [x] Show created blogs - homeController, service, profile.hbs {{#each}}{{else}}{{/each}} and add title (use general title, category since this is not for a specific blog)
 - [x] Show followed blogs - homeController, service, update profile.hbs

## Validation and error handling
- [x] View the guards requirements
- [x] Add validations to user model
- [x] Add validators to blog model

### Bonus
 - [ ] Fix sort(_id) problem