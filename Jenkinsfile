pipeline {
    agent {
        label 'machine1'  
    }
    stages {
        stage('Running stage 1 printing') {
            steps {
                echo 'Hello World'
            }
        }

    
        
        stage('Building') {
            steps {
                sh ' echo ${BUILD_NUMBER}'
            
               sh 'docker build -t myimage-${BUILD_NUMBER} .'

                
                 sh '''

container=$(docker ps | grep 32533| cut -d " " -f 1)

if [[ -n $container ]];
then
        echo "this container exists"
        docker rm -f "$container"
else
        echo "No container exists of this port number"
fi

'''


                
                // Run the Docker container
                sh 'docker run -d -p 32533:80 --name my-container-${BUILD_NUMBER} myimage-${BUILD_NUMBER}'  // Added -d for detached mode
            }
        }
    }
}

