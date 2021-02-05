pipeline {
    agent { dockerfile true }
    stages {
        stage('test') {
            steps {
                sh 'ls'
            }
        }
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