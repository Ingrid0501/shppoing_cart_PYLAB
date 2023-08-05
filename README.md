
>>>>git add README.md
fatal: pathspec 'README.md' did not match any files

<!-- 應該是照著github 提示。( 我創造一個 REPO卻沒有包含任何資料。) -->
>>>>>git commit -m "upload commit ver1"
On branch master

Initial commit

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        HW_shoppingSite.css
        HW_shoppingSite.html
        HW_shoppingSite.js

nothing added to commit but untracked files present (use "git add" to track)

>>>>>🐧🐬🐧🐬git add .

>>>>>git commit -m "upload commit ver1"
[master (root-commit) 6cb7ab8] upload commit ver1
 3 files changed, 497 insertions(+)
 create mode 100644 HW_shoppingSite.css
 create mode 100644 HW_shoppingSite.html
 create mode 100644 HW_shoppingSite.js

>>>>>git push
fatal: No configured push destination.
Either specify the URL from the command-line or configure a remote repository using

    git remote add <name> <url>

and then push using the remote name

    git push <name>


 >>>>>🐧🐬🐧🐬git remote add  shopping-cart https://github.com/Ingrid0501/shppoing_cart_PYLAB.git

>>>>>git remote add  shopping-cart https://github.com/Ingrid0501/shppoing_cart_PYLAB.git
error: remote shopping-cart already exists.

>>>>>git push
fatal: The current branch master has no upstream branch.
To push the current branch and set the remote as upstream, use

    🐧🐬git push --set-upstream shopping-cart master🐬🐬

To have this happen automatically for branches without a tracking
upstream, see 'push.autoSetupRemote' in 'git help config'.


>>>>>🐧🐬🐧🐬git push --set-upstream shopping-cart master
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 12 threads
Compressing objects: 100% (5/5), done.
Writing objects: 100% (5/5), 3.87 KiB | 3.88 MiB/s, done.
Total 5 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/Ingrid0501/shppoing_cart_PYLAB.git
 * [new branch]      master -> master
branch 'master' set up to track 'shopping-cart/master'.


