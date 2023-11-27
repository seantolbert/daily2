# Notes

## User Stories + Paths

1.  As a user, I want to create a new daily task:

    - When I open the app, I should be able to add a new task for the day.
    - I want to specify the task title, description, and due time.

    > User navigates to the "Add Task" screen.

    > User enters the task title, description, and sets the due time.

    > User saves the task.
    > The new task is added to the daily schedule.

2.  As a user, I want to view my daily schedule:

    - Upon opening the app, I should see a list of tasks for the current day.
    - The tasks should be displayed in chronological order.

    > User opens the app.

    > The app displays the current day's schedule by default.

    > User sees a list of tasks for the day in chronological order.

3.  As a user, I want to mark tasks as complete:

    - I want to be able to mark a task as completed once I've finished it.
    - Completed tasks should be visually distinguished from pending tasks.

    > User opens the app.

    > User views the list of tasks for the day.

    > User selects a task and marks it as complete.

    > The task is visually marked as completed.

4.  As a user, I want to set reminders for tasks:

    - I should be able to set reminders for specific tasks to receive notifications.
    - Reminders can be set for a specific time before the task is due.

    > User opens the app.

    > User goes to the task details or creation screen.

    > User sets a reminder for a specific task.

    > The app sends a notification at the set time.

5.  As a user, I want to edit or delete a task:

    - I want the ability to modify the details of a task or remove it from my schedule entirely.

    > User opens the app.

    > User goes to the daily schedule or task details screen.

    > User selects a task to edit or delete.

    > User makes changes or deletes the task accordingly.

6.  As a user, I want to view tasks for other days:

    - I should be able to navigate to different days to view and manage tasks for those days.

    > User opens the app.

    > User navigates to a different day using a calendar or date picker.

    > The app displays the tasks for the selected day.

7.  As a user, I want to organize tasks into categories:

    - I want the option to categorize tasks (e.g., work, personal, fitness) for better organization.

    > User opens the app.

    > User creates or edits a task.

    > User assigns a category to the task (e.g., work, personal, fitness).

8.  As a user, I want to see a summary of completed tasks:

    - There should be a section where I can review the tasks I've completed over time.

    > User opens the app.

    > User navigates to a "Completed Tasks" section.

    > The app displays a list or summary of completed tasks over time.

9.  As a user, I want to sync my tasks across devices:

    - I should be able to log in and access my daily planner from multiple devices.

    > User opens the app and logs in.

    > The app synchronizes tasks with the user's account.

    > User can access the same tasks on multiple devices.

10. As a user, I want to customize the app's appearance:

    - I should have the option to personalize the app's theme or choose from predefined themes.

    > User opens the app.

    > User navigates to the "Settings" or "Preferences" section.

    > User selects options to customize the app's theme.

## Screens

1. Home Screen:

   - Overview of the current day's tasks.
   - Navigation to other sections/screens.

2. Add Task Screen:

   -Form for creating a new task (title, description, due time).
   -Save button to add the task to the schedule.

3. Task Details Screen:

   - Display details of a selected task.
   - Option to edit or delete the task.

4. Settings/Preferences Screen:

   - Options for customizing the app's appearance.

5. Calendar/Date Picker Screen:

   - Allows the user to navigate to tasks on different days.

6. Completed Tasks Screen:

   - Display a list or summary of completed tasks.

7. Login/Authentication Screen:

   - If syncing tasks across devices is a feature, a login screen would be necessary.

## Recomended Bottom Tab Navigators

1. **Home Tab:**

   - Navigates to the Home Screen, displaying the current day's tasks and schedule.

2. **Add Task Tab:**

   - Navigates to the Add Task Screen, allowing users to create new tasks.

3. **Calendar Tab:**

   - Navigates to the Calendar/Date Picker Screen, enabling users to view tasks on different days.

4. **Completed Tasks Tab:**

   - Navigates to the Completed Tasks Screen, showing a list or summary of completed tasks.

5. **Settings Tab:**
   - Navigates to the Settings/Preferences Screen, where users can customize the app's appearance.

## ice box features

1. redux

2. react native modules to push tasks to icalendar and vice versa to prevent calendar conflicts
   https://reactnative.dev/docs/native-modules-ios#create-a-calendar-native-module

3. on a daily basis, the app will send a push notification to the device for daily summary of completed tasks

4. web app and ipad compatibility