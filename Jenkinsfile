pipeline {
    agent { dockerfile true }
    stages {
        stage('run node app') {
            steps {
                sh 'node /index.js'
            }
        }
    }
}