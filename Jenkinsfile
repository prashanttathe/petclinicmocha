pipeline {
	environment {
    		def APP_NAME = "petclinicmocha"
    		def GIT_REPO_NAME = "prashanttathe"
    		def DEPLOY_ENV = "dev"
	}
    	
	stages {
		agent { dockerfile true }
		stage('Initialize') {
			steps {
				echo 'Placeholder.'
				//sh 'rm -f /var/lib/jenkins/workspace/FEI_PetClinic_Protractorui/`date +"%Y-%m-%d"`.html'
				sh """
					JOB_NAME=${env.JOB_BASE_NAME}
					rm -rf /var/lib/jenkins/workspace/\$JOB_NAME/allure-results
					cp -r /var/lib/jenkins/workspace/FEI_PetClinic_Mochaui/* /tmp
					//cp -R app/allure-results /var/lib/jenkins/workspace/\$JOB_NAME/allure-results
				   """
				//sh 'cp /app/Reports/`date +"%Y-%m-%d"`.html /var/lib/jenkins/workspace/${env.BUILD_TAG}'
				
			}
		}
		stage('Reporting'){
			agent any
			steps {
				
				sh 'allure serve /tmp/allure-results'
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
