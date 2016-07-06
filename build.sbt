name := "scout"

organization := "dougecko"

homepage := Some(url("https://github.com/dougecko/scout"))

version := "0.1-SNAPSHOT"

seq(webSettings :_*)

lazy val root = (project in file(".")).
	settings(
		libraryDependencies += "org.scalaz" %% "scalaz-core" % "7.0.6" % "compile",
		libraryDependencies += "org.scalatest" %% "scalatest" % "2.2.1" % "test",
		libraryDependencies += "net.liftweb" %% "lift-webkit" % "2.6-RC1" % "provided",
		libraryDependencies += "org.eclipse.jetty" % "jetty-webapp" % "8.1.7.v20120910" % "container,test",
    libraryDependencies += "org.eclipse.jetty.orbit" % "javax.servlet" % "3.0.0.v201112011016" % "container,compile" artifacts Artifact("javax.servlet", "jar", "jar")
	)
