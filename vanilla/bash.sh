#!/bin/bash

function updateGitHubPages {
    echo "Attempting to update GitHub Pages... "
    BRANCH=$(git rev-parse --abbrev-ref HEAD)
    if [[ "$BRANCH" != "master" ]]; then
        echo "FAIL: Current branch does not match master branch. Please make sure you are on the master branch.";
        exit 1;
    fi
        echo "SUCCESS: Branch matches master"
        read -p "Enter Your Commit: "  commit

        git status
        git add .
        git commit -m "$commit"
        echo "Update: Commit was made: "$commit

        git push origin master
        echo "Update: Pushed to origin master"

        echo "Update: Switching to gh-pages branch"
        git checkout gh-pages

        echo "Update: Cloning master branch to gh-pages branch"
        git rebase master

        echo "Update: Pushing to gh-pages"
        git push origin gh-pages

        echo "Update: Switching back to master branch"
        git checkout master

        echo "SUCCESS: updated Git Hub Pages!"
}


    echo "Attempting to update GitHub Pages..."
    updateGitHubPages
