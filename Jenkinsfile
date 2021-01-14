pipeline {
	environment {
    		def APP_NAME = "petclinicmocha"
    		def GIT_REPO_NAME = "prashanttathe"
    		def DEPLOY_ENV = "dev"
	}
    	agent { dockerfile true }
	stages {
		stage('Initialize') {
			steps {
				echo 'Placeholder.'
				sh """
					JOB_NAME=${env.JOB_BASE_NAME}
					cp -r /app/allure-results /var/lib/jenkins/workspace/\$JOB_NAME@2
				   """
		
			}
		}
		stage('Reporting'){
			agent any
			steps {
				sh """
					JOB_NAME=${env.JOB_BASE_NAME}
					cp -r /var/lib/jenkins/workspace/\$JOB_NAME@2/allure-results /tmp
				 	allure serve /tmp/allure-results 
				   """
			}
		}
		
    	}
	post { 
		success { 
		    sh 'echo "Your test execution is done and reports will be avaible at - http://tnt-aks-automator.eastus.cloudapp.azure.com/`date +"%Y-%m-%d"`.html" in sometime.'
		}
		failure { 
		    echo "Please check logs for more details."
		}
    	}
}
