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
  ![image](https://github.com/aditiii23/mini-trello-clone/assets/56069235/cb9050bf-b884-4464-90ea-5f3f76fe8fcc)
- Boards have stages like Todo, Doing, Done
- Stages have tasks
- Users can add their tasks from the button "+ Add New Task."
  ![image](https://github.com/aditiii23/mini-trello-clone/assets/56069235/b934e309-5cd3-47e9-86ee-8ba49b80aadb)
- Tasks can be dragged and dropped within stages
- Multiple task boards are displayed
  ![image](https://github.com/aditiii23/mini-trello-clone/assets/56069235/595746c9-6d37-4594-b5e1-9341699f36cd)
  
- All tasks are grouped by the stage they are in and the total count of tasks in each stage
- Each task can be edited or deleted, or the stage of the task can be updated
  ![image](https://github.com/aditiii23/mini-trello-clone/assets/56069235/1d45d7d5-9d2b-4121-977b-a27180cf3ada)
  
- Description can also be added for each of the tasks
  ![image](https://github.com/aditiii23/mini-trello-clone/assets/56069235/74487551-f888-4c82-95f6-48795e6597dc)
