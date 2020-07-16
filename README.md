# react-file-manager

In this app, you can browse and interact with the content of a configured directory on the server.

# Usage

I deployed the app with Heroku linked with GitHub.
Check it here:  https://react-nodejs-file-manager.herokuapp.com/
The problem with this version is that you can't create new folders (for the moment) so you can't go through sub-folders.
You can still upload, download and remove files from the root directory.

**Manual version**
In file-manager/ : `npm i && npm start`
In file-manager/client/: `npm i && npm start`

With this one, you have access to server files and the configured directory so the creation of subfolders.
Check next point for more explanation.

# Configuration

On the server directory, the file config.js contains a variable called configDirectory.
Just change the second argument of this variable to a **directory** in the server (at root).

If the configDirectory is not already created, it will be at server launch.

Exemple: `configDirectory : path.join(__dirname, "demo")` (Here, the configured directory would be at root/demo)

To link a nested directory, you can add some arguments to the `join` function.

# Work

Frameworks used: React, NodeJS and Bootstrap.

This project consisted on developing the following routes :
    - /browse // returns a list of files and directories for a given path
    - /download // returns the file for a given path
    - /upload // handles file uploads to a given path.
    - /remove // removes file at a given path

The REST API was connected to a front-end React where we ensured that paths coming from and to the API where relative to the
configured directory. For that, we used the URL params with React Router's functions like `<Route path=":dirPath?*" component={..}>`.

Also, I tried my best to abstract the components and therefore make it easier to read and maintain. You will also see a lot of comments in the code. Controllers and librairies are also separated from the server.js file.

For the design, I used Bootstrap with simple colors and UI. It's not responsive I guess...

# Conclusion

All functions are working (even the "deleteFile" that was not asked haha) but something like a "Going back" button to retrieve the navigation path could be useful. Or, maybe something like a tree on the side with folders and files like the Windows Explorer where we could go through all the content and easily access everything.

Also, the possibility of creating directories would be useful.

# Author

Mohamed LAKHAL @ 2020