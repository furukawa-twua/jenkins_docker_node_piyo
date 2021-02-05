pipeline {
    agent { dockerfile true }
    stages {
        stage('install node modules') {
            steps {
                sh 'npm install'
            }
        }
        stage('run node app') {
            steps {
                sh 'npm start'
            }
        }
    }
}