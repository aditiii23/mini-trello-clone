# mini-trello-clone

For Zuddl Frontend Intern Assignment

This is the Frontend Dashboard for a mini trello clone.

### Answer to questions:

- If a user can create and edit stages for a particular board. For example, instead of Open > In Progress > Done, if they want the stages of their task board to be Read > Working > Reviewing > Complete

  Solution: I would create an endpoint that would edit the stages at the board just like I have created for editing the board's name. Currently, we are just calling a function for editing the board's name, and we can create other functions to edit the stage names.

- If users can comment on tasks

  Solution: Each task object should have an extra field with an array of comments, and I will display them whenever the task details are displayed. An extra endpoint will be required to post a comment by any user.

- How will you do error handling?

  Solution: I will have null checks in all the input fields and have proper error logging. Try-catch blocks with status codes and error responses are a good practice I have implemented for error handling in my past projects.

### In the dashboard, the following goals are implemented:

- Users can create boards
![Screenshot from 2023-08-11 12-41-32](https://github.com/aditiii23/mini-trello-clone/assets/56069235/d1237ba2-0bbe-46ec-8339-4afb9f966f7a)
  
- Boards have stages like Todo, Doing, Done
- Stages have tasks
- Users can add their tasks from the button "+ Add New Task."
![Screenshot from 2023-08-11 12-38-39](https://github.com/aditiii23/mini-trello-clone/assets/56069235/c76edb54-72a0-4ece-90af-5ebe4c1b6771)

- Tasks can be dragged and dropped within stages
- Multiple task boards are displayed
![Screenshot from 2023-08-11 12-33-52](https://github.com/aditiii23/mini-trello-clone/assets/56069235/4bf4e3ed-38b0-4eb9-878b-bf80f32ee668)

- All tasks are grouped by the stage they are in and the total count of tasks in each stage
- Each task can be edited or deleted, or the stage of the task can be updated
![Screenshot from 2023-08-11 12-36-26](https://github.com/aditiii23/mini-trello-clone/assets/56069235/44a3d1eb-a523-436a-8383-d01f2b236c06)

- Description can also be added for each of the tasks
![Screenshot from 2023-08-11 12-37-05](https://github.com/aditiii23/mini-trello-clone/assets/56069235/c49749be-f5b2-4dd6-9c12-e723bdc6ad88)
