## To Add Projects to this archive, please follow the below instructions

- Go into your project's parent folder and exescute following commands

- 1. Initializes a new Git repository in the current directory.
 ```bash
git init
 ```
- 2. Updates your local copy of the remote branches wih the latest changes from the remote repository 
 ```bash
git fetch
 ```
- 3. Receive the latest changes from the remote repository and integrates those changes into your current branch
 ```bash
git push
 ```
- 3. Receive the latest changes from the remote repository and integrates those changes into your current branch (with unrelated histories)
 ```bash
git pull origin master --allow-unrelated-histories
 ```
- 4. Add/Stage your project
 ```bash
git add your-project/
 ```
- 5. Commit your project
 ```bash
git commit -m "first commit"
 ```
- 6. Add remote repository to your local Git repository
 ```bash
git remote add origin https://github.com/Software-Lifecycle-Consultants/poc-archive.git
 ```
- 7. Upload local repository content to a remote repository
 ```bash
git push -u origin main
 ```

## To Download the Archive
```bash
git https://github.com/Software-Lifecycle-Consultants/poc-archive.git
 ```
