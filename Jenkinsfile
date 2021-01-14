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
				//sh 'rm -f /var/lib/jenkins/workspace/FEI_PetClinic_Protractorui/`date +"%Y-%m-%d"`.html'
				sh """
					JOB_NAME=${env.JOB_BASE_NAME}
					rm -rf /var/lib/jenkins/workspace/\$JOB_NAME/allure-results
					cp -R /app/build/reports/tests/test/ /var/lib/jenkins/workspace/\$JOB_NAME/allure-results
				   """
				//sh 'cp /app/Reports/`date +"%Y-%m-%d"`.html /var/lib/jenkins/workspace/${env.BUILD_TAG}'
				
			}
		}
		stage('Reporting'){
			steps {
				
				sh 'allure serve app\allure-results'
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
