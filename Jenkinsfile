pipeline {
    agent { dockerfile true }
    environment {
        HOME = '.'
    }
    stages {
        stage('install node modules') {
            steps {
                dir(path: '/') {
                    sh 'npm install'
                }
            }
        }
        stage('run node app') {
            steps {
                dir(path: '/') {
                    sh 'npm start'
                }
            }
        }
    }
}