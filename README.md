# scout

Getting Started
===============

Ubuntu
-----------

### Install SBT

Install SBT via Ubuntu package manager.

	> echo "deb https://dl.bintray.com/sbt/debian /" | sudo tee -a /etc/apt/sources.list.d/sbt.list
	> sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 642AC823
	> sudo apt-get update
	> sudo apt-get install sbt

Run SBT from the repo clone directory.

	> sbt

Required libraries will be downloaded automatically.

<!---
* Visit http://liftweb.net/download and download the most recent Lift 2.6 ZIP file.
* Unzip the file.
* Start Terminal or your favourite shell tool.
* Navigate into the unzipped folder and into the scala_211 subfolder and then into the lift_basic folder.
-->

At the SBT prompt, type:

	> container:start

Open your browser and go to http://127.0.0.1:8080/.

When you’re done, type exit at the SBT prompt to stop your application from running.

IntelliJ Idea
-------------

Start SBT, and at the SBT prompt, create the IDEA project files by typing:

	> gen-idea
	
OR

Use IDEA | Open Project on the build.sbt file to allow IDEA to import SBT into an IDEA project.

To see live changes as you edit and save your work, run SBT in a separate Terminal window. That is, start sbt from a Terminal window outside of IntelliJ and enter the following:

	> ~; container:start; container:reload /

Each time you compile or make the project, the container will pick up the changes, and you can see them by reloading your browser window.

(See [Lift Cookbook](http://chimera.labs.oreilly.com/books/1234000000030/ch01.html))
