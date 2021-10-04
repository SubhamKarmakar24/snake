  1. #### Firstly, [install git](https://help.github.com/articles/set-up-git/).

2. ## Forking repository :
   This will create a copy of this repository in your account.

   Fork <a href="https://github.com/SubhamKarmakar24/snake" target="_blank">this</a> repository.

3. ## Clone repository :
   This will create a copy of this repository in your local machine. Now You are ready to make changes as per your issue.
   ```
   git clone https://github.com/SubhamKarmakar24/snake.git
   ```
    #### The steps to follow to contribute to any projects:

4. ### Add a upstream link to main branch in your cloned repo
    ```
    git remote add upstream https://github.com/SubhamKarmakar24/snake.git
    ```
5. ### Keep your cloned repo upto date by pulling from upstream 
   This will also avoid any merge conflicts while committing new changes
    ```
    git pull upstream main
    ```
6. ### Create your feature branch 
   Always create new branch
    ```
    git checkout -b <feature-name>
    ```
7. ### Track your changes
    ```
    git add .
    ```
8. ### Check for your changes.
    ```
    git status
    ```
9. ### Commit all the changes 
    Write commit message as "Small Message"
    ```
    git commit -m "Write a meaningfull but small commit message"
    ```
10. ### Push the changes for review
    ```
    git push origin <branch-name>
    ```
11. ### Create a PR on Github. 
    Just hit the create a pull request button, you must write a PR message to clarify why and what are you contributing
    
    ### Happy Coding and Contributing!!
