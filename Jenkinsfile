pipeline {
	environment {
    		def APP_NAME = "petclinicmocha"
    		def GIT_REPO_NAME = "prashanttathe"
    		def DEPLOY_ENV = "dev"
	}
    	agent any
	stages {
		stage('Initialize') {
			agent { dockerfile true }
			steps {
				echo 'Placeholder.'
				//sh 'rm -f /var/lib/jenkins/workspace/FEI_PetClinic_Protractorui/`date +"%Y-%m-%d"`.html'
				sh """
					JOB_NAME=${env.JOB_BASE_NAME}
					sudo cp -r /app/allure-results /var/lib/jenkins/workspace/\$JOB_NAME
				   """
		
			}
		}
		stage('Reporting'){
			agent any
			steps {
				sh """
					JOB_NAME=${env.JOB_BASE_NAME}
					cp -r /var/lib/jenkins/workspace/\$JOB_NAME/allure-results /tmp
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
